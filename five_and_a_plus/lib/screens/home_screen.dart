import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:http/http.dart' as http;

import '../theme/app_theme.dart';
import '../models/subject.dart';
import '../data/subjects_registry.dart';
import '../widgets/layout/top_nav.dart';
import '../widgets/layout/page_footer.dart';

// ---------------------------------------------------------------------------
// HomeScreen
// ---------------------------------------------------------------------------

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final _scrollController = ScrollController();

  // Section keys used for scroll-to-section navigation.
  final _catalogKey = GlobalKey();
  final _methodsKey = GlobalKey();
  final _devKey = GlobalKey();
  final _reviewKey = GlobalKey();

  void _scrollTo(GlobalKey key) {
    final ctx = key.currentContext;
    if (ctx == null) return;
    Scrollable.ensureVisible(
      ctx,
      duration: const Duration(milliseconds: 500),
      curve: Curves.easeInOut,
      alignment: 0.0,
    );
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.bg,
      endDrawer: _MobileNavDrawer(onScrollTo: _scrollTo, catalogKey: _catalogKey, methodsKey: _methodsKey, devKey: _devKey, reviewKey: _reviewKey),
      body: Builder(
        builder: (context) => Column(
          children: [
            HomeTopNav(
              onMenuTap: () => Scaffold.of(context).openEndDrawer(),
              onScrollTo: _scrollTo,
              catalogKey: _catalogKey,
              methodsKey: _methodsKey,
              devKey: _devKey,
              reviewKey: _reviewKey,
            ),
            Expanded(
              child: SingleChildScrollView(
                controller: _scrollController,
                child: Column(
                  children: [
                    _HeroSection(onBrowse: () => _scrollTo(_catalogKey)),
                    _SubjectCatalog(key: _catalogKey),
                    _MethodsSection(key: _methodsKey),
                    const _HowToUseSection(),
                    _DeveloperSection(key: _devKey),
                    _ReviewSection(key: _reviewKey),
                    const PageFooter(),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Mobile nav drawer
// ---------------------------------------------------------------------------

class _MobileNavDrawer extends StatelessWidget {
  const _MobileNavDrawer({
    required this.onScrollTo,
    required this.catalogKey,
    required this.methodsKey,
    required this.devKey,
    required this.reviewKey,
  });

  final void Function(GlobalKey) onScrollTo;
  final GlobalKey catalogKey;
  final GlobalKey methodsKey;
  final GlobalKey devKey;
  final GlobalKey reviewKey;

  @override
  Widget build(BuildContext context) {
    final links = [
      ('AP Guides', catalogKey),
      ('College', catalogKey),
      ('Methods', methodsKey),
      ('About', devKey),
      ('Reviews', reviewKey),
    ];

    return Drawer(
      backgroundColor: AppColors.bg2,
      child: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Header
            Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 20),
              decoration: const BoxDecoration(
                border: Border(bottom: BorderSide(color: AppColors.border)),
              ),
              child: Text(
                'Five & A+',
                style: GoogleFonts.syne(
                  fontSize: 18,
                  fontWeight: FontWeight.w800,
                  foreground: Paint()
                    ..shader = const LinearGradient(
                      colors: [AppColors.gold, AppColors.accent],
                    ).createShader(const Rect.fromLTWH(0, 0, 120, 24)),
                ),
              ),
            ),
            // Nav links
            for (final link in links)
              InkWell(
                onTap: () {
                  Navigator.of(context).pop();
                  // Small delay so the drawer closes before scrolling
                  Future.delayed(const Duration(milliseconds: 200), () => onScrollTo(link.$2));
                },
                child: Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
                  decoration: const BoxDecoration(
                    border: Border(bottom: BorderSide(color: AppColors.border)),
                  ),
                  child: Text(
                    link.$1,
                    style: GoogleFonts.firaCode(
                      fontSize: 13,
                      color: AppColors.text2,
                      letterSpacing: 0.06,
                    ),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------

class _HeroSection extends StatelessWidget {
  const _HeroSection({required this.onBrowse});
  final VoidCallback onBrowse;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 1100),
        child: Padding(
          padding: const EdgeInsets.fromLTRB(24, 64, 24, 40),
          child: Column(
            children: [
              // Badge
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 5),
                decoration: BoxDecoration(
                  color: AppColors.gold.withValues(alpha: 0.08),
                  border: Border.all(color: AppColors.gold.withValues(alpha: 0.2)),
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Text(
                  '★  Built by a student, for students — 100% free',
                  style: GoogleFonts.firaCode(
                    fontSize: 11,
                    color: AppColors.gold,
                    letterSpacing: 0.1,
                  ),
                ),
              ),
              const SizedBox(height: 28),
              // Title
              Text(
                'Score 5s.',
                style: GoogleFonts.syne(
                  fontSize: 56,
                  fontWeight: FontWeight.w800,
                  color: Colors.white,
                  height: 0.95,
                  letterSpacing: -0.04 * 56,
                ),
                textAlign: TextAlign.center,
              ),
              ShaderMask(
                shaderCallback: (bounds) => const LinearGradient(
                  colors: [AppColors.gold, AppColors.accent],
                  begin: Alignment.centerLeft,
                  end: Alignment.centerRight,
                ).createShader(bounds),
                child: Text(
                  "Score A's.",
                  style: GoogleFonts.syne(
                    fontSize: 56,
                    fontWeight: FontWeight.w800,
                    color: Colors.white,
                    height: 0.95,
                    letterSpacing: -0.04 * 56,
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
              const SizedBox(height: 20),
              // Subtitle
              ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 520),
                child: Text(
                  'Comprehensive AP and college course review guides built the way the best educators teach — current rubrics, step-by-step solutions, interactive quizzes, zero paywalls.',
                  style: GoogleFonts.outfit(
                    fontSize: 15,
                    color: AppColors.text2,
                    height: 1.75,
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
              const SizedBox(height: 32),
              // Stats row
              Wrap(
                alignment: WrapAlignment.center,
                spacing: 10,
                runSpacing: 10,
                children: const [
                  _StatChip(number: '15', label: 'AP Guides'),
                  _StatChip(number: '2', label: 'College Courses'),
                  _StatChip(number: '2026', label: 'Updated'),
                  _StatChip(number: '100%', label: 'Free'),
                ],
              ),
              const SizedBox(height: 36),
              // CTA
              _CtaButton(label: '→  Browse All Guides', onTap: onBrowse),
            ],
          ),
        ),
      ),
    );
  }
}

class _StatChip extends StatelessWidget {
  const _StatChip({required this.number, required this.label});
  final String number;
  final String label;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
      decoration: BoxDecoration(
        color: AppColors.bg2,
        border: Border.all(color: AppColors.border2),
        borderRadius: BorderRadius.circular(10),
      ),
      child: Column(
        children: [
          Text(
            number,
            style: GoogleFonts.syne(
              fontSize: 26,
              fontWeight: FontWeight.w800,
              color: Colors.white,
              height: 1,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            label,
            style: GoogleFonts.firaCode(
              fontSize: 10,
              color: AppColors.text3,
              letterSpacing: 0.08,
            ),
          ),
        ],
      ),
    );
  }
}

class _CtaButton extends StatefulWidget {
  const _CtaButton({required this.label, required this.onTap});
  final String label;
  final VoidCallback onTap;

  @override
  State<_CtaButton> createState() => _CtaButtonState();
}

class _CtaButtonState extends State<_CtaButton> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: GestureDetector(
        onTap: widget.onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 13),
          decoration: BoxDecoration(
            gradient: LinearGradient(
              colors: [
                AppColors.gold.withValues(alpha: _hovered ? 0.28 : 0.18),
                AppColors.accent.withValues(alpha: _hovered ? 0.22 : 0.14),
              ],
            ),
            border: Border.all(
              color: _hovered ? AppColors.gold : AppColors.gold.withValues(alpha: 0.35),
            ),
            borderRadius: BorderRadius.circular(6),
          ),
          child: Text(
            widget.label,
            style: GoogleFonts.firaCode(
              fontSize: 12,
              color: AppColors.gold,
              letterSpacing: 0.07,
            ),
          ),
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Subject Catalog
// ---------------------------------------------------------------------------

class _SubjectCatalog extends StatelessWidget {
  const _SubjectCatalog({super.key});

  @override
  Widget build(BuildContext context) {
    // Group subjects by category
    final byCategory = <String, List<Subject>>{};
    for (final s in subjectsRegistry) {
      byCategory.putIfAbsent(s.category, () => []).add(s);
    }

    final apCount = subjectsRegistry.where((s) => s.category != 'College Math').length;
    final collegeCount = subjectsRegistry.where((s) => s.category == 'College Math').length;

    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 1100),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _SectionHeader(tag: '$apCount Guides', title: 'AP Exam Review'),
              const SizedBox(height: 8),
              // AP categories
              for (final category in ['History & Social Science', 'English Language Arts', 'STEM', 'Arts'])
                if (byCategory.containsKey(category)) ...[
                  _CategoryGroup(
                    label: category,
                    subjects: byCategory[category]!,
                  ),
                  const SizedBox(height: 24),
                ],
              const SizedBox(height: 8),
              _SectionHeader(tag: '$collegeCount Guides', title: 'College Course Review'),
              const SizedBox(height: 8),
              _CategoryGroup(
                label: 'Mathematics',
                subjects: byCategory['College Math'] ?? [],
              ),
              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }
}

class _SectionHeader extends StatelessWidget {
  const _SectionHeader({required this.tag, required this.title});
  final String tag;
  final String title;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 20, top: 24),
      child: Row(
        children: [
          Text(
            tag,
            style: GoogleFonts.firaCode(
              fontSize: 10,
              color: AppColors.text3,
              letterSpacing: 0.14,
            ),
          ),
          const SizedBox(width: 12),
          Flexible(
            child: Text(
              title,
              style: GoogleFonts.syne(
                fontSize: 22,
                fontWeight: FontWeight.w800,
                color: AppColors.text,
                letterSpacing: -0.02 * 22,
              ),
              overflow: TextOverflow.ellipsis,
            ),
          ),
          const SizedBox(width: 12),
          const Expanded(child: Divider(color: AppColors.border, height: 1)),
        ],
      ),
    );
  }
}

class _CategoryGroup extends StatelessWidget {
  const _CategoryGroup({required this.label, required this.subjects});
  final String label;
  final List<Subject> subjects;

  @override
  Widget build(BuildContext context) {
    if (subjects.isEmpty) return const SizedBox.shrink();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label.toUpperCase(),
          style: GoogleFonts.firaCode(
            fontSize: 10,
            color: AppColors.text3,
            letterSpacing: 0.12,
          ),
        ),
        const SizedBox(height: 10),
        LayoutBuilder(
          builder: (context, constraints) {
            final width = constraints.maxWidth;
            int columns = 3;
            if (width < 560) {
              columns = 1;
            } else if (width < 880) {
              columns = 2;
            }

            // Build grid manually for clean border-sharing layout
            return _SubjectGrid(subjects: subjects, columns: columns);
          },
        ),
      ],
    );
  }
}

class _SubjectGrid extends StatelessWidget {
  const _SubjectGrid({required this.subjects, required this.columns});
  final List<Subject> subjects;
  final int columns;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final cardWidth = _cardWidth(constraints.maxWidth, columns);
        return Container(
          decoration: BoxDecoration(
            color: AppColors.border,
            border: Border.all(color: AppColors.border),
            borderRadius: BorderRadius.circular(8),
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(8),
            child: Wrap(
              spacing: 1,
              runSpacing: 1,
              children: [
                for (final subject in subjects)
                  SizedBox(
                    width: cardWidth,
                    child: SubjectCard(subject: subject),
                  ),
              ],
            ),
          ),
        );
      },
    );
  }

  double _cardWidth(double availableWidth, int columns) {
    // account for 1px gaps between columns
    return (availableWidth - (columns - 1)) / columns;
  }
}

