# Five & A+ — Free AP® & College Review

A free, open-source study site for AP® courses and college-level math. Covers 25 subjects with 184+ unit review pages, 5,500+ MCQ practice questions, and embedded video resources.

## Live Site

Open `index.html` in your browser, or host the folder on any static file server (GitHub Pages, Netlify, etc.).

## Structure

```
index.html              ← course hub
courses/{slug}.html     ← per-course overview with MCQ practice
units/{slug}-{n}-*.html ← unit-level deep-dives (lessons + MCQ banks)
assets/site.css         ← shared dark design system
assets/app.js           ← MCQ logic + localStorage progress tracking
```

## Features

- **Click-to-select MCQs** — instant feedback, score tracked per bank
- **localStorage persistence** — answers survive page reloads
- **Per-unit dashboards** — see right / wrong / unanswered at a glance
- **AP® skill checkpoints** — course-specific study loops that pair guide practice with official AP Classroom work
- **Unit transfer prompts** — AP® unit pages turn local lessons into rubric-style written, worked, or performance-task practice
- **Command-verb toolkits** — AP® response habits for identify, describe, explain, justify, calculate, compare, and related task verbs
- **Mistake-repair workflows** — Wrong-only review prompts that turn missed questions into a retake plan
- **Spaced-review plans** — same-day, 48-hour, and one-week prompts for keeping AP® units active
- **Official-practice bridges** — AP® course pages connect local practice to AP Daily, AP Central course pages, and AP Classroom work
- **Exam-day strategy cards** — AP® course pages rehearse pacing, evidence checks, and final review habits
- **Dark premium UI** — Outfit / Syne / Fira Code font stack, per-course accent colors
- **Embedded video** — YouTube (privacy-enhanced mode) with fallback links
- **GitHub Pages–ready** — all paths relative, `.nojekyll` present

## Courses Covered

### History & Social Science
- AP® Human Geography
- AP® United States History
- AP® World History: Modern
- AP® European History
- AP® United States Government & Politics
- AP® Comparative Government & Politics
- AP® Psychology

### English Language Arts
- AP® English Literature & Composition
- AP® English Language & Composition

### STEM
- AP® Biology
- AP® Chemistry
- AP® Environmental Science
- AP® Physics 1 & 2
- AP® Physics C: Mechanics
- AP® Physics C: Electricity & Magnetism
- AP® Computer Science A
- AP® Computer Science Principles
- AP® Calculus BC
- AP® Precalculus

### Economics
- AP® Macroeconomics
- AP® Microeconomics

### Arts
- AP® Music Theory
- AP® Art History

### College Math (Non-AP®)
- College Algebra
- College Trigonometry

## Progress Tracking

All answers are stored in `localStorage` under the key prefix `fa2-`. To reset all progress on a page, use the "Reset All" button in the dashboard, or clear site data in your browser's DevTools.

## Development

Content is generated from Python modules in `html_generator/ap_content/`.
From the repository root, regenerate the checked-in static site with:

```bash
python html_generator/generate_ap_content.py
```

Useful variants:

```bash
python html_generator/generate_ap_content.py --dry-run
python html_generator/generate_ap_content.py ap-biology
python html_generator/generate_ap_content.py bio college-algebra
python html_generator/generate_ap_content.py --output-dir path/to/site-root ap-biology
```

Omit course selectors to regenerate all courses into `site/`. AP® course pages
also receive generated exam-skill study loops, command-verb toolkits, and unit
checkpoints from `generate_ap_content.py`, plus AP-only unit transfer prompts,
mistake-repair prompts, spaced-review plans, official-practice bridges, and
exam-day strategy cards that use the existing
dashboard filters; the two college math courses keep their Non-AP® labeling and
skip AP-only guidance. Selectors may be
module names (`bio`), course slugs (`ap-biology`), abbreviations, or course HTML
files (`ap-biology.html`). Split content modules are grouped automatically, so a
single selector regenerates the whole course.

## About the Creators

Five & A+ was founded by Arnav Sinha and co-founded by Yashwin Kandra, a Don Bosco Prep student from New York in the Class of 2027 who took on 11 AP® courses and wanted a free, organized study system that actually works. The site is open-source and free forever.

- **Arnav Sinha** — Founder
- **Yashwin Kandra** — Co-Founder / Student Developer

---

> **AP® and Advanced Placement® are trademarks registered by the College Board, which is not affiliated with, and does not endorse, this site.**
>
> **Five & A+ is an independent educational resource and is not affiliated with, endorsed by, or sponsored by the College Board.**

*Free forever · No ads · Built by Arnav Sinha & Yashwin Kandra*
