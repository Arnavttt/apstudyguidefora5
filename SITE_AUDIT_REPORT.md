# Five & A+ — Full Site Quality Audit Report

**Date:** 2026-06-01  
**Auditor:** Automated + manual review  
**Scope:** index.html, 25 course pages, 185 unit pages, assets/site.css, assets/app.js, five_and_a_plus/ Flutter app  

---

## Executive Summary

The site is in strong shape overall. All 25 courses are linked from the homepage, all unit pages exist, quizzes have complete answer keys, MathJax renders math in lesson content, and the Flutter app is well-structured. The audit found and fixed several real issues including broken navigation links, 15 duplicate quiz questions, a private-browsing JavaScript crash, and insufficient mobile CSS.

---

## 1. Structure & Navigation

### ✅ Passed
- All 25 course overview pages linked from `index.html` — none missing
- All 185 unit pages exist with no gaps in unit numbering
- All internal hrefs resolve — zero 404s after fixes
- Back-navigation (breadcrumbs, course pills) present on all unit pages
- Review pages exist for all 25 courses
- `<title>` tags are accurate on all checked pages
- Search (`filterSite()`) functional on all unit pages

### 🔴 Fixed: Broken back-links (Physics 1 & 2)
All 13 AP Physics 1 & 2 unit pages linked to a non-existent file `../courses/ap-physics-overview.html`. Fixed to `ap-physics-1-2-overview.html`.

### ⚠️ Noted (not fixed)
- `five_and_a_plus/web/index.html` contains `$FLUTTER_BASE_HREF` and `flutter_bootstrap.js` — these are Flutter build placeholders that are replaced during `flutter build web`. Not broken; do not edit.
- `units/light-waves-personal-study-guide.html` is an orphaned page — not linked from any course or unit. See TODO list.

---

## 2. Content Quality

### ✅ All unit pages include
| Section | Coverage |
|---------|----------|
| Key vocabulary | 100% (184/184) |
| AP exam tips / "How AP tests this" | 100% |
| Common mistakes (⚡ section) | 100% |
| Key formulas / cheat sheet | 100% |
| Exit ticket | 100% |
| Lesson videos | 99.5% (184/185 — light-waves orphan excluded) |
| FRQ / essay content | 93% (172/184 — College Algebra/Trig reasonably excluded; not AP exams) |

### ✅ Unit structure
Every unit page contains:
- Masthead with course breadcrumb, unit title, unit subtitle
- Navigation pills linking to all sibling units
- Multiple h4-level lesson sections (2–8 per unit)
- Key vocabulary terms
- Formula sections
- Exit tickets
- Practice quiz (see §3)

### ⚠️ Content gaps identified (for human review)
- **Worked examples:** The `✏️ Worked Example` label/section is rare across units. Most units rely on quiz questions to model AP-style problems. Consider adding an explicit worked-example section per lesson for higher-tier courses (Calc BC, Physics C, Chemistry).
- **College Algebra / Trigonometry:** Only 5 quiz questions per unit (vs. 30 for AP courses). These are not AP exams, so this is acceptable, but consider expanding to 10–15 for more practice.
- **FRQ practice:** 12 non-AP units (College Algebra/Trig) have no FRQ section — appropriate since these have no AP exam. All AP courses have FRQ/DBQ/LEQ/essay practice.

---

## 3. Quiz Quality

### ✅ Passed
- 30 questions per unit on all AP courses (5 per lesson bank × multiple banks)
- `data-correct="true"` present on exactly one choice per question (verified across all courses)
- `app.js` `mcqPick()` correctly locks answered questions, highlights correct answer on wrong selection, and saves state to storage
- Score tracking with `updateScores()` and `refreshAllBankScores()` functional
- Reset functionality (`resetBank`, `resetAll`) implemented

### 🔴 Fixed: Duplicate questions (15 removed across 12 files)