class SubjectCard extends StatefulWidget {
  const SubjectCard({super.key, required this.subject});
  final Subject subject;

  @override
  State<SubjectCard> createState() => _SubjectCardState();
}

class _SubjectCardState extends State<SubjectCard> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    final s = widget.subject;
    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        decoration: BoxDecoration(
          color: _hovered ? AppColors.bg3 : AppColors.bg2,
        ),
        child: InkWell(
          onTap: () => context.push('/subject/${s.id}'),
          splashColor: s.accentColor.withValues(alpha: 0.08),
          highlightColor: s.accentColor.withValues(alpha: 0.05),
          child: Stack(
            children: [
              // Accent top border (animated scale)
              Positioned(
                top: 0,
                left: 0,
                right: 0,
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 250),
                  height: 2,
                  color: s.accentColor.withValues(alpha: _hovered ? 1.0 : 0.0),
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Top row: icon + badge
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(
                          width: 38,
                          height: 38,
                          decoration: BoxDecoration(
                            color: s.accentFaint,
                            borderRadius: BorderRadius.circular(7),
                          ),
                          alignment: Alignment.center,
                          child: Text(s.icon, style: const TextStyle(fontSize: 18)),
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 3),
                          decoration: BoxDecoration(
                            color: s.accentColor.withValues(alpha: 0.08),
                            border: Border.all(color: s.accentColor.withValues(alpha: 0.2)),
                            borderRadius: BorderRadius.circular(3),
                          ),
                          child: Text(
                            s.badge,
                            style: GoogleFonts.firaCode(
                              fontSize: 9,
                              color: s.accentColor,
                              letterSpacing: 0.05,
                            ),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 14),
                    // Title
                    Text(
                      s.title,
                      style: GoogleFonts.outfit(
                        fontSize: 15,
                        fontWeight: FontWeight.w700,
                        color: Colors.white,
                        height: 1.2,
                      ),
                    ),
                    const SizedBox(height: 6),
                    // Subtitle
                    Text(
                      s.subtitle,
                      style: GoogleFonts.outfit(
                        fontSize: 11.5,
                        color: AppColors.text2,
                        height: 1.5,
                      ),
                      maxLines: 4,
                      overflow: TextOverflow.ellipsis,
                    ),
                    const SizedBox(height: 12),
                    // Pills
                    Wrap(
                      spacing: 3,
                      runSpacing: 3,
                      children: [
                        for (final pill in s.pills)
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                            decoration: BoxDecoration(
                              color: Colors.white.withValues(alpha: 0.03),
                              border: Border.all(color: AppColors.border2),
                              borderRadius: BorderRadius.circular(2),
                            ),
                            child: Text(
                              pill,
                              style: GoogleFonts.firaCode(
                                fontSize: 9.5,
                                color: AppColors.text3,
                              ),
                            ),
                          ),
                      ],
                    ),
                    const SizedBox(height: 12),
                    // Footer
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          s.meta,
                          style: GoogleFonts.firaCode(
                            fontSize: 10.5,
                            color: AppColors.text3,
                          ),
                        ),
                        AnimatedDefaultTextStyle(
                          duration: const Duration(milliseconds: 200),
                          style: TextStyle(
                            fontSize: 15,
                            color: _hovered ? Colors.white : AppColors.text3,
                          ),
                          child: const Text('→'),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Methods Section
// ---------------------------------------------------------------------------

class _MethodsSection extends StatelessWidget {
  const _MethodsSection({super.key});

  static const _methods = [
    (icon: '📚', src: "Heimler's History", name: 'Rubric-Led Writing', desc: 'Every AP History essay is broken down rubric point by point — thesis, context, evidence, sourcing, complexity — so you know exactly what earns each point before writing a word.'),
    (icon: '🧮', src: 'The Organic Chemistry Tutor', name: 'Step-by-Step Problem Solving', desc: 'Every STEM concept is taught through fully worked examples — each algebraic and logical step narrated. You see the complete reasoning process, not just a final answer.'),
    (icon: '✏️', src: 'Tom Richey', name: 'Contextualization First', desc: 'History essays require connecting evidence to a broader period. We model exactly how to write contextualization that earns the College Board point — not a vague mention.'),
    (icon: '📝', src: 'Marco Learning', name: 'Official Rubric Transparency', desc: 'We publish current College Board rubric language verbatim, then annotate sample responses showing exactly how each point was earned or missed — same approach as AP Readers.'),
    (icon: '🎯', src: 'Five & A+ Original', name: 'Per-Unit Interactive Quizzes', desc: 'Every unit section ends with 5 interactive MCQs. Click to see if you\'re right, read the explanation, and track your score. Reset and retry until it\'s automatic.'),
    (icon: '⚡', src: 'Five & A+ Original', name: 'Must-Know Checklists', desc: 'Every guide ends with a high-yield checklist of the concepts most likely to appear on your exam. The 20% of content that earns 80% of the points.'),
  ];

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 1100),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24),
          child: LayoutBuilder(
            builder: (context, constraints) {
              final available = constraints.maxWidth;
              final cardWidth = available > 880
                  ? ((available - 60) / 3)
                  : available > 560
                      ? ((available - 12) / 2)
                      : available;
              return Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _SectionHeader(tag: 'Pedagogy', title: 'How We Teach'),
                  Wrap(
                    spacing: 12,
                    runSpacing: 12,
                    children: [
                      for (final m in _methods)
                        _MethodCard(icon: m.icon, src: m.src, name: m.name, desc: m.desc, cardWidth: cardWidth),
                    ],
                  ),
                  const SizedBox(height: 40),
                ],
              );
            },
          ),
        ),
      ),
    );
  }
}

