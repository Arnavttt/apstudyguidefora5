# Five & A+ — TODO Before Launch

**Last updated:** 2026-06-01  
Items requiring human review or action before the site goes live.

---

## 🔴 High Priority

### 1. Verify replacement video embeddability
**Why:** 190 video IDs were replaced with curated alternatives during the audit. YouTube oEmbed titles could not be fetched (network restriction). Spot-check ~20 replacement IDs to confirm they are:
- Still available (not deleted)
- Embeddable (not restricted to YouTube.com only)
- Relevant to the correct AP topic

**Key IDs to spot-check:**
```
kKKM8Y-u7ds  (Physics 1 Kinematics)
KOHKNfBj-r0  (Physics 1 Dynamics)
ljkGWTFjTH4  (Art History Unit 1)
Mj_mXiTfDIs  (Art History Unit 2)
rAof9Ld5sOg  (Calc BC Unit 2 Differentiation)
JFO-HLGQP-E  (AP Chem Unit 1 Atomic Structure)
wzpGST5jmNY  (APES Unit 1 Ecosystems)
Aed3RQGCM9M  (AP Lit Short Fiction)
```
Open: `https://www.youtube.com/watch?v=VIDEO_ID` for each.

---

### 2. Handle orphaned page: `units/light-waves-personal-study-guide.html`
**Why:** This page exists but is not linked from any course or unit page.
**Options:**
- Link it from the AP Physics 1&2 Unit on Waves (if content is relevant)
- Delete it if it was a personal note and not part of the site
- Create a dedicated "Extra Resources" section and link it there

---

### 3. Test quiz in Safari private browsing
**Why:** The `localStorage` polyfill was added to prevent crashes, but should be tested on an actual device.
**How:** Open any unit page in Safari → File → New Private Window → complete a quiz question → check that the answer persists and the score updates correctly.

---

### 4. Test on iPhone SE (320px width)
**Why:** The mobile CSS targets 480px and 768px. Very narrow devices (320px) were not tested.
**How:** Open Chrome DevTools → iPhone SE preset → navigate to a unit page → check:
- No horizontal scroll on the lesson grid
- Video iframe is visible
- Quiz choices are readable
- Navigation pills scroll properly

---

## 🟡 Medium Priority

### 5. Expand College Algebra & Trigonometry quizzes
**Current state:** 5 questions per unit (vs. 30 for AP courses)
**Recommendation:** Expand to 10–15 questions per unit to make these useful for students who need pre-AP math practice.
**Files to update:** `units/college-algebra-*.html`, `units/college-trigonometry-*.html`

---

### 6. Add worked-example sections to STEM units
**Why:** The audit found 0% of unit pages have a formal `✏️ Worked Example` section in lesson content (the label exists for videos, but not for written step-by-step examples).
**Recommendation:** For these high-calculation AP courses, add 1 written worked example per lesson:
- AP Calculus BC (all units)
- AP Physics C Mechanics (all units)
- AP Physics C E&M (all units)
- AP Chemistry (units 5–9)

---

### 7. Sync Flutter app content with HTML content changes
**Why:** The static HTML site and Flutter app have separate content sources. Video replacements, duplicate question removals, and label additions made during this audit were NOT applied to the Flutter app's Dart content files.
**Recommendation:** Either:
- Run a content sync script to update Dart content files from HTML
- Document that the Flutter app is a separate content track
- Consider making both pull from a shared JSON/API source

---

### 8. Add `<meta description>` to unit pages
**Why:** Unit pages are missing SEO meta descriptions. A student searching "AP Calculus BC limits study guide" may not find these pages in Google.
**Format:** `<meta name="description" content="AP Calculus BC Unit 1 — Limits and Continuity. Study limits, continuity, and L'Hôpital's Rule with practice questions and video explanations.">`

---

## 🟢 Low Priority (Nice to Have)

### 9. Add "last updated" timestamps to unit pages
Shows students the content is current and maintained.

### 10. Add aria-labels to all icon buttons
The sidebar toggle `☰` button and star rating buttons lack descriptive `aria-label` attributes for screen readers.

### 11. Consider a sitemap.xml
Would help search engines index all 185+ unit pages.

### 12. Add print stylesheet
Students may want to print formula sheets / cheat sheets. Currently `@media print` only sets `topnav { position: static }`.

### 13. College Algebra & Trigonometry: Add "how to use this" note
Since these courses have no AP exam, the pages are missing exam strategy. Add a brief note:  
_"This course doesn't have an AP exam, but the material here is essential preparation for AP Calculus BC and AP Physics."_

---

## ✅ Already Fixed (Audit Changes)

| Issue | Status |
|-------|--------|
| 13 broken Physics 1&2 back-links | ✅ Fixed |
| 15 duplicate quiz questions | ✅ Fixed |
| 190 repeated video IDs | ✅ Replaced |
| 889 video labels missing | ✅ Added |
| Math in quiz questions not rendering | ✅ Fixed (44 expressions) |
| Mobile CSS insufficient | ✅ Added 480px + 768px breakpoints |
| localStorage crash in private browsing | ✅ Fixed with polyfill |