| File | Duplicates Removed |
|------|--------------------|
| AP English Lit Unit 9 | 2 |
| AP Macro Units 2, 3, 4, 5, 6 | 1–2 each (7 total) |
| AP Environmental Science Unit 9 | 1 |
| AP Human Geography Unit 5 | 1 |
| AP USGov Units 3, 5 | 1 each |
| APUSH Unit 9 | 1 |
| AP World History Unit 1 | 1 |

---

## 4. Videos

_(See also VIDEO_AUDIT.md for full video-by-video breakdown)_

### 🔴 Fixed (in previous commit)
- **190 repeated video IDs replaced** across 8 courses:
  - AP Art History: `wKuKX7bSHkc` appeared 14× (now each unit has a unique video)
  - AP Physics 1 & 2: 9 repeated IDs each appeared 13–15× (now per-unit replacements)
  - AP Physics C: Repeated IDs fixed for Mechanics and E&M units
  - AP English Lit: `MSYw502dJNY` / `GNw8ij8rejM` appeared 11× each
  - AP Calculus BC: `fYyARMqiaag` appeared 10× (kept for Unit 1, replaced units 2–10)
  - AP Environmental Science: `6IDLSvCNPTs` appeared 9× (unit-specific replacements)
  - AP Chemistry: `DsgDoSHmq4c` appeared 9× (kept for Unit 5 Kinetics)

### 🔴 Fixed (in previous commit)
- **889 video labels added** to all unit pages:
  - `🎬 Lesson Video` for standard lesson videos
  - `📚 Unit Review Video` for final/summary videos
  - `✏️ Worked Example` for example-focused videos
  - Short description added below each video
  - CSS `.vid-label` and `.vid-desc` added to `assets/site.css`

### ⚠️ Noted
- YouTube oEmbed API was unreachable during audit (network restriction) — video titles in VIDEO_AUDIT.md are based on ID verification only.
- Embeddability of replacement videos was not confirmed programmatically — spot-check recommended (see TODO list).

---

## 5. Math Rendering

### ✅ Passed
- MathJax v3 correctly loaded via CDN (`cdn.jsdelivr.net`) on all unit pages
- Config: `inlineMath: [["\\(","\\)"]]`, `displayMath: [["\\[","\\]"]]`
- Inline math in lesson formula sections uses `\( \)` correctly
- Greek letters and special symbols (∫, ∑, π, ∞) render as Unicode (not raw LaTeX) in most places — acceptable

### 🔴 Fixed
- 44 `lim_{}` expressions in Calc BC and Chemistry quiz questions wrapped in `\( \)` for MathJax rendering

### ⚠️ Remaining (for human review)
- Some quiz `q-text` divs still contain raw math-style notation (arrows like `→`, subscripts like `x₀`) written as Unicode, not LaTeX — these read correctly as text but do not render as formal math. This is intentional in many cases (readability) but could be inconsistent in STEM courses.
- Physics C E&M and Precalculus have a few formula sections with raw subscript notation — see TODO list.

---

## 6. CSS & Design

### ✅ Passed
- All key CSS classes present: `.vid-wrap`, `.q-choice`, `.topnav`, `.masthead`, `.pill`, `.sidebar`, `.vid-label`, `.vid-desc`
- Dark/light color scheme consistent across all pages via CSS variables (`--AC`, `--text`, `--bg`)
- Comfortaa font loaded from Google Fonts
- Scrollbar styled consistently
- Tables use `overflow-x: auto` for horizontal scrolling

### 🔴 Fixed: Mobile CSS
Only 3 media queries existed prior to audit. Added comprehensive breakpoints:
- **480px:** Masthead font size, lesson grid single-column, quiz choice word-wrap, video iframe height, formula block scroll, navigation pills horizontal scroll, hero padding
- **768px:** Topnav stacking, search bar full-width, unit content padding, quiz score bar stacking

### ⚠️ Noted
- `minmax(360px, 1fr)` grid on some sections may still cause horizontal overflow on very narrow phones (320px). Test on iPhone SE.

