/**
 * Five & A+ — LOCAL server (static site + AI API, powered by Ollama on your PC)
 * ---------------------------------------------------------------------------
 * One command, no dependencies (Node 18+). Serves the whole site AND the
 * /api/question + /api/chat endpoints, routing AI to a local Ollama instance so
 * nothing leaves your machine and there are no API costs.
 *
 *   1. Install Ollama:           https://ollama.com/download
 *   2. Pull a model:             ollama pull llama3.2
 *      (Ollama runs a server on http://127.0.0.1:11434 automatically.)
 *   3. Start this:               node serve-local.mjs
 *   4. Open:                     http://localhost:8765/index.html
 *
 * Environment overrides (optional — new spec names, legacy QS_* still honored):
 *   PORT=8765                            port for this site server
 *   AI_QUESTION_PROVIDER=ollama          ollama | auto | fallback | anthropic | openai
 *   OLLAMA_BASE_URL=http://127.0.0.1:11434
 *   OLLAMA_MODEL=llama3.2                Ollama model (bigger = better questions)
 *   OLLAMA_EVALUATOR_MODEL=llama3.2      model used to grade written answers
 *   OLLAMA_TIMEOUT_MS=60000              abort an AI call after this many ms
 */
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Readable } from 'node:stream';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PORT = parseInt(process.env.PORT || '8765', 10);

// Default to local Ollama. New spec env names win; legacy QS_* names still work.
// Both are exported so api/question.js sees whichever it looks for.
const PROVIDER = process.env.AI_QUESTION_PROVIDER || process.env.QS_PROVIDER || 'ollama';
const OLLAMA_BASE = process.env.OLLAMA_BASE_URL || process.env.OLLAMA_URL || 'http://127.0.0.1:11434';
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || process.env.QS_OLLAMA_MODEL || 'llama3.2';
process.env.AI_QUESTION_PROVIDER = process.env.QS_PROVIDER = PROVIDER;
process.env.OLLAMA_BASE_URL = process.env.OLLAMA_URL = OLLAMA_BASE;
process.env.OLLAMA_MODEL = process.env.QS_OLLAMA_MODEL = OLLAMA_MODEL;
process.env.OLLAMA_EVALUATOR_MODEL = process.env.OLLAMA_EVALUATOR_MODEL || OLLAMA_MODEL;
process.env.OLLAMA_TIMEOUT_MS = process.env.OLLAMA_TIMEOUT_MS || '60000';
process.env.QS_ALLOWED_ORIGINS = process.env.QS_ALLOWED_ORIGINS || `http://localhost:${PORT},http://127.0.0.1:${PORT}`;

const questionWorker = (await import('./api/question.js')).default;
const chatWorker = (await import('./api/chat.js')).default;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff', '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json'
};

function readBody(req) {
  return new Promise((resolve) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', () => resolve(Buffer.alloc(0)));
  });
}

async function routeApi(worker, req, res) {
  const body = await readBody(req);
  const request = new Request('http://localhost' + req.url, {
    method: req.method,
    headers: req.headers,
    body: req.method === 'GET' || req.method === 'HEAD' ? undefined : body
  });
  let response;
  try {
    response = await worker.fetch(request, process.env);
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Local handler error: ' + String(e && e.message || e) }));
    return;
  }
  const headers = {};
  response.headers.forEach((v, k) => { headers[k] = v; });
  res.writeHead(response.status, headers);
  if (response.body) Readable.fromWeb(response.body).pipe(res);
  else res.end();
}

function serveStatic(req, res) {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';
  const filePath = path.normalize(path.join(ROOT, urlPath));
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end('Forbidden'); return; }
  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    res.writeHead(404, { 'Content-Type': 'text/plain' }); res.end('Not found'); return;
  }
  readFile(filePath).then((data) => {
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  }).catch(() => { res.writeHead(500); res.end('Read error'); });
}

const server = http.createServer(async (req, res) => {
  const pathname = req.url.split('?')[0];
  if (req.method === 'POST' || req.method === 'OPTIONS') {
    if (pathname === '/api/question') return routeApi(questionWorker, req, res);
    if (pathname === '/api/chat') return routeApi(chatWorker, req, res);
  }
  if (req.method === 'GET' || req.method === 'HEAD') return serveStatic(req, res);
  res.writeHead(405); res.end('Method not allowed');
});

server.listen(PORT, async () => {
  let ollamaOk = false, models = [];
  try {
    const r = await fetch(process.env.OLLAMA_URL.replace(/\/$/, '') + '/api/tags');
    if (r.ok) { ollamaOk = true; models = ((await r.json()).models || []).map((m) => m.name); }
  } catch (e) { /* not running */ }

  console.log('\n  Five & A+  —  local server with Ollama AI');
  console.log('  ----------------------------------------------------------');
  console.log('  Site:   http://localhost:' + PORT + '/index.html');
  console.log('  AI:     ' + OLLAMA_BASE + '  (provider=' + PROVIDER + ', model=' + OLLAMA_MODEL +
    ', evaluator=' + process.env.OLLAMA_EVALUATOR_MODEL + ', timeout=' + process.env.OLLAMA_TIMEOUT_MS + 'ms)');
  if (ollamaOk) {
    console.log('  Ollama: running ✓   models: ' + (models.join(', ') || '(none pulled yet)'));
    if (!models.some((m) => m.split(':')[0] === OLLAMA_MODEL.split(':')[0])) {
      console.log('  NOTE:   model "' + OLLAMA_MODEL + '" not pulled. Run:  ollama pull ' + OLLAMA_MODEL);
    }
  } else {
    console.log('  Ollama: NOT reachable. Install from https://ollama.com/download and run:  ollama pull ' + OLLAMA_MODEL);
    console.log('          (The site still works — it falls back to the built-in question bank.)');
  }
  if (ollamaOk) {
    // Pre-warm: load the model into memory now (keep_alive 30m) so the first
    // generated question isn't slowed by a cold model load.
    fetch(OLLAMA_BASE.replace(/\/$/, '') + '/api/chat', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: OLLAMA_MODEL, keep_alive: '30m', stream: false, messages: [{ role: 'user', content: 'ok' }], options: { num_predict: 1 } })
    }).then(() => console.log('  Model warmed ✓')).catch(() => {});
    console.log('  Warming model in background…');
  }
  console.log('  ----------------------------------------------------------\n');
});
