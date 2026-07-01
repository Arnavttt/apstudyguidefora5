# Running the AI Question Stream locally with Ollama

The AI Question Stream works **with no backend at all** (it falls back to a built-in
seeded question bank). To get *fresh, adaptive, AI-generated* questions and AI grading
of written answers — for free, and 100% on your own machine — run a local
[Ollama](https://ollama.com) model behind the bundled local server.

Nothing leaves your computer. No API keys. No cloud costs.

---

## 1. Install Ollama
Download and install from <https://ollama.com/download> (macOS, Windows, Linux).
Ollama starts a local server on `http://127.0.0.1:11434` automatically.

## 2. Start Ollama
It usually runs on login. To start/verify it manually:
```bash
ollama serve        # only needed if it is not already running
```

## 3. Pull a model
```bash
ollama pull llama3.2
```

## 4. Optional stronger models (better questions, more RAM/time)
```bash
ollama pull qwen2.5:7b
ollama pull mistral
ollama pull llama3.1:8b
```
Point the app at one with `OLLAMA_MODEL=qwen2.5:7b` (see step 7).

## 5. Verify the Ollama server
```bash
curl http://127.0.0.1:11434/api/version
```

## 6. Verify your local models
```bash
curl http://127.0.0.1:11434/api/tags
```

## 7. Configure (optional) — `.env.local`
Copy `.env.example` to `.env.local` (git-ignored) and adjust. All values are optional.
```env
AI_QUESTION_PROVIDER=ollama
OLLAMA_BASE_URL=http://127.0.0.1:11434
OLLAMA_MODEL=llama3.2
OLLAMA_EVALUATOR_MODEL=llama3.2
OLLAMA_TIMEOUT_MS=60000
```
The server reads these from the environment. Legacy names (`QS_PROVIDER`,
`OLLAMA_URL`, `QS_OLLAMA_MODEL`) are still honored. On Windows PowerShell:
```powershell
$env:OLLAMA_MODEL="llama3.2"; node serve-local.mjs
```

## 8. Start the app
This is a static site plus two tiny API endpoints. The bundled zero-dependency
Node server (Node 18+) serves both:
```bash
node serve-local.mjs
```
It prints whether Ollama is reachable and which model is selected, then serves:
- Site: <http://localhost:8765/index.html>
- AI:   `POST /api/question` (generation + evaluation) and `POST /api/chat` (tutor)

## 9. Test it
1. Open any AP course **overview** page, e.g. <http://localhost:8765/courses/ap-biology-overview.html>.
2. Scroll to **AI Question Stream** and press **Start Stream**.
3. The source badge (top-right of the panel) should read **Ollama local** once a question is generated.
4. Quit Ollama (or run with `AI_QUESTION_PROVIDER=fallback`) and Start again — the badge
   reads **Seeded fallback** and practice continues from the built-in bank.

You can also probe the backend directly:
```bash
curl -s -X POST http://localhost:8765/api/question -H "Content-Type: application/json" -d '{"action":"status"}'
```

## 10. Troubleshooting
| Symptom | Cause | Fix |
| --- | --- | --- |
| Badge says "Seeded fallback" even with Ollama on | Model not pulled | `ollama pull llama3.2`; the panel shows a hint with the exact command |
| `status` shows `reachable: false` | Ollama not running | `ollama serve`, or reinstall from ollama.com |
| Questions take a long time | Local model is large / cold | Use `llama3.2` (small) or raise `OLLAMA_TIMEOUT_MS`; first call warms the model |
| Timeout errors | Model slower than `OLLAMA_TIMEOUT_MS` | Increase it (e.g. `120000`); the stream falls back to seeded meanwhile |
| Invalid JSON from the model | Small models occasionally emit stray text | Handled automatically: one JSON-repair pass, then seeded fallback |
| "Refusing non-localhost Ollama URL" | `OLLAMA_BASE_URL` points off-box | Keep it on `127.0.0.1`, or set `QS_ALLOW_REMOTE_OLLAMA=1` for a host you control |
| Browser blocked calling `:11434` | CORS / mixed content — never call Ollama from the browser | Always go through `/api/question` (this app already does); never fetch Ollama from client JS |
| Windows firewall prompt | First run of Node/Ollama | Allow on **Private** networks (localhost only) |

**Server/client boundary:** the browser only ever calls `/api/question` and
`/api/chat`. Those server routes call Ollama. The browser never contacts Ollama
directly — this avoids CORS problems and keeps any future keys server-side.
