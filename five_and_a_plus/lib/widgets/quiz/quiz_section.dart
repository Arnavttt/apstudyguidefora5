// lib/widgets/quiz/quiz_section.dart
//
// ChangeNotifierProvider wrapping the full quiz section UI.
// Owns one QuizController per quiz section so state is fully isolated.
// Rebuilds only its own subtree when a question is answered.

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';

import '../../models/content_block.dart';
import '../../theme/app_theme.dart';
import 'quiz_controller.dart';
import 'quiz_question_widget.dart';

class QuizSection extends StatelessWidget {
  const QuizSection({super.key, required this.block});
  final QuizBlock block;

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => QuizController(),
      child: _QuizSectionBody(block: block),
    );
  }
}

class _QuizSectionBody extends StatelessWidget {
  const _QuizSectionBody({required this.block});
  final QuizBlock block;

  @override
  Widget build(BuildContext context) {
    final controller = context.watch<QuizController>();
    final accent = Theme.of(context).extension<AccentTheme>()?.accentColor ?? AppColors.gold;

    // Build correctness list for score calculation
    final correctness = block.questions
        .map((q) {
          final si = controller.selectedFor(block.questions.indexOf(q));
          if (si == null) return false;
          return q.choices[si].isCorrect;
        })
        .toList();

    final answeredCount = controller.answered.length;
    final correctCount = correctness.where((c) => c).length;
    final totalCount = block.questions.length;

    return Container(
      decoration: BoxDecoration(
        color: AppColors.bg2,
        border: Border.all(color: AppColors.border),
        borderRadius: BorderRadius.circular(8),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.1),
            blurRadius: 4,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header bar
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            decoration: BoxDecoration(
              color: AppColors.bg3,
              borderRadius: const BorderRadius.vertical(top: Radius.circular(8)),
              border: Border(bottom: BorderSide(color: AppColors.border)),
            ),
            child: Row(
              children: [
                Text(
                  '📝  Unit Quiz',
                  style: GoogleFonts.firaCode(
                    fontSize: 11,
                    color: accent,
                    fontWeight: FontWeight.w600,
                    letterSpacing: 0.08,
                  ),
                ),
                const Spacer(),
                // Score display
                Text(
                  answeredCount == 0
                      ? '0/$totalCount answered'
                      : '$correctCount/$answeredCount correct',
                  style: GoogleFonts.firaCode(fontSize: 11, color: AppColors.text3),
                ),
                const SizedBox(width: 12),
                // Reset button
                InkWell(
                  onTap: controller.reset,
                  borderRadius: BorderRadius.circular(3),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(
                      border: Border.all(color: AppColors.border2),
                      borderRadius: BorderRadius.circular(3),
                    ),
                    child: Text(
                      'Reset',
                      style: GoogleFonts.firaCode(fontSize: 10, color: AppColors.text3),
                    ),
                  ),
                ),
              ],
            ),
          ),

          // Questions
          Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                for (int i = 0; i < block.questions.length; i++) ...[
                  QuizQuestionWidget(
                    question: block.questions[i],
                    questionIndex: i,
                  ),
                  if (i < block.questions.length - 1)
                    Divider(color: AppColors.border, height: 20),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}
