# AI Question Stream — Manual QA Checklist

Run through this before a release. Automated coverage: `node --test tests/*.test.js`
(course coverage, seeded validation, legal validation, evaluator, mastery, review queue,
Ollama provider). This checklist covers what humans should still eyeball.

## Per course (all 23)
Courses: Art History · Biology · Calculus BC · Chemistry · Comparative Government ·
Computer Science A · Computer Science Principles · English Language · English Literature ·
Environmental Science · European History · Human Geography · Macroeconomics ·
Microeconomics · Music Theory · Physics 1 & 2 · Physics C: E&M · Physics C: Mechanics ·
Precalculus · Psychology · U.S. Government · U.S. History · World History: Modern.

For each course overview page:
- [ ] Page loads without console errors
- [ ] AI Question Stream panel appears
- [ ] Unit selector works
- [ ] Topic selector updates when unit changes
- [ ] Practice mode: Start → question renders → submit → feedback → Continue
- [ ] Exam mode: advances through a set, shows set summary
- [ ] Review mode: empty-state shows the "queue clear" card (no crash)
- [ ] Seeded fallback works (with Ollama off, questions still appear)
- [ ] Generated/seeded question validates (correct answer present, explanation non-empty)
- [ ] Answer submits; MCQ locks choices and marks correct/incorrect
- [ ] Feedback shows explanation (and rubric/model answer for written types)
- [ ] Mastery meter and stats update after answering
- [ ] Difficulty legend + badges render
- [ ] No overlapping text; mobile layout acceptable (resize to ~375px)

## AI / Ollama
- [ ] **Ollama ON:** badge reads "Ollama local"; questions are fresh/varied
- [ ] **Ollama OFF (`AI_QUESTION_PROVIDER=fallback` or Ollama stopped):** badge reads
      "Seeded fallback"; stream still works
- [ ] **Missing model** (Ollama up, model not pulled): panel shows the `ollama pull …` hint
- [ ] **Invalid JSON** from a small model: no crash; repaired or seeded silently
- [ ] **Slow response / timeout:** no infinite spinner; falls back after `OLLAMA_TIMEOUT_MS`
- [ ] `curl -X POST …/api/question -d '{"action":"status"}'` returns accurate provider/reachability
- [ ] Written-answer AI grading returns a score + strengths/improvements (Ollama or cloud)

## Legal / copyright
- [ ] Independent-practice note visible under the stream panel
- [ ] Affiliation disclaimer present on course pages (footer / disclosure page)
- [ ] No seeded question contains official/released/secure AP wording (tests enforce this)
- [ ] Spot-check a few generated questions for original phrasing

## Security / privacy
- [ ] No API keys in client bundles or page source (`grep -ri "api_key\|sk-" assets/ *.html`)
- [ ] No `.env` / `.env.local` committed (`git status`)
- [ ] AI content renders as text/markdown (no raw HTML injection / XSS)
- [ ] Reset button clears progress for a course
- [ ] Ollama URL rejects non-localhost by default

## Build / ship
- [ ] `node --test tests/*.test.js` → all pass
- [ ] `node --check` passes on core.js, question-stream.js, api/*.js, serve-local.mjs
- [ ] Site loads on the static host (GitHub Pages) with AI unavailable → seeded works
