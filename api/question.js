/**
 * Five & A+ — AI Question Stream · question generation + answer evaluation
 * Compatible with: Cloudflare Workers · Vercel Edge Functions · (Node fallback below)
 *
 * Environment variables (server-side only — NEVER exposed to the browser):
 *   ANTHROPIC_API_KEY   — preferred provider (console.anthropic.com)
 *   OPENAI_API_KEY      — used if ANTHROPIC_API_KEY is absent
 *   QS_PROVIDER         — optional: 'anthropic' | 'openai' | 'auto' (default auto)
 *   QS_ANTHROPIC_MODEL  — default 'claude-sonnet-4-6'
 *   QS_OPENAI_MODEL     — default 'gpt-4o-mini'
 *
 * The browser calls this with { action: 'generate' | 'evaluate', ... }. If no key
 * is configured (or the model errors), this returns an error and the client
 * silently falls back to its local seeded question bank — so the site keeps
 * working with no backend at all.
 *
 * Deploy (Cloudflare):
 *   npx wrangler deploy api/question.js --name fa-question-stream --compatibility-date 2024-01-01
 *   (set secrets: npx wrangler secret put ANTHROPIC_API_KEY)
 */

// ── Rate limiter (in-memory per worker instance) ─────────────────────────────
const rateLimitMap = new Map();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;
function checkRateLimit(ip) {
  const now = Date.now();
  let e = rateLimitMap.get(ip);
  if (!e || now > e.resetAt) { e = { count: 0, resetAt: now + RATE_WINDOW_MS }; rateLimitMap.set(ip, e); }
  e.count++; return e.count <= RATE_LIMIT;
}
function prune() { const now = Date.now(); for (const [ip, e] of rateLimitMap) if (now > e.resetAt) rateLimitMap.delete(ip); }

const CORS = {
  'Access-Control-Allow-Origin': '*', // lock to your domain in production
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};
function json(obj, status, extra) {
  return new Response(JSON.stringify(obj), { status: status || 200, headers: Object.assign({ 'Content-Type': 'application/json' }, CORS, extra || {}) });
}
function sani(s, max) { return String(s == null ? '' : s).replace(/[<>]/g, '').slice(0, max || 120); }

// ── Prompt templates ─────────────────────────────────────────────────────────
const GEN_SYSTEM = `You are an expert AP teacher, curriculum designer, and AP-style question writer. You generate ORIGINAL practice questions for high school students preparing for AP exams.

Rules:
- Generate only ORIGINAL questions. Never copy official AP exam questions or imitate any copyrighted item closely.
- Align every question to the selected AP course, unit, topic, and skill.
- Match the requested question type and difficulty.
- Return STRICT JSON ONLY. No markdown, no commentary outside JSON.
- Every question must include answer, explanation, and metadata.
- MCQs must have 4 plausible choices (ids A-D) with distractor rationales for each wrong choice.
- Written questions (frq/dbq/leq/essay/short-answer/analysis) must include a rubric (rows with pointValue, criterion, evidenceRequired) and a modelAnswer.
- calculation questions must include a numeric correctAnswer and numericTolerance when appropriate.
- coding questions use safe Java or pseudocode appropriate to the course; code-tracing questions give a codeBlock and the exact expected output as correctAnswer.
- Art History questions may use imagePrompt (a description) instead of a real image.
- Music Theory questions may use musicNotationPlaceholder instead of audio.
- For history/English stimulus questions, write SHORT ORIGINAL or clearly-invented source-style passages — never copy real copyrighted text.
- Keep content appropriate for high school. Avoid hallucinated facts. If unsure, set reviewStatus to "needs-review".`;

const EVAL_SYSTEM = `You are an expert AP teacher and a fair grader. Evaluate the student's answer using the question, correct answer, explanation, and rubric. Be accurate, specific, and encouraging.

Rules:
- For MCQ/multi-select, grade exactly.
- For numeric answers, allow the stated tolerance.
- For FRQ/SAQ/essay/analysis, grade with the rubric; award partial credit.
- For coding, evaluate logic, correctness, and edge cases conceptually (do NOT execute code).
- Always give a score and maxScore when possible, plus strengths, improvements, and one nextRecommendation.
- Return STRICT JSON ONLY. No markdown.`;