class _MethodCard extends StatelessWidget {
  const _MethodCard({required this.icon, required this.src, required this.name, required this.desc, required this.cardWidth});
  final String icon;
  final String src;
  final String name;
  final String desc;
  final double cardWidth;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: cardWidth,
      child: Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: AppColors.bg2,
          border: Border.all(color: AppColors.border),
          borderRadius: BorderRadius.circular(8),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(icon, style: const TextStyle(fontSize: 20)),
            const SizedBox(height: 8),
            Text(
              src.toUpperCase(),
              style: GoogleFonts.firaCode(fontSize: 9, color: AppColors.gold, letterSpacing: 0.1),
            ),
            const SizedBox(height: 3),
            Text(
              name,
              style: GoogleFonts.outfit(fontSize: 14, fontWeight: FontWeight.w700, color: AppColors.text),
            ),
            const SizedBox(height: 6),
            Text(
              desc,
              style: GoogleFonts.outfit(fontSize: 11.5, color: AppColors.text2, height: 1.6),
            ),
          ],
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// How to Use Section
// ---------------------------------------------------------------------------

class _HowToUseSection extends StatelessWidget {
  const _HowToUseSection();

  static const _steps = [
    ('01 / NAVIGATE', 'Sticky nav on every guide', 'Each guide has a sticky topbar linking to every unit. Jump to any section instantly — no searching through content you already know.'),
    ('02 / STUDY', 'Read, then practice', 'Each unit covers the concept first, then immediately follows with interactive MCQs. Learn it, then test yourself on the spot.'),
    ('03 / REVIEW RUBRICS', 'Current official rubrics', 'Every essay guide contains the exact 2025 College Board rubric, annotated to show what each point actually requires from real scoring guidelines.'),
    ('04 / REVIEW', 'Must-Know checklists', 'Every guide ends with a high-yield checklist of the concepts most likely to appear on your exam. Tick each item as you master it — reset before exam day.'),
  ];

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 1100),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24),
          child: LayoutBuilder(
            builder: (context, constraints) {
              final available = constraints.maxWidth;
              final cardWidth = available > 760
                  ? ((available - 36) / 4)
                  : available > 480
                      ? ((available - 12) / 2)
                      : available;
              return Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _SectionHeader(tag: 'Getting Started', title: 'How to Use This Site'),
                  Wrap(
                    spacing: 12,
                    runSpacing: 12,
                    children: [
                      for (final s in _steps)
                        _HowCard(number: s.$1, title: s.$2, desc: s.$3, cardWidth: cardWidth),
                    ],
                  ),
                  const SizedBox(height: 40),
                ],
              );
            },
          ),
        ),
      ),
    );
  }
}

