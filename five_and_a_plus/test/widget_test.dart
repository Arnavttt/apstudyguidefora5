// Basic smoke test for Five & A+

import 'package:flutter_test/flutter_test.dart';
import 'package:five_and_a_plus/main.dart';

void main() {
  testWidgets('App launches without errors', (WidgetTester tester) async {
    await tester.pumpWidget(const FiveAndAPlusApp());
    // App should render without throwing
    expect(find.byType(FiveAndAPlusApp), findsOneWidget);
  });
}
