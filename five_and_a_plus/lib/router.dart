import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'screens/home_screen.dart';
import 'screens/subject_screen.dart';
import 'data/subjects_registry.dart';
import 'theme/app_theme.dart';

// ---------------------------------------------------------------------------
// AppRouter — go_router configuration
//
// Routes:
//   /                      → HomeScreen
//   /subject/:id           → SubjectScreen(subject: subjectById[id])
// ---------------------------------------------------------------------------

final GoRouter appRouter = GoRouter(
  initialLocation: '/',
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => const HomeScreen(),
    ),
    GoRoute(
      path: '/subject/:id',
      builder: (context, state) {
        final id = state.pathParameters['id'] ?? '';
        final subject = subjectById[id];
        if (subject == null) {
          return _NotFoundScreen(id: id);
        }
        return SubjectScreen(subject: subject);
      },
    ),
  ],
);

class _NotFoundScreen extends StatelessWidget {
  const _NotFoundScreen({required this.id});
  final String id;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.bg,
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text('404 — Subject "$id" not found.',
                style: const TextStyle(color: Colors.white70, fontSize: 16)),
            const SizedBox(height: 16),
            TextButton(
              onPressed: () => context.go('/'),
              child: const Text('← Back to home'),
            ),
          ],
        ),
      ),
    );
  }
}
