// lib/widgets/content/card_row.dart
//
// CardRow: horizontal SingleChildScrollView on mobile,
// Wrap on wider screens via LayoutBuilder.
// Each card is a ContentCard with a 3px accent-color top border.

import 'package:flutter/material.dart';

import '../../models/content_block.dart';
import 'content_card.dart';

class CardRow extends StatelessWidget {
  const CardRow({super.key, required this.block});
  final CardRowBlock block;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        // Use Wrap on wide screens, horizontal scroll on narrow
        if (constraints.maxWidth >= 560) {
          return Wrap(
            spacing: 12,
            runSpacing: 12,
            children: block.cards
                .map((c) => SizedBox(
                      width: _cardWidth(constraints.maxWidth, block.cards.length),
                      child: ContentCard(data: c),
                    ))
                .toList(),
          );
        }

        // Mobile: horizontally scrollable row
        return SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              for (int i = 0; i < block.cards.length; i++) ...[
                SizedBox(
                  width: 220,
                  child: ContentCard(data: block.cards[i]),
                ),
                if (i < block.cards.length - 1) const SizedBox(width: 12),
              ],
            ],
          ),
        );
      },
    );
  }

  /// Compute a comfortable card width given available space and card count.
  double _cardWidth(double available, int count) {
    // Target 2–4 cards per row depending on screen width
    final minCardWidth = 210.0;
    final spacing = 12.0;
    // How many fit?
    int perRow = ((available + spacing) / (minCardWidth + spacing)).floor();
    perRow = perRow.clamp(1, count);
    return (available - spacing * (perRow - 1)) / perRow;
  }
}
