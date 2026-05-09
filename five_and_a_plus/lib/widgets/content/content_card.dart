// lib/widgets/content/content_card.dart
//
// ContentCard: rounded rectangle with 3px accent-color top border.
// Reads accent color from Theme.of(context).extension<AccentTheme>()
// — no color parameter needed, no prop-drilling.

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../models/content_block.dart';
import '../../theme/app_theme.dart';

class ContentCard extends StatelessWidget {
  const ContentCard({super.key, required this.data});
  final ContentCardData data;

  @override
  Widget build(BuildContext context) {
    final accent = Theme.of(context).extension<AccentTheme>()?.accentColor ?? AppColors.gold;

    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: AppColors.bg2,
        border: Border(
          top: BorderSide(color: accent, width: 3),
          right: const BorderSide(color: AppColors.border),
          left: const BorderSide(color: AppColors.border),
          bottom: const BorderSide(color: AppColors.border),
        ),
        borderRadius: BorderRadius.circular(6),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (data.icon != null) ...[
            Text(data.icon!, style: const TextStyle(fontSize: 20)),
            const SizedBox(height: 6),
          ],
          Text(
            data.title,
            style: GoogleFonts.firaCode(
              fontSize: 11,
              color: accent,
              fontWeight: FontWeight.w600,
              letterSpacing: 0.04,
            ),
          ),
          const SizedBox(height: 8),
          Text(
            data.body,
            style: GoogleFonts.outfit(
              fontSize: 13,
              color: AppColors.text2,
              height: 1.6,
            ),
          ),
        ],
      ),
    );
  }
}