class _HowCard extends StatelessWidget {
  const _HowCard({required this.number, required this.title, required this.desc, required this.cardWidth});
  final String number;
  final String title;
  final String desc;
  final double cardWidth;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: cardWidth,
      child: Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: AppColors.bg2,
          border: Border.all(color: AppColors.border),
          borderRadius: BorderRadius.circular(8),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(number, style: GoogleFonts.firaCode(fontSize: 10, color: AppColors.text3, letterSpacing: 0.1)),
            const SizedBox(height: 5),
            Text(title, style: GoogleFonts.outfit(fontSize: 13, fontWeight: FontWeight.w700, color: AppColors.text)),
            const SizedBox(height: 5),
            Text(desc, style: GoogleFonts.outfit(fontSize: 11.5, color: AppColors.text2, height: 1.6)),
          ],
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Developer Section
// ---------------------------------------------------------------------------

class _DeveloperSection extends StatelessWidget {
  const _DeveloperSection({super.key});

  @override
  Widget build(BuildContext context) {
    final isWide = MediaQuery.of(context).size.width > 660;

    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 1100),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _SectionHeader(tag: 'Creator', title: 'About the Developer'),
              Container(
                padding: const EdgeInsets.all(32),
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: [AppColors.bg2, AppColors.accent.withValues(alpha: 0.03)],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                  border: Border.all(color: AppColors.accent.withValues(alpha: 0.15)),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: isWide
                    ? Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const _DevAvatar(),
                          const SizedBox(width: 32),
                          const Expanded(child: _DevContent()),
                        ],
                      )
                    : Column(
                        children: [
                          const _DevAvatar(),
                          const SizedBox(height: 20),
                          const _DevContent(),
                        ],
                      ),
              ),
              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }
}

