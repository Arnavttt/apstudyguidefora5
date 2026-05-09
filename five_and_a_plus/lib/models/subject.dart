import 'package:flutter/material.dart';
import 'unit.dart';
import '../theme/app_theme.dart';

@immutable
class Subject {
  const Subject({
    required this.id,
    required this.title,
    required this.subtitle,
    required this.accentColor,
    required this.accentFaint,
    required this.category,
    required this.badge,
    required this.icon,
    required this.pills,
    required this.meta,
    this.units = const [],
  });

  final String id;
  final String title;
  final String subtitle;
  final Color accentColor;
  final Color accentFaint;
  final String category; // e.g. 'History & Social Science'
  final String badge; // e.g. 'HISTORY', 'AP STEM'
  final String icon; // emoji
  final List<String> pills;
  final String meta; // bottom-left label
  final List<Unit> units;

  /// Returns an [AccentTheme] built from this subject's colors.
  AccentTheme get accentTheme => AccentTheme(
        accentColor: accentColor,
        accentFaint: accentFaint,
      );

  Subject withUnits(List<Unit> units) => Subject(
        id: id,
        title: title,
        subtitle: subtitle,
        accentColor: accentColor,
        accentFaint: accentFaint,
        category: category,
        badge: badge,
        icon: icon,
        pills: pills,
        meta: meta,
        units: units,
      );
}
