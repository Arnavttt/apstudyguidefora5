/**
 * Five & A+ — Ollama provider + AI-endpoint hardening tests.
 * Exercises api/question.js (the Worker) with a mocked global fetch:
 * provider priority, env-name aliases, timeout/signal wiring, localhost SSRF
 * guard, JSON repair, and the evaluator model. Run: node --test tests/ollama.test.js
 */
'use strict';
const { test, after } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const origFetch = global.fetch;
after(() => { global.fetch = origFetch; });

let _worker;
async function getWorker() {
  if (!_worker) {
    const m = await import(pathToFileURL(path.join(__dirname, '..', 'api', 'question.js')).href);
    _worker = m.default;
  }
  return _worker;
}

// Install a mock fetch that routes by URL substring and records every call.
function mockFetch(routes) {
  const calls = [];
  global.fetch = async (url, opts) => {
    const u = String(url);
    calls.push({ url: u, opts: opts || {}, signal: opts && opts.signal });
    for (const r of routes) {
      if (u.includes(r.match)) {
        if (r.throw) { const e = new Error(r.throw); if (r.errName) e.name = r.errName; throw e; }
        const body = typeof r.body === 'string' ? r.body : JSON.stringify(r.body);
        return new Response(body, { status: r.status || 200 });
      }
    }
    return new Response('not found', { status: 404 });
  };
  return calls;
}

let ipN = 0;
async function call(body, env) {
  const worker = await getWorker();
  const req = new Request('http://localhost:8765/api/question', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Origin': 'http://localhost:8765', 'X-Forwarded-For': '10.0.0.' + (++ipN) },
    body: JSON.stringify(body)
  });
  const res = await worker.fetch(req, env);
  let json = null; try { json = await res.json(); } catch (e) {}
  return { status: res.status, json };
}
function chatBody(calls) {
  const c = calls.find((x) => x.url.includes('/api/chat'));
  return c ? JSON.parse(c.opts.body) : null;
}

const OLLAMA_OK = [
  { match: '/api/version', body: { version: '0.1.0' } },
  { match: '/api/tags', body: { models: [{ name: 'llama3.2' }] } }
];

test('status: reports reachable ollama + model presence', async () => {
  mockFetch(OLLAMA_OK);
  const { status, json } = await call({ action: 'status' }, { AI_QUESTION_PROVIDER: 'ollama', OLLAMA_BASE_URL: 'http://127.0.0.1:11434', OLLAMA_MODEL: 'llama3.2' });
  assert.strictEqual(status, 200);
  assert.strictEqual(json.provider, 'ollama');
  assert.strictEqual(json.ollama.reachable, true);
  assert.strictEqual(json.ollama.hasModel, true);
  assert.strictEqual(json.ollama.model, 'llama3.2');
});

test('generate (ollama): parses questions, returns provider, bounds call with AbortSignal', async () => {
  const calls = mockFetch([{ match: '/api/chat', body: { message: { content: JSON.stringify({ questions: [{ id: 'g1', courseId: 'ap-biology', prompt: 'What is a cell?' }] }) } } }]);
  const { status, json } = await call(
    { action: 'generate', courseId: 'ap-biology', courseName: 'AP Biology' },
    { AI_QUESTION_PROVIDER: 'ollama', OLLAMA_BASE_URL: 'http://127.0.0.1:11434', OLLAMA_MODEL: 'llama3.2' }
  );
  assert.strictEqual(status, 200);
  assert.strictEqual(json.provider, 'ollama');
  assert.strictEqual(json.questions.length, 1);
  const b = chatBody(calls);
  assert.strictEqual(b.model, 'llama3.2');
  assert.strictEqual(b.format, 'json');
  assert.ok(calls[0].signal instanceof AbortSignal, 'fetch got an AbortSignal (timeout wiring)');
});

test('env alias: OLLAMA_BASE_URL + OLLAMA_MODEL are honored', async () => {
  const calls = mockFetch([{ match: '/api/chat', body: { message: { content: JSON.stringify({ questions: [{ id: 'a1', courseId: 'ap-biology', prompt: 'x?' }] }) } } }]);
  await call({ action: 'generate', courseId: 'ap-biology', courseName: 'AP Biology' },
    { AI_QUESTION_PROVIDER: 'ollama', OLLAMA_BASE_URL: 'http://127.0.0.1:9999', OLLAMA_MODEL: 'custom-model' });
  assert.ok(calls.some((c) => c.url.startsWith('http://127.0.0.1:9999/api/chat')), 'used custom base URL');
  assert.strictEqual(chatBody(calls).model, 'custom-model');
});

