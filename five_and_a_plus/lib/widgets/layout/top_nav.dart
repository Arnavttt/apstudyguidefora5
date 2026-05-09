import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../theme/app_theme.dart';
import '../../models/unit.dart';

// ---------------------------------------------------------------------------
// TopNav — sticky app bar for subject pages
//
// On the home screen a simpler version is inlined. On subject pages this
// renders the brand on the left and horizontal unit-jump links on the right.
// Each link calls Scrollable.ensureVisible on the unit's GlobalKey.
// ---------------------------------------------------------------------------

class TopNav extends StatelessWidget {
  const TopNav({
    super.key,
    required this.unitKeys,
    required this.units,
    this.onHome,
  });

  final List<GlobalKey> unitKeys;
  final List<Unit> units;
  final VoidCallback? onHome;

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
    final accentTheme = Theme.of(context).extension<AccentTheme>();
    final accent = accentTheme?.accentColor ?? AppColors.gold;

    return Container(
      height: 52,
      decoration: const BoxDecoration(
        color: Color(0xF20f172a), // 95% opaque bg
        border: Border(bottom: BorderSide(color: AppColors.border)),
      ),
      child: Row(
        children: [
          const SizedBox(width: 16),
          // Brand / back-to-home
          GestureDetector(
            onTap: onHome ?? () => context.go('/'),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.arrow_back_ios, size: 12, color: AppColors.text3),
                const SizedBox(width: 4),
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
              ],
            ),
          ),
          const SizedBox(width: 16),
          // Unit links (scrollable row)
          Expanded(
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: [
                  for (int i = 0; i < units.length; i++)
                    _UnitNavLink(
                      label: units[i].title,
                      accentColor: accent,
                      onTap: () => _jumpTo(unitKeys[i]),
                    ),
                ],
              ),
            ),
          ),
          const SizedBox(width: 8),
        ],
      ),
    );
  }
}

class _UnitNavLink extends StatefulWidget {
  const _UnitNavLink({
    required this.label,
    required this.accentColor,
    required this.onTap,
  });

  final String label;
  final Color accentColor;
  final VoidCallback onTap;

  @override
  State<_UnitNavLink> createState() => _UnitNavLinkState();
}

class _UnitNavLinkState extends State<_UnitNavLink> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: GestureDetector(
        onTap: widget.onTap,
        child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 2),
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
          decoration: BoxDecoration(
            color: _hovered ? widget.accentColor.withValues(alpha: 0.07) : Colors.transparent,
            borderRadius: BorderRadius.circular(4),
          ),
          child: Text(
            widget.label,
            style: GoogleFonts.firaCode(
              fontSize: 10,
              color: _hovered ? widget.accentColor : AppColors.text3,
              letterSpacing: 0.04,
            ),
          ),
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// HomeTopNav — simplified nav for the home screen
// ---------------------------------------------------------------------------

class HomeTopNav extends StatelessWidget {
  const HomeTopNav({
    super.key,
    this.onMenuTap,
    required this.onScrollTo,
    required this.catalogKey,
    required this.methodsKey,
    required this.devKey,
    required this.reviewKey,
  });

  final VoidCallback? onMenuTap;
  final void Function(GlobalKey) onScrollTo;
  final GlobalKey catalogKey;
  final GlobalKey methodsKey;
  final GlobalKey devKey;
  final GlobalKey reviewKey;

  @override
  Widget build(BuildContext context) {
    final isNarrow = MediaQuery.of(context).size.width <= 680;
    return Container(
      height: 60,
      decoration: const BoxDecoration(
        color: Color(0xF20f172a),
        border: Border(bottom: BorderSide(color: AppColors.border)),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 24),
      child: Row(
        children: [
          // Brand
          Text(
            'Five & A+',
            style: GoogleFonts.syne(
              fontSize: 20,
              fontWeight: FontWeight.w800,
              foreground: Paint()
                ..shader = const LinearGradient(
                  colors: [AppColors.gold, AppColors.accent],
                ).createShader(const Rect.fromLTWH(0, 0, 120, 24)),
            ),
          ),
          const Spacer(),
          // Nav links on wide screens; hamburger on narrow screens
          if (isNarrow)
            IconButton(
              onPressed: onMenuTap,
              icon: const Icon(Icons.menu, color: AppColors.text3),
              tooltip: 'Open navigation',
            )
          else
            Row(
              children: [
                _HomeNavLink(label: 'AP Guides', onTap: () => onScrollTo(catalogKey)),
                _HomeNavLink(label: 'College', onTap: () => onScrollTo(catalogKey)),
                _HomeNavLink(label: 'Methods', onTap: () => onScrollTo(methodsKey)),
                _HomeNavLink(label: 'About', onTap: () => onScrollTo(devKey)),
                _HomeNavLink(label: 'Reviews', onTap: () => onScrollTo(reviewKey)),
              ],
            ),
        ],
      ),
    );
  }
}

class _HomeNavLink extends StatefulWidget {
  const _HomeNavLink({required this.label, required this.onTap});
  final String label;
  final VoidCallback onTap;

  @override
  State<_HomeNavLink> createState() => _HomeNavLinkState();
}

class _HomeNavLinkState extends State<_HomeNavLink> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 2),
        child: TextButton(
          onPressed: widget.onTap,
          style: TextButton.styleFrom(
            backgroundColor: _hovered ? AppColors.gold.withValues(alpha: 0.07) : Colors.transparent,
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
            minimumSize: Size.zero,
            tapTargetSize: MaterialTapTargetSize.shrinkWrap,
          ),
          child: Text(
            widget.label,
            style: GoogleFonts.firaCode(
              fontSize: 11,
              color: _hovered ? AppColors.gold : AppColors.text3,
              letterSpacing: 0.04,
            ),
          ),
        ),
      ),
    );
  }
}