class _DevAvatar extends StatelessWidget {
  const _DevAvatar();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 86,
      height: 86,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            AppColors.gold.withValues(alpha: 0.22),
            AppColors.accent.withValues(alpha: 0.22),
          ],
        ),
        border: Border.all(color: AppColors.gold.withValues(alpha: 0.25)),
        borderRadius: BorderRadius.circular(12),
      ),
      alignment: Alignment.center,
      child: const Text('👨‍💻', style: TextStyle(fontSize: 38)),
    );
  }
}

class _DevContent extends StatelessWidget {
  const _DevContent();

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Arnav Sinha',
          style: GoogleFonts.syne(fontSize: 22, fontWeight: FontWeight.w800, color: AppColors.text, letterSpacing: -0.02 * 22),
        ),
        const SizedBox(height: 3),
        Text(
          'WARWICK VALLEY HIGH SCHOOL  ·  CLASS OF 2027  ·  NEW YORK',
          style: GoogleFonts.firaCode(fontSize: 10, color: AppColors.gold, letterSpacing: 0.1),
        ),
        const SizedBox(height: 12),
        RichText(
          text: TextSpan(
            style: GoogleFonts.outfit(fontSize: 13, color: AppColors.text2, height: 1.8),
            children: [
              const TextSpan(text: 'I built '),
              TextSpan(text: 'Five & A+', style: GoogleFonts.outfit(fontWeight: FontWeight.w700, color: AppColors.text, fontSize: 13)),
              const TextSpan(
                  text: ' because I couldn\'t find a single free resource that was both comprehensive '),
              TextSpan(text: 'and', style: GoogleFonts.outfit(fontStyle: FontStyle.italic, fontSize: 13, color: AppColors.text2)),
              const TextSpan(
                  text: ' current with actual College Board rubrics. Most review sites either use outdated rubrics, gloss over difficult content, or put everything behind a paywall.\n\nAs a student juggling '),
              TextSpan(text: '11 AP courses', style: GoogleFonts.outfit(fontWeight: FontWeight.w700, color: AppColors.text, fontSize: 13)),
              const TextSpan(text: ' and '),
              TextSpan(text: '5 college classes', style: GoogleFonts.outfit(fontWeight: FontWeight.w700, color: AppColors.text, fontSize: 13)),
              const TextSpan(
                  text: ', I know firsthand what real test preparation looks like. Every guide on this site reflects how I actually study — current rubrics, step-by-step reasoning, genuine practice, and the same frameworks used by the best AP educators online.'),
            ],
          ),
        ),
        const SizedBox(height: 12),
        Wrap(
          spacing: 5,
          runSpacing: 5,
          children: [
            _Chip(label: '11 AP Courses', bold: '11'),
            _Chip(label: '5 College Courses', bold: '5'),
            _Chip(label: 'Class of 2027', bold: '2027'),
            _Chip(label: 'Warwick Valley HS'),
            _Chip(label: 'New York'),
          ],
        ),
        const SizedBox(height: 14),
        Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            color: AppColors.accent.withValues(alpha: 0.06),
            border: Border.all(color: AppColors.accent.withValues(alpha: 0.14)),
            borderRadius: const BorderRadius.only(
              topRight: Radius.circular(5),
              bottomRight: Radius.circular(5),
            ),
          ),
          child: Text(
            '"My goal is simple: every student who wants a 5 or an A should be able to get there — regardless of whether they can afford a tutor or a prep course. This site is my contribution to that."',
            style: GoogleFonts.outfit(fontSize: 13, color: AppColors.text2, height: 1.7, fontStyle: FontStyle.italic),
          ),
        ),
      ],
    );
  }
}

