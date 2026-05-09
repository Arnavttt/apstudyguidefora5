# Flutter Migration Plan — Five & A+

This document describes the migration of the **Five & A+** static HTML/CSS/JS website into a Dart/Flutter application across **5 stages of equal workload**. Each stage is designed to fit comfortably within a single AI-assisted coding session without overloading context windows.

---

## Project Overview

**Source:** 18 self-contained HTML files (~5,583 lines total), no external dependencies except Google Fonts and a single Formspree endpoint.

**Target:** A Flutter app (targeting mobile + web) with a shared widget library, dark theme, per-subject accent colors, and interactive quiz functionality.

**Guiding principle:** The migrated Dart code must be idiomatic, efficient, and maintainable — even if the migration process itself takes multiple staged sessions.

---

## Flutter Architecture

Before beginning, establish this project structure:

```
lib/
├── main.dart                   # App entry point, MaterialApp, router
├── theme/
│   └── app_theme.dart          # ThemeData, color tokens, text styles
├── models/
│   ├── subject.dart            # Subject metadata (id, title, accentColor, ...)
│   ├── unit.dart               # Unit (section within a subject page)
│   ├── quiz_question.dart      # QuizQuestion, QuizChoice, QuizState
│   └── content_block.dart      # Sealed union for all content block types
├── data/
│   ├── subjects_registry.dart  # Master list of all Subject instances
│   └── content/
│       ├── index_content.dart
│       ├── apush_content.dart
│       ├── ... (one file per subject)
├── widgets/
│   ├── layout/
│   │   ├── top_nav.dart
│   │   ├── masthead.dart
│   │   └── page_footer.dart
│   ├── content/
│   │   ├── card_row.dart
│   │   ├── content_card.dart
│   │   ├── callout_box.dart
│   │   ├── warn_box.dart
│   │   ├── code_block.dart
│   │   ├── data_table_widget.dart
│   │   ├── step_box.dart
│   │   ├── rubric_box.dart
│   │   └── must_know_checklist.dart
│   └── quiz/
│       ├── quiz_section.dart
│       ├── quiz_question_widget.dart
│       └── quiz_controller.dart  # ChangeNotifier, one per quiz section
├── screens/
│   ├── home_screen.dart
│   └── subject_screen.dart
└── router.dart                 # go_router route definitions
```

**Key dependencies** (`pubspec.yaml`):
```yaml
dependencies:
  flutter:
    sdk: flutter
  go_router: ^14.0.0          # Declarative routing with deep links
  provider: ^6.1.0            # Lightweight state for quiz controllers
  google_fonts: ^6.2.0        # Outfit, Fira Code, Syne — matches original
  flutter_math_fork: ^0.7.2   # LaTeX rendering for math-heavy subjects
  url_launcher: ^6.3.0        # External links (GitHub, Formspree, etc.)
```

### Core Data Model

All page content is expressed as typed data — never as raw strings of HTML. This makes the code efficient to render and trivially extensible.

```dart
// lib/models/content_block.dart
sealed class ContentBlock {
  const ContentBlock();
}

final class CardRowBlock extends ContentBlock {
  final List<ContentCardData> cards;
  const CardRowBlock(this.cards);
}

final class CalloutBlock extends ContentBlock {
  final String title;
  final List<String> items; // bullet points or paragraphs
  const CalloutBlock({required this.title, required this.items});
}

final class WarnBlock extends ContentBlock {
  final String title;
  final List<String> items;
  const WarnBlock({required this.title, required this.items});
}

final class CodeBlock extends ContentBlock {
  final List<CodeSpan> spans; // typed spans: keyword, string, num, comment, highlight
  const CodeBlock(this.spans);
}

final class DataTableBlock extends ContentBlock {
  final List<String> headers;
  final List<List<String>> rows;
  const DataTableBlock({required this.headers, required this.rows});
}

final class StepBoxBlock extends ContentBlock {
  final String title;
  final List<String> steps;
  const StepBoxBlock({required this.title, required this.steps});
}

final class RubricBoxBlock extends ContentBlock {
  final List<RubricRow> rows; // { label, points, description }
  const RubricBoxBlock(this.rows);
}

final class QuizBlock extends ContentBlock {
  final List<QuizQuestion> questions;
  const QuizBlock(this.questions);
}

final class MustKnowBlock extends ContentBlock {
  final List<String> items;
  const MustKnowBlock(this.items);
}
```

