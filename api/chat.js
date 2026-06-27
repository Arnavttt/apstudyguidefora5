/**
 * AP Study Guide — AI Tutor Chat Endpoint
 * Compatible with: Cloudflare Workers · Vercel Edge Functions
 *
 * Environment variables required:
 *   ANTHROPIC_API_KEY   — your key from console.anthropic.com
 *
 * Deploy to Cloudflare Workers:
 *   npx wrangler deploy api/chat.js --name ap-tutor-chat --compatibility-date 2024-01-01
 *
 * Deploy to Vercel Edge (rename to api/chat.js in a Next.js/Vercel project):
 *   export const config = { runtime: 'edge' };
 *   (The handler below is already edge-compatible — no Node APIs used)
 */

// ── Rate limiter (in-memory, per-Worker-instance) ──────────────────────────
const rateLimitMap = new Map(); // ip → { count, resetAt }
const RATE_LIMIT = 10;          // requests per window
const RATE_WINDOW_MS = 60_000;  // 1 minute

function checkRateLimit(ip) {
  const now = Date.now();
  let entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    entry = { count: 0, resetAt: now + RATE_WINDOW_MS };
    rateLimitMap.set(ip, entry);
  }
  entry.count++;
  return entry.count <= RATE_LIMIT;
}

// Clean stale entries periodically (Workers reset on idle anyway)
function pruneRateLimitMap() {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(ip);
  }
}

