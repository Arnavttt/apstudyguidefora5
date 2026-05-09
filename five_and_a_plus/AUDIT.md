# Five & A+ — Full Codebase Audit

Audited on: 2026-05-08  
Device tested: iPhone (iOS 26.4.2, debug mode)  
Flutter analyze: **0 issues**  
Runtime errors captured: **Yes — multiple crashes on device**

---

## CRITICAL — Runtime Crashes (confirmed on device)

### 1. `borderRadius` on non-uniform `Border` → repeated crash
**Severity:** Critical  
**Files:** `lib/widgets/content/content_card.dart:31`, `lib/widgets/content/code_block.dart:43`  
**Error:**
```
A borderRadius can only be given on borders with uniform colors.
```
`ContentCard` uses a `Border` with four individually-colored sides (top = accent, others = border) but also applies a `BorderRadius`. Flutter's `BoxDecoration` prohibits `borderRadius` when border sides have different colors. This fires for every card on screen — so every subject page that renders a `CardRowBlock` will throw this assertion.

Similarly `CodeBlockWidget` uses a `Border` with a distinct left accent color and different colors on the other three sides, combined with `BorderRadius.horizontal(...)`. Same assertion fires there.

**Also affects:** Any `DataTableWidget` header row uses `BorderRadius.vertical(top: Radius.circular(5))` inside a `Container` that has `border: Border.all(...)` — technically fine because `Border.all` is uniform, but the outer container clips it with `ClipRRect` nested inside, making the rounding moot.

---

### 2. `_SectionHeader` Row overflows on narrow screens
**Severity:** Critical  
**File:** `lib/screens/home_screen.dart:368`  
**Error (device log):**
```
A RenderFlex overflowed by 31 pixels on the right.
A RenderFlex overflowed by 123 pixels on the right.
A RenderFlex overflably by 118 pixels on the right.
A RenderFlex overflowed by 75 pixels on the right.
A RenderFlex overflowed by 4.5 pixels on the right.
```
`_SectionHeader` builds a `Row` with: tag `Text` → gap → title `Text` → gap → `Expanded(Divider)`. The title `Text` has no `Expanded` or `Flexible` wrapping, so long titles (e.g. "AP Exam Review", "College Course Review") overflow the row on the iPhone's width. Every section header on the home screen exhibits this.

---

## HIGH — Logic / Behavioral Bugs

### 3. Home screen nav links do nothing
**Severity:** High  
**File:** `lib/widgets/layout/top_nav.dart:216`  
```dart
onPressed: () {}, // scroll anchors handled by home screen
```
The nav bar links labeled "AP Guides", "College", "Methods", "About", "Reviews" all call an empty closure. There is no scroll anchor logic anywhere in `HomeScreen`. Tapping any nav link does nothing — dead UI.

The mobile nav drawer (`_MobileNavDrawer`) closes the drawer but also performs no scroll. All five entries just pop the drawer with no navigation effect.

---

### 4. Hero CTA button does nothing
**Severity:** High  
**File:** `lib/screens/home_screen.dart:212`  
```dart
_CtaButton(label: '→  Browse All Guides', onTap: () {})
```
The primary call-to-action on the hero section calls an empty lambda. Clicking "Browse All Guides" has zero effect.

---

### 5. Quiz score display logic is wrong
**Severity:** High  
**File:** `lib/widgets/quiz/quiz_section.dart:89-91`  
```dart
answeredCount == 0
    ? '0/0 correct'
    : '$correctCount/$answeredCount correct ($totalCount total)'
```
- When no questions are answered the score shows `0/0 correct` which is meaningless and confusing. It should show something like `0/${totalCount} answered`.
- `correctCount` counts items where `correctness[i]` is true, but `correctness` is built by mapping over all questions, including unanswered ones (which return `false`). So `correctCount` will always count only answers that were both answered AND correct — this part is fine. But `answeredCount` is the size of `controller.answered` (the set), not the length of `correctness`. If the user answers 2 of 5 and gets 1 right, the display reads "1/2 correct (5 total)" — correct, but the label is redundant and confusing.