---

## 7. JavaScript

### ✅ Passed
- `mcqPick()` — correctly handles selection, locking, correct/wrong highlight, show-correct reveal
- `loadMcqState()` — restores saved answers on page reload
- `resetBank()` / `resetAll()` — clear state and re-render
- `filterSite()` — case-insensitive search across visible text
- `toggleSidebar()` — sidebar open/close
- `rateUnit()` — star rating saved and displayed
- Feedback form — collects and stores feedback in storage

### 🔴 Fixed: Private-browsing crash
All `localStorage` calls replaced with a `_store` polyfill that falls back to an in-memory object when `localStorage` throws (Safari/Firefox private mode, some corporate proxies). Previously, the site would crash on any localStorage write in private mode.

### ⚠️ Noted
- No error boundaries or try/catch around DOM manipulation — if a page has malformed HTML, JS may silently fail
- No unit tests for JS functions

---

## 8. Flutter App (`five_and_a_plus/`)

### ✅ Passed
- Router: `go_router` with `/` (HomeScreen) and `/subject/:id` (SubjectScreen) — 404 fallback implemented
- Quiz: `QuizController` (ChangeNotifier) correctly scopes per-quiz-section, answers lock on first selection, score computed correctly
- `QuizQuestionWidget`: animated reveal, green/red feedback, shows correct answer on wrong
- `HomeScreen`: uses `LayoutBuilder` + `MediaQuery` (14 responsive references) — no hardcoded large widths
- `SubjectScreen`: scrollable content, proper overflow handling (7 `overflow` references)
- `flutter_math_fork` included for math rendering in Flutter
- `subjects_registry.dart` maps all subject IDs — null-safe router handles missing IDs

### ⚠️ Noted (no code changes made)
- Only 2 screens (`home_screen.dart`, `subject_screen.dart`) — no dedicated unit-level screen. All unit content is rendered inline within `SubjectScreen` via chunked content files.
- Content data is compiled directly into Dart files (not fetched from API) — content updates require a full app rebuild. Consider this before making content changes.
- `HomeScreen` is 53,059 bytes — very large file. Consider extracting course card builder to a separate widget file.
- Flutter app and static HTML site content may diverge over time as HTML is updated. No sync mechanism exists.

---

## 9. Course Pages (`courses/*.html`)

### ✅ Passed
- All 25 course overview pages contain: exam format, unit path, FRQ/essay strategy, "how to get a 5" guidance
- College Algebra and Trigonometry correctly omit "exam format" (no AP exam for these)
- All course review pages exist and link from overview pages

### ⚠️ Noted
- Course overview pages use `20 cumulative review questions` structure — verified present
- Diagnostic practice section present on all AP overview pages reviewed

---

## Summary of Changes Made

| Category | Changes |
|----------|---------|
| Broken links fixed | 13 (Physics 1&2 back-links) |
| Duplicate questions removed | 15 across 12 files |
| Video IDs replaced | 190 across 8 courses |
| Video labels added | 889 across 184 files |
| Math expressions fixed | 44 (lim_{} in quiz questions) |
| Mobile CSS breakpoints added | 2 (480px, 768px) with ~20 rules each |
| JS localStorage safety | All calls wrapped in private-mode polyfill |
| CSS classes added | `.vid-label`, `.vid-desc`, mobile rules |

---

## Remaining Issues (see TODO_BEFORE_LAUNCH.md)

1. Verify embeddability of replacement YouTube videos (spot-check ~20 IDs)
2. Link or remove orphaned `light-waves-personal-study-guide.html`
3. Expand College Algebra/Trig from 5 to 10–15 questions per unit
4. Add worked-example sections to Calc BC, Physics C, Chemistry units
5. Test on iPhone SE (320px) for any remaining overflow
6. Test quiz in Safari private browsing mode (localStorage fallback)
7. Sync Flutter app content with any future HTML content updates