The `SubjectScreen` renders a `List<Unit>`, each containing a `List<ContentBlock>`, by switching over the sealed type — one `Widget` per block type, zero `if`/`else` chains, zero dynamic dispatch overhead.

---

## Stage 1 — Foundation, Design System & Home Screen

**Files:** `index.html` + the shared CSS design system extracted from all subject pages  
**Lines equivalent:** ~357 HTML + design system extraction (~400 lines of Dart)  
**Goal:** A fully functional app shell that any subsequent stage can slot content into.

### Tasks

1. **Initialize the Flutter project**
   - `flutter create five_and_a_plus --org com.arnavsinha`
   - Add dependencies listed above to `pubspec.yaml`
   - Configure `google_fonts` to use Outfit (body), Fira Code (mono), Syne (display)

2. **`lib/theme/app_theme.dart` — Dark theme & color tokens**
   - `ColorScheme.dark()` base, background `#0f172a` (--bg), surface `#1e293b` (--bg2), surfaceVariant `#334155` (--bg3)
   - Border colors: `#334155` (--border), `#475569` (--border2)
   - Text hierarchy: `#f1f5f9` (--text), `#94a3b8` (--text2), `#64748b` (--text3)
   - `ThemeExtension<AccentTheme>` carrying `accentColor` and `accentFaint` so any widget can resolve the current subject's color via `Theme.of(context).extension<AccentTheme>()`
   - All `TextStyle`s defined once in theme; never hard-coded in widgets

3. **`lib/models/` — Data models**
   - Implement `ContentBlock` sealed class (full hierarchy as shown above)
   - Implement `Subject`, `Unit`, `QuizQuestion`, `QuizChoice`

4. **`lib/widgets/layout/` — Shell widgets**
   - `TopNav`: `SliverPersistentHeader` (pinned), brand link on left, horizontal unit jump links that `Scrollable.ensureVisible` to the target section
   - `Masthead`: full-bleed hero with tag chip, title (Syne font), subtitle, pill row of unit links — mirrors `.masthead` / `.mh-inner` exactly
   - `PageFooter`: back-to-home link + "Built by Arnav Sinha" attribution

5. **`lib/screens/home_screen.dart` — Home / Catalog**
   - Stats row (15 AP guides · 2 college · 2025 · 100% free) as a `Row` of `_StatChip` widgets
   - Subject catalog in four category groups (History & Social Science, English, STEM, Arts), each a `Wrap` of `SubjectCard` widgets with the subject's accent color on top border
   - "Methods" section: 6 approach cards (Heimler, OCT, Tom Richey, Marco Learning, quizzes, checklists)
   - "How to Use" section: 4-step row
   - Developer bio section
   - Review form widget: name, course, star rating, outcome, review textarea — posts to Formspree via `http` package; no Formspree SDK needed, raw POST is sufficient
   - `SubjectCard` navigates via `context.push('/subject/${subject.id}')` using go_router

6. **`lib/router.dart`**
   - `/` → `HomeScreen`
   - `/subject/:id` → `SubjectScreen(subject: subjectsRegistry[id])`

7. **`lib/screens/subject_screen.dart` — Generic subject shell**
   - `CustomScrollView` with `SliverList` of `Unit` section widgets
   - Each unit has a `GlobalKey` so `TopNav` can jump to it
   - Renders `ContentBlock` list via `_buildBlock(ContentBlock block)` switch expression
   - Provide `AccentTheme` override at the top of this screen so all child widgets automatically use the subject's accent color

8. **`lib/data/subjects_registry.dart`**
   - Stub registry with all 17 subjects (id, title, subtitle, accentColor, accentFaint, route) but `units: []` — content is populated in subsequent stages

**Deliverable:** Running app with home screen, subject routing, empty subject pages with correct theme/accent color, and all widget stubs compiling.