test('provider=fallback: no AI call, 503 so client seeds', async () => {
  const calls = mockFetch([{ match: '/api/chat', body: { message: { content: '{}' } } }]);
  const { status, json } = await call({ action: 'generate', courseId: 'ap-biology', courseName: 'AP Biology' }, { AI_QUESTION_PROVIDER: 'fallback' });
  assert.strictEqual(status, 503);
  assert.strictEqual(json.provider, null);
  assert.strictEqual(calls.length, 0, 'made no upstream calls');
});

test('SSRF guard: non-localhost Ollama URL is refused before any fetch', async () => {
  const calls = mockFetch([{ match: '/api/chat', body: { message: { content: '{}' } } }]);
  const { status } = await call({ action: 'generate', courseId: 'ap-biology', courseName: 'AP Biology' },
    { AI_QUESTION_PROVIDER: 'ollama', OLLAMA_BASE_URL: 'http://evil.example:11434', OLLAMA_MODEL: 'llama3.2' });
  assert.strictEqual(status, 502);
  assert.ok(!calls.some((c) => c.url.includes('evil.example')), 'never contacted the remote host');
});

test('SSRF guard: explicit opt-in allows a non-localhost URL', async () => {
  const calls = mockFetch([{ match: '/api/chat', body: { message: { content: JSON.stringify({ questions: [{ id: 'z', courseId: 'ap-biology', prompt: 'q?' }] }) } } }]);
  const { status } = await call({ action: 'generate', courseId: 'ap-biology', courseName: 'AP Biology' },
    { AI_QUESTION_PROVIDER: 'ollama', OLLAMA_BASE_URL: 'http://10.1.2.3:11434', OLLAMA_MODEL: 'llama3.2', QS_ALLOW_REMOTE_OLLAMA: '1' });
  assert.strictEqual(status, 200);
  assert.ok(calls.some((c) => c.url.includes('10.1.2.3')), 'contacted the opted-in host');
});

test('JSON repair: fenced + trailing-comma model output still parses', async () => {
  mockFetch([{ match: '/api/chat', body: { message: { content: '```json\n{"questions":[{"id":"r1","courseId":"ap-biology","prompt":"ok?"},]}\n```' } } }]);
  const { status, json } = await call({ action: 'generate', courseId: 'ap-biology', courseName: 'AP Biology' },
    { AI_QUESTION_PROVIDER: 'ollama', OLLAMA_MODEL: 'llama3.2' });
  assert.strictEqual(status, 200);
  assert.strictEqual(json.questions.length, 1);
});

test('evaluate: uses evaluator model at low temperature', async () => {
  const calls = mockFetch([{ match: '/api/chat', body: { message: { content: JSON.stringify({ isCorrect: true, score: 1, maxScore: 1 }) } } }]);
  const { status, json } = await call(
    { action: 'evaluate', question: { questionType: 'mcq', correctAnswer: 'A', prompt: 'q' }, studentAnswer: 'A' },
    { AI_QUESTION_PROVIDER: 'ollama', OLLAMA_MODEL: 'gen-model', OLLAMA_EVALUATOR_MODEL: 'eval-model' }
  );
  assert.strictEqual(status, 200);
  assert.strictEqual(json.isCorrect, true);
  assert.strictEqual(json.provider, 'ollama');
  const b = chatBody(calls);
  assert.strictEqual(b.model, 'eval-model');
  assert.strictEqual(b.options.temperature, 0.1);
});

test('auto: uses Ollama when reachable and no cloud keys', async () => {
  mockFetch(OLLAMA_OK.concat([{ match: '/api/chat', body: { message: { content: JSON.stringify({ questions: [{ id: 'au', courseId: 'ap-biology', prompt: 'q?' }] }) } } }]));
  const { status, json } = await call({ action: 'generate', courseId: 'ap-biology', courseName: 'AP Biology' },
    { AI_QUESTION_PROVIDER: 'auto', OLLAMA_BASE_URL: 'http://127.0.0.1:11434', OLLAMA_MODEL: 'llama3.2' });
  assert.strictEqual(status, 200);
  assert.strictEqual(json.provider, 'ollama');
});

test('auto: no ollama + no keys → 503 (client seeds)', async () => {
  mockFetch([{ match: '/api/version', throw: 'ECONNREFUSED' }]);
  const { status } = await call({ action: 'generate', courseId: 'ap-biology', courseName: 'AP Biology' }, { AI_QUESTION_PROVIDER: 'auto' });
  assert.strictEqual(status, 503);
});
