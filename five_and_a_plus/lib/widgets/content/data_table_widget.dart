// lib/widgets/content/data_table_widget.dart
//
// Renders a DataTableBlock as a styled table widget matching the HTML .ctable
// CSS:
//   - bg2 background for the whole block
//   - bg3 / accent-colored header row with Fira Code uppercase labels
//   - Alternating bg2/bg3 row backgrounds
//   - First column in accent color, Fira Code; remaining columns in text2, Outfit
//   - Horizontal scroll wrapper for wide tables
//   - 1px border-bottom dividers between rows

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../models/content_block.dart';
import '../../theme/app_theme.dart';

class DataTableWidget extends StatelessWidget {
  const DataTableWidget({super.key, required this.block});

  final DataTableBlock block;

  @override
  Widget build(BuildContext context) {
    final accent = Theme.of(context).extension<AccentTheme>()?.accentColor ??
        AppColors.accent;

    return Container(
      margin: const EdgeInsets.symmetric(vertical: 8),
      decoration: BoxDecoration(
        color: AppColors.bg2,
        border: Border.all(color: AppColors.border, width: 1),
        borderRadius: BorderRadius.circular(6),
      ),
      child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: _buildTable(context, accent),
      ),
    );
  }

  Widget _buildTable(BuildContext context, Color accent) {
    final headers = block.headers;
    final rows = block.rows;

    return IntrinsicWidth(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // ── Header row ─────────────────────────────────────────────────────
          _HeaderRow(headers: headers, accent: accent),
          // ── Data rows ──────────────────────────────────────────────────────
          for (int i = 0; i < rows.length; i++)
            _DataRow(
              cells: rows[i],
              accent: accent,
              isEven: i.isEven,
              isLast: i == rows.length - 1,
            ),
        ],
      ),
    );
  }
}

// ── Header row ─────────────────────────────────────────────────────────────

class _HeaderRow extends StatelessWidget {
  const _HeaderRow({required this.headers, required this.accent});

  final List<String> headers;
  final Color accent;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: AppColors.bg3,
        borderRadius: BorderRadius.vertical(top: Radius.circular(5)),
      ),
      child: Row(
        children: headers.map((h) => _HeaderCell(text: h)).toList(),
      ),
    );
  }
}

class _HeaderCell extends StatelessWidget {
  const _HeaderCell({required this.text});
  final String text;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 9),
      child: ConstrainedBox(
        constraints: const BoxConstraints(minWidth: 80),
        child: Text(
          text,
          style: GoogleFonts.firaCode(
            fontSize: 10,
            color: AppColors.text2,
            letterSpacing: 0.04,
            fontWeight: FontWeight.w500,
          ),
        ),
      ),
    );
  }
}

// ── Data row ───────────────────────────────────────────────────────────────

class _DataRow extends StatelessWidget {
  const _DataRow({
    required this.cells,
    required this.accent,
    required this.isEven,
    required this.isLast,
  });

  final List<String> cells;
  final Color accent;
  final bool isEven;
  final bool isLast;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: isEven ? AppColors.bg2 : AppColors.bg3, // alternating stripe
        border: isLast
            ? null
            : const Border(
                bottom: BorderSide(color: AppColors.border, width: 1),
              ),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          for (int i = 0; i < cells.length; i++)
            _DataCell(
              text: cells[i],
              isFirst: i == 0,
              accent: accent,
            ),
        ],
      ),
    );
  }
}

class _DataCell extends StatelessWidget {
  const _DataCell({
    required this.text,
    required this.isFirst,
    required this.accent,
  });

  final String text;
  final bool isFirst;
  final Color accent;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      child: ConstrainedBox(
        constraints: const BoxConstraints(minWidth: 80, maxWidth: 320),
        child: isFirst
            ? Text(
                text,
                style: GoogleFonts.firaCode(
                  fontSize: 11,
                  color: accent,
                  height: 1.55,
                ),
              )
            : Text(
                text,
                style: GoogleFonts.outfit(
                  fontSize: 13,
                  color: AppColors.text2,
                  height: 1.55,
                ),
              ),
      ),
    );
  }
}
