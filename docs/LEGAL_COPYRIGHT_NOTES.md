# Legal & Copyright Notes — AI Question Stream

_This is practical guidance, not legal advice._

## Independent resource
Five & A+ is an **independent** AP study and practice resource. It is **not affiliated with,
endorsed by, or sponsored by the College Board**. AP® and Advanced Placement® are trademarks
registered by the College Board, which is not affiliated with this site. This disclaimer
appears in the footer of every page and as a small note under each AI Question Stream panel.

## No official AP materials
The AI Question Stream and the seeded question bank contain **only original, AP-style practice
questions**. The project does **not** copy, reproduce, or paraphrase:
- Official, released, or secure AP exam questions
- AP Classroom questions
- Copyrighted textbook passages or long copyrighted excerpts

Course frameworks (units/topics/skills/exam structure) are **conceptual organizational
structures** describing publicly known course scope — not copied College Board text.

## Original-practice framing only
All content uses "AP-style," "AP-aligned," or "practice." The system never claims a question
is an official, real, released, leaked, or unreleased AP exam item.

## Generated-question validation (defense in depth)
Every AI-generated question is validated **before display** by `validateQuestion` /
`legalCheck` in `assets/qstream/core.js`:
- **Hard-rejected** if it contains official/secure wording: "official AP exam", "released AP
  exam", "College Board question", "AP Classroom question", "secure AP exam", "from the 20XX
  AP Exam", "copyright College Board", "actual AP test question", "leaked AP exam", "unreleased
  AP exam", "real AP exam answer".
- **Flagged `needs-review`** for softer signals (e.g., "reprinted with permission", overlong
  stimulus that could be a copied passage).
- **Rejected** if it contains raw HTML tags (injection defense; math inequalities like `x < 5`
  are not affected).
- Invalid output is never shown — one JSON-repair pass is attempted, otherwise the stream
  falls back to a seeded question. Each question carries a `legalStatus`
  (`original-practice` | `needs-review` | `rejected`) and `legalReviewNotes`.

## Discipline-specific practices
- **English / History:** short original or clearly-invented source-style snippets — never real
  copyrighted text.
- **Art History:** `imagePrompt` descriptors instead of copyrighted images.
- **Music Theory:** original notation placeholders, not copyrighted scores.

## Teacher / parent review recommendation
AI models can occasionally be wrong. Questions flagged `needs-review` (and, ideally, a sample
of generated questions) should be reviewed by an educator. The tool is for **formative
practice**, not graded assessment or live-exam use — see `docs/ACADEMIC_INTEGRITY.md`.

## Trademark attribution
> AP® and Advanced Placement® are trademarks registered by the College Board. This site is an
> independent educational resource and is not affiliated with, endorsed by, or sponsored by the
> College Board.
