// lib/widgets/content/code_block.dart
//
// Renders a List<CodeSpan> as a syntax-highlighted code block using RichText
// with Fira Code font. Each CodeSpanKind maps to a distinct color matching the
// HTML source's .kw / .str / .num / .cmt / .hl / plain CSS classes.
//
// Colors:
//   keyword   → #93c5fd  (blue-300)
//   string    → #86efac  (green-300)
//   number    → #fca5a5  (red-300)
//   comment   → #64748b  (slate-500) + italic
//   highlight → #fde047  (yellow-300)  [also maps to --AC usage in HTML .hl]
//   plain     → --text (#f1f5f9)
//
// The block has a --bg3 background, 3px accent-color left border, rounded
// corners on the right, and wraps in a SingleChildScrollView for wide content.

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../models/content_block.dart';
import '../../theme/app_theme.dart';

class CodeBlockWidget extends StatelessWidget {
  const CodeBlockWidget({super.key, required this.block});

  final CodeBlock block;

  @override
  Widget build(BuildContext context) {
    final accent = Theme.of(context).extension<AccentTheme>()?.accentColor ??
        AppColors.accent;

    return Container(
      margin: const EdgeInsets.symmetric(vertical: 8),
      decoration: BoxDecoration(
        color: AppColors.bg3,
        border: Border(
          left: BorderSide(color: accent, width: 3),
          top: BorderSide(color: AppColors.border, width: 1),
          right: BorderSide(color: AppColors.border, width: 1),
          bottom: BorderSide(color: AppColors.border, width: 1),
        ),
        borderRadius: const BorderRadius.horizontal(right: Radius.circular(5)),
      ),
      child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
        child: RichText(
          text: TextSpan(
            style: GoogleFonts.firaCode(
              fontSize: 12.5,
              height: 1.85,
              color: AppColors.text,
            ),
            children: block.spans.map(_buildSpan).toList(),
          ),
        ),
      ),
    );
  }

  InlineSpan _buildSpan(CodeSpan span) {
    switch (span.kind) {
      case CodeSpanKind.keyword:
        return TextSpan(
          text: span.text,
          style: const TextStyle(color: Color(0xFF93c5fd)),
        );
      case CodeSpanKind.string:
        return TextSpan(
          text: span.text,
          style: const TextStyle(color: Color(0xFF86efac)),
        );
      case CodeSpanKind.number:
        return TextSpan(
          text: span.text,
          style: const TextStyle(color: Color(0xFFfca5a5)),
        );
      case CodeSpanKind.comment:
        return TextSpan(
          text: span.text,
          style: const TextStyle(
            color: Color(0xFF64748b),
            fontStyle: FontStyle.italic,
          ),
        );
      case CodeSpanKind.highlight:
        // In the HTML .hl maps to var(--AC), so we use the accent color.
        // Since we don't have context here we use the yellow highlight color
        // as a static fallback consistent with the HTML's visual intent.
        return TextSpan(
          text: span.text,
          style: const TextStyle(color: Color(0xFFfde047)),
        );
      case CodeSpanKind.plain:
        return TextSpan(
          text: span.text,
          style: const TextStyle(color: AppColors.text),
        );
    }
  }
}