---

## Stage 2 — History Subjects

**Files:** `apush.html` (480 lines), `apworld.html` (259 lines)  
**Lines equivalent:** 739 HTML → ~600 lines of Dart content data  
**Goal:** Complete, interactive content for the two history subjects.

### Tasks

1. **`lib/widgets/content/rubric_box.dart`**
   - `RubricBox` widget: card with title bar, then `Table` widget for rows, accent-colored header row, alternating row backgrounds using `--bg2`/`--bg3` tokens
   - Accepts `RubricBoxBlock`; all sizing via `Theme` text styles, no hard-coded values

2. **`lib/widgets/content/step_box.dart`**
   - `StepBox` widget: numbered vertical list, accent-colored circle number badges, title at top
   - Used for Heimler's 7-step process, essay structures, worked examples

3. **`lib/widgets/content/card_row.dart` + `content_card.dart`**
   - `CardRow`: horizontal `SingleChildScrollView` wrapping a `Row` of `ContentCard`s on mobile; `Wrap` on wider screens using `LayoutBuilder`
   - `ContentCard`: rounded rectangle, 3px accent-color top border, title + body text; uses `Theme.of(context).extension<AccentTheme>()` for the top border color — no color parameter needed

4. **`lib/data/content/apush_content.dart`**
   - Full content tree: 10+ `Unit` objects (Exam, Writing, P1–P9), each with their `ContentBlock` list
   - All rubric boxes (7-pt DBQ, 6-pt LEQ, SAQ callout), step boxes (Heimler 7-step), card rows, callout boxes, warn boxes, data tables, and quiz blocks transcribed from the HTML

5. **`lib/data/content/apworld_content.dart`**
   - 5 `Unit` objects (P1–P4, SPICE-T themes), card rows, data tables (gunpowder empires, Age of Revolutions), SPICE-T 6-card row, DBQ/LEQ essay callout

6. **Wire up quiz widgets (shared, used in all subsequent stages)**
   - `lib/widgets/quiz/quiz_controller.dart`: `ChangeNotifier` holding `Map<int, int?> selectedAnswers`, `Set<int> answered`; exposes `select(questionIndex, choiceIndex)`, `reset()`, `score` getter
   - `lib/widgets/quiz/quiz_section.dart`: `ChangeNotifierProvider` wrapping the question list + score counter + reset button; listens to `QuizController`
   - `lib/widgets/quiz/quiz_question_widget.dart`: renders a single question with choices as `InkWell`-wrapped tiles; on selection, animates to correct (green) / wrong (red) state and reveals explanation; uses `AnimatedContainer` for smooth reveal

**Deliverable:** AP U.S. History and AP World History pages fully functional with all content, rubric boxes, step boxes, and interactive quizzes.

---

## Stage 3 — Math Subjects

**Files:** `collegetrig.html` (458 lines), `calcbc.html` (238 lines), `collegealgebra.html` (365 lines)  
**Lines equivalent:** 1,061 HTML → ~700 lines of Dart content data  
**Goal:** Complete math subject pages, including formula rendering.

### Tasks

1. **`lib/widgets/content/code_block.dart`**
   - Renders a `List<CodeSpan>` (typed: keyword, string, number, comment, highlight, plain) using a `RichText` widget with `Fira Code` font
   - Background `--bg3`, rounded corners, horizontal scroll via `SingleChildScrollView` for long lines
   - Color map: keywords → `#93c5fd`, strings → `#86efac`, numbers → `#fca5a5`, comments → `#64748b`, highlights → `#fde047`, plain → `--text`
   - No string parsing at runtime — spans are pre-typed at data-definition time

2. **Math rendering decision**
   - Use `flutter_math_fork` for inline LaTeX in `CalloutBlock` and `DataTableBlock` items that contain formulas (e.g., `θ`, `sin²x + cos²x = 1`, `∫`)
   - Add a `MathSpan` variant to the `CodeSpan` sealed type for code blocks that contain math notation
   - For simple formulas expressible in plain Unicode (most of calcbc.html and collegealgebra.html), prefer Unicode directly in strings — it renders instantly with zero widget overhead

