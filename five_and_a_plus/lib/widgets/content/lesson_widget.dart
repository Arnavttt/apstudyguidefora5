// lib/widgets/content/lesson_widget.dart
//
// LessonWidget renders a LessonBlock — one lesson within a unit.
// Structure: lesson title → topic note grid → skill lists (collapsible)
// → 5 free-response self-check questions.
// FreeResponseWidget renders a FreeResponseBlock (unit/course question bank).

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../models/content_block.dart';
import '../../theme/app_theme.dart';

// ── LessonWidget ─────────────────────────────────────────────────────────────

class LessonWidget extends StatefulWidget {
  const LessonWidget({super.key, required this.block});
  final LessonBlock block;

  @override
  State<LessonWidget> createState() => _LessonWidgetState();
}

class _LessonWidgetState extends State<LessonWidget> {
  bool _skillsExpanded = false;

  @override
  Widget build(BuildContext context) {
    final accent =
        Theme.of(context).extension<AccentTheme>()?.accentColor ?? AppColors.gold;
    final block = widget.block;

    return Container(
      decoration: BoxDecoration(
        color: AppColors.bg2,
        border: Border.all(color: AppColors.border),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // ── Lesson header ────────────────────────────────────────────────
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            decoration: BoxDecoration(
              color: AppColors.bg3,
              borderRadius: const BorderRadius.vertical(top: Radius.circular(8)),
              border: const Border(bottom: BorderSide(color: AppColors.border)),
            ),
            child: Row(
              children: [
                Container(
                  width: 3,
                  height: 18,
                  decoration: BoxDecoration(
                    color: accent,
                    borderRadius: BorderRadius.circular(2),
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Text(
                    block.title,
                    style: GoogleFonts.outfit(
                      fontSize: 14,
                      fontWeight: FontWeight.w700,
                      color: AppColors.text,
                    ),
                  ),
                ),
                if (block.topics.isNotEmpty)
                  Text(
                    '${block.topics.length} topics',
                    style: GoogleFonts.firaCode(
                      fontSize: 10,
                      color: AppColors.text3,
                      letterSpacing: 0.06,
                    ),
                  ),
              ],
            ),
          ),

          Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // ── Topic notes grid ─────────────────────────────────────
                if (block.topics.isNotEmpty) ...[
                  Text(
                    'CORE TOPICS',
                    style: GoogleFonts.firaCode(
                      fontSize: 9,
                      color: AppColors.text3,
                      letterSpacing: 0.14,
                    ),
                  ),
                  const SizedBox(height: 10),
                  LayoutBuilder(builder: (ctx, cst) {
                    final cols = cst.maxWidth > 500 ? 2 : 1;
                    return _TopicGrid(
                      topics: block.topics,
                      columns: cols,
                      accent: accent,
                    );
                  }),
                ],

                // ── Skill lists (collapsible) ─────────────────────────
                if (block.objectives.isNotEmpty ||
                    block.howTested.isNotEmpty ||
                    block.practice.isNotEmpty) ...[
                  const SizedBox(height: 12),
                  InkWell(
                    onTap: () =>
                        setState(() => _skillsExpanded = !_skillsExpanded),
                    borderRadius: BorderRadius.circular(4),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(vertical: 4),
                      child: Row(
                        children: [
                          Text(
                            _skillsExpanded
                                ? 'HIDE OBJECTIVES & PRACTICE'
                                : 'SHOW OBJECTIVES & PRACTICE',
                            style: GoogleFonts.firaCode(
                              fontSize: 9,
                              color: accent,
                              letterSpacing: 0.12,
                            ),
                          ),
                          const SizedBox(width: 4),
                          Icon(
                            _skillsExpanded
                                ? Icons.keyboard_arrow_up
                                : Icons.keyboard_arrow_down,
                            size: 14,
                            color: accent,
                          ),
                        ],
                      ),
                    ),
                  ),
                  AnimatedSize(
                    duration: const Duration(milliseconds: 220),
                    curve: Curves.easeOut,
                    child: _skillsExpanded
                        ? _SkillLists(
                            objectives: block.objectives,
                            howTested: block.howTested,
                            practice: block.practice,
                            accent: accent,
                          )
                        : const SizedBox.shrink(),
                  ),
                ],

                // ── Lesson questions ─────────────────────────────────
                if (block.questions.isNotEmpty) ...[
                  const SizedBox(height: 16),
                  _FreeResponseBank(
                    title: '${block.questions.length} lesson self-check questions',
                    questions: block.questions,
                    accent: accent,
                  ),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ── FreeResponseWidget ────────────────────────────────────────────────────────

class FreeResponseWidget extends StatelessWidget {
  const FreeResponseWidget({super.key, required this.block});
  final FreeResponseBlock block;

  @override
  Widget build(BuildContext context) {
    final accent =
        Theme.of(context).extension<AccentTheme>()?.accentColor ?? AppColors.gold;

    return Container(
      decoration: BoxDecoration(
        color: AppColors.bg2,
        border: Border.all(color: AppColors.border),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            decoration: BoxDecoration(
              color: AppColors.bg3,
              borderRadius: const BorderRadius.vertical(top: Radius.circular(8)),
              border: const Border(bottom: BorderSide(color: AppColors.border)),
            ),
            child: Row(
              children: [
                Text(
                  '📋  ${block.title}',
                  style: GoogleFonts.firaCode(
                    fontSize: 11,
                    color: accent,
                    fontWeight: FontWeight.w600,
                    letterSpacing: 0.06,
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16),
            child: _FreeResponseBank(
              title: '',
              questions: block.questions,
              accent: accent,
              showTitle: false,
            ),
          ),
        ],
      ),
    );
  }
}

// ── Internal helpers ──────────────────────────────────────────────────────────

class _TopicGrid extends StatelessWidget {
  const _TopicGrid({
    required this.topics,
    required this.columns,
    required this.accent,
  });
  final List<TopicNote> topics;
  final int columns;
  final Color accent;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (ctx, cst) {
      final gap = 8.0;
      final cardWidth =
          columns == 1 ? cst.maxWidth : (cst.maxWidth - gap) / 2;
      return Wrap(
        spacing: gap,
        runSpacing: gap,
        children: [
          for (final t in topics)
            SizedBox(
              width: cardWidth,
              child: _TopicCard(note: t, accent: accent),
            ),
        ],
      );
    });
  }
}

class _TopicCard extends StatelessWidget {
  const _TopicCard({required this.note, required this.accent});
  final TopicNote note;
  final Color accent;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: AppColors.bg3,
        border: Border.all(color: AppColors.border2),
        borderRadius: BorderRadius.circular(5),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            note.topic,
            style: GoogleFonts.firaCode(
              fontSize: 10,
              color: accent,
              fontWeight: FontWeight.w600,
              letterSpacing: 0.04,
            ),
          ),
          const SizedBox(height: 5),
          Text(
            note.body,
            style: GoogleFonts.outfit(
              fontSize: 12,
              color: AppColors.text2,
              height: 1.6,
            ),
          ),
        ],
      ),
    );
  }
}

