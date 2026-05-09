// lib/widgets/content/step_box.dart
//
// StepBox widget: numbered vertical list, accent-colored circle badges.
// Used for Heimler's 7-step process, essay structures, worked examples.
// All colors via Theme.of(context).extension<AccentTheme>().

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../models/content_block.dart';
import '../../theme/app_theme.dart';

class StepBox extends StatelessWidget {
  const StepBox({super.key, required this.block});
  final StepBoxBlock block;

  @override
  Widget build(BuildContext context) {
    final accent = Theme.of(context).extension<AccentTheme>()?.accentColor ?? AppColors.gold;

    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: AppColors.bg2,
        border: Border.all(color: AppColors.border),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Title
          Text(
            block.title,
            style: GoogleFonts.firaCode(
              fontSize: 11,
              color: accent,
              letterSpacing: 0.05,
              fontWeight: FontWeight.w600,
            ),
          ),
          const SizedBox(height: 16),

          // Steps
          for (int i = 0; i < block.steps.length; i++) ...[
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Accent-colored circle badge
                Container(
                  width: 26,
                  height: 26,
                  decoration: BoxDecoration(color: accent, shape: BoxShape.circle),
                  alignment: Alignment.center,
                  child: Text(
                    '${i + 1}',
                    style: GoogleFonts.firaCode(
                      fontSize: 11,
                      fontWeight: FontWeight.w700,
                      color: Colors.black87,
                    ),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.only(top: 3),
                    child: Text(
                      block.steps[i],
                      style: GoogleFonts.outfit(
                        fontSize: 13.5,
                        color: AppColors.text2,
                        height: 1.65,
                      ),
                    ),
                  ),
                ),
              ],
            ),
            if (i < block.steps.length - 1) const SizedBox(height: 14),
          ],
        ],
      ),
    );
  }
}
