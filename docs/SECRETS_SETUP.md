# Secrets setup — where your AI API key goes

The AI integration already exists (`api/question.js`, provider chain
Ollama → Anthropic → OpenAI → seeded). The provider-specific variables are established;
**do not invent new names.**

| Provider | Variable (exact) |
|---|---|
| Anthropic (default cloud provider) | `ANTHROPIC_API_KEY` |
| OpenAI (alternative) | `OPENAI_API_KEY` |
| Local Ollama | no key needed |

## 1. Local development — put the key HERE
Create a file named **`.env.local`** in the repo root (same folder as `serve-local.mjs`).
It is git-ignored and loaded automatically by `node serve-local.mjs`:

```env
# .env.local  (never committed)
AI_QUESTION_PROVIDER=anthropic
ANTHROPIC_API_KEY=replace_with_your_key
```

Keep `AI_QUESTION_PROVIDER=ollama` (default) if you want free local AI instead — then no
key is needed at all.

## 2. Production (public site) — Cloudflare Worker secret
The deployed Worker never reads files; the key is an encrypted secret:

```bash
npx wrangler deploy
npx wrangler secret put ANTHROPIC_API_KEY    # paste key at the prompt
```

Full walkthrough: `docs/DEPLOY_AI_WORKER.md`.

## 3. Confirm the app sees the variable WITHOUT printing it
```bash
node serve-local.mjs
# then, in another terminal:
curl -s -X POST http://localhost:8765/api/question -H "Content-Type: application/json" -d "{\"action\":\"status\"}"
```
`"provider":"anthropic"` in the response proves the key was picked up. Never `echo`/log
the value itself.

## 4. Rotating the key
1. Create a new key in the provider console; 2. update `.env.local` and/or re-run
`npx wrangler secret put ANTHROPIC_API_KEY`; 3. revoke the old key in the console.

## 5. If a key is ever exposed (pasted, committed, logged)
1. **Revoke it in the provider console immediately** — rotation is the only real fix;
   deleting the file/commit does NOT remove it from git history or scrollback.
2. Replace per §4. 3. `node --test tests/secrets.test.js` must pass before the next push
   (it scans all tracked files for credential shapes).

## Files that must NEVER contain a real key
Source (`assets/`, `api/`, `*.mjs`), `wrangler.toml`, `.mcp.json` (use
`"Authorization": "Bearer ${ANTHROPIC_API_KEY}"`-style env references only), `CLAUDE.md`,
skills, tests, docs (this file included), HTML, commits/PRs, console output, screenshots.
Enforced by `tests/secrets.test.js` + `.gitignore` (`.env`, `.env.local`, `.env.*`).
