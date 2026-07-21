---
name: secure-secrets-ai-provider
description: Work on AI providers (Ollama/Anthropic/OpenAI), API keys, env vars, the /api/question server, or Worker deployment. Use for any task touching secrets, provider selection, wrangler, .env files, or server-side AI calls.
---

# Purpose
Keep every AI credential server-side and un-committed while the provider chain
(Ollama → Anthropic → OpenAI → seeded) stays reliable on all surfaces.

# When to use
- Editing `api/question.js`, `api/chat.js`, `serve-local.mjs`, `wrangler.toml`, `.env*`.
- Adding a provider/model, changing timeouts, deploying the Worker, handling any key.

# When NOT to use
Client-only stream UI work (use `ui-verification-loop`); course data (use
`qstream-course-authoring`).

# Required inputs
Which provider/surface changes, and whether the change affects local (`serve-local.mjs`),
Worker (`wrangler`), or both.

# Repository context to inspect first
- `api/question.js` — `normalizeEnv` (env aliases), `pickProvider` priority, SSRF localhost
  guard, timeouts, JSON repair, `status` action.
- `serve-local.mjs` — loads `.env.local`/`.env` (no-override), exports both env-name families.
- `wrangler.toml` — Worker config; key is a `wrangler secret`, never a var in the file.
- `assets/question-stream.js` — `WORKER_ENDPOINT` slot (URL only, never a key).
- `.env.example`, `.gitignore`, `tests/secrets.test.js`, `tests/ollama.test.js`,
  `docs/SECRETS_SETUP.md`, `docs/DEPLOY_AI_WORKER.md`.

# Workflow
1. Identify the surface(s); read `normalizeEnv` before adding any env var — support the
   canonical name (`AI_QUESTION_PROVIDER`, `OLLAMA_BASE_URL`, …) and keep legacy aliases working.
2. Server-side only: the browser talks to `/api/question` — never to a provider or Ollama directly.
3. Keys: local → `.env.local` (git-ignored, loaded by serve-local); prod → `npx wrangler secret put
   ANTHROPIC_API_KEY` (or `OPENAI_API_KEY`). Never in code, docs, tests, logs, client bundles, or replies.
4. Every provider call gets an `AbortController` timeout and a seeded-fallback path; new
   failure modes return sanitized errors (no upstream bodies to clients).
5. Update `.env.example` with placeholder-only entries; update `docs/SECRETS_SETUP.md` if the
   contract changes.
6. Mock-test provider behavior in `tests/ollama.test.js` style (mock `global.fetch`, assert
   priority/timeout/fallback). Run `tests/secrets.test.js` — it fails on credential-shaped
   strings in tracked files.

# Implementation standards
Ollama URL restricted to localhost unless `QS_ALLOW_REMOTE_OLLAMA=1`. CORS locked to site
origins (`QS_ALLOWED_ORIGINS`). Rate limit stays (20/min/IP). Provider errors log server-side
only. `fallback` mode must never make a network call.

# Positive patterns
Env-alias normalization in one function; health `status` action for honest UI badges;
`WORKER_ENDPOINT` empty-by-default so the public site degrades to seeded, never breaks.

# Anti-patterns
Keys in `NEXT_PUBLIC_*`/client JS/`.mcp.json` literals; printing env values while debugging;
provider calls without timeout; echoing upstream error bodies to browsers; a second competing
env-name scheme; committing `.env.local`.

# Security requirements
All of the above, plus: request-body validation on every action; student answers treated as
data (injection-neutralized) in eval prompts; if a real key ever lands in a tracked file —
do not print it, remove it, and report that the key must be rotated (history rewrite alone
is not sufficient).

# Accessibility requirements
Provider failures must surface as the friendly fallback note (already implemented), never a
raw error string or dead spinner.

# Performance requirements
Generation timeout ≤ ~12s client-side with seeded fallback; keep-alive/warm-model for Ollama;
no polling loops.

# Validation checklist
- [ ] `node --test tests/ollama.test.js tests/secrets.test.js` pass
- [ ] `node --check` on every touched file
- [ ] `POST /api/question {"action":"status"}` reports the expected provider
- [ ] Kill the provider → stream still serves seeded questions (verified live)
- [ ] `git diff` contains no credential-shaped strings

# Expected output
Working provider change with tests, sanitized errors, updated docs, and zero secrets in git.

# Source-reference mapping
Derived from this repository's provider hardening (commits `5f2bc2a`, `95641e6`, `669202f`,
`2b437ad`) and standard secret-management practice. Instagram references were inaccessible
(`docs/reference-pattern-analysis.md`); nothing here derives from them.