class _Chip extends StatelessWidget {
  const _Chip({required this.label, this.bold});
  final String label;
  final String? bold;

  @override
  Widget build(BuildContext context) {
    if (bold == null) {
      return Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
        decoration: BoxDecoration(
          color: Colors.white.withValues(alpha: 0.04),
          border: Border.all(color: AppColors.border2),
          borderRadius: BorderRadius.circular(4),
        ),
        child: Text(label, style: GoogleFonts.firaCode(fontSize: 10, color: AppColors.text2)),
      );
    }
    final parts = label.split(bold!);
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.04),
        border: Border.all(color: AppColors.border2),
        borderRadius: BorderRadius.circular(4),
      ),
      child: RichText(
        text: TextSpan(
          style: GoogleFonts.firaCode(fontSize: 10, color: AppColors.text2),
          children: [
            if (parts[0].isNotEmpty) TextSpan(text: parts[0]),
            TextSpan(text: bold, style: GoogleFonts.firaCode(fontSize: 10, color: AppColors.gold, fontWeight: FontWeight.w600)),
            if (parts.length > 1 && parts[1].isNotEmpty) TextSpan(text: parts[1]),
          ],
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Review Section
// ---------------------------------------------------------------------------

class _ReviewSection extends StatefulWidget {
  const _ReviewSection({super.key});

  @override
  State<_ReviewSection> createState() => _ReviewSectionState();
}

class _ReviewSectionState extends State<_ReviewSection> {
  final _formKey = GlobalKey<FormState>();
  final _nameCtrl = TextEditingController();
  final _outcomeCtrl = TextEditingController();
  final _schoolCtrl = TextEditingController();
  final _reviewCtrl = TextEditingController();
  String? _selectedCourse;
  int _rating = 0;
  bool _submitting = false;
  bool _submitted = false;

  static const _courses = [
    'AP U.S. History', 'AP World History', 'AP U.S. Government', 'AP Psychology',
    'AP Language & Composition', 'AP Literature & Composition',
    'AP Computer Science A', 'AP CS Principles', 'AP Calculus BC',
    'AP Physics 1 & 2', 'AP Chemistry', 'AP Biology',
    'AP Environmental Science', 'AP Art History', 'AP Music Theory',
    'College Algebra', 'College Trigonometry',
  ];

  Future<void> _submit() async {
    if (!_formKey.currentState!.validate()) return;
    if (_rating == 0) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Please select a star rating.')),
      );
      return;
    }
    setState(() => _submitting = true);
    try {
      final response = await http.post(
        Uri.parse('https://formspree.io/f/xeenrzpd'),
        headers: {'Accept': 'application/json'},
        body: {
          'name': _nameCtrl.text,
          'course': _selectedCourse ?? '',
          'rating': '$_rating stars',
          'outcome': _outcomeCtrl.text,
          'school': _schoolCtrl.text,
          'review': _reviewCtrl.text,
        },
      );
      if (response.statusCode == 200 || response.statusCode == 201) {
        setState(() => _submitted = true);
      } else {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Submission error. Please try again.')),
          );
        }
      }
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Network error. Please try again.')),
        );
      }
    } finally {
      if (mounted) setState(() => _submitting = false);
    }
  }

  @override
  void dispose() {
    _nameCtrl.dispose();
    _outcomeCtrl.dispose();
    _schoolCtrl.dispose();
    _reviewCtrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 1100),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _SectionHeader(tag: 'Community', title: 'Leave a Review'),
              Container(
                padding: const EdgeInsets.all(32),
                decoration: BoxDecoration(
                  color: AppColors.bg2,
                  border: Border.all(color: AppColors.border),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: _submitted ? _SuccessMessage() : _ReviewForm(
                  formKey: _formKey,
                  nameCtrl: _nameCtrl,
                  outcomeCtrl: _outcomeCtrl,
                  schoolCtrl: _schoolCtrl,
                  reviewCtrl: _reviewCtrl,
                  selectedCourse: _selectedCourse,
                  rating: _rating,
                  courses: _courses,
                  submitting: _submitting,
                  onCourseChanged: (v) => setState(() => _selectedCourse = v),
                  onRatingChanged: (r) => setState(() => _rating = r),
                  onSubmit: _submit,
                ),
              ),
              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }
}