---

### 6. `MustKnowBlock` is rendered by two separate widgets — one is never used
**Severity:** High (dead code / maintenance risk)  
**Files:** `lib/widgets/content/must_know_checklist.dart`, `lib/screens/subject_screen.dart:177`  
`subject_screen.dart` handles `MustKnowBlock` inline via `_MustKnowWidget`. The standalone file `lib/widgets/content/must_know_checklist.dart` exports `MustKnowChecklist` — a functionally identical widget that is **never imported or used anywhere**. The inline `_MustKnowWidget` and the file-level `MustKnowChecklist` diverge slightly (title row, icon prefix). This is dead code that will cause confusion on future edits.

---

### 7. `splashRadius` deprecated — may cause warnings or future breakage
**Severity:** Medium  
**File:** `lib/widgets/layout/top_nav.dart:178`  
```dart
IconButton(splashRadius: 20, ...)
```
`splashRadius` was deprecated in Flutter 3.x (Material 3). Under M3 this parameter is ignored and generates a deprecation warning at runtime (visible in DevTools). The file uses Material 3 (`useMaterial3: true`).

---

### 8. `withAlpha` used alongside `withValues` — inconsistent API
**Severity:** Low-Medium  
**File:** `lib/widgets/content/data_table_widget.dart:132`  
```dart
AppColors.bg2.withAlpha(30), // slight alternating shade
```
Every other opacity operation in the codebase uses `.withValues(alpha: x)` (the current Flutter API). This single call uses the deprecated `.withAlpha(int)`. The result is also visually broken: `bg2` is `#1e293b` — applying `withAlpha(30)` (≈12% opacity on a solid background color) just makes it nearly transparent over the scaffold background, making odd-indexed rows virtually invisible.

---

## MEDIUM — UI / UX Issues

### 9. Font rendering may fail on iOS (runtime font fetching)
**Severity:** Medium  
**File:** `lib/main.dart:9`  
```dart
GoogleFonts.config.allowRuntimeFetching = true;
```
The comment even says "For production, also add font files to assets/fonts/ and set this to false." Runtime fetching requires network access and will fail silently on devices with no internet or behind restrictive networks, causing fallback system fonts (San Francisco on iOS). Syne, Outfit, and Fira Code all look very different from SF — the carefully designed visual hierarchy collapses. No font assets are bundled in `pubspec.yaml`.

---

