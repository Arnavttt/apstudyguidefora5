# Privacy — AI Question Stream

This feature is designed to be **private by default**. In its recommended local-Ollama
setup, no study data leaves your computer.

## What is stored, and where
All progress is stored **locally in your browser** (`localStorage`), scoped per course.
Nothing is sent to any server for storage. Keys used:
- `qs-progress-<course>` — topic mastery (0–100), attempt counts.
- `qs-attempts-<course>` — recent attempts (question id, your answer, score, timestamp; capped at 200).
- `qs-review-<course>` — spaced-repetition review queue (capped at 80).
- `qs-cache-<course>` — recently generated questions to avoid repeats (capped at 60).
- `qs-session-<course>` — current stream settings.

There are **no accounts, no names, no emails, no logins**. Progress is tied to your
browser only (an anonymous, device-local record).

## What is sent to AI, and when
- **Seeded / fallback mode:** nothing is sent anywhere. Questions come from the local bank.
- **Local Ollama mode (recommended):** question requests and, for written answers, your
  typed response are sent to **your own machine** (`127.0.0.1:11434`) via the local
  `/api/question` route. This never leaves your computer.
- **Cloud mode (only if you configure a key):** if you set `ANTHROPIC_API_KEY` or
  `OPENAI_API_KEY` and choose that provider, the question context and — for written
  questions — your typed answer are sent to that third party for generation/grading.
  The UI shows a disclosure before you submit written answers in this mode.

**We never send** your name, email, school, IP-as-identity, or your stored progress
history to any AI provider. Only the minimal question context (course, unit, topic,
difficulty, type) and, for grading, the single answer you typed are sent.

## How local mode works (data flow)
```
Browser  ──POST /api/question──▶  local server (serve-local.mjs)  ──▶  Ollama @127.0.0.1
   ▲                                                                        │
   └──────────────── question / feedback JSON ◀────────────────────────────┘
```
The browser never talks to Ollama directly (avoids CORS and keeps any keys server-side).

## Operational privacy safeguards
- No API keys are ever read or stored in the browser or shipped in client bundles.
- The server logs upstream errors **server-side only**; it never echoes provider errors
  or full student answers to the client, and production logging avoids dumping answers.
- The AI endpoint is CORS-locked to the site's own origin so other sites can't proxy through it.
- The Ollama URL is restricted to localhost unless you explicitly opt in.
- `.env` / `.env.local` files are git-ignored and never committed.

## Clearing your data
Every course panel has a **Reset** button that clears progress, mastery, review queue,
and cache for that course. To clear everything manually:
- Browser DevTools → Application → Local Storage → remove keys beginning with `qs-`, **or**
- Clear site data for the site in your browser settings.

Uninstalling/closing the app does not transmit anything; local data simply stays on your device until you clear it.
