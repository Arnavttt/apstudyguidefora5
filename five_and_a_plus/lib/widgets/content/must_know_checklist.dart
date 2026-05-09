// lib/widgets/content/must_know_checklist.dart
//
// MustKnowChecklist — stateful widget backed by ephemeral local List<bool> state.
// Accent-colored checkboxes; strikethrough TextStyle on checked items.
// State is session-only — no persistence needed.

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../models/content_block.dart';
import '../../theme/app_theme.dart';

class MustKnowChecklist extends StatefulWidget {
  const MustKnowChecklist({super.key, required this.block});
  final MustKnowBlock block;

  @override
  State<MustKnowChecklist> createState() => _MustKnowChecklistState();
}

class _MustKnowChecklistState extends State<MustKnowChecklist> {
  late final List<bool> _checked;

  @override
  void initState() {
    super.initState();
    _checked = List.filled(widget.block.items.length, false);
  }

  @override
  Widget build(BuildContext context) {
    final accent =
        Theme.of(context).extension<AccentTheme>()?.accentColor ?? AppColors.gold;

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
          Row(
            children: [
              Text(
                '⚡ ',
                style: TextStyle(color: accent, fontSize: 14),
              ),
              Text(
                'Must-Know Checklist',
                style: GoogleFonts.syne(
                  fontSize: 13,
                  fontWeight: FontWeight.w800,
                  color: accent,
                  letterSpacing: 0.08,
                ),
              ),
            ],
          ),
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
                  height: 1.6,
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
