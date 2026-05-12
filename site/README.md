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

Content is generated from Python modules in `ap_content/`. To regenerate:

```bash
python generate_ap_content.py [slug1 slug2 ...]
```

Omit arguments to regenerate all courses.

## About the Creators

Five & A+ was founded by Arnav Sinha and co-founded by Yashwin Kandra, a Don Bosco Prep student from New York in the Class of 2027 who took on 11 AP® courses and wanted a free, organized study system that actually works. The site is open-source and free forever.

- **Arnav Sinha** — Founder
- **Yashwin Kandra** — Co-Founder / Student Developer

---

> **AP® and Advanced Placement® are trademarks registered by the College Board, which is not affiliated with, and does not endorse, this site.**
>
> **Five & A+ is an independent educational resource and is not affiliated with, endorsed by, or sponsored by the College Board.**

*Free forever · No ads · Built by Arnav Sinha & Yashwin Kandra*
