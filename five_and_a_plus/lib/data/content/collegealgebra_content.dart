// lib/data/content/collegealgebra_content.dart
//
// Full content tree for College Algebra.
// Source: collegealgebra.html (365 lines) — MAT 121 Department Review Sheet
//
// 7 Unit objects covering all 31 review problems:
//   Functions & Domain, Piecewise/Operations/DQ, Transformations & Inverses,
//   Polynomials, Rational Functions, Exp & Log, Conic Sections

import '../../models/unit.dart';
import '../../models/content_block.dart';

const List<Unit> collegealgebraUnits = [
  // ── U1: Functions, Domain & Graphs ───────────────────────────────────────
  Unit(
    title: 'Functions, Domain & Graphs',
    blocks: [
      CalloutBlock(
        title: 'Function Definition & Vertical Line Test',
        items: [
          'A relation is a function if every input (x-value) has exactly one output (y-value).',
          'Vertical Line Test (VLT): A graph represents a function if every vertical line touches it at most once.',
          'Q1 example: {(2,7),(5,−6),(−3,0),(−1,8),(4,7)} — YES, it\'s a function (no repeated x-values).',
          'x² + y² = 81 (a circle) — NO. A vertical line can cross a circle twice.',
          'y + 5 = 3x² → y = 3x² − 5 — YES. Every x gives exactly one y.',
        ],
      ),
      DataTableBlock(
        headers: ['Expression', 'Restriction', 'Reason'],
        rows: [
          ['√(expression) — even root', 'Expression ≥ 0', 'Can\'t take an even root of a negative number'],
          ['fraction with variable denominator', 'Denominator ≠ 0', 'Division by zero is undefined'],
          ['log(expression) or ln(expression)', 'Expression > 0', 'Log of zero or negative is undefined'],
          ['polynomial (no radicals/fractions)', 'All reals: (−∞, ∞)', 'Always defined everywhere'],
        ],
      ),
      StepBoxBlock(
        title: 'Q2A: Find the domain of f(x) = √(2 + 3x)',
        steps: [
          'Set the radicand ≥ 0: 2 + 3x ≥ 0',
          'Solve: 3x ≥ −2 → x ≥ −2/3',
          'Domain: [−2/3, ∞)',
        ],
      ),
      StepBoxBlock(
        title: 'Q2B: Find the domain of f(x) = (2x − 9)/(x² − 7x + 10)',
        steps: [
          'Factor denominator: x² − 7x + 10 = (x−5)(x−2)',
          'Set denominator ≠ 0: x ≠ 5 and x ≠ 2',
          'Domain: (−∞, 2) ∪ (2, 5) ∪ (5, ∞)',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. Which of the following is NOT a function?',
          choices: [
            QuizChoice(text: 'A) {(1,2),(3,4),(5,6)}', isCorrect: false),
            QuizChoice(
              text: 'B) {(1,2),(1,3),(2,4)}',
              isCorrect: true,
              explanation: 'B is NOT a function. The input x = 1 maps to both 2 and 3 — two different outputs for one input. C and D are functions: repeated y-values are fine; repeated x-values are not.',
            ),
            QuizChoice(text: 'C) {(1,2),(2,2),(3,2)}', isCorrect: false),
            QuizChoice(text: 'D) y = x²', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: '2. The domain of f(x) = √(2 + 3x) is:',
          choices: [
            QuizChoice(text: 'A) (−∞, ∞)', isCorrect: false),
            QuizChoice(text: 'B) [2/3, ∞)', isCorrect: false),
            QuizChoice(
              text: 'C) [−2/3, ∞)',
              isCorrect: true,
              explanation: 'C: [−2/3, ∞). Radicand must be ≥ 0: 2+3x ≥ 0 → x ≥ −2/3. Bracket included because x = −2/3 gives √0 = 0, which is defined.',
            ),
            QuizChoice(text: 'D) (−2/3, ∞)', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── U2: Piecewise Functions, Operations & Difference Quotient ─────────────
  Unit(
    title: 'Piecewise, Operations & Difference Quotient',
    blocks: [
      CalloutBlock(
        title: 'Piecewise Function: f(x) = {−2x if x < −2 ; 3 − x² if x ≥ −2}',
        items: [
          'f(−4): −4 < −2, so use −2x. f(−4) = −2(−4) = 8',
          'f(0): 0 ≥ −2, so use 3 − x². f(0) = 3 − 0 = 3',
          'f(−2): −2 ≥ −2 (equals!), use 3 − x². f(−2) = 3 − 4 = −1',
          'For graphing: x = −2 is the boundary. Open circle on left piece at x = −2; closed on right piece.',
        ],
      ),
      CalloutBlock(
        title: 'Q5: Function Operations for f(x) = x² − 2x + 5 and g(x) = x − 4',
        items: [
          '(f + g)(x) = x² − x + 1,  Domain: (−∞, ∞)',
          '(f − g)(x) = x² − 3x + 9,  Domain: (−∞, ∞)',
          '(fg)(x) = x³ − 6x² + 13x − 20,  Domain: (−∞, ∞)',
          '(f/g)(x) = (x² − 2x + 5)/(x − 4),  Domain: (−∞, 4) ∪ (4, ∞)',
          '(f ∘ g)(x) = f(x−4) = x² − 10x + 29',
          '(g ∘ f)(x) = g(f(x)) = x² − 2x + 1',
          '(f ∘ g)(3) = f(−1) = 1 + 2 + 5 = 8',
        ],
      ),
      StepBoxBlock(
        title: 'Q6C: Find [f(x+h) − f(x)]/h for f(x) = 3x² − 5x + 6',
        steps: [
          'Find f(x+h): f(x+h) = 3(x+h)² − 5(x+h) + 6 = 3x² + 6xh + 3h² − 5x − 5h + 6',
          'Subtract f(x): f(x+h) − f(x) = 6xh + 3h² − 5h',
          'Factor out h: h(6x + 3h − 5)',
          'Divide by h: [f(x+h) − f(x)]/h = 6x + 3h − 5',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. For f(x) = x² − 2x + 5 and g(x) = x − 4, find (f ∘ g)(x).',
          choices: [
            QuizChoice(
              text: 'A) x² − 10x + 29',
              isCorrect: true,
              explanation: 'A: x² − 10x + 29. (f∘g)(x) = f(g(x)) = f(x−4). Replace x with (x−4): (x−4)² − 2(x−4) + 5 = x²−8x+16 − 2x+8 + 5 = x² − 10x + 29.',
            ),
            QuizChoice(text: 'B) x² − 6x + 9', isCorrect: false),
            QuizChoice(text: 'C) x² − 10x + 21', isCorrect: false),
            QuizChoice(text: 'D) x³ − 2x² − 3x + 20', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: '2. The difference quotient [f(x+h)−f(x)]/h for f(x) = 3x² − 5x + 6 simplifies to:',
          choices: [
            QuizChoice(text: 'A) 6x − 5', isCorrect: false),
            QuizChoice(text: 'B) 3h − 5', isCorrect: false),
            QuizChoice(
              text: 'C) 6x + 3h − 5',
              isCorrect: true,
              explanation: 'C: 6x + 3h − 5. After expanding and subtracting, numerator = 6xh + 3h² − 5h. Factor out h and cancel: 6x + 3h − 5.',
            ),
            QuizChoice(text: 'D) 6xh + 3h² − 5h', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── U3: Transformations & Inverse Functions ───────────────────────────────
  Unit(
    title: 'Transformations & Inverse Functions',
    blocks: [
      DataTableBlock(
        headers: ['Transformation', 'Equation', 'Effect on Graph'],
        rows: [
          ['Vertical shift UP k', 'f(x) + k', 'Every point moves UP k units'],
          ['Vertical shift DOWN k', 'f(x) − k', 'Every point moves DOWN k units'],
          ['Horizontal shift RIGHT h', 'f(x − h)', 'Every point moves RIGHT h units'],
          ['Horizontal shift LEFT h', 'f(x + h)', 'Every point moves LEFT h units'],
          ['Reflect over x-axis', '−f(x)', 'Flip vertically (y-values negate)'],
          ['Reflect over y-axis', 'f(−x)', 'Flip horizontally (x-values negate)'],
          ['Vertical stretch (a > 1)', 'a·f(x)', 'Stretches away from x-axis'],
          ['Vertical compression (0 < a < 1)', 'a·f(x)', 'Compresses toward x-axis'],
        ],
      ),
      CalloutBlock(
        title: 'Q7: g(x) = −|x| + 5 — Transformations on f(x) = |x|',
        items: [
          'Step 1: −f(x) reflects over the x-axis (flips V-shape upside down).',
          'Step 2: +5 shifts UP 5 units.',
          'Result: vertex at (0, 5), opens downward.',
        ],
      ),
      CalloutBlock(
        title: 'Q8A: g(x) = (x − 4)³',
        items: [
          'Parent: f(x) = x³. Transformation: shift RIGHT 4 units (x − 4 inside).',
          'The inflection point moves from (0, 0) to (4, 0).',
        ],
      ),
      StepBoxBlock(
        title: 'Q9: Verify f(x) = 3x−7 and g(x) = (x+7)/3 are inverses',
        steps: [
          'Compute f(g(x)): f((x+7)/3) = 3·((x+7)/3) − 7 = x + 7 − 7 = x ✓',
          'Compute g(f(x)): g(3x−7) = (3x−7+7)/3 = 3x/3 = x ✓',
          'Both compositions equal x, so they are inverses.',
        ],
      ),
      StepBoxBlock(
        title: 'Q11: Find f⁻¹(x) for f(x) = 4x³ − 1',
        steps: [
          'Write y = 4x³ − 1',
          'Swap x and y: x = 4y³ − 1',
          'Solve for y: x + 1 = 4y³ → (x+1)/4 = y³ → y = ∛((x+1)/4)',
          'f⁻¹(x) = ∛((x+1)/4)',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. The graph of g(x) = (x + 3)² − 5 is obtained from f(x) = x² by:',
          choices: [
            QuizChoice(text: 'A) Shift right 3, up 5', isCorrect: false),
            QuizChoice(
              text: 'B) Shift left 3, down 5',
              isCorrect: true,
              explanation: 'B: Shift LEFT 3, DOWN 5. f(x + 3) shifts LEFT by 3 (adding inside moves opposite direction). −5 outside shifts DOWN. Vertex moves from (0,0) to (−3, −5).',
            ),
            QuizChoice(text: 'C) Shift right 3, down 5', isCorrect: false),
            QuizChoice(text: 'D) Shift left 3, up 5', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: '2. Find f⁻¹(x) for f(x) = 4x³ − 1.',
          choices: [
            QuizChoice(text: 'A) 1/(4x³−1)', isCorrect: false),
            QuizChoice(
              text: 'B) ∛((x+1)/4)',
              isCorrect: true,
              explanation: 'B: ∛((x+1)/4). Swap x and y: x = 4y³ − 1. Solve: x+1 = 4y³ → (x+1)/4 = y³ → y = ∛((x+1)/4).',
            ),
            QuizChoice(text: 'C) ∛(x/4) + 1', isCorrect: false),
            QuizChoice(text: 'D) (x+1)/(4x³)', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── U4: Polynomial Functions ──────────────────────────────────────────────
  Unit(
    title: 'Polynomial Functions',
    blocks: [
      CalloutBlock(
        title: 'End Behavior Rules',
        items: [
          'Look at the degree (highest power) and leading coefficient (its sign).',
          'Even degree, positive LC: Both ends go UP (↑ ↑). Like x².',
          'Even degree, negative LC: Both ends go DOWN (↓ ↓). Like −x².',
          'Odd degree, positive LC: Left DOWN, right UP (↓ ↑). Like x³.',
          'Odd degree, negative LC: Left UP, right DOWN (↑ ↓). Like −x³.',
        ],
      ),
      CalloutBlock(
        title: 'Zero Multiplicity — Crosses or Touches?',
        items: [
          'Odd multiplicity (1, 3, 5...): Graph CROSSES the x-axis at that zero.',
          'Even multiplicity (2, 4, 6...): Graph TOUCHES (bounces off) the x-axis at that zero.',
        ],
      ),
      CalloutBlock(
        title: 'Q12: f(x) = (x+1)³(x−3)(x+4)²',
        items: [
          'Degree = 3 + 1 + 2 = 6 (even). Leading coefficient positive. End behavior: ↑ ↑',
          'Zeros: x = −1 (mult 3, odd → crosses), x = 3 (mult 1, odd → crosses), x = −4 (mult 2, even → touches)',
        ],
      ),
      StepBoxBlock(
        title: 'Q13: Graph f(x) = x⁴ + x³ − 6x²',
        steps: [
          'End behavior: Even degree (4), positive leading coefficient → both ends UP ↑↑',
          'Find zeros: x⁴ + x³ − 6x² = 0 → x²(x² + x − 6) = 0 → x²(x+3)(x−2) = 0',
          'Zeros: x = 0 (mult 2, even → touches), x = −3 (mult 1 → crosses), x = 2 (mult 1 → crosses)',
          'y-intercept: f(0) = 0',
        ],
      ),
      StepBoxBlock(
        title: 'Q15: Synthetic Division for f(x) = x⁴ − 3x³ + 3x − 1 at x = −2 (Remainder Theorem)',
        steps: [
          'Coefficients: 1, −3, 0, 3, −1 (fill 0 for missing x² term)',
          'Synthetic division with c = −2:',
          '  1 | −3 | 0  |  3  | −1',
          '    | −2 | 10 | −20 | 34',
          '  1 | −5 | 10 | −17 | 33',
          'Remainder = 33 = f(−2) by Remainder Theorem',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. For f(x) = (x−2)²(x+1)³, the graph touches the x-axis at x = 2 because:',
          choices: [
            QuizChoice(text: 'A) The zero has odd multiplicity', isCorrect: false),
            QuizChoice(
              text: 'B) The zero has even multiplicity (2), so the graph bounces',
              isCorrect: true,
              explanation: 'B: Even multiplicity (2). When a factor is squared (x−2)², the zero x=2 has multiplicity 2 (even) → the graph touches/bounces. The zero x=−1 has multiplicity 3 (odd) → graph crosses.',
            ),
            QuizChoice(text: 'C) 2 is a negative zero', isCorrect: false),
            QuizChoice(text: 'D) The leading coefficient is positive', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: '2. Q15: Using the Remainder Theorem, f(−2) for f(x) = x⁴ − 3x³ + 3x − 1 equals:',
          choices: [
            QuizChoice(
              text: 'A) 33',
              isCorrect: true,
              explanation: 'A: 33. Synthetic division with x=−2 and coefficients 1,−3,0,3,−1 gives remainder 33. The remainder equals f(−2).',
            ),
            QuizChoice(text: 'B) −33', isCorrect: false),
            QuizChoice(text: 'C) 0', isCorrect: false),
            QuizChoice(text: 'D) 17', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── U5: Rational Functions & Asymptotes ───────────────────────────────────
  Unit(
    title: 'Rational Functions & Asymptotes',
    blocks: [
      CalloutBlock(
        title: 'Asymptote Rules for f(x) = p(x)/q(x)',
        items: [
          'Vertical Asymptote (VA): Set denominator = 0, after canceling any common factors. If factor cancels, it\'s a hole, not a VA.',
          'Horizontal Asymptote (HA): Compare degrees of numerator (n) and denominator (m).\n  • n < m → HA: y = 0\n  • n = m → HA: y = (leading coeff of top)/(leading coeff of bottom)\n  • n > m → NO horizontal asymptote',
          'Slant Asymptote (SA): Exists only when n = m + 1. Use polynomial division to find it.',
        ],
      ),
      StepBoxBlock(
        title: 'Q18A: f(x) = 2x/(x² − 9)',
        steps: [
          'VA: x² − 9 = 0 → (x−3)(x+3) = 0 → x = 3 and x = −3',
          'HA: Degree of top = 1, degree of bottom = 2. Top degree < bottom → y = 0',
          'Slant: None (top degree is not exactly 1 more than bottom)',
        ],
      ),
      StepBoxBlock(
        title: 'Q18B: f(x) = (x² − 5x + 8)/(x − 3)',
        steps: [
          'VA: x − 3 = 0 → x = 3',
          'HA: Degree of top (2) > degree of bottom (1) → No horizontal asymptote',
          'Slant: Yes — degree of top is exactly 1 more. Divide: (x² − 5x + 8) ÷ (x − 3)',
          'Synthetic division with x=3: quotient = x − 2, remainder = 2',
          'Slant asymptote: y = x − 2',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. For f(x) = (x² − 5x + 8)/(x − 3), the slant asymptote is:',
          choices: [
            QuizChoice(text: 'A) y = x − 5', isCorrect: false),
            QuizChoice(
              text: 'B) y = x − 2',
              isCorrect: true,
              explanation: 'B: y = x − 2. Synthetic division with x=3: coefficients 1,−5,8. Bring down 1. 1×3=3, add to −5: −2. −2×3=−6, add to 8: remainder 2. Quotient = x − 2. Slant asymptote: y = x − 2.',
            ),
            QuizChoice(text: 'C) y = x + 2', isCorrect: false),
            QuizChoice(text: 'D) y = x', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: '2. What determines whether a rational function has a horizontal asymptote y = 0?',
          choices: [
            QuizChoice(text: 'A) The leading coefficient of the numerator is 0', isCorrect: false),
            QuizChoice(
              text: 'B) The degree of the numerator is LESS THAN the degree of the denominator',
              isCorrect: true,
              explanation: 'B is correct. When deg(top) < deg(bottom), the bottom grows faster, so f(x) → 0 as x → ±∞. This gives y = 0.',
            ),
            QuizChoice(text: 'C) The function has no x-intercepts', isCorrect: false),
            QuizChoice(text: 'D) The denominator has no real zeros', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── U6: Exponential & Logarithmic Functions ───────────────────────────────
  Unit(
    title: 'Exponential & Logarithmic Functions',
    blocks: [
      CalloutBlock(
        title: 'Converting Between Exponential and Log Form: log_b(x) = y ⟺ bʸ = x',
        items: [
          'Q20A: log₃(x+2) = 4 → 3⁴ = x+2 → 81 = x+2 → x = 79',
          'Q20B: 6ʸ = 213 → log₆(213) = y',
        ],
      ),
      DataTableBlock(
        headers: ['Expression', 'Rewrite as', 'Answer'],
        rows: [
          ['log₃ 27', '3ʸ = 27 = 3³', '3'],
          ['log₅ 25', '5ʸ = 25 = 5²', '2'],
          ['log₂ ⅛', '2ʸ = 1/8 = 2⁻³', '−3'],
          ['log 10⁵', '10ʸ = 10⁵', '5'],
          ['e^(ln 3)', 'e and ln cancel', '3'],
          ['log₅ 5¹²', '5ʸ = 5¹²', '12'],
        ],
      ),
      CalloutBlock(
        title: 'Change of Base Formula (Q22)',
        items: [
          'log_b(x) = log(x)/log(b) = ln(x)/ln(b)',
          'Q22: log₁₆(59) = log(59)/log(16) = ln(59)/ln(16) ≈ 1.4707',
        ],
      ),
      CalloutBlock(
        title: 'The Three Log Properties',
        items: [
          'Product rule: log_b(xy) = log_b(x) + log_b(y)',
          'Quotient rule: log_b(x/y) = log_b(x) − log_b(y)',
          'Power rule: log_b(xⁿ) = n·log_b(x)',
        ],
      ),
      StepBoxBlock(
        title: 'Q24A: Expand log₅(125x³/y)',
        steps: [
          '= log₅(125) + log₅(x³) − log₅(y)  (product/quotient rule)',
          '= 3 + 3log₅(x) − log₅(y)  (power rule; log₅(125)=3 because 5³=125)',
        ],
      ),
      StepBoxBlock(
        title: 'Q26C: Solve log(x−3) + log(x+3) = log(8x)',
        steps: [
          'Condense left side: log((x−3)(x+3)) = log(8x)',
          'Since logs are equal: (x−3)(x+3) = 8x',
          'x² − 9 = 8x → x² − 8x − 9 = 0 → (x−9)(x+1) = 0',
          'x = 9 or x = −1',
          'Check x = −1: log(−1−3) = log(−4) — UNDEFINED. Extraneous!',
          'Solution: x = 9 only',
        ],
      ),
      CodeBlock([
        CodeSpan('A = P(1 + r/n)^(nt)       '),
        CodeSpan('// compounded n times per year', kind: CodeSpanKind.comment),
        CodeSpan('\nA = Pe^(rt)                '),
        CodeSpan('// compounded continuously', kind: CodeSpanKind.comment),
        CodeSpan('\n\n'),
        CodeSpan('Q27: P=\$1860, r=6.1%=0.061, t=3 years', kind: CodeSpanKind.highlight),
        CodeSpan('\nMonthly (n=12):  A = 1860(1 + 0.061/12)^(12·3) ≈ '),
        CodeSpan('\$2232.48', kind: CodeSpanKind.string),
        CodeSpan('\nContinuously:    A = 1860·e^(0.061·3) ≈ '),
        CodeSpan('\$2233.51', kind: CodeSpanKind.string),
      ]),
      QuizBlock([
        QuizQuestion(
          question: '1. Evaluate log₂(⅛) without a calculator.',
          choices: [
            QuizChoice(text: 'A) 3', isCorrect: false),
            QuizChoice(
              text: 'B) −3',
              isCorrect: true,
              explanation: 'B: −3. log₂(⅛) = y means 2ʸ = ⅛ = 2⁻³. So y = −3.',
            ),
            QuizChoice(text: 'C) 1/3', isCorrect: false),
            QuizChoice(text: 'D) 8', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: '2. Solve: log(x−3) + log(x+3) = log(8x). The extraneous solution is x = −1 because:',
          choices: [
            QuizChoice(text: 'A) It doesn\'t satisfy the original equation', isCorrect: false),
            QuizChoice(
              text: 'B) Substituting x = −1 gives log(−4), which is undefined — negative argument in a logarithm',
              isCorrect: true,
              explanation: 'B is correct. x = −1 makes log(x−3) = log(−4), which is undefined. Always check solutions to logarithmic equations in the ORIGINAL equation — domain restrictions often eliminate valid-looking solutions.',
            ),
            QuizChoice(text: 'C) It makes the denominator zero', isCorrect: false),
            QuizChoice(text: 'D) The equation requires x > 8', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── U7: Conic Sections ────────────────────────────────────────────────────
  Unit(
    title: 'Conic Sections',
    blocks: [
      StepBoxBlock(
        title: 'Q30: Find center and radius of x² + y² − 6x + 10y − 9 = 0',
        steps: [
          'Group x-terms and y-terms: (x² − 6x) + (y² + 10y) = 9',
          'Complete the square: (x² − 6x + 9) + (y² + 10y + 25) = 9 + 9 + 25',
          'Write as squares: (x − 3)² + (y + 5)² = 43',
          'Center: (3, −5), Radius: √43 ≈ 6.56',
        ],
      ),
      CalloutBlock(
        title: 'Completing the Square — The Process',
        items: [
          'Take the coefficient of x, divide by 2, square it. Add to BOTH sides.',
          'For x² − 6x: take −6, divide by 2 = −3, square = 9. Add 9 to both sides.',
          'For y² + 10y: take 10, divide by 2 = 5, square = 25. Add 25 to both sides.',
        ],
      ),
      CalloutBlock(
        title: 'Parabola Standard Forms',
        items: [
          'Vertical: x² = 4py (opens up if p>0, down if p<0). Vertex (0,0).',
          'Horizontal: y² = 4px (opens right if p>0, left if p<0). Vertex (0,0).',
          'Focus is p units from vertex. Directrix is p units on the opposite side.',
          'Translated: (y−k)² = 4p(x−h) has vertex (h,k), opens right/left.',
          'Translated: (x−h)² = 4p(y−k) has vertex (h,k), opens up/down.',
        ],
      ),
      StepBoxBlock(
        title: 'Q31B: x² = −8y',
        steps: [
          'Match form x² = 4py: 4p = −8, so p = −2. Since p < 0: opens DOWN.',
          'Vertex: (0, 0). Focus: (0, −2). Directrix: y = 2.',
        ],
      ),
      CalloutBlock(
        title: 'Ellipse & Hyperbola Standard Forms',
        items: [
          'Ellipse: x²/a² + y²/b² = 1 (a > b). c² = a² − b². Foci at (±c, 0).',
          'Hyperbola (horizontal): x²/a² − y²/b² = 1. c² = a² + b². Asymptotes: y = ±(b/a)x.',
          'Hyperbola (vertical): y²/a² − x²/b² = 1. Asymptotes: y = ±(a/b)x.',
        ],
      ),
      MustKnowBlock([
        'VLT: a graph is a function if every vertical line crosses it at most once',
        'Domain: even root ≥ 0; denominator ≠ 0; log argument > 0',
        'Piecewise: check which condition the input satisfies FIRST',
        'Difference quotient: [f(x+h)−f(x)]/h — expand f(x+h) carefully before subtracting',
        'f(x+h) shifts RIGHT; f(x)+k shifts UP; −f(x) reflects over x-axis',
        'Inverse: swap x and y, solve for y; verify with f(g(x))=x and g(f(x))=x',
        'Zero with even multiplicity → touches (bounces). Odd multiplicity → crosses.',
        'Synthetic division: remainder = f(a) (Remainder Theorem)',
        'Complex zeros come in conjugate pairs',
        'VA: set denominator=0. HA: compare degrees. SA: divide if deg(top)=deg(bot)+1.',
        'log_b(x)=y ⟺ bʸ=x. Power/Product/Quotient log rules for expand/condense.',
        'Compound monthly: A=P(1+r/n)^(nt). Continuously: A=Pe^(rt).',
        'Check solutions to log equations — negative arguments are extraneous.',
        'Complete the square for circles: (coeff/2)², add to both sides.',
        'Ellipse: c²=a²−b². Hyperbola: c²=a²+b².',
      ]),
      QuizBlock([
        QuizQuestion(
          question: '1. After completing the square, x² + y² − 6x + 10y − 9 = 0 becomes:',
          choices: [
            QuizChoice(text: 'A) (x−3)² + (y+5)² = 9', isCorrect: false),
            QuizChoice(
              text: 'B) (x−3)² + (y+5)² = 43',
              isCorrect: true,
              explanation: 'B: (x−3)² + (y+5)² = 43. Group and complete: add 9 and 25 to both sides: 9+9+25=43. (x²−6x+9)=(x−3)², (y²+10y+25)=(y+5)². Center (3,−5), r=√43.',
            ),
            QuizChoice(text: 'C) (x+3)² + (y−5)² = 43', isCorrect: false),
            QuizChoice(text: 'D) (x−3)² + (y−5)² = 25', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: '2. For the hyperbola x²/25 − y²/4 = 1, the asymptotes are:',
          choices: [
            QuizChoice(text: 'A) y = ±(5/2)x', isCorrect: false),
            QuizChoice(
              text: 'B) y = ±(2/5)x',
              isCorrect: true,
              explanation: 'B: y = ±(2/5)x. For a horizontal hyperbola x²/a² − y²/b² = 1, asymptotes are y = ±(b/a)x. Here a=5, b=2 → y=±(2/5)x.',
            ),
            QuizChoice(text: 'C) y = ±2x', isCorrect: false),
            QuizChoice(text: 'D) y = ±5x', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),
];
