import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../theme/app_theme.dart';
import '../../models/subject.dart';
import '../../models/unit.dart';

// ---------------------------------------------------------------------------
// Masthead — full-bleed hero for subject pages
//
// Mirrors .masthead / .mh-inner from the HTML source.
// Shows: tag chip, subject title (Syne), subtitle, pill row of unit links.
// ---------------------------------------------------------------------------

class Masthead extends StatelessWidget {
  const Masthead({
    super.key,
    required this.subject,
    required this.unitKeys,
    required this.units,
  });

  final Subject subject;
  final List<GlobalKey> unitKeys;
  final List<Unit> units;

  void _jumpTo(GlobalKey key) {
    final ctx = key.currentContext;
    if (ctx != null) {
      Scrollable.ensureVisible(
        ctx,
        duration: const Duration(milliseconds: 400),
        curve: Curves.easeInOut,
        alignment: 0.0,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final accent = subject.accentColor;
    final accentFaint = subject.accentFaint;

    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            accentFaint.withValues(alpha: 0.4),
            AppColors.bg,
          ],
        ),
        border: Border(
          bottom: BorderSide(color: AppColors.border),
        ),
      ),
      padding: const EdgeInsets.fromLTRB(24, 48, 24, 36),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 800),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Tag chip
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                decoration: BoxDecoration(
                  color: accentFaint,
                  border: Border.all(color: accent.withValues(alpha: 0.35)),
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Text(
                  subject.badge,
                  style: GoogleFonts.firaCode(
                    fontSize: 10,
                    color: accent,
                    letterSpacing: 0.16,
                  ),
                ),
              ),
              const SizedBox(height: 20),
              // Subject title
              Text(
                subject.title,
                style: GoogleFonts.syne(
                  fontSize: 40,
                  fontWeight: FontWeight.w800,
                  color: AppColors.text,
                  height: 0.95,
                  letterSpacing: -0.04 * 40,
                ),
              ),
              const SizedBox(height: 12),
              // Subtitle
              Text(
                subject.subtitle,
                style: GoogleFonts.outfit(
                  fontSize: 15,
                  color: AppColors.text2,
                  height: 1.7,
                ),
              ),
              const SizedBox(height: 24),
              // Pill row — unit jump links
              Wrap(
                spacing: 6,
                runSpacing: 6,
                children: [
                  for (int i = 0; i < units.length; i++)
                    _UnitPill(
                      label: units[i].title,
                      accentColor: accent,
                      accentFaint: accentFaint,
                      onTap: () => _jumpTo(unitKeys[i]),
                    ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _UnitPill extends StatefulWidget {
  const _UnitPill({
    required this.label,
    required this.accentColor,
    required this.accentFaint,
    required this.onTap,
  });

  final String label;
  final Color accentColor;
  final Color accentFaint;
  final VoidCallback onTap;

  @override
  State<_UnitPill> createState() => _UnitPillState();
}

class _UnitPillState extends State<_UnitPill> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: GestureDetector(
        onTap: widget.onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 150),
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
          decoration: BoxDecoration(
            color: _hovered ? widget.accentFaint : AppColors.bg2,
            border: Border.all(
              color: _hovered ? widget.accentColor.withValues(alpha: 0.5) : AppColors.border2,
            ),
            borderRadius: BorderRadius.circular(20),
          ),
          child: Text(
            widget.label,
            style: GoogleFonts.firaCode(
              fontSize: 10,
              color: _hovered ? widget.accentColor : AppColors.text2,
              letterSpacing: 0.06,
            ),
          ),
        ),
      ),
    );
  }
}