function genUserPrompt(b) {
  const schema = `Each question object must follow this schema:
{ "id": string, "courseId": string, "courseName": string, "unitId": string, "unitName": string,
  "topicId": string, "topicName": string, "skill": string, "questionType": string,
  "difficulty": "easy"|"medium"|"hard"|"exam-level", "bloomLevel": string, "estimatedTimeSeconds": number,
  "prompt": string, "stimulus"?: string, "imagePrompt"?: string, "codeBlock"?: string, "dataTable"?: {"columns":[],"rows":[[]]},
  "answerChoices"?: [{"id":"A","text":""}], "correctAnswer": string, "acceptableAnswers"?: [], "numericTolerance"?: number,
  "rubric"?: [{"id":"r1","pointValue":1,"criterion":"","evidenceRequired":""}], "explanation": string,
  "distractorRationales"?: {"A":"","B":""}, "modelAnswer"?: string, "tags": [], "sourceType": "ai-generated", "reviewStatus": "approved"|"needs-review", "createdAt": string }`;
  return `Generate ${b.count || 1} original AP practice question(s).
Course: ${b.courseName} (courseId: ${b.courseId})
Unit: ${b.unitName || b.unitId || 'any'} (unitId: ${b.unitId || ''})
Topic: ${b.topicName || b.topicId || 'any'} (topicId: ${b.topicId || ''})
Skill focus: ${b.skill || 'core skills for this topic'}
Question type: ${b.questionType || 'mcq'}
Difficulty: ${b.difficulty || 'medium'}
Mode: ${b.mode || 'practice'}
Avoid repeating these recent prompt ids: ${(b.previousQuestionPrompts || []).join(', ') || 'none'}

${schema}

Set courseId exactly to "${b.courseId}", unitId to "${b.unitId || ''}", topicId to "${b.topicId || ''}". Use unique ids.
Respond with JSON: {"questions": [ ... ]}`;
}

function evalUserPrompt(b) {
  const q = b.question || {};
  return `Grade this student's answer. Return JSON only.
Question type: ${q.questionType}
Prompt: ${q.prompt}
${q.answerChoices ? 'Choices: ' + JSON.stringify(q.answerChoices) : ''}
Correct answer: ${q.correctAnswer}
${q.numericTolerance != null ? 'Numeric tolerance: ' + q.numericTolerance : ''}
${q.rubric ? 'Rubric: ' + JSON.stringify(q.rubric) : ''}
${q.modelAnswer ? 'Model answer: ' + q.modelAnswer : ''}
Explanation: ${q.explanation || ''}

Student answer: """${String(b.studentAnswer || '').slice(0, 6000)}"""
Time spent: ${b.timeSpentSeconds || 0}s

Return JSON: { "isCorrect": boolean, "score": number, "maxScore": number, "percentScore": number,
  "correctAnswer": string, "explanation": string, "modelAnswer": string, "strengths": [string],
  "improvements": [string], "rubricBreakdown": [{"rubricRowId":string,"earned":number,"possible":number,"comment":string}],
  "nextRecommendation": string }`;
}

// ── JSON extraction ──────────────────────────────────────────────────────────
function extractJson(text) {
  if (text == null) return null;
  let s = String(text).trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
  try { return JSON.parse(s); } catch (e) {}
  const first = s.search(/[\[{]/), last = Math.max(s.lastIndexOf('}'), s.lastIndexOf(']'));
  if (first !== -1 && last > first) { try { return JSON.parse(s.slice(first, last + 1)); } catch (e) {} }
  return null;
}

// ── Provider calls ───────────────────────────────────────────────────────────
async function callAnthropic(env, system, user, maxTokens) {
  const key = env.ANTHROPIC_API_KEY;
  const model = env.QS_ANTHROPIC_MODEL || 'claude-sonnet-4-6';
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model, max_tokens: maxTokens || 1500, system, messages: [{ role: 'user', content: user }] })
  });
  if (!res.ok) throw new Error('anthropic ' + res.status + ' ' + (await res.text().catch(() => '')));
  const data = await res.json();
  return (data.content && data.content[0] && data.content[0].text) || '';
}