3. **`lib/data/content/collegetrig_content.dart`**
   - 11 `Unit` objects (U1–U11): unit circle identities, right triangle trig, reference angles, sin/cos graphs, tan/sec/csc graphs, inverse trig, identity verification, sum/difference, double/half angle, trig equations, Law of Sines/Cosines
   - All identity tables as `DataTableBlock`, worked examples as `StepBoxBlock`, graph parameter explanations as `CalloutBlock`

4. **`lib/data/content/calcbc_content.dart`**
   - 4 `Unit` objects: Limits, Derivatives, Integration, Series
   - Derivative rules as `DataTableBlock` (12 rules), convergence tests as `DataTableBlock` (7 tests), Taylor series must-know as `CalloutBlock`, integration techniques as `DataTableBlock`

5. **`lib/data/content/collegealgebra_content.dart`**
   - 7 `Unit` objects: Functions & Domain, Operations & Difference Quotient, Transformations & Inverses, Polynomials, Rational Functions, Exp & Log, Conics
   - Transformations table (8 rows), synthetic division step-box, compound interest formulas, completing-the-square step-box

6. **`lib/widgets/content/data_table_widget.dart`**
   - `DataTableWidget`: wraps Flutter's `Table` widget with `--bg2` background, `--AC` header row, `--border` dividers, alternating row shading
   - Horizontal scroll wrapper for wide tables
   - Accepts `DataTableBlock`; uses `Theme` for all colors

**Deliverable:** College Trigonometry, AP Calculus BC, and College Algebra pages fully functional with formula rendering, syntax-highlighted code blocks, and all data tables.

---

## Stage 4 — English, Computer Science & Government

**Files:** `aplang.html` (401 lines), `apcsa.html` (376 lines), `apgov.html` (225 lines), `aplit.html` (225 lines)  
**Lines equivalent:** 1,227 HTML → ~800 lines of Dart content data  
**Goal:** Complete pages for the two AP English subjects, AP Computer Science A, and AP Government.

### Tasks

1. **Syntax highlighting for Java (`apcsa.html`)**
   - Extend `CodeSpan` sealed type (or reuse existing variants) to cover Java keywords accurately
   - The HTML uses `.kw`, `.str`, `.num`, `.cmt`, `.hl` span classes — these map exactly to the existing `CodeSpan` variants; no new infrastructure needed
   - Pre-type all Java code examples in `apcsa_content.dart` using `CodeSpan` lists

2. **`lib/data/content/aplang_content.dart`**
   - 5 `Unit` objects: Rubric, SPACE-CAT, Synthesis FRQ, Rhetorical Analysis FRQ, Argument FRQ
   - Full 6-pt analytic rubric as `RubricBoxBlock` (Row A/B/C with point ranges and descriptors)
   - SPACE-CAT 7-element table as `DataTableBlock`, 30+ rhetorical devices table as `DataTableBlock`
   - Each FRQ's 5-step essay structure as `StepBoxBlock`, common mistakes as `WarnBlock`

3. **`lib/data/content/apcsa_content.dart`**
   - 5 `Unit` objects: Exam overview, U1–U4 (Primitives & Objects), U5–U6 (Classes & Inheritance), U7–U8 (Arrays & ArrayLists), U9–U10 (2D Arrays & Algorithms)
   - Java Quick Reference as `DataTableBlock`, String methods table, BankAccount example as `CodeBlock` with full span typing, array/ArrayList code blocks, searching/sorting algorithms comparison table

4. **`lib/data/content/apgov_content.dart`**
   - 3 `Unit` objects: Exam, SCOTUS Cases, Foundational Documents
   - 15 required SCOTUS cases as `DataTableBlock` (case name, year, significance)
   - 9 required foundational documents as `DataTableBlock`

5. **`lib/data/content/aplit_content.dart`**
   - 3 `Unit` objects: Poetry Analysis, Prose Fiction, FRQ Types
   - TPCASTT as `CalloutBlock`, literary devices as `DataTableBlock` (12+ devices), prose elements card row, Poetry/Prose/Literary Argument FRQ step-boxes