class _SkillLists extends StatelessWidget {
  const _SkillLists({
    required this.objectives,
    required this.howTested,
    required this.practice,
    required this.accent,
  });
  final List<String> objectives;
  final List<String> howTested;
  final List<String> practice;
  final Color accent;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 12),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (objectives.isNotEmpty) ...[
            _SkillSection(
              label: 'OBJECTIVES',
              items: objectives,
              accent: accent,
              bullet: '→',
            ),
            const SizedBox(height: 10),
          ],
          if (howTested.isNotEmpty) ...[
            _SkillSection(
              label: 'HOW THIS IS TESTED',
              items: howTested,
              accent: accent,
              bullet: '·',
            ),
            const SizedBox(height: 10),
          ],
          if (practice.isNotEmpty)
            _SkillSection(
              label: 'PRACTICE BEFORE MOVING ON',
              items: practice,
              accent: accent,
              bullet: '□',
            ),
        ],
      ),
    );
  }
}

class _SkillSection extends StatelessWidget {
  const _SkillSection({
    required this.label,
    required this.items,
    required this.accent,
    required this.bullet,
  });
  final String label;
  final List<String> items;
  final Color accent;
  final String bullet;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: AppColors.bg3,
        border: Border.all(color: AppColors.border2),
        borderRadius: BorderRadius.circular(5),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: GoogleFonts.firaCode(
              fontSize: 9,
              color: accent,
              letterSpacing: 0.12,
            ),
          ),
          const SizedBox(height: 6),
          for (final item in items)
            Padding(
              padding: const EdgeInsets.only(bottom: 4),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    '$bullet  ',
                    style: GoogleFonts.firaCode(
                      fontSize: 11,
                      color: accent.withValues(alpha: 0.6),
                    ),
                  ),
                  Expanded(
                    child: Text(
                      item,
                      style: GoogleFonts.outfit(
                        fontSize: 12.5,
                        color: AppColors.text2,
                        height: 1.55,
                      ),
                    ),
                  ),
                ],
              ),
            ),
        ],
      ),
    );
  }
}

class _FreeResponseBank extends StatefulWidget {
  const _FreeResponseBank({
    required this.title,
    required this.questions,
    required this.accent,
    this.showTitle = true,
  });
  final String title;
  final List<FreeResponseQuestion> questions;
  final Color accent;
  final bool showTitle;

  @override
  State<_FreeResponseBank> createState() => _FreeResponseBankState();
}

class _FreeResponseBankState extends State<_FreeResponseBank> {
  final Map<int, bool> _revealed = {};
  final Map<int, bool?> _marked = {}; // true=right, false=wrong, null=unmarked