async function callOpenAI(env, system, user, maxTokens) {
  const key = env.OPENAI_API_KEY;
  const model = env.QS_OPENAI_MODEL || 'gpt-4o-mini';
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
    body: JSON.stringify({
      model, max_tokens: maxTokens || 1500, temperature: 0.6,
      response_format: { type: 'json_object' },
      messages: [{ role: 'system', content: system }, { role: 'user', content: user }]
    })
  });
  if (!res.ok) throw new Error('openai ' + res.status + ' ' + (await res.text().catch(() => '')));
  const data = await res.json();
  return (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || '';
}

function pickProvider(env) {
  const pref = (env.QS_PROVIDER || 'auto').toLowerCase();
  if (pref === 'anthropic') return env.ANTHROPIC_API_KEY ? 'anthropic' : null;
  if (pref === 'openai') return env.OPENAI_API_KEY ? 'openai' : null;
  if (env.ANTHROPIC_API_KEY) return 'anthropic';
  if (env.OPENAI_API_KEY) return 'openai';
  return null;
}

async function runModel(env, system, user, maxTokens) {
  const provider = pickProvider(env);
  if (!provider) { const e = new Error('no_provider'); e.code = 'no_provider'; throw e; }
  return provider === 'anthropic'
    ? callAnthropic(env, system, user, maxTokens)
    : callOpenAI(env, system, user, maxTokens);
}

// ── Main handler ─────────────────────────────────────────────────────────────
export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

    prune();
    const ip = request.headers.get('CF-Connecting-IP') || (request.headers.get('X-Forwarded-For') || '').split(',')[0].trim() || 'unknown';
    if (!checkRateLimit(ip)) return json({ error: 'Rate limit exceeded. Please wait a minute.' }, 429, { 'Retry-After': '60' });

    let body;
    try { body = await request.json(); } catch (e) { return json({ error: 'Invalid JSON' }, 400); }

    const action = body.action;
    env = env || {};
    if (!pickProvider(env)) return json({ error: 'No AI provider configured on server.' }, 503);

    try {
      if (action === 'generate') {
        body.courseId = sani(body.courseId, 60);
        body.courseName = sani(body.courseName, 80);
        body.count = Math.max(1, Math.min(3, body.count || 1));
        const raw = await runModel(env, GEN_SYSTEM, genUserPrompt(body), 2200);
        const parsed = extractJson(raw);
        const questions = parsed && (parsed.questions || (Array.isArray(parsed) ? parsed : [parsed])) || [];
        if (!questions.length) return json({ error: 'Model returned no usable questions', questions: [] }, 502);
        // Stamp provenance; the CLIENT re-validates each against the framework.
        questions.forEach((q) => { q.sourceType = 'ai-generated'; if (!q.createdAt) q.createdAt = new Date().toISOString(); });
        return json({ questions });
      }

      if (action === 'evaluate') {
        if (!body.question) return json({ error: 'Missing question' }, 400);
        const raw = await runModel(env, EVAL_SYSTEM, evalUserPrompt(body), 900);
        const parsed = extractJson(raw);
        if (!parsed) return json({ error: 'Could not parse evaluation' }, 502);
        if (parsed.correctAnswer == null) parsed.correctAnswer = String(body.question.correctAnswer || '');
        return json(parsed);
      }

      return json({ error: 'Unknown action: ' + action }, 400);
    } catch (e) {
      const code = e && e.code === 'no_provider' ? 503 : 502;
      return json({ error: 'AI request failed', detail: String(e && e.message || e) }, code);
    }
  }
};