6. **`lib/widgets/content/must_know_checklist.dart`**
   - Stateful widget; each item is a `CheckboxListTile` backed by local `List<bool>` state
   - State is ephemeral (session-only) — no persistence needed; `initState` initializes all `false`
   - Accent-colored checkboxes, strikethrough `TextStyle` on checked items

**Deliverable:** AP Language, AP Computer Science A, AP Government, and AP Literature pages fully functional with syntax-highlighted code blocks, full essay frameworks, all SCOTUS/document tables, and interactive checklists.

---

## Stage 5 — Remaining Sciences, Arts & Final Polish

**Files:** `apbio.html` (315), `appsych.html` (291), `apes.html` (274), `musictheory.html` (270), `apchem.html` (251), `arthistory.html` (246), `apcsp.html` (340), `physics.html` (212)  
**Lines equivalent:** 2,199 HTML → ~1,100 lines of Dart content data (fast to write since all widgets exist)  
**Goal:** Complete all remaining subject pages and finalize the app for release.

By this stage every widget and pattern has been built. Stage 5 is primarily content transcription and final integration.

### Tasks

1. **`lib/data/content/apbio_content.dart`**
   - 5 `Unit` objects: Cell Structure, Cell Division, Energetics, Genetics, Evolution & Ecology
   - Cell cycle as `DataTableBlock` (8 phases), mitosis vs meiosis comparison table, ATP yield table (all 4 stages), Hardy-Weinberg equations as `CodeBlock`, logistic growth equations as `CodeBlock`

2. **`lib/data/content/appsych_content.dart`**
   - 5 `Unit` objects: History & Perspectives, Biological Bases, Learning, Social Psychology, Disorders & Treatment
   - Psychological perspectives table, neurotransmitters table, classic studies table (Milgram, Zimbardo, Asch, Darley/Latané, Bandura), operant conditioning table, major disorders table

3. **`lib/data/content/apes_content.dart`**
   - 4 `Unit` objects: Ecosystems, Population, Energy & Pollution, Global Change
   - Energy sources comparison table (7 sources), DTM table (5 stages), Rule of 70 / energy flow FRQ step-boxes as `StepBoxBlock`, biogeochemical cycles card row

4. **`lib/data/content/musictheory_content.dart`**
   - 4 `Unit` objects: Pitch & Rhythm, Intervals & Chords, SATB Voice Leading, Form & Aural Skills
   - Interval identification table (13 rows), diatonic chords table, cadence types table, musical forms table, SATB absolute rules as `WarnBlock`, aural skills mnemonics as `CalloutBlock`

5. **`lib/data/content/apchem_content.dart`**
   - 3 `Unit` objects: Atomic & Bonding, Kinetics & Equilibrium, Acids & Bases
   - Periodic trends table, VSEPR geometry table (8 shapes), integrated rate laws + Arrhenius equation as `CodeBlock`, ICE table walkthrough as `StepBoxBlock`, Henderson-Hasselbalch as `CodeBlock`

6. **`lib/data/content/arthistory_content.dart`**
   - 4 `Unit` objects: Method (OPTIC/Lenses), Prehistoric–Renaissance, Baroque–Contemporary, Essay Types
   - Contextual lenses table (5 lenses), key works tables (8 works each), FRQ types table, Long Essay strategy step-box

7. **`lib/data/content/apcsp_content.dart`**
   - 5 `Unit` objects: Big Ideas, Data, AP Pseudocode, Networks, Create PT
   - AP Pseudocode reference as `CodeBlock` (typed spans), binary/hex conversions as `CodeBlock`, Create PT rubric as `RubricBoxBlock`, internet concepts table, algorithms card row

8. **`lib/data/content/physics_content.dart`**
   - 2 `Unit` objects: Mechanics, E&M & Waves
   - Big 4 kinematics table, energy/work formulas table (6 formulas), electric circuits table (7 formulas), Newton's Laws card row, waves/Doppler callout

