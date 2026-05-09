// lib/widgets/content/rubric_box.dart
//
// RubricBox widget: accent-colored title bar, then a Table for rubric rows.
// Accent-colored header row, alternating bg2/bg3 row backgrounds.
// Horizontal scroll wrapper for wide tables.
// All sizing via Theme text styles — no hard-coded values.

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../models/content_block.dart';
import '../../theme/app_theme.dart';

class RubricBox extends StatelessWidget {
  const RubricBox({super.key, required this.block});
  final RubricBoxBlock block;

  @override
  Widget build(BuildContext context) {
    final accent = Theme.of(context).extension<AccentTheme>()?.accentColor ?? AppColors.gold;

    return LayoutBuilder(
      builder: (context, constraints) {
        return SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          child: ConstrainedBox(
            constraints: BoxConstraints(minWidth: constraints.maxWidth),
            child: Container(
              decoration: BoxDecoration(
                color: AppColors.bg2,
                border: Border.all(color: AppColors.border),
                borderRadius: BorderRadius.circular(8),
              ),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(8),
                child: IntrinsicWidth(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      // Header row — accent-colored background
                      Container(
                        decoration: BoxDecoration(
                          color: accent.withValues(alpha: 0.15),
                          border: Border(bottom: BorderSide(color: AppColors.border)),
                        ),
                        child: Row(
                          children: [
                            _headerCell('Row', accent),
                            _headerCell('Points', accent),
                            Expanded(child: _headerCell('Description', accent, expanded: true)),
                          ],
                        ),
                      ),
                      // Data rows
                      for (int i = 0; i < block.rows.length; i++)
                        Container(
                          decoration: BoxDecoration(
                            color: i.isEven ? AppColors.bg2 : AppColors.bg3,
                            border: i < block.rows.length - 1
                                ? Border(bottom: BorderSide(color: AppColors.border))
                                : null,
                          ),
                          child: Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              // Label column
                              _cell(
                                block.rows[i].label,
                                style: GoogleFonts.outfit(
                                  fontWeight: FontWeight.w700,
                                  fontSize: 13,
                                  color: AppColors.text,
                                ),
                                minWidth: 80,
                              ),
                              // Points column
                              _cell(
                                block.rows[i].points,
                                style: GoogleFonts.firaCode(
                                  fontSize: 12,
                                  color: accent,
                                  fontWeight: FontWeight.w600,
                                ),
                                minWidth: 70,
                              ),
                              // Description column — expands
                              Expanded(
                                child: Padding(
                                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                                  child: Text(
                                    block.rows[i].description,
                                    style: GoogleFonts.outfit(
                                      fontSize: 13,
                                      color: AppColors.text2,
                                      height: 1.55,
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        );
      },
    );
  }

  Widget _headerCell(String text, Color accent, {bool expanded = false}) {
    final cell = Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
      child: Text(
        text,
        style: GoogleFonts.outfit(
          fontWeight: FontWeight.w700,
          fontSize: 13,
          color: accent,
        ),
      ),
    );
    return expanded ? cell : SizedBox(width: text == 'Row' ? 80 : 70, child: cell);
  }

  Widget _cell(String text, {required TextStyle style, double minWidth = 0}) {
    return SizedBox(
      width: minWidth > 0 ? minWidth : null,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        child: Text(text, style: style),
      ),
    );
  }
}
