// lib/models/content_block.dart
//
// Sealed class hierarchy representing every type of content block that can
// appear on a subject page. All subclasses use const constructors so Flutter
// can skip rebuilds for unchanged subtrees.

import 'package:flutter/foundation.dart';

// ---------------------------------------------------------------------------
// Supporting value types
// ---------------------------------------------------------------------------

enum CodeSpanKind { keyword, string, number, comment, highlight, plain }

@immutable
class CodeSpan {
  const CodeSpan(this.text, {this.kind = CodeSpanKind.plain});
  final String text;
  final CodeSpanKind kind;
}

@immutable
class ContentCardData {
  const ContentCardData({required this.title, required this.body, this.icon});
  final String title;
  final String body;
  final String? icon; // emoji or null
}

@immutable
class RubricRow {
  const RubricRow({required this.label, required this.points, required this.description});
  final String label;
  final String points;
  final String description;
}

@immutable
class QuizChoice {
  const QuizChoice({required this.text, required this.isCorrect, this.explanation = ''});
  final String text;
  final bool isCorrect;
  final String explanation;
}

@immutable
class QuizQuestion {
  const QuizQuestion({required this.question, required this.choices});
  final String question;
  final List<QuizChoice> choices;
}

// ---------------------------------------------------------------------------
// Sealed ContentBlock hierarchy
// ---------------------------------------------------------------------------

sealed class ContentBlock {
  const ContentBlock();
}

final class CardRowBlock extends ContentBlock {
  const CardRowBlock(this.cards);
  final List<ContentCardData> cards;
}

final class CalloutBlock extends ContentBlock {
  const CalloutBlock({required this.title, required this.items});
  final String title;
  final List<String> items;
}

final class WarnBlock extends ContentBlock {
  const WarnBlock({required this.title, required this.items});
  final String title;
  final List<String> items;
}

final class CodeBlock extends ContentBlock {
  const CodeBlock(this.spans);
  final List<CodeSpan> spans;
}

final class DataTableBlock extends ContentBlock {
  const DataTableBlock({required this.headers, required this.rows});
  final List<String> headers;
  final List<List<String>> rows;
}

final class StepBoxBlock extends ContentBlock {
  const StepBoxBlock({required this.title, required this.steps});
  final String title;
  final List<String> steps;
}

final class RubricBoxBlock extends ContentBlock {
  const RubricBoxBlock(this.rows);
  final List<RubricRow> rows;
}

final class QuizBlock extends ContentBlock {
  const QuizBlock(this.questions);
  final List<QuizQuestion> questions;
}

final class MustKnowBlock extends ContentBlock {
  const MustKnowBlock(this.items);
  final List<String> items;
}

// ---------------------------------------------------------------------------
// Free-response lesson format (from chunked HTML study guides)
// ---------------------------------------------------------------------------

@immutable
class TopicNote {
  const TopicNote({required this.topic, required this.body});
  final String topic;
  final String body;
}

@immutable
class FreeResponseQuestion {
  const FreeResponseQuestion({required this.stem, required this.modelPoints});
  final String stem;
  final List<String> modelPoints;
}

/// One lesson within a unit — title, topic notes, skill lists, and 5 FRQs.
final class LessonBlock extends ContentBlock {
  const LessonBlock({
    required this.title,
    required this.topics,
    this.objectives = const [],
    this.howTested = const [],
    this.practice = const [],
    this.questions = const [],
  });
  final String title;
  final List<TopicNote> topics;
  final List<String> objectives;
  final List<String> howTested;
  final List<String> practice;
  final List<FreeResponseQuestion> questions;
}

/// A stand-alone bank of free-response questions (unit or course level).
final class FreeResponseBlock extends ContentBlock {
  const FreeResponseBlock({required this.title, required this.questions});
  final String title;
  final List<FreeResponseQuestion> questions;
}
