import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'theme/app_theme.dart';
import 'router.dart';

void main() {
  // Disable runtime font fetching so the app does not depend on network
  // availability for fonts. Google Fonts are cached by the package at build
  // time; add font files to assets/fonts/ to fully bundle them offline.
  GoogleFonts.config.allowRuntimeFetching = false;

  runApp(const FiveAndAPlusApp());
}

class FiveAndAPlusApp extends StatelessWidget {
  const FiveAndAPlusApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Five & A+ | AP & College Review',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.dark,
      routerConfig: appRouter,
    );
  }
}
