import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

// ---------------------------------------------------------------------------
// Color tokens — matches the CSS custom properties in the HTML source
// ---------------------------------------------------------------------------

class AppColors {
  AppColors._();

  // Backgrounds
  static const Color bg = Color(0xFF0f172a);
  static const Color bg2 = Color(0xFF1e293b);
  static const Color bg3 = Color(0xFF334155);

  // Borders
  static const Color border = Color(0xFF334155);
  static const Color border2 = Color(0xFF475569);

  // Text
  static const Color text = Color(0xFFf1f5f9);
  static const Color text2 = Color(0xFF94a3b8);
  static const Color text3 = Color(0xFF64748b);

  // Brand accents used on the home screen (gold + blue gradient)
  static const Color gold = Color(0xFFf59e0b);
  static const Color accent = Color(0xFF3b82f6);
  static const Color green = Color(0xFF10b981);
}

// ---------------------------------------------------------------------------
// AccentTheme — ThemeExtension for per-subject accent colors
// ---------------------------------------------------------------------------

@immutable
class AccentTheme extends ThemeExtension<AccentTheme> {
  const AccentTheme({
    required this.accentColor,
    required this.accentFaint,
  });

  final Color accentColor;
  final Color accentFaint;

  // Default (home screen) — gold
  static const AccentTheme defaultAccent = AccentTheme(
    accentColor: AppColors.gold,
    accentFaint: Color(0x26F59E0B), // ~15% opacity
  );

  @override
  AccentTheme copyWith({Color? accentColor, Color? accentFaint}) {
    return AccentTheme(
      accentColor: accentColor ?? this.accentColor,
      accentFaint: accentFaint ?? this.accentFaint,
    );
  }

  @override
  AccentTheme lerp(AccentTheme? other, double t) {
    if (other == null) return this;
    return AccentTheme(
      accentColor: Color.lerp(accentColor, other.accentColor, t)!,
      accentFaint: Color.lerp(accentFaint, other.accentFaint, t)!,
    );
  }
}

// ---------------------------------------------------------------------------
// Text styles
// ---------------------------------------------------------------------------

class AppTextStyles {
  AppTextStyles._();

  // Syne — display / headings
  static TextStyle syneDisplay({double fontSize = 36, FontWeight fontWeight = FontWeight.w800}) =>
      GoogleFonts.syne(fontSize: fontSize, fontWeight: fontWeight, color: AppColors.text, letterSpacing: -0.04 * fontSize);

  static TextStyle syneHeading({double fontSize = 22, FontWeight fontWeight = FontWeight.w800}) =>
      GoogleFonts.syne(fontSize: fontSize, fontWeight: fontWeight, color: AppColors.text, letterSpacing: -0.02 * fontSize);

  // Outfit — body
  static TextStyle body({double fontSize = 14, Color color = AppColors.text, FontWeight fontWeight = FontWeight.w400}) =>
      GoogleFonts.outfit(fontSize: fontSize, fontWeight: fontWeight, color: color, height: 1.6);

  static TextStyle bodySmall({double fontSize = 12, Color color = AppColors.text2}) =>
      GoogleFonts.outfit(fontSize: fontSize, color: color, height: 1.6);

  // Fira Code — mono / labels
  static TextStyle mono({double fontSize = 11, Color color = AppColors.text3, double letterSpacing = 0.08}) =>
      GoogleFonts.firaCode(fontSize: fontSize, color: color, letterSpacing: letterSpacing);
}

// ---------------------------------------------------------------------------
// AppTheme — builds the ThemeData used in MaterialApp
// ---------------------------------------------------------------------------

class AppTheme {
  AppTheme._();

  static ThemeData get dark {
    final base = ThemeData.dark(useMaterial3: true);

    return base.copyWith(
      scaffoldBackgroundColor: AppColors.bg,
      colorScheme: const ColorScheme.dark(
        surface: AppColors.bg,
        surfaceContainerHighest: AppColors.bg3,
        primary: AppColors.gold,
        secondary: AppColors.accent,
        onSurface: AppColors.text,
        outline: AppColors.border,
      ),
      extensions: const [AccentTheme.defaultAccent],
      dividerColor: AppColors.border,
      cardColor: AppColors.bg2,
      textTheme: TextTheme(
        displayLarge: AppTextStyles.syneDisplay(fontSize: 56),
        displayMedium: AppTextStyles.syneDisplay(fontSize: 44),
        displaySmall: AppTextStyles.syneDisplay(fontSize: 36),
        headlineLarge: AppTextStyles.syneHeading(fontSize: 28),
        headlineMedium: AppTextStyles.syneHeading(fontSize: 22),
        headlineSmall: AppTextStyles.syneHeading(fontSize: 18),
        titleLarge: AppTextStyles.body(fontSize: 16, fontWeight: FontWeight.w700),
        titleMedium: AppTextStyles.body(fontSize: 14, fontWeight: FontWeight.w600),
        titleSmall: AppTextStyles.body(fontSize: 13, fontWeight: FontWeight.w600),
        bodyLarge: AppTextStyles.body(fontSize: 15),
        bodyMedium: AppTextStyles.body(fontSize: 14),
        bodySmall: AppTextStyles.bodySmall(fontSize: 12),
        labelLarge: AppTextStyles.mono(fontSize: 11),
        labelMedium: AppTextStyles.mono(fontSize: 10),
        labelSmall: AppTextStyles.mono(fontSize: 9),
      ),
    );
  }
}