class _SuccessMessage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.green.withValues(alpha: 0.08),
        border: Border.all(color: AppColors.green.withValues(alpha: 0.22)),
        borderRadius: BorderRadius.circular(5),
      ),
      child: Text(
        '✓  Thank you! Your review has been received. This feedback genuinely helps improve the site for every student who uses it.',
        style: GoogleFonts.outfit(fontSize: 13, color: const Color(0xFF6ee7b7)),
      ),
    );
  }
}

class _ReviewForm extends StatelessWidget {
  const _ReviewForm({
    required this.formKey,
    required this.nameCtrl,
    required this.outcomeCtrl,
    required this.schoolCtrl,
    required this.reviewCtrl,
    required this.selectedCourse,
    required this.rating,
    required this.courses,
    required this.submitting,
    required this.onCourseChanged,
    required this.onRatingChanged,
    required this.onSubmit,
  });

  final GlobalKey<FormState> formKey;
  final TextEditingController nameCtrl;
  final TextEditingController outcomeCtrl;
  final TextEditingController schoolCtrl;
  final TextEditingController reviewCtrl;
  final String? selectedCourse;
  final int rating;
  final List<String> courses;
  final bool submitting;
  final ValueChanged<String?> onCourseChanged;
  final ValueChanged<int> onRatingChanged;
  final VoidCallback onSubmit;

