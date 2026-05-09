import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../theme/app_theme.dart';

// ---------------------------------------------------------------------------
// PageFooter — appears at the bottom of every screen
// ---------------------------------------------------------------------------

class PageFooter extends StatelessWidget {
  const PageFooter({super.key, this.showBackToHome = false});

  final bool showBackToHome;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      color: AppColors.bg2,
      padding: const EdgeInsets.symmetric(vertical: 32, horizontal: 24),
      child: Column(
        children: [
          // Back-to-home link (shown on subject pages)
          if (showBackToHome) ...[
            GestureDetector(
              onTap: () => context.go('/'),
              child: Text(
                '← Back to all guides',
                style: GoogleFonts.firaCode(
                  fontSize: 11,
                  color: AppColors.gold,
                  letterSpacing: 0.06,
                ),
              ),
            ),
            const SizedBox(height: 20),
          ],
          // Brand
          Text(
            'Five & A+',
            style: GoogleFonts.syne(
              fontSize: 16,
              fontWeight: FontWeight.w800,
              foreground: Paint()
                ..shader = const LinearGradient(
                  colors: [AppColors.gold, AppColors.accent],
                ).createShader(const Rect.fromLTWH(0, 0, 100, 20)),
            ),
          ),
          const SizedBox(height: 6),
          Text(
            'AP & COLLEGE REVIEW  ·  BUILT BY ARNAV SINHA  ·  WARWICK VALLEY HS CLASS OF 2027',
            style: GoogleFonts.firaCode(
              fontSize: 9,
              color: AppColors.text3,
              letterSpacing: 0.08,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 16),
          // Footer nav links
          Wrap(
            alignment: WrapAlignment.center,
            spacing: 4,
            runSpacing: 4,
            children: [
              _FooterLink(label: 'AP Guides', onTap: () => context.go('/')),
              _FooterLink(label: 'College', onTap: () => context.go('/')),
              _FooterLink(label: 'About', onTap: () => context.go('/')),
              _FooterLink(label: 'APUSH', onTap: () => context.push('/subject/apush')),
              _FooterLink(label: 'AP Lang', onTap: () => context.push('/subject/aplang')),
              _FooterLink(label: 'AP CSA', onTap: () => context.push('/subject/apcsa')),
              _FooterLink(label: 'Calc BC', onTap: () => context.push('/subject/calcbc')),
              _FooterLink(label: 'AP Bio', onTap: () => context.push('/subject/apbio')),
              _FooterLink(label: 'AP Chem', onTap: () => context.push('/subject/apchem')),
              _FooterLink(label: 'AP World', onTap: () => context.push('/subject/apworld')),
              _FooterLink(label: 'AP Gov', onTap: () => context.push('/subject/apgov')),
              _FooterLink(label: 'College Algebra', onTap: () => context.push('/subject/collegealgebra')),
              _FooterLink(label: 'Trig', onTap: () => context.push('/subject/collegetrig')),
            ],
          ),
        ],
      ),
    );
  }
}

class _FooterLink extends StatefulWidget {
  const _FooterLink({required this.label, required this.onTap});
  final String label;
  final VoidCallback onTap;

  @override
  State<_FooterLink> createState() => _FooterLinkState();
}

class _FooterLinkState extends State<_FooterLink> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: GestureDetector(
        onTap: widget.onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 3),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(3),
          ),
          child: Text(
            widget.label,
            style: GoogleFonts.firaCode(
              fontSize: 10,
              color: _hovered ? AppColors.gold : AppColors.text3,
              letterSpacing: 0.04,
            ),
          ),
        ),
      ),
    );
  }
}
