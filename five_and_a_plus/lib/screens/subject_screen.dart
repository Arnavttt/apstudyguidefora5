import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../theme/app_theme.dart';
import '../models/subject.dart';
import '../models/unit.dart';
import '../models/content_block.dart';
import '../widgets/layout/top_nav.dart';
import '../widgets/layout/masthead.dart';
import '../widgets/layout/page_footer.dart';
import '../widgets/content/card_row.dart';
import '../widgets/content/code_block.dart';
import '../widgets/content/data_table_widget.dart';
import '../widgets/content/step_box.dart';
import '../widgets/content/rubric_box.dart';
import '../widgets/quiz/quiz_section.dart';

// ---------------------------------------------------------------------------
// SubjectScreen — generic shell for all 17 subject pages
//
// Injects the subject's AccentTheme at the top level so every widget
// below reads Theme.of(context).extension<AccentTheme>() automatically —
// no color prop-drilling.
//
// Uses CustomScrollView + SliverList so Flutter only builds widgets near
// the viewport. Each Unit has a GlobalKey for scroll-to-section.
// ---------------------------------------------------------------------------

class SubjectScreen extends StatefulWidget {
  const SubjectScreen({super.key, required this.subject});
  final Subject subject;

  @override
  State<SubjectScreen> createState() => _SubjectScreenState();
}

class _SubjectScreenState extends State<SubjectScreen> {
  late final List<GlobalKey> _unitKeys;

  @override
  void initState() {
    super.initState();
    _unitKeys = List.generate(
      widget.subject.units.length,
      (_) => GlobalKey(),
    );
  }

  @override
  Widget build(BuildContext context) {
    final subject = widget.subject;

    // Inject per-subject AccentTheme so all child widgets resolve it via
    // Theme.of(context).extension<AccentTheme>()
    return Theme(
      data: Theme.of(context).copyWith(
        extensions: [subject.accentTheme],
      ),
      child: Scaffold(
        backgroundColor: AppColors.bg,
        body: Column(
          children: [
            // Sticky top nav with unit jump links
            TopNav(
              unitKeys: _unitKeys,
              units: subject.units,
            ),
            Expanded(
              child: CustomScrollView(
                slivers: [
                  // Masthead hero
                  SliverToBoxAdapter(
                    child: Masthead(
                      subject: subject,
                      unitKeys: _unitKeys,
                      units: subject.units,
                    ),
                  ),
                  // Unit sections
                  SliverList(
                    delegate: SliverChildBuilderDelegate(
                      (context, index) {
                        final unit = subject.units[index];
                        return _UnitSection(
                          key: _unitKeys[index],
                          unit: unit,
                          accentColor: subject.accentColor,
                        );
                      },
                      childCount: subject.units.length,
                    ),
                  ),
                  // Empty-state placeholder when no units yet
                  if (subject.units.isEmpty)
                    const SliverToBoxAdapter(child: _EmptyState()),
                  // Footer
                  const SliverToBoxAdapter(
                    child: PageFooter(showBackToHome: true),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Unit Section
// ---------------------------------------------------------------------------

class _UnitSection extends StatelessWidget {
  const _UnitSection({super.key, required this.unit, required this.accentColor});
  final Unit unit;
  final Color accentColor;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 900),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 32),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Unit header
              Row(
                children: [
                  Container(
                    width: 3,
                    height: 22,
                    decoration: BoxDecoration(
                      color: accentColor,
                      borderRadius: BorderRadius.circular(2),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Text(
                      unit.title,
                      style: GoogleFonts.syne(
                        fontSize: 20,
                        fontWeight: FontWeight.w800,
                        color: AppColors.text,
                        letterSpacing: -0.02 * 20,
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 20),
              // Content blocks
              for (final block in unit.blocks) ...[
                _buildBlock(context, block),
                const SizedBox(height: 16),
              ],
            ],
          ),
        ),
      ),
    );
  }

  // Switch over sealed ContentBlock — compiler enforces exhaustiveness
  Widget _buildBlock(BuildContext context, ContentBlock block) => switch (block) {
        CardRowBlock b => CardRow(block: b),
        CalloutBlock b => _CalloutWidget(block: b),
        WarnBlock b => _WarnWidget(block: b),
        CodeBlock b => CodeBlockWidget(block: b),
        DataTableBlock b => DataTableWidget(block: b),
        StepBoxBlock b => StepBox(block: b),
        RubricBoxBlock b => RubricBox(block: b),
        QuizBlock b => QuizSection(block: b),
        MustKnowBlock b => _MustKnowWidget(block: b),
      };
}

// ---------------------------------------------------------------------------
// Block widgets (inline implementations for simpler block types)
// CardRow, StepBox, RubricBox, and QuizSection live in their own files.
// ---------------------------------------------------------------------------

class _CalloutWidget extends StatelessWidget {
  const _CalloutWidget({required this.block});
  final CalloutBlock block;

  @override
  Widget build(BuildContext context) {
    final accent = Theme.of(context).extension<AccentTheme>()?.accentColor ?? AppColors.gold;
    final accentFaint = Theme.of(context).extension<AccentTheme>()?.accentFaint ?? AppColors.gold.withValues(alpha: 0.15);

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: accentFaint,
        border: Border.all(color: accent.withValues(alpha: 0.3)),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(block.title, style: GoogleFonts.syne(fontSize: 14, fontWeight: FontWeight.w800, color: accent)),
          const SizedBox(height: 10),
          for (final item in block.items)
            Padding(
              padding: const EdgeInsets.only(bottom: 6),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('• ', style: TextStyle(color: accent, fontSize: 14)),
                  Expanded(child: Text(item, style: GoogleFonts.outfit(fontSize: 13.5, color: AppColors.text, height: 1.6))),
                ],
              ),
            ),
        ],
      ),
    );
  }
}

class _WarnWidget extends StatelessWidget {
  const _WarnWidget({required this.block});
  final WarnBlock block;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0x26EF4444),
        border: Border.all(color: const Color(0x4DEF4444)),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(block.title, style: GoogleFonts.syne(fontSize: 14, fontWeight: FontWeight.w800, color: const Color(0xFFf87171))),
          const SizedBox(height: 10),
          for (final item in block.items)
            Padding(
              padding: const EdgeInsets.only(bottom: 6),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('⚠ ', style: TextStyle(color: Color(0xFFf87171), fontSize: 13)),
                  Expanded(child: Text(item, style: GoogleFonts.outfit(fontSize: 13.5, color: AppColors.text, height: 1.6))),
                ],
              ),
            ),
        ],
      ),
    );
  }
}