  @override
  Widget build(BuildContext context) {
    final inputDecoration = InputDecorationTheme(
      filled: true,
      fillColor: AppColors.bg3,
      border: OutlineInputBorder(
        borderSide: const BorderSide(color: AppColors.border2),
        borderRadius: BorderRadius.circular(5),
      ),
      enabledBorder: OutlineInputBorder(
        borderSide: const BorderSide(color: AppColors.border2),
        borderRadius: BorderRadius.circular(5),
      ),
      focusedBorder: OutlineInputBorder(
        borderSide: const BorderSide(color: AppColors.gold),
        borderRadius: BorderRadius.circular(5),
      ),
      contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
    );

    return Theme(
      data: Theme.of(context).copyWith(inputDecorationTheme: inputDecoration),
      child: Form(
        key: formKey,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Did a guide help you prep for an exam? Share your experience — every piece of feedback shapes future updates. Reviews are private and go directly to the developer.',
              style: GoogleFonts.outfit(fontSize: 13, color: AppColors.text2, height: 1.75),
            ),
            const SizedBox(height: 20),
            // Name + Course row
            LayoutBuilder(builder: (ctx, cst) {
              final wide = cst.maxWidth > 500;
              final fields = [
                _FormField(
                  label: 'Your Name',
                  child: TextFormField(
                    controller: nameCtrl,
                    style: GoogleFonts.outfit(fontSize: 13.5, color: AppColors.text),
                    decoration: const InputDecoration(hintText: 'First name or anonymous'),
                    validator: (v) => (v == null || v.trim().isEmpty) ? 'Required' : null,
                  ),
                ),
                _FormField(
                  label: 'Guide You Used',
                  child: DropdownButtonFormField<String>(
                    initialValue: selectedCourse,
                    dropdownColor: AppColors.bg2,
                    isExpanded: true,
                    style: GoogleFonts.outfit(fontSize: 13.5, color: AppColors.text),
                    decoration: const InputDecoration(hintText: 'Select a guide…'),
                    items: courses
                        .map((c) => DropdownMenuItem(value: c, child: Text(c, overflow: TextOverflow.ellipsis)))
                        .toList(),
                    onChanged: onCourseChanged,
                    validator: (v) => v == null ? 'Required' : null,
                  ),
                ),
              ];
              return wide
                  ? Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        for (int i = 0; i < fields.length; i++)
                          Expanded(child: Padding(
                            padding: EdgeInsets.only(right: i < fields.length - 1 ? 12 : 0),
                            child: fields[i],
                          )),
                      ],
                    )
                  : Column(children: fields.map((f) => Padding(padding: const EdgeInsets.only(bottom: 12), child: f)).toList());
            }),
            const SizedBox(height: 12),
            // Star rating
            _FormField(
              label: 'Rating',
              child: _StarRating(rating: rating, onChanged: onRatingChanged),
            ),
            const SizedBox(height: 12),
            // Outcome + School
            LayoutBuilder(builder: (ctx, cst) {
              final wide = cst.maxWidth > 500;
              final fields = [
                _FormField(
                  label: 'Your Outcome (optional)',
                  child: TextFormField(
                    controller: outcomeCtrl,
                    style: GoogleFonts.outfit(fontSize: 13.5, color: AppColors.text),
                    decoration: const InputDecoration(hintText: 'e.g. Scored a 5, Got an A'),
                  ),
                ),
                _FormField(
                  label: 'School / Grade (optional)',
                  child: TextFormField(
                    controller: schoolCtrl,
                    style: GoogleFonts.outfit(fontSize: 13.5, color: AppColors.text),
                    decoration: const InputDecoration(hintText: 'e.g. Junior, Lincoln HS'),
                  ),
                ),
              ];
              return wide
                  ? Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        for (int i = 0; i < fields.length; i++)
                          Expanded(child: Padding(
                            padding: EdgeInsets.only(right: i < fields.length - 1 ? 12 : 0),
                            child: fields[i],
                          )),
                      ],
                    )
                  : Column(children: fields.map((f) => Padding(padding: const EdgeInsets.only(bottom: 12), child: f)).toList());
            }),
            const SizedBox(height: 12),
            // Review textarea
            _FormField(
              label: 'Your Review',
              child: TextFormField(
                controller: reviewCtrl,
                maxLines: 4,
                style: GoogleFonts.outfit(fontSize: 13.5, color: AppColors.text),
                decoration: const InputDecoration(
                  hintText: 'What was most helpful? What could be better? The more specific, the better.',
                ),
                validator: (v) => (v == null || v.trim().isEmpty) ? 'Required' : null,
              ),
            ),
            const SizedBox(height: 16),
            // Submit button
            _SubmitButton(submitting: submitting, onTap: onSubmit),
            const SizedBox(height: 8),
            Text(
              'Reviews are private — sent directly to the developer. Your info is never shared publicly.',
              style: GoogleFonts.firaCode(fontSize: 10, color: AppColors.text3),
            ),
          ],
        ),
      ),
    );
  }
}

class _FormField extends StatelessWidget {
  const _FormField({required this.label, required this.child});
  final String label;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label.toUpperCase(),
          style: GoogleFonts.firaCode(fontSize: 10, color: AppColors.text3, letterSpacing: 0.1),
        ),
        const SizedBox(height: 5),
        child,
      ],
    );
  }
}

class _StarRating extends StatelessWidget {
  const _StarRating({required this.rating, required this.onChanged});
  final int rating;
  final ValueChanged<int> onChanged;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: List.generate(5, (i) {
        final filled = i < rating;
        return GestureDetector(
          onTap: () => onChanged(i + 1),
          child: Padding(
            padding: const EdgeInsets.only(right: 5),
            child: Text(
              '★',
              style: TextStyle(
                fontSize: 24,
                color: filled ? AppColors.gold : AppColors.border2,
              ),
            ),
          ),
        );
      }),
    );
  }
}

class _SubmitButton extends StatefulWidget {
  const _SubmitButton({required this.submitting, required this.onTap});
  final bool submitting;
  final VoidCallback onTap;

  @override
  State<_SubmitButton> createState() => _SubmitButtonState();
}

class _SubmitButtonState extends State<_SubmitButton> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: GestureDetector(
        onTap: widget.submitting ? null : widget.onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 180),
          padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 11),
          decoration: BoxDecoration(
            color: AppColors.gold.withValues(alpha: _hovered ? 0.25 : 0.15),
            border: Border.all(color: AppColors.gold.withValues(alpha: 0.3)),
            borderRadius: BorderRadius.circular(5),
          ),
          child: widget.submitting
              ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: AppColors.gold))
              : Text(
                  '→  Submit Review',
                  style: GoogleFonts.firaCode(fontSize: 11, color: AppColors.gold, letterSpacing: 0.06),
                ),
        ),
      ),
    );
  }
}