  int get _right => _marked.values.where((v) => v == true).length;
  int get _wrong => _marked.values.where((v) => v == false).length;
  int get _total => widget.questions.length;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (widget.showTitle && widget.title.isNotEmpty) ...[
          Row(
            children: [
              Expanded(
                child: Text(
                  widget.title.toUpperCase(),
                  style: GoogleFonts.firaCode(
                    fontSize: 9,
                    color: AppColors.text3,
                    letterSpacing: 0.12,
                  ),
                ),
              ),
              Text(
                '$_right right · $_wrong wrong · ${_total - _right - _wrong} unmarked',
                style: GoogleFonts.firaCode(
                  fontSize: 9,
                  color: AppColors.text3,
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
        ],
        for (int i = 0; i < widget.questions.length; i++) ...[
          _FRQCard(
            index: i,
            question: widget.questions[i],
            revealed: _revealed[i] ?? false,
            mark: _marked[i],
            accent: widget.accent,
            onReveal: () => setState(() => _revealed[i] = true),
            onMark: (val) => setState(() => _marked[i] = val),
          ),
          if (i < widget.questions.length - 1)
            const Divider(color: AppColors.border, height: 16),
        ],
        const SizedBox(height: 4),
        Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            InkWell(
              onTap: () => setState(() {
                _revealed.clear();
                _marked.clear();
              }),
              borderRadius: BorderRadius.circular(3),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  border: Border.all(color: AppColors.border2),
                  borderRadius: BorderRadius.circular(3),
                ),
                child: Text(
                  'Reset',
                  style: GoogleFonts.firaCode(
                    fontSize: 10,
                    color: AppColors.text3,
                  ),
                ),
              ),
            ),
          ],
        ),
      ],
    );
  }
}

class _FRQCard extends StatelessWidget {
  const _FRQCard({
    required this.index,
    required this.question,
    required this.revealed,
    required this.mark,
    required this.accent,
    required this.onReveal,
    required this.onMark,
  });
  final int index;
  final FreeResponseQuestion question;
  final bool revealed;
  final bool? mark;
  final Color accent;
  final VoidCallback onReveal;
  final ValueChanged<bool?> onMark;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Question stem
        Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Q${index + 1}  ',
              style: GoogleFonts.firaCode(
                fontSize: 10,
                color: accent,
                fontWeight: FontWeight.w600,
              ),
            ),
            Expanded(
              child: Text(
                question.stem,
                style: GoogleFonts.outfit(
                  fontSize: 13,
                  color: AppColors.text,
                  height: 1.6,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 8),

        // Reveal / model answer
        AnimatedSize(
          duration: const Duration(milliseconds: 220),
          curve: Curves.easeOut,
          child: revealed
              ? Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.white.withValues(alpha: 0.03),
                    borderRadius: BorderRadius.circular(4),
                    border: Border(
                      left: BorderSide(
                        color: mark == true
                            ? const Color(0xFF4ade80)
                            : mark == false
                                ? const Color(0xFFf87171)
                                : accent,
                        width: 2,
                      ),
                    ),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'MODEL ANSWER CHECKLIST',
                        style: GoogleFonts.firaCode(
                          fontSize: 9,
                          color: AppColors.text3,
                          letterSpacing: 0.1,
                        ),
                      ),
                      const SizedBox(height: 8),
                      for (final pt in question.modelPoints)
                        Padding(
                          padding: const EdgeInsets.only(bottom: 4),
                          child: Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                '✓  ',
                                style: GoogleFonts.firaCode(
                                  fontSize: 11,
                                  color: const Color(0xFF4ade80),
                                ),
                              ),
                              Expanded(
                                child: Text(
                                  pt,
                                  style: GoogleFonts.outfit(
                                    fontSize: 12.5,
                                    color: AppColors.text2,
                                    height: 1.55,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                    ],
                  ),
                )
              : const SizedBox.shrink(),
        ),
        const SizedBox(height: 8),

        // Action row
        Row(
          children: [
            if (!revealed)
              _ActionButton(
                label: 'Reveal answer',
                color: accent.withValues(alpha: 0.15),
                textColor: accent,
                onTap: onReveal,
              )
            else ...[
              _ActionButton(
                label: '✓ Got it right',
                color: mark == true
                    ? const Color(0xFF4ade80).withValues(alpha: 0.18)
                    : AppColors.bg3,
                textColor: mark == true
                    ? const Color(0xFF4ade80)
                    : AppColors.text3,
                onTap: () => onMark(mark == true ? null : true),
              ),
              const SizedBox(width: 6),
              _ActionButton(
                label: '✕ Got it wrong',
                color: mark == false
                    ? const Color(0xFFf87171).withValues(alpha: 0.18)
                    : AppColors.bg3,
                textColor: mark == false
                    ? const Color(0xFFf87171)
                    : AppColors.text3,
                onTap: () => onMark(mark == false ? null : false),
              ),
            ],
          ],
        ),
      ],
    );
  }
}

class _ActionButton extends StatelessWidget {
  const _ActionButton({
    required this.label,
    required this.color,
    required this.textColor,
    required this.onTap,
  });
  final String label;
  final Color color;
  final Color textColor;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        decoration: BoxDecoration(
          color: color,
          border: Border.all(color: AppColors.border2),
          borderRadius: BorderRadius.circular(4),
        ),
        child: Text(
          label,
          style: GoogleFonts.firaCode(
            fontSize: 10,
            color: textColor,
            letterSpacing: 0.04,
          ),
        ),
      ),
    );
  }
}
