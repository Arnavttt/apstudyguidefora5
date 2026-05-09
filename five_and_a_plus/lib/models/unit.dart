import 'package:flutter/material.dart';
import 'content_block.dart';

@immutable
class Unit {
  const Unit({required this.title, required this.blocks});
  final String title;
  final List<ContentBlock> blocks;
}