class _MustKnowWidget extends StatefulWidget {
  const _MustKnowWidget({required this.block});
  final MustKnowBlock block;

  @override
  State<_MustKnowWidget> createState() => _MustKnowWidgetState();
}

class _MustKnowWidgetState extends State<_MustKnowWidget> {
  late final List<bool> _checked;

  @override
  void initState() {
    super.initState();
    _checked = List.filled(widget.block.items.length, false);
  }

  @override
  Widget build(BuildContext context) {
    final accent = Theme.of(context).extension<AccentTheme>()?.accentColor ?? AppColors.gold;

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.bg2,
        border: Border.all(color: AppColors.border),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Must-Know Checklist',
              style: GoogleFonts.syne(fontSize: 15, fontWeight: FontWeight.w800, color: accent)),
          const SizedBox(height: 10),
          for (int i = 0; i < widget.block.items.length; i++)
            CheckboxListTile(
              value: _checked[i],
              onChanged: (v) => setState(() => _checked[i] = v ?? false),
              activeColor: accent,
              checkColor: Colors.black87,
              title: Text(
                widget.block.items[i],
                style: GoogleFonts.outfit(
                  fontSize: 13.5,
                  color: _checked[i] ? AppColors.text3 : AppColors.text,
                  decoration: _checked[i] ? TextDecoration.lineThrough : null,
                  height: 1.5,
                ),
              ),
              controlAffinity: ListTileControlAffinity.leading,
              dense: true,
              contentPadding: EdgeInsets.zero,
            ),
        ],
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Empty state (shown when units: [] for stub subjects)
// ---------------------------------------------------------------------------

class _EmptyState extends StatelessWidget {
  const _EmptyState();

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 80, horizontal: 24),
        child: Column(
          children: [
            Text('📚', style: const TextStyle(fontSize: 48)),
            const SizedBox(height: 16),
            Text(
              'Coming Soon',
              style: GoogleFonts.syne(fontSize: 18, fontWeight: FontWeight.w800, color: AppColors.text),
            ),
            const SizedBox(height: 8),
            Text(
              'Full content for this guide is on the way — check back soon!',
              style: GoogleFonts.outfit(fontSize: 14, color: AppColors.text2),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }
}
