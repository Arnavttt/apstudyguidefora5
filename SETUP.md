# AI Tutor — Setup & Deployment Guide

## What was added

| File | Purpose |
|------|---------|
| `ai-tutor.js` | Floating chat widget (drop in site root) |
| `ai-tutor.css` | Widget styles (drop in site root) |
| `api/chat.js` | Edge function — calls Claude API, streams response |
| `SETUP.md` | This file |

---

## Step 1 — Get an Anthropic API key

1. Go to **[console.anthropic.com](https://console.anthropic.com)**
2. Sign up or log in
3. Navigate to **API Keys** → **Create Key**
4. Copy the key (starts with `sk-ant-…`) — you only see it once

---

## Step 2 — Deploy the edge function

### Option A — Cloudflare Workers (recommended, free tier is generous)

1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   wrangler login
   ```

2. **Create `wrangler.toml`** in your project root:
   ```toml
   name = "ap-tutor-chat"
   main = "api/chat.js"
   compatibility_date = "2024-01-01"
   compatibility_flags = ["nodejs_compat"]
   ```

3. **Set your API key as a secret** (never commit it to git):
   ```bash
   wrangler secret put ANTHROPIC_API_KEY
   # paste your key when prompted
   ```

4. **Deploy**:
   ```bash
   wrangler deploy
   ```
   Wrangler will print a URL like `https://ap-tutor-chat.YOUR-SUBDOMAIN.workers.dev`

5. **Update `ai-tutor.js`** — change line 8:
   ```js
   const API_ENDPOINT = 'https://ap-tutor-chat.YOUR-SUBDOMAIN.workers.dev/api/chat';
   ```

---

### Option B — Vercel Edge Functions

1. **Initialize a Vercel project** in your site directory:
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Add to top of `api/chat.js`**:
   ```js
   export const config = { runtime: 'edge' };
   ```

3. **Set the environment variable**:
   - Go to your Vercel project dashboard → **Settings** → **Environment Variables**
   - Add `ANTHROPIC_API_KEY` = `sk-ant-…`

4. **Deploy**:
   ```bash
   vercel --prod
   ```

5. **Update `ai-tutor.js`** line 8:
   ```js
   const API_ENDPOINT = 'https://your-project.vercel.app/api/chat';
   ```

---

### Option C — Local development only (no deploy needed)

For testing without deploying, run a tiny local proxy:

```bash
# Install dependencies
npm init -y
npm install express cors node-fetch

# Create local-server.js
cat > local-server.js << 'EOF'
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { messages, course } = req.body;
  const systemPrompt = `You are an expert AP tutor for ${course || 'AP'}. Answer clearly and concisely.`;

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');

  const upstream = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({ model: 'claude-haiku-4-5', max_tokens: 1024, system: systemPrompt, messages, stream: true }),
  });

  const reader = upstream.body.getReader();
  const decoder = new TextDecoder();
  let buf = '';
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    const lines = buf.split('\n'); buf = lines.pop();
    for (const line of lines) {
      if (!line.startsWith('data: ')) continue;
      try {
        const e = JSON.parse(line.slice(6));
        if (e.type === 'content_block_delta') res.write(`data: ${JSON.stringify({ delta: e.delta.text })}\n\n`);
        if (e.type === 'message_stop') res.write('data: [DONE]\n\n');
      } catch {}
    }
  }
  res.end();
});

app.listen(3001, () => console.log('AI Tutor proxy → http://localhost:3001'));
EOF

# Run it
ANTHROPIC_API_KEY=sk-ant-... node local-server.js
```

Then in `ai-tutor.js` set:
```js
const API_ENDPOINT = 'http://localhost:3001/api/chat';
```

---

## Step 3 — Add widget to your HTML pages

In each course page's `<head>`, add:

```html
<!-- AI Tutor widget -->
<link rel="stylesheet" href="/ai-tutor.css">
<meta name="course" content="AP Calculus BC">
<script src="/ai-tutor.js" defer></script>
```

Change the `content` attribute for each page:

| Page | Meta content value |
|------|--------------------|
| AP Calculus AB | `AP Calculus AB` |
| AP Calculus BC | `AP Calculus BC` |
| AP Biology | `AP Biology` |
| AP Chemistry | `AP Chemistry` |
| AP Physics 1 | `AP Physics 1` |
| AP Physics C | `AP Physics C: Mechanics` |
| AP US History | `AP United States History` |
| AP World History | `AP World History: Modern` |
| AP English Language | `AP English Language and Composition` |
| AP English Literature | `AP English Literature and Composition` |
| AP Computer Science A | `AP Computer Science A` |
| AP Statistics | `AP Statistics` |
| AP Psychology | `AP Psychology` |
| AP Economics (Micro) | `AP Microeconomics` |
| AP Economics (Macro) | `AP Macroeconomics` |
| index.html | (omit meta tag — widget will show "AP Tutor") |

---

## Step 4 — Lock down CORS (before going live)

In `api/chat.js`, change:
```js
'Access-Control-Allow-Origin': '*',
```
to your domain:
```js
'Access-Control-Allow-Origin': 'https://your-site.com',
```

---

## Troubleshooting

**Widget doesn't appear** → Check browser console for JS errors. Confirm both files are at the site root and the `<script>` tag has `defer`.

**"Could not reach the tutor backend"** → The `API_ENDPOINT` in `ai-tutor.js` doesn't match your deployed URL, or the Worker/function isn't deployed yet.

**"ANTHROPIC_API_KEY not configured"** → Set the secret/env var in your deploy platform.

**Rate limit hit** → Default is 10 requests/minute per IP. Increase `RATE_LIMIT` in `api/chat.js` if needed.

**Streaming not working on Nginx** → Ensure `X-Accel-Buffering: no` header is passing through, or add `proxy_buffering off;` to your Nginx config.
