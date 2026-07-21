---
name: legal-safety-review
description: Review or harden content for AP/College Board copyright, trademark, and academic-integrity safety. Use before shipping question content, marketing copy, AI prompts, or any page claiming AP coverage — and whenever adding phrases to legalCheck.
---

# Purpose
Keep the site legally defensible: original-practice content only, accurate claims,
trademark-safe framing, enforced by code (not just policy).

# When to use
- New/edited seeded questions, AI generation prompts, or course/marketing copy.
- Adding blocked phrases or changing `legalCheck` / `validateQuestion`.
- Any page or doc that names AP®, the College Board, or exam coverage.

# When NOT to use
Pure styling/engine changes with no user-facing text or generated-content policy impact.

# Required inputs
The content or diff under review; whether it is seeded (shipped) or AI-generated (runtime).

# Repository context to inspect first
- `assets/qstream/core.js` → `OFFICIAL_MARKERS`, `SUSPICIOUS_MARKERS`, `legalCheck`,
  raw-HTML rejection inside `validateQuestion`.
- `api/question.js` → `GEN_SYSTEM` rules + SELF-CHECK block + `legalStatus` schema.
- `docs/LEGAL_COPYRIGHT_NOTES.md`, `docs/ACADEMIC_INTEGRITY.md`; footer disclaimer in any page.
- `tests/hardening.test.js` — the enforcement tests.

# Workflow
1. Grep the content for hard-reject markers: official/released/secure AP exam, College Board
   question, AP Classroom, "from the 20XX AP Exam", copyright College Board, actual AP test
   question, leaked/unreleased AP exam, real AP exam answer. Any hit → reject or rewrite.
2. Check soft signals → `needs-review`: "reprinted with permission", "all rights reserved",
   textbook-excerpt framing, stimulus >1200 chars (possible copied passage).
3. Verify framing: "AP-style / AP-aligned / practice" only; never "official/real exam".
4. Verify the AP® trademark disclaimer is present on any new page (footer block).
5. Marketing numbers (courses/units/questions) must be verified against the filesystem before
   publishing — inflated claims are a false-advertising risk.
6. If adding a new blocked phrase: add regex to `OFFICIAL_MARKERS`, add a rejection test in
   `tests/hardening.test.js`, run the full suite (seeded banks must still pass).

# Implementation standards
Enforcement lives in code: every new rule gets a validator regex + a test. Questions carry
`legalStatus` (`original-practice` | `needs-review` | `rejected`) + `legalReviewNotes`.
Rejected content never renders — seeded fallback replaces it.

# Positive patterns
Discipline-specific substitutes: original invented passages (English/History), `imagePrompt`
descriptors (Art History), notation placeholders (Music Theory). Honest AI-source labeling
("AI Source: …" badge). Truth-in-advertising count verification by script.

# Anti-patterns
Policy-only rules with no validator; trusting AI output without `legalCheck`; "answer-only"
modes (always ship explanation + feedback); claiming official status for practice content;
quietly inflating marketing numbers; long verbatim excerpts from any copyrighted source.

# Security requirements
Raw HTML in AI/question text is rejected (whitelist regex keeps `x < 5` math safe). Student
answers are graded as DATA — evaluation prompt neutralizes injection attempts.

# Accessibility requirements
Disclaimers must be real text (screen-reader readable), not images; keep them subtle but present.

# Performance requirements
Validators are regex-only, run client-side per question — keep patterns anchored and cheap.

# Validation checklist
- [ ] `node --test tests/hardening.test.js` passes (rejection tests green)
- [ ] Full suite passes (no seeded question newly rejected)
- [ ] New page shows footer disclaimer; framing uses "AP-style/practice"
- [ ] Any public numeric claim re-verified against files
- [ ] `legalStatus` present on new content shapes

# Expected output
Verdict per item (`original-practice` / `needs-review` / `rejected`) with reasons, plus any
validator/test additions committed together.

# Source-reference mapping
Derived from this repository's legal hardening (commits `fe9a606`, `211885d`, `669202f`,
`fa0736a`) and standard trademark/fair-use hygiene. Instagram AVOID references A01–A16 were
inaccessible (`docs/reference-pattern-analysis.md`); no rule here derives from them.