### 10. `_SectionHeader` tag and title are on the same visual row with no hierarchy
**Severity:** Medium  
**File:** `lib/screens/home_screen.dart:370-392`  
The tag (e.g., "15 Guides") and the section title ("AP Exam Review") are placed side by side in a `Row` with no visual separator or size contrast beyond color. On small screens this fails entirely (see bug #2). Even on wide screens the tag is tiny (10px Fira Code) directly next to a 22px heading, which is hard to parse.

---

### 11. No error boundary / loading state for `SubjectScreen` with empty units
**Severity:** Medium  
**File:** `lib/screens/subject_screen.dart:94`  
The `_EmptyState` widget message says:
```
"This subject's units will be populated in Stage 2–5 of the migration."
```
This is internal developer language visible to end users. Students will see this when they tap subjects whose content hasn't been completed yet (many subjects in the registry have `units: []` delegated to stub content files). The message should be user-facing ("Coming soon — check back soon!").

---

### 12. `_SubjectGrid` renders last card at wrong width when `subjects.length % columns != 0`
**Severity:** Medium  
**File:** `lib/screens/home_screen.dart:470-473`  
```dart
double _cardWidth(double availableWidth, int columns) {
  return (availableWidth - (columns - 1)) / columns;
}
```
The card width is calculated for a full row. `Wrap` places remaining cards at the same width, so a grid of e.g. 5 cards in a 3-column layout leaves the last row with 2 cards, each taking 1/3 of the available width — leaving a gap on the right. This looks unbalanced, especially for the Arts category (2 subjects) in a 3-column layout.

---

### 13. Hover state in `_CtaButton` / `_SubmitButton` on mobile is meaningless
**Severity:** Low-Medium  
**Files:** `lib/screens/home_screen.dart:270-307`, `lib/screens/home_screen.dart:1365-1391`  
`MouseRegion` hover effects are meaningful on desktop/web but do nothing on mobile (touch). These buttons are `StatefulWidget` purely for the hover state, adding unnecessary rebuild overhead on iOS where hover never fires. On mobile these should be `GestureDetector` with `InkWell` for tactile feedback instead.

---

### 14. No `Ink` / `InkWell` ripple feedback on subject cards on mobile
**Severity:** Medium  
**File:** `lib/screens/home_screen.dart:493`  
`SubjectCard` uses `GestureDetector` wrapping `AnimatedContainer` — no ink ripple on tap. On iOS there is zero visual tap feedback (no ripple, no color flash at tap time). Users have no confirmation their tap registered. `InkWell` should be used inside the `AnimatedContainer` or an `Ink` wrapper should be used.

---

### 15. Footer nav links use `context.push` for subjects, but "AP Guides", "College", "About" use `context.go('/')` without scrolling to the right section
**Severity:** Medium  
**File:** `lib/widgets/layout/page_footer.dart:69-71`  
```dart
_FooterLink(label: 'AP Guides', onTap: () => context.go('/')),
_FooterLink(label: 'College', onTap: () => context.go('/')),
_FooterLink(label: 'About', onTap: () => context.go('/')),
```
All three land on the home page root with no scroll-to-section — same broken anchor problem as the top nav. A user on a subject page tapping "About" in the footer gets sent to the top of the home screen.

---

### 16. `_ReviewForm` has unbalanced right-padding in field rows
**Severity:** Low  
**File:** `lib/screens/home_screen.dart:1239-1241`  
```dart
fields.map((f) => Expanded(child: Padding(padding: const EdgeInsets.only(right: 12), child: f))).toList()
```
Both fields in the two-column layout get `right: 12` padding, including the rightmost field. This adds 12px of unnecessary padding to the right edge of the second field, causing the form to be narrower than the surrounding container by 12px asymmetrically.

---

### 17. `_HowToUseSection` step 04 references "GitHub Pages" — irrelevant in a mobile app
**Severity:** Low  
**File:** `lib/screens/home_screen.dart:741`  
```
('04 / DEPLOY', 'GitHub Pages compatible', 'All HTML files in one repo root. Enable GitHub Pages on main branch…')
```
This text was copied verbatim from the web HTML source and describes deploying a static HTML site — not applicable to the Flutter mobile app context. Users reading this on their phone will be confused.

---

### 18. `_StatChip` year shows "2025" — outdated
**Severity:** Low  
**File:** `lib/screens/home_screen.dart:206`  
```dart
_StatChip(number: '2025', label: 'Updated'),
```
It is now 2026. If the app is being updated, this chip should reflect the current year.

---

### 19. `SubjectScreen` `TopNav` has no back button / visible home affordance on mobile
**Severity:** Medium  
**File:** `lib/widgets/layout/top_nav.dart:54-67`  
The brand "Five & A+" in the top nav is tappable and navigates home — but there's no visual cue that it's tappable (no underline, no chevron, no "← Home" label). On mobile, users have no obvious way to go back besides the iOS swipe gesture. A dedicated "←" or back button would be more discoverable.

---

### 20. `_DevAvatar` is not `const`
**Severity:** Low  
**File:** `lib/screens/home_screen.dart:872`  
`_DevAvatar` has no constructor parameters and is always the same widget, but it lacks a `const` constructor. It rebuilds unnecessarily on every `_DeveloperSection` build.

---

### 21. Formspree endpoint is hardcoded in source
**Severity:** Medium (security / operational)  
**File:** `lib/screens/home_screen.dart:1046`  
```dart
Uri.parse('https://formspree.io/f/xeenrzpd'),
```
The Formspree form ID is hardcoded in source. Anyone who decompiles or reads the repo can spam the form endpoint. Consider moving it to a remote config or at minimum obfuscating. Also there is no rate-limiting or honeypot field in the form.

---

### 22. `QuizQuestionWidget` explanation shows for wrong-answer selection only if `explanation` is non-empty — no fallback message
**Severity:** Low  
**File:** `lib/widgets/quiz/quiz_question_widget.dart:143`  
If `QuizChoice.explanation` is an empty string (the default), no explanation appears at all after answering — even if the user got the answer wrong. There's no "No explanation provided" fallback, leaving the user with just a red highlight and no learning reinforcement.

---

### 23. `DataTableWidget` alternating row color is nearly invisible
**Severity:** Low  
**File:** `lib/widgets/content/data_table_widget.dart:132`  
```dart
AppColors.bg2.withAlpha(30)
```
As noted in bug #8, `bg2` with alpha 30/255 ≈ 12% is essentially transparent. Odd-index rows will look identical to even-index rows (`bg2` on a `bg` scaffold). The alternating striping serves no purpose.

---

### 24. `_SubjectCatalog` hardcodes the category order and guide counts
**Severity:** Low  
**File:** `lib/screens/home_screen.dart:332-349`  
```dart
_SectionHeader(tag: '15 Guides', title: 'AP Exam Review'),
// ...
_SectionHeader(tag: '2 Guides', title: 'College Course Review'),
```
These counts are hardcoded strings. If subjects are added or removed from `subjectsRegistry`, the header counts will be stale. They should be computed dynamically from `subjectsRegistry.length` filtered by category.

---

### 25. `router.dart` `_NotFoundScreen` uses hardcoded color instead of theme
**Severity:** Low  
**File:** `lib/router.dart:43`  
```dart
backgroundColor: const Color(0xFF0f172a),
```
This is `AppColors.bg` duplicated as a raw hex constant instead of referencing the token. If the theme color changes, this screen won't update.

---

## SUMMARY TABLE

| # | File | Severity | Category |
|---|------|----------|----------|
| 1 | `content_card.dart`, `code_block.dart` | **Critical** | Runtime crash |
| 2 | `home_screen.dart:368` | **Critical** | Runtime overflow |
| 3 | `top_nav.dart:216` | **High** | Dead UI |
| 4 | `home_screen.dart:212` | **High** | Dead UI |
| 5 | `quiz_section.dart:89` | **High** | Logic bug |
| 6 | `must_know_checklist.dart` | **High** | Dead code |
| 7 | `top_nav.dart:178` | Medium | Deprecation |
| 8 | `data_table_widget.dart:132` | Medium | API + visual |
| 9 | `main.dart:9` | Medium | Font reliability |
| 10 | `home_screen.dart:370` | Medium | UX hierarchy |
| 11 | `subject_screen.dart:94` | Medium | UX copy |
| 12 | `home_screen.dart:470` | Medium | Layout |
| 13 | `home_screen.dart:270` | Low-Med | Wasted state |
| 14 | `home_screen.dart:493` | Medium | Tap feedback |
| 15 | `page_footer.dart:69` | Medium | Dead nav |
| 16 | `home_screen.dart:1239` | Low | Padding |
| 17 | `home_screen.dart:741` | Low | Stale copy |
| 18 | `home_screen.dart:206` | Low | Stale copy |
| 19 | `top_nav.dart:54` | Medium | Discoverability |
| 20 | `home_screen.dart:872` | Low | Performance |
| 21 | `home_screen.dart:1046` | Medium | Security |
| 22 | `quiz_question_widget.dart:143` | Low | UX |
| 23 | `data_table_widget.dart:132` | Low | Visual |
| 24 | `home_screen.dart:332` | Low | Stale data |
| 25 | `router.dart:43` | Low | Maintainability |
