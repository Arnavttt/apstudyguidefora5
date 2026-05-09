// lib/widgets/quiz/quiz_question_widget.dart
//
// Renders a single quiz question with animated choice reveal.
// On selection: correct choice turns green, wrong turns red,
// the correct choice is highlighted if the user was wrong,
// and an explanation animates in below.

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';

import '../../models/content_block.dart';
import '../../theme/app_theme.dart';
import 'quiz_controller.dart';

class QuizQuestionWidget extends StatelessWidget {
  const QuizQuestionWidget({
    super.key,
    required this.question,
    required this.questionIndex,
  });

  final QuizQuestion question;
  final int questionIndex;

  @override
  Widget build(BuildContext context) {
    final controller = context.watch<QuizController>();
    final answered = controller.isAnswered(questionIndex);
    final selected = controller.selectedFor(questionIndex);
    final accent = Theme.of(context).extension<AccentTheme>()?.accentColor ?? AppColors.gold;

    // Find the correct choice index
    final correctIndex = question.choices.indexWhere((c) => c.isCorrect);
    final isCorrect = answered && selected == correctIndex;

    // Explanation text — from the correct choice
    final explanation = correctIndex >= 0 ? question.choices[correctIndex].explanation : '';

    return Padding(
      padding: const EdgeInsets.only(bottom: 20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Question text
          Text(
            '${questionIndex + 1}. ${question.question}',
            style: GoogleFonts.outfit(
              fontSize: 14,
              fontWeight: FontWeight.w600,
              color: AppColors.text,
              height: 1.65,
            ),
          ),
          const SizedBox(height: 10),

          // Choice tiles
          ...List.generate(question.choices.length, (ci) {
            final choice = question.choices[ci];
            final isSelected = answered && selected == ci;
            final isThisCorrect = choice.isCorrect;

            Color borderColor = AppColors.border;
            Color bgColor = AppColors.bg;
            Color textColor = AppColors.text2;

            if (answered) {
              if (isSelected && isThisCorrect) {
                // User selected the correct answer
                borderColor = const Color(0xFF4ade80);
                bgColor = const Color(0x0F4ADE80);
                textColor = const Color(0xFF4ade80);
              } else if (isSelected && !isThisCorrect) {
                // User selected the wrong answer
                borderColor = const Color(0xFFf87171);
                bgColor = const Color(0x0FF87171);
                textColor = const Color(0xFFf87171);
              } else if (!isSelected && isThisCorrect) {
                // Reveal the correct answer dimly
                borderColor = const Color(0x664ADE80);
                textColor = const Color(0x994ADE80);
              }
            }

            return Padding(
              padding: const EdgeInsets.only(bottom: 6),
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                decoration: BoxDecoration(
                  color: bgColor,
                  border: Border.all(color: borderColor),
                  borderRadius: BorderRadius.circular(4),
                ),
                child: InkWell(
                  onTap: answered ? null : () => controller.select(questionIndex, ci),
                  borderRadius: BorderRadius.circular(4),
                  hoverColor: accent.withValues(alpha: 0.05),
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          '${String.fromCharCode(65 + ci)})',
                          style: GoogleFonts.firaCode(
                            fontSize: 12,
                            color: textColor,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                        const SizedBox(width: 8),
                        Expanded(
                          child: Text(
                            choice.text,
                            style: GoogleFonts.outfit(
                              fontSize: 13,
                              color: textColor,
                              height: 1.5,
                            ),
                          ),
                        ),
                        if (answered && isSelected)
                          Padding(
                            padding: const EdgeInsets.only(left: 8),
                            child: Icon(
                              isThisCorrect ? Icons.check_circle_outline : Icons.cancel_outlined,
                              size: 16,
                              color: textColor,
                            ),
                          ),
                      ],
                    ),
                  ),
                ),
              ),
            );
          }),

          // Explanation (animated reveal)
          AnimatedSize(
            duration: const Duration(milliseconds: 250),
            curve: Curves.easeOut,
            child: answered && explanation.isNotEmpty
                ? Padding(
                    padding: const EdgeInsets.only(top: 8),
                    child: Container(
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.03),
                        borderRadius: BorderRadius.circular(4),
                        border: Border(
                          left: BorderSide(color: isCorrect ? const Color(0xFF4ade80) : accent, width: 2),
                        ),
                      ),
                      child: Text(
                        explanation,
                        style: GoogleFonts.outfit(
                          fontSize: 12.5,
                          color: AppColors.text2,
                          height: 1.65,
                        ),
                      ),
                    ),
                  )
                : const SizedBox.shrink(),
          ),
        ],
      ),
    );
  }
}