9. **Final polish & release tasks**
   - Verify `subjects_registry.dart` has all 17 subjects wired to their content files
   - Add `flutter_launcher_icons` and app icon (Five & A+ branding)
   - Verify deep-link routes work (`/subject/apush`, `/subject/calcbc`, etc.)
   - Run `flutter analyze` and resolve all warnings
   - Run `flutter test` on quiz controller logic (unit tests for `select`, `reset`, `score`)
   - `flutter build web` for GitHub Pages deployment; configure `--base-href` to match repo path
   - `flutter build apk` / `flutter build ipa` for mobile distribution if desired

**Deliverable:** Complete, polished Flutter app with all 17 subject pages, all widget types implemented, dark theme, per-subject accent colors, interactive quizzes, and must-know checklists — ready for web and mobile deployment.

---

## Widget Efficiency Notes

These principles apply to all stages and must not be compromised:

- **No `dynamic` content rendering at runtime.** All content is typed Dart data structures defined at compile time. The `SubjectScreen` renders via a `switch` expression over the sealed `ContentBlock` type — the compiler exhaustiveness check guarantees no missed cases.
- **`const` constructors everywhere possible.** All `ContentBlock` subclasses, `Subject`, `Unit`, and `QuizQuestion` use `const` constructors. Data files are collections of `const` values. This means Flutter can skip rebuilding subtrees that haven't changed.
- **Quiz state is isolated.** Each `QuizSection` widget owns a `QuizController` (`ChangeNotifier`) scoped to that section via `ChangeNotifierProvider`. Answering one question rebuilds only that quiz section's subtree — not the entire subject page.
- **`CustomScrollView` + `SliverList`.** Subject pages use a single `CustomScrollView` with `SliverList` so Flutter only builds the widgets currently in or near the viewport.
- **`AccentTheme` via `ThemeExtension`.** Per-subject accent colors are injected once at the `SubjectScreen` level as a `ThemeExtension`. Every widget below reads `Theme.of(context).extension<AccentTheme>()` — no color prop-drilling, no `InheritedWidget` boilerplate, and theme changes propagate automatically.
- **No external state management library for content.** Content data is static; only quiz state and checklist state require reactivity. `ChangeNotifier` + `Provider` is sufficient and has minimal overhead compared to Riverpod or BLoC for this use case.
- **`DataTableWidget` uses Flutter's native `Table` widget**, not a `ListView` of rows — `Table` lays out all columns in a single pass and is the correct primitive for fixed-column tabular data.
- **`google_fonts` caching.** Call `GoogleFonts.config.allowRuntimeFetching = false` and bundle font files in `assets/fonts/` for offline use and instant first-render with no network round-trip.

---

## Accent Color Reference

| Subject | `--AC` | `--ACfaint` |
|---|---|---|
| AP U.S. History | `#c9a96e` | `rgba(201,169,110,0.15)` |
| College Trigonometry | `#818cf8` | `rgba(129,140,248,0.15)` |
| AP Language | `#fb923c` | `rgba(251,146,60,0.15)` |
| AP Computer Science A | `#5b9cf6` | `rgba(91,156,246,0.15)` |
| College Algebra | `#38bdf8` | `rgba(56,189,248,0.15)` |
| AP Computer Science P | `#f97316` | `rgba(249,115,22,0.15)` |
| AP Biology | `#4ade80` | `rgba(74,222,128,0.15)` |
| AP Psychology | `#a855f7` | `rgba(168,85,247,0.15)` |
| AP Environmental Science | `#22c55e` | `rgba(34,197,94,0.15)` |
| AP Music Theory | `#e879f9` | `rgba(232,121,249,0.15)` |
| AP World History | `#f59e0b` | `rgba(245,158,11,0.15)` |
| AP Chemistry | `#2dd4bf` | `rgba(45,212,191,0.15)` |
| AP Art History | `#c9a84c` | `rgba(201,168,76,0.15)` |
| AP Calculus BC | `#a78bfa` | `rgba(167,139,250,0.15)` |
| AP Literature | `#f472b6` | `rgba(244,114,182,0.15)` |
| AP Government | `#60a5fa` | `rgba(96,165,250,0.15)` |
| AP Physics | `#34d399` | `rgba(52,211,153,0.15)` |
