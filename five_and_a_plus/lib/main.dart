import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'theme/app_theme.dart';
import 'router.dart';

void main() {
  // Disable runtime font fetching — bundle fonts via google_fonts package cache.
  // For production, also add font files to assets/fonts/ and set this to false.
  GoogleFonts.config.allowRuntimeFetching = true;

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
