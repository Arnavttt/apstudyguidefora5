# Enable AI questions on every device (Cloudflare Worker)

Locally, `node serve-local.mjs` gives you AI questions through Ollama. But the public
GitHub Pages site is static — no backend — so on other devices the stream uses the
**seeded** bank only. To get AI-generated questions **everywhere**, deploy the backend
(`api/question.js`) as a free Cloudflare Worker and point the site at it.

Ollama can't serve the internet, so the Worker uses a cloud provider (Anthropic or OpenAI).
**Your API key is never stored in the repo — it lives as an encrypted Worker secret.**

## 1. Prerequisites
- A free Cloudflare account: <https://dash.cloudflare.com/sign-up>
- An API key from **one** provider:
  - Anthropic — <https://console.anthropic.com> (default), or
  - OpenAI — <https://platform.openai.com/api-keys>
- Node (already installed).

## 2. Log in and deploy the Worker
From the repo folder:
```bash
npx wrangler login          # opens a browser to authorize (one time)
npx wrangler deploy         # reads wrangler.toml, deploys api/question.js
```
Deploy prints a URL like:
```
https://fa-question-stream.YOURNAME.workers.dev
```
Copy it.

## 3. Add your API key as a secret (not in any file)
```bash
npx wrangler secret put ANTHROPIC_API_KEY
# paste your key when prompted, press Enter
```
Using OpenAI instead? Set `AI_QUESTION_PROVIDER = "openai"` in `wrangler.toml`, redeploy,
then `npx wrangler secret put OPENAI_API_KEY`.

## 4. Point the site at the Worker
Open `assets/question-stream.js`, find near the top:
```js
var WORKER_ENDPOINT = ''; // e.g. 'https://fa-question-stream.YOURNAME.workers.dev'
```
Paste your Worker URL between the quotes and save:
```js
var WORKER_ENDPOINT = 'https://fa-question-stream.YOURNAME.workers.dev';
```
(On `localhost` the site still uses your local Ollama; the Worker is only used off-localhost.)

## 5. Publish
```bash
git add assets/question-stream.js && git commit -m "Wire site to AI Worker" && git push
```
GitHub Pages redeploys in ~1 min. **Cache note:** assets are requested with `?v=20260628`.
If your browser shows the old file, hard-refresh (Ctrl+F5), or bump that version string
site-wide so returning visitors pick up the change.

## 6. Verify (on another device)
1. Open a course page, e.g. `.../courses/ap-biology-overview.html`.
2. Start the stream. The badge should read **"AI Source: Anthropic"** (or OpenAI) and
   questions should be freshly generated.
3. Sanity-check the Worker directly:
   ```bash
   curl -X POST https://fa-question-stream.YOURNAME.workers.dev/api/question \
     -H "Content-Type: application/json" -H "Origin: https://arnavttt.github.io" \
     -d '{"action":"status"}'
   ```

## Notes
- **Cost:** cloud generation is billed per token on your key (Anthropic ~$3–15 / M tokens
  depending on model; a question is a few hundred tokens). Watch usage in your provider dashboard.
- **CORS:** the Worker only answers your site's origin (`QS_ALLOWED_ORIGINS` in `wrangler.toml`),
  so other sites can't burn your credits.
- **Model:** set `QS_ANTHROPIC_MODEL` / `QS_OPENAI_MODEL` in `wrangler.toml` to pick a model.
- **Turn it off:** set `WORKER_ENDPOINT = ''` and push — the site returns to free seeded practice.
  Delete the Worker with `npx wrangler delete` if you want it gone.
- The seeded bank always works with **no** backend, so the site never breaks if the Worker or key is removed.
