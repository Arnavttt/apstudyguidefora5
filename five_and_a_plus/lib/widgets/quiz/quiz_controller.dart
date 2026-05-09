// lib/widgets/quiz/quiz_controller.dart
//
// ChangeNotifier holding quiz state for a single quiz section.
// Each QuizSection owns one QuizController scoped via ChangeNotifierProvider
// so answering one question only rebuilds that quiz section's subtree.

import 'package:flutter/foundation.dart';

class QuizController extends ChangeNotifier {
  // Maps question index → selected choice index (null = unanswered)
  final Map<int, int?> _selectedAnswers = {};

  // Track which questions have been answered (locked)
  final Set<int> _answered = {};

  Map<int, int?> get selectedAnswers => Map.unmodifiable(_selectedAnswers);
  Set<int> get answered => Set.unmodifiable(_answered);

  /// Returns true if [questionIndex] has been answered.
  bool isAnswered(int questionIndex) => _answered.contains(questionIndex);

  /// Returns the selected choice index for [questionIndex], or null.
  int? selectedFor(int questionIndex) => _selectedAnswers[questionIndex];

  /// Select a choice. Locks the question after the first selection.
  void select(int questionIndex, int choiceIndex) {
    if (_answered.contains(questionIndex)) return; // already locked
    _selectedAnswers[questionIndex] = choiceIndex;
    _answered.add(questionIndex);
    notifyListeners();
  }

  /// Number of correctly answered questions.
  int score(List<bool> correctnessByIndex) {
    int count = 0;
    for (final entry in _selectedAnswers.entries) {
      final qi = entry.key;
      final ci = entry.value;
      if (ci != null && qi < correctnessByIndex.length && correctnessByIndex[qi]) {
        count++;
      }
    }
    return count;
  }

  /// Reset all answers.
  void reset() {
    _selectedAnswers.clear();
    _answered.clear();
    notifyListeners();
  }
}