// ── CORS (locked to the site's own origin so other sites can't proxy through
//    this endpoint and burn the owner's API credits; override via env). ───────
const ALLOWED_FALLBACK = ['https://arnavttt.github.io'];
function corsHeaders(request, env) {
  const list = (env && env.QS_ALLOWED_ORIGINS) ? env.QS_ALLOWED_ORIGINS.split(',').map(s => s.trim()).filter(Boolean) : ALLOWED_FALLBACK;
  const origin = (request && request.headers.get('Origin')) || '';
  const allow = list.indexOf(origin) !== -1 ? origin
    : (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin) ? origin : list[0]);
  return {
    'Access-Control-Allow-Origin': allow,
    'Vary': 'Origin',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

// ── System prompt builder ────────────────────────────────────────────────────
function buildSystemPrompt(course) {
  const courseName = (course || 'AP').replace(/[<>"']/g, ''); // basic sanitize
  return `You are an expert AP tutor specializing in ${courseName}. Your role is to help high school students prepare for the AP exam.

Guidelines:
- Answer questions clearly and concisely — students value brevity
- When relevant, connect answers to College Board learning objectives and AP exam format
- Use examples, analogies, and step-by-step breakdowns when concepts are complex
- For math/science: show your work clearly, label each step
- For essays/history/English: model good thesis and evidence structure
- Gently correct misconceptions and point out common AP exam traps
- Encourage students and keep the tone supportive but focused
- If asked about something outside ${courseName}, politely redirect to the course

You are helping a student who wants a concise, accurate, exam-focused explanation.`;
}

// ── Validate messages array ──────────────────────────────────────────────────
function validateMessages(messages) {
  if (!Array.isArray(messages)) return false;
  if (messages.length === 0) return false;
  if (messages.length > 40) return false; // sanity cap
  return messages.every(m =>
    m && typeof m.role === 'string' && typeof m.content === 'string' &&
    ['user', 'assistant'].includes(m.role) &&
    m.content.length > 0 && m.content.length < 4000
  );
}

// ── Main handler (Cloudflare Workers fetch event) ───────────────────────────
export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);
    const corsResponse = (body, status, extra = {}) => new Response(body, { status, headers: { ...cors, ...extra } });

    // Preflight
    if (request.method === 'OPTIONS') {
      return corsResponse(null, 204);
    }

    if (request.method !== 'POST') {
      return corsResponse('Method not allowed', 405);
    }

    // Rate limit
    pruneRateLimitMap();
    const ip = request.headers.get('CF-Connecting-IP')
            || request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim()
            || 'unknown';
    if (!checkRateLimit(ip)) {
      return corsResponse(
        JSON.stringify({ error: 'Rate limit exceeded. Please wait a minute.' }),
        429,
        { 'Content-Type': 'application/json', 'Retry-After': '60' }
      );
    }

    // Parse body
    let body;
    try {
      body = await request.json();
    } catch {
      return corsResponse(JSON.stringify({ error: 'Invalid JSON' }), 400, { 'Content-Type': 'application/json' });
    }

    const { messages, course } = body;

    if (!validateMessages(messages)) {
      return corsResponse(
        JSON.stringify({ error: 'Invalid messages array' }),
        400,
        { 'Content-Type': 'application/json' }
      );
    }

    // Build Anthropic request
    const apiKey = env?.ANTHROPIC_API_KEY ?? (typeof ANTHROPIC_API_KEY !== 'undefined' ? ANTHROPIC_API_KEY : null);
    if (!apiKey) {
      return corsResponse(
        JSON.stringify({ error: 'ANTHROPIC_API_KEY not configured on server' }),
        500,
        { 'Content-Type': 'application/json' }
      );
    }

    const anthropicPayload = {
      model: 'claude-haiku-4-5',
      max_tokens: 1024,
      system: buildSystemPrompt(course),
      messages: messages.map(m => ({ role: m.role, content: m.content })),
      stream: true,
    };

    let anthropicResponse;
    try {
      anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify(anthropicPayload),
      });
    } catch (e) {
      return corsResponse(
        JSON.stringify({ error: 'Failed to reach Anthropic API' }),
        502,
        { 'Content-Type': 'application/json' }
      );
    }

    if (!anthropicResponse.ok) {
      // Log upstream detail server-side only; don't echo provider errors to clients.
      console.error('[chat] anthropic ' + anthropicResponse.status + ' ' + (await anthropicResponse.text().catch(() => '')));
      return corsResponse(
        JSON.stringify({ error: 'Tutor backend error. Please try again.' }),
        502,
        { 'Content-Type': 'application/json' }
      );
    }

    // Transform Anthropic SSE → client SSE
    // Anthropic sends: data: {"type":"content_block_delta","delta":{"type":"text_delta","text":"hello"}}
    // We re-emit:      data: {"delta":"hello"}  then  data: [DONE]
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    const encoder = new TextEncoder();

    (async () => {
      const reader = anthropicResponse.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split('\n');
          buffer = lines.pop();

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            const raw = line.slice(6).trim();
            if (raw === '[DONE]') continue; // Anthropic doesn't send this, but be safe

            let event;
            try { event = JSON.parse(raw); } catch { continue; }

            if (event.type === 'content_block_delta' && event.delta?.type === 'text_delta') {
              const chunk = JSON.stringify({ delta: event.delta.text });
              await writer.write(encoder.encode(`data: ${chunk}\n\n`));
            }

            if (event.type === 'message_stop') {
              await writer.write(encoder.encode('data: [DONE]\n\n'));
            }
          }
        }
        // Flush if Anthropic didn't send message_stop
        await writer.write(encoder.encode('data: [DONE]\n\n'));
      } catch (e) {
        await writer.write(encoder.encode(`data: ${JSON.stringify({ error: e.message })}\n\n`));
      } finally {
        writer.close();
      }
    })();

    return new Response(readable, {
      headers: {
        ...cors,
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'X-Accel-Buffering': 'no', // disable Nginx buffering
      },
    });
  },
};

/* ── Node.js / Express fallback ────────────────────────────────────────────
   If you prefer a simple Node server, paste this into a separate server.js
   and run: ANTHROPIC_API_KEY=sk-... node server.js

const express = require('express');
const https = require('https');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.set(CORS_HEADERS);
  next();
});

app.options('/api/chat', (req, res) => res.sendStatus(204));

app.post('/api/chat', async (req, res) => {
  // ... same logic as above using node-fetch or https
});

app.listen(3001, () => console.log('AI Tutor server on http://localhost:3001'));
*/
