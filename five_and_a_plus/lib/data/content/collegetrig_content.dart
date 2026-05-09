// lib/data/content/collegetrig_content.dart
//
// Full content tree for College Trigonometry.
// Source: collegetrig.html (458 lines) — OCCC Teacher Notes Sections 4.2–6.1
//
// 11 Unit objects covering: unit circle, SOHCAHTOA, reference angles,
// sin/cos graphs, tan/sec/csc graphs, inverse trig, verifying identities,
// sum/difference formulas, double/half angle formulas, solving equations,
// Law of Sines & the Ambiguous Case.

import '../../models/unit.dart';
import '../../models/content_block.dart';

const List<Unit> collegetrigUnits = [
  // ── U1: The Unit Circle & Fundamental Identities (4.2) ───────────────────
  Unit(
    title: 'Unit Circle & Fundamental Identities',
    blocks: [
      DataTableBlock(
        headers: ['Function', 'Unit Circle Definition', 'Reciprocal Function', 'Restriction'],
        rows: [
          ['sin θ', 'y', 'csc θ = 1/y', 'y ≠ 0'],
          ['cos θ', 'x', 'sec θ = 1/x', 'x ≠ 0'],
          ['tan θ', 'y/x', 'cot θ = x/y', 'x ≠ 0, y ≠ 0'],
        ],
      ),
      CalloutBlock(
        title: 'Unit Circle: x² + y² = 1, centered at origin, radius = 1',
        items: [
          'A point P = (x, y) on the unit circle defines all 6 trig functions.',
          'Since r = 1 and s = rθ, in the unit circle arc length = radian measure of the central angle.',
        ],
      ),
      CalloutBlock(
        title: 'Reciprocal Identities',
        items: ['csc θ = 1/sin θ  |  sec θ = 1/cos θ  |  cot θ = 1/tan θ'],
      ),
      CalloutBlock(
        title: 'Quotient Identities',
        items: ['tan θ = sin θ / cos θ  |  cot θ = cos θ / sin θ'],
      ),
      CalloutBlock(
        title: 'Pythagorean Identities',
        items: [
          'sin²θ + cos²θ = 1',
          'tan²θ + 1 = sec²θ  (divide Pythagorean by cos²θ)',
          '1 + cot²θ = csc²θ  (divide Pythagorean by sin²θ)',
        ],
      ),
      CalloutBlock(
        title: 'Even and Odd Functions',
        items: [
          'Even (cosine, secant): cos(−θ) = cos θ  |  sec(−θ) = sec θ',
          'Odd (sine, cosecant, tangent, cotangent): sin(−θ) = −sin θ',
        ],
      ),
      CalloutBlock(
        title: 'Periodic Properties',
        items: [
          'sin(θ + 2π) = sin θ  |  cos(θ + 2π) = cos θ  →  Period = 2π',
          'tan(θ + π) = tan θ  |  cot(θ + π) = cot θ  →  Period = π',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. Given sin θ = 3/5 and θ is in Q1, find cos θ using a Pythagorean identity.',
          choices: [
            QuizChoice(
              text: 'A) 4/5',
              isCorrect: true,
              explanation: 'A: 4/5. sin²θ + cos²θ = 1 → 9/25 + cos²θ = 1 → cos²θ = 16/25 → cos θ = 4/5 (positive in Q1).',
            ),
            QuizChoice(text: 'B) 5/4', isCorrect: false),
            QuizChoice(text: 'C) 3/4', isCorrect: false),
            QuizChoice(text: 'D) −4/5', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: '2. Which trig functions are even (f(−θ) = f(θ))?',
          choices: [
            QuizChoice(text: 'A) Sine and cosecant', isCorrect: false),
            QuizChoice(
              text: 'B) Cosine and secant',
              isCorrect: true,
              explanation: 'B: Cosine and secant. cos(−θ) = cos θ and sec(−θ) = sec θ. All other trig functions are odd: sin(−θ) = −sin θ.',
            ),
            QuizChoice(text: 'C) Tangent and cotangent', isCorrect: false),
            QuizChoice(text: 'D) All of them', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── U2: Right Triangle Trigonometry / SOHCAHTOA (4.3) ────────────────────
  Unit(
    title: 'Right Triangle Trig (SOHCAHTOA)',
    blocks: [
      CalloutBlock(
        title: 'SOHCAHTOA — For a right triangle with angle θ (not the right angle)',
        items: [
          'SOH: sin θ = opp/hyp   csc θ = hyp/opp',
          'CAH: cos θ = adj/hyp   sec θ = hyp/adj',
          'TOA: tan θ = opp/adj   cot θ = adj/opp',
        ],
      ),
      StepBoxBlock(
        title: 'Example (4.3): Right triangle with hyp = 13, legs = 5 and 12',
        steps: [
          'sin θ = 5/13   csc θ = 13/5',
          'cos θ = 12/13   sec θ = 13/12',
          'tan θ = 5/12   cot θ = 12/5',
        ],
      ),
      CalloutBlock(
        title: 'Angles of Elevation & Depression',
        items: [
          'Angle of elevation: measured UPWARD from horizontal to the line of sight.',
          'Angle of depression: measured DOWNWARD from horizontal to the line of sight.',
          'These two angles are alternate interior angles — equal when horizontal lines are parallel.',
        ],
      ),
      StepBoxBlock(
        title: 'Example: Surveyor measures 22° angle of elevation to building top; transit is 5 ft above ground, 300 ft from building.',
        steps: [
          'Draw right triangle: adjacent = 300 ft, angle = 22°.',
          'tan 22° = x/300  →  x = 300·tan 22° = 121.2 ft',
          'Total height = 121.2 + 5 = 126.2 ft',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. From 125 feet from a tower, the angle of elevation is 57.2°. The tower height is:',
          choices: [
            QuizChoice(
              text: 'A) 125 tan 57.2°',
              isCorrect: true,
              explanation: 'A: 125 tan 57.2°. tan(angle) = opp/adj = height/125. Height = 125 tan 57.2° ≈ 194 ft.',
            ),
            QuizChoice(text: 'B) 125 sin 57.2°', isCorrect: false),
            QuizChoice(text: 'C) 125/tan 57.2°', isCorrect: false),
            QuizChoice(text: 'D) sin 57.2°/125', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── U3: Trig Functions of Any Angle & Reference Angles (4.4) ─────────────
  Unit(
    title: 'Any Angle & Reference Angles',
    blocks: [
      CalloutBlock(
        title: 'Trig Functions of Any Angle: point (x, y) on terminal side, r = √(x²+y²)',
        items: [
          'sin θ = y/r  |  cos θ = x/r  |  tan θ = y/x',
          'csc θ = r/y  |  sec θ = r/x  |  cot θ = x/y',
        ],
      ),
      StepBoxBlock(
        title: 'Example (4.4): P = (−3, −4) on terminal side of θ',
        steps: [
          'r = √(9 + 16) = √25 = 5',
          'sin θ = −4/5  |  cos θ = −3/5  |  tan θ = 4/3',
          'csc θ = −5/4  |  sec θ = −5/3  |  cot θ = 3/4',
        ],
      ),
      DataTableBlock(
        headers: ['Quadrant', 'x', 'y', 'sin θ', 'cos θ', 'tan θ'],
        rows: [
          ['Q I (0–90°)', '+', '+', '✓ +', '✓ +', '✓ +'],
          ['Q II (90–180°)', '−', '+', '✓ +', '✗ −', '✗ −'],
          ['Q III (180–270°)', '−', '−', '✗ −', '✗ −', '✓ +'],
          ['Q IV (270–360°)', '+', '−', '✗ −', '✓ +', '✗ −'],
        ],
      ),
      CalloutBlock(
        title: 'ASTC Memory Aid: All Students Take Calculus',
        items: [
          'All positive in Q1  |  Sine positive in Q2  |  Tan positive in Q3  |  Cos positive in Q4',
        ],
      ),
      CalloutBlock(
        title: 'Reference Angle θ\' = acute angle between terminal side of θ and the x-axis',
        items: [
          'Q I: θ\' = θ',
          'Q II: θ\' = 180° − θ (or π − θ)',
          'Q III: θ\' = θ − 180° (or θ − π)',
          'Q IV: θ\' = 360° − θ (or 2π − θ)',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. P = (−2, 6) is on the terminal side of θ. Find sin θ.',
          choices: [
            QuizChoice(text: 'A) −2/√40', isCorrect: false),
            QuizChoice(
              text: 'B) 6/√40 = 3√10/10',
              isCorrect: true,
              explanation: 'B: 6/√40 = 3√10/10. r = √(4+36) = √40 = 2√10. sin θ = y/r = 6/(2√10) = 3/√10 = 3√10/10.',
            ),
            QuizChoice(text: 'C) −6/2', isCorrect: false),
            QuizChoice(text: 'D) 2/√40', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: '2. The reference angle for θ = 5π/6 is:',
          choices: [
            QuizChoice(
              text: 'A) π/6',
              isCorrect: true,
              explanation: 'A: π/6. 5π/6 is in Q II. θ\' = π − 5π/6 = π/6.',
            ),
            QuizChoice(text: 'B) π/3', isCorrect: false),
            QuizChoice(text: 'C) 5π/6', isCorrect: false),
            QuizChoice(text: 'D) π/4', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── U4: Graphs of Sine & Cosine (4.5) ────────────────────────────────────
  Unit(
    title: 'Graphs of Sine & Cosine',
    blocks: [
      DataTableBlock(
        headers: ['Parameter', 'Meaning', 'Formula', 'Effect'],
        rows: [
          ['A', 'Amplitude', '|A|', 'Vertical stretch. If A < 0: reflection over x-axis.'],
          ['B', 'Frequency', '—', 'Period = 2π/|B|. Larger B → shorter period.'],
          ['C', 'Phase Shift', 'C/B', 'Horizontal shift. RIGHT by C/B if positive in f(x − C/B) form.'],
          ['D', 'Vertical Shift', 'D', 'Midline y = D. Positive D → shifts UP.'],
        ],
      ),
      CalloutBlock(
        title: 'Properties of sin x (parent function)',
        items: ['Domain: (−∞, ∞)  |  Range: [−1, 1]  |  Period: 2π  |  Odd function (origin symmetry)'],
      ),
      CalloutBlock(
        title: 'Properties of cos x (parent function)',
        items: ['Domain: (−∞, ∞)  |  Range: [−1, 1]  |  Period: 2π  |  Even function (y-axis symmetry)'],
      ),
      StepBoxBlock(
        title: 'Example (4.5): Determine amplitude, period, phase shift for y = 4 sin(2x − π)',
        steps: [
          'Amplitude: |A| = 4',
          'Period: 2π/|B| = 2π/2 = π',
          'Phase shift: C/B = π/2 to the RIGHT (form is 2x − π = 2(x − π/2))',
          '5 key points over one period starting at x = π/2: (π/2, 0), (3π/4, 4), (π, 0), (5π/4, −4), (3π/2, 0)',
        ],
      ),
      StepBoxBlock(
        title: 'Example (4.5 Day 2): Tidal Model — depth varies 5 ft (low) to 13 ft (high), low tide at 4 AM, high tide at 10 AM',
        steps: [
          'Amplitude = (13 − 5)/2 = 4. Midline D = (13 + 5)/2 = 9.',
          'Half-period = 6 hrs → Period = 12 hrs → B = 2π/12 = π/6.',
          'Cosine starts at max, but here low tide (min) is at t = 4. Use y = −4cos(π/6(t−4)) + 9.',
          'At t = 4: y = −4cos(0) + 9 = −4+9 = 5 ✓ (low tide).',
          'At t = 10: y = −4cos(π) + 9 = 4+9 = 13 ✓ (high tide).',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. For y = 3 sin(2x + π), the phase shift is:',
          choices: [
            QuizChoice(text: 'A) π to the right', isCorrect: false),
            QuizChoice(
              text: 'B) π/2 to the left',
              isCorrect: true,
              explanation: 'B: π/2 to the left. Phase shift = −C/B = −π/2 (negative means LEFT). Rewrite: 2x + π = 2(x + π/2), so shift is LEFT by π/2.',
            ),
            QuizChoice(text: 'C) π/2 to the right', isCorrect: false),
            QuizChoice(text: 'D) 2 to the left', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: '2. The period of y = 2 cos(x/2) is:',
          choices: [
            QuizChoice(text: 'A) π', isCorrect: false),
            QuizChoice(text: 'B) 2π', isCorrect: false),
            QuizChoice(
              text: 'C) 4π',
              isCorrect: true,
              explanation: 'C: 4π. B = 1/2. Period = 2π/|B| = 2π/(1/2) = 4π.',
            ),
            QuizChoice(text: 'D) π/2', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── U5: Graphs of Tan, Cot, Sec & Csc (4.6) ─────────────────────────────
  Unit(
    title: 'Graphs of Tan, Cot, Sec & Csc',
    blocks: [
      DataTableBlock(
        headers: ['Function', 'Period', 'Domain', 'Range', 'Asymptotes', 'Even/Odd'],
        rows: [
          ['y = sin x', '2π', 'All reals', '[−1, 1]', 'None', 'Odd'],
          ['y = cos x', '2π', 'All reals', '[−1, 1]', 'None', 'Even'],
          ['y = tan x', 'π', 'x ≠ odd multiples of π/2', '(−∞, ∞)', 'x = odd multiples of π/2', 'Odd'],
          ['y = cot x', 'π', 'x ≠ integer multiples of π', '(−∞, ∞)', 'x = integer multiples of π', 'Odd'],
          ['y = sec x', '2π', 'x ≠ odd multiples of π/2', '(−∞,−1]∪[1,∞)', 'x = odd multiples of π/2', 'Even'],
          ['y = csc x', '2π', 'x ≠ integer multiples of π', '(−∞,−1]∪[1,∞)', 'x = integer multiples of π', 'Odd'],
        ],
      ),
      StepBoxBlock(
        title: 'Steps for graphing y = A tan(Bx + C)',
        steps: [
          'Find asymptotes: Set Bx + C = −π/2 and Bx + C = π/2 and solve.',
          'Find x-intercept: midway between the two asymptotes.',
          'Find key points: ¼ way between each asymptote and x-intercept — y-values are −A and +A.',
          'Sketch one full period using these 3 points, then extend as needed.',
        ],
      ),
      CalloutBlock(
        title: 'Example (4.6): y = 2 tan(x/2) on [−π, 3π]',
        items: [
          'Period = π/|B| = π/(1/2) = 2π',
          'Asymptotes: x/2 = ±π/2 → x = ±π',
          'x-intercept: midpoint of (−π, π) = 0. Key points: (−π/2, −2) and (π/2, 2).',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. The period of y = tan(2x) is:',
          choices: [
            QuizChoice(text: 'A) 2π', isCorrect: false),
            QuizChoice(text: 'B) π', isCorrect: false),
            QuizChoice(
              text: 'C) π/2',
              isCorrect: true,
              explanation: 'C: π/2. Period of tangent = π/|B| = π/2.',
            ),
            QuizChoice(text: 'D) 4π', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: '2. The graph of y = sec x has vertical asymptotes where:',
          choices: [
            QuizChoice(text: 'A) sin x = 0', isCorrect: false),
            QuizChoice(
              text: 'B) cos x = 0 (sec is undefined)',
              isCorrect: true,
              explanation: 'B: where cos x = 0. sec x = 1/cos x — undefined when the denominator is 0. This happens at odd multiples of π/2.',
            ),
            QuizChoice(text: 'C) tan x = 0', isCorrect: false),
            QuizChoice(text: 'D) cos x = 1', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── U6: Inverse Trigonometric Functions (4.7) ─────────────────────────────
  Unit(
    title: 'Inverse Trigonometric Functions',
    blocks: [
      DataTableBlock(
        headers: ['Inverse Function', 'Input Domain', 'Output Range', 'Notes'],
        rows: [
          ['y = sin⁻¹(x) = arcsin(x)', '[−1, 1]', '[−π/2, π/2]', 'Must restrict sin to [−π/2, π/2] for 1-to-1'],
          ['y = cos⁻¹(x) = arccos(x)', '[−1, 1]', '[0, π]', 'Must restrict cos to [0, π] for 1-to-1'],
          ['y = tan⁻¹(x) = arctan(x)', 'All reals (−∞, ∞)', '(−π/2, π/2)', 'Must restrict tan to (−π/2, π/2)'],
        ],
      ),
      CalloutBlock(
        title: 'Inverse Properties — When They Cancel',
        items: [
          'sin(sin⁻¹ x) = x  for x ∈ [−1, 1]',
          'sin⁻¹(sin x) = x  ONLY for x ∈ [−π/2, π/2] — be careful with domain!',
          'cos(cos⁻¹ x) = x  for x ∈ [−1, 1]',
          'cos⁻¹(cos x) = x  ONLY for x ∈ [0, π]',
          'tan(tan⁻¹ x) = x  for all x',
          'tan⁻¹(tan x) = x  ONLY for x ∈ (−π/2, π/2)',
        ],
      ),
      WarnBlock(
        title: 'Domain Trap (4.7)',
        items: [
          'sin⁻¹(sin(π/4)) = π/4 ✓  (π/4 is in [−π/2, π/2])',
          'sin⁻¹(sin(5π/4)) ≠ 5π/4 ✗  (5π/4 is NOT in [−π/2, π/2])',
          'sin(5π/4) = −√2/2, so sin⁻¹(sin(5π/4)) = sin⁻¹(−√2/2) = −π/4',
        ],
      ),
      StepBoxBlock(
        title: 'Example: Find the exact value of cos(tan⁻¹(5/12))',
        steps: [
          'Let θ = tan⁻¹(5/12), so tan θ = 5/12 with θ in Q I.',
          'Draw right triangle: opposite = 5, adjacent = 12, hypotenuse = √(25+144) = 13.',
          'cos θ = adjacent/hypotenuse = 12/13',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. Evaluate sin⁻¹(−√2/2).',
          choices: [
            QuizChoice(text: 'A) 3π/4', isCorrect: false),
            QuizChoice(
              text: 'B) −π/4',
              isCorrect: true,
              explanation: 'B: −π/4. arcsin range is [−π/2, π/2]. We need sin θ = −√2/2 in that range. sin(−π/4) = −√2/2. Answer: −π/4. (Not 3π/4 or 5π/4 — outside the arcsin range.)',
            ),
            QuizChoice(text: 'C) 5π/4', isCorrect: false),
            QuizChoice(text: 'D) π/4', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: '2. Find the exact value of cos(sin⁻¹(3/5)).',
          choices: [
            QuizChoice(text: 'A) 4/3', isCorrect: false),
            QuizChoice(text: 'B) 5/4', isCorrect: false),
            QuizChoice(
              text: 'C) 4/5',
              isCorrect: true,
              explanation: 'C: 4/5. Let θ = sin⁻¹(3/5), so sin θ = 3/5 with θ in Q I. Right triangle: opp=3, hyp=5, adj=4. cos θ = 4/5.',
            ),
            QuizChoice(text: 'D) 3/4', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── U7: Verifying Trigonometric Identities (5.1) ─────────────────────────
  Unit(
    title: 'Verifying Trigonometric Identities',
    blocks: [
      CalloutBlock(
        title: 'The Golden Rules',
        items: [
          'Work only ONE side — usually the more complex side. Transform it to equal the other side.',
          'Never move terms across the = sign (no cross-multiplication while verifying).',
          'Never multiply both sides by the same quantity.',
          'Common strategies: factor, substitute a Pythagorean identity, convert to sin/cos, find common denominators, multiply by conjugate.',
        ],
      ),
      StepBoxBlock(
        title: 'Example (5.1): Verify sec x · cot x = csc x',
        steps: [
          'Work left side only.',
          'sec x · cot x = (1/cos x) · (cos x/sin x)',
          '= 1/sin x',
          '= csc x ✓',
        ],
      ),
      StepBoxBlock(
        title: 'Example (5.1): Verify sin x · tan x + cos x = sec x',
        steps: [
          'Left side: sin x · (sin x/cos x) + cos x',
          '= sin²x/cos x + cos x',
          '= sin²x/cos x + cos²x/cos x  (common denominator)',
          '= (sin²x + cos²x)/cos x',
          '= 1/cos x = sec x ✓',
        ],
      ),
      StepBoxBlock(
        title: 'Example (5.1): Verify cos x/(1 + sin x) + (1 + sin x)/cos x = 2 sec x',
        steps: [
          'Common denominator: cos x(1 + sin x)',
          'Numerator: cos²x + (1 + sin x)²',
          '= cos²x + 1 + 2sin x + sin²x',
          '= (sin²x + cos²x) + 1 + 2sin x',
          '= 1 + 1 + 2sin x = 2 + 2sin x = 2(1 + sin x)',
          'Divide: 2(1 + sin x) / [cos x(1 + sin x)] = 2/cos x = 2 sec x ✓',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. When verifying a trig identity, you should:',
          choices: [
            QuizChoice(text: 'A) Cross-multiply to clear fractions', isCorrect: false),
            QuizChoice(text: 'B) Work both sides simultaneously toward each other', isCorrect: false),
            QuizChoice(
              text: 'C) Work only ONE side, transforming it to equal the other side',
              isCorrect: true,
              explanation: 'C is correct. Verifying an identity means showing it is true for ALL values — working one side only. Cross-multiplying assumes the equation is true (what you\'re trying to prove), making the logic circular.',
            ),
            QuizChoice(text: 'D) Substitute a specific value to check', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── U8: Sum & Difference Identities (5.2) ────────────────────────────────
  Unit(
    title: 'Sum & Difference Identities',
    blocks: [
      DataTableBlock(
        headers: ['Identity', 'Formula'],
        rows: [
          ['cos(α + β)', 'cos α cos β − sin α sin β'],
          ['cos(α − β)', 'cos α cos β + sin α sin β'],
          ['sin(α + β)', 'sin α cos β + cos α sin β'],
          ['sin(α − β)', 'sin α cos β − cos α sin β'],
          ['tan(α + β)', '(tan α + tan β)/(1 − tan α tan β)'],
          ['tan(α − β)', '(tan α − tan β)/(1 + tan α tan β)'],
        ],
      ),
      StepBoxBlock(
        title: 'Example (5.2): Find exact value of sin 15°',
        steps: [
          'sin 15° = sin(45° − 30°)',
          '= sin 45° cos 30° − cos 45° sin 30°',
          '= (√2/2)(√3/2) − (√2/2)(1/2)',
          '= √6/4 − √2/4',
          '= (√6 − √2)/4',
        ],
      ),
      StepBoxBlock(
        title: 'Example (5.2): Find exact value of cos 80° cos 20° + sin 80° sin 20°',
        steps: [
          'Recognize the pattern: cos α cos β + sin α sin β = cos(α − β)',
          '= cos(80° − 20°) = cos 60°',
          '= 1/2',
        ],
      ),
      StepBoxBlock(
        title: 'Example (5.2): Given sin α = 5/13 (Q II) and sin β = 3/5 (Q I), find sin(α + β)',
        steps: [
          'Q II: sin α = 5/13 → cos α = −12/13',
          'Q I: sin β = 3/5 → cos β = 4/5',
          'sin(α + β) = sin α cos β + cos α sin β',
          '= (5/13)(4/5) + (−12/13)(3/5)',
          '= 20/65 − 36/65 = −16/65',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. Find the exact value of cos 75°.',
          choices: [
            QuizChoice(
              text: 'A) (√6 − √2)/4',
              isCorrect: true,
              explanation: 'A: (√6 − √2)/4. cos 75° = cos(45° + 30°) = cos45 cos30 − sin45 sin30 = (√2/2)(√3/2) − (√2/2)(1/2) = √6/4 − √2/4 = (√6 − √2)/4.',
            ),
            QuizChoice(text: 'B) (√6 + √2)/4', isCorrect: false),
            QuizChoice(text: 'C) (√2 − √6)/4', isCorrect: false),
            QuizChoice(text: 'D) √3/2', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: '2. (tan 50° − tan 20°)/(1 + tan 50° tan 20°) equals:',
          choices: [
            QuizChoice(text: 'A) tan 70°', isCorrect: false),
            QuizChoice(text: 'B) tan 30° = √3/3 (incorrect form)', isCorrect: false),
            QuizChoice(
              text: 'C) tan 30° = √3/3',
              isCorrect: true,
              explanation: 'C: tan 30° = √3/3. Recognize the tan difference formula: (tan A − tan B)/(1 + tan A tan B) = tan(A − B) = tan(50° − 20°) = tan 30° = √3/3.',
            ),
            QuizChoice(text: 'D) 1', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── U9: Double-Angle & Half-Angle Identities (5.3) ───────────────────────
  Unit(
    title: 'Double-Angle & Half-Angle Identities',
    blocks: [
      DataTableBlock(
        headers: ['Identity', 'Formula(s)'],
        rows: [
          ['sin 2θ', '2 sin θ cos θ'],
          ['cos 2θ', 'cos²θ − sin²θ  OR  1 − 2sin²θ  OR  2cos²θ − 1'],
          ['tan 2θ', '2 tan θ/(1 − tan²θ)'],
        ],
      ),
      CalloutBlock(
        title: 'Three forms of cos 2θ — choose based on what you know',
        items: [
          'cos²θ − sin²θ  → use when you know both sin and cos',
          '1 − 2sin²θ  → use when you only know sin θ',
          '2cos²θ − 1  → use when you only know cos θ',
        ],
      ),
      StepBoxBlock(
        title: 'Example (5.3): sin θ = 5/13, Q II. Find sin 2θ, cos 2θ, tan 2θ',
        steps: [
          'Q II: sin θ = 5/13, cos θ = −12/13, tan θ = −5/12',
          'sin 2θ = 2(5/13)(−12/13) = −120/169',
          'cos 2θ = 2cos²θ − 1 = 2(144/169) − 1 = 288/169 − 169/169 = 119/169',
          'tan 2θ = 2(−5/12)/(1 − 25/144) = (−10/12)/(119/144) = −120/119',
        ],
      ),
      CalloutBlock(
        title: 'Half-Angle Identities (sign determined by quadrant of α/2)',
        items: [
          'sin(α/2) = ±√((1 − cos α)/2)',
          'cos(α/2) = ±√((1 + cos α)/2)',
          'tan(α/2) = (1 − cos α)/sin α = sin α/(1 + cos α)',
          'The ± is determined by the quadrant of the angle α/2, not α.',
        ],
      ),
      StepBoxBlock(
        title: 'Example (5.3): Find exact value of cos 112.5°',
        steps: [
          '112.5° = 225°/2, so use half-angle with α = 225°',
          '112.5° is in Q II → cos(112.5°) is negative',
          'cos(112.5°) = −√((1 + cos 225°)/2)',
          'cos 225° = −√2/2',
          '= −√((1 − √2/2)/2) = −√((2 − √2)/4) = −√(2 − √2)/2',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. If cos θ = 15/17 and θ is in Q I, then cos 2θ equals:',
          choices: [
            QuizChoice(text: 'A) 30/17', isCorrect: false),
            QuizChoice(text: 'B) 225/289 − 64/289 = 161/289', isCorrect: false),
            QuizChoice(text: 'C) 2(225/289) − 1 = 161/289', isCorrect: false),
            QuizChoice(
              text: 'D) Both B and C (161/289)',
              isCorrect: true,
              explanation: 'D: Both B and C (161/289). sin θ = 8/17 (Q I, positive). cos 2θ = cos²θ − sin²θ = 225/289 − 64/289 = 161/289. Also = 2cos²θ − 1 = 450/289 − 289/289 = 161/289. Both give 161/289.',
            ),
          ],
        ),
        QuizQuestion(
          question: '2. Find the exact value of 2 tan 15°/(1 − tan² 15°).',
          choices: [
            QuizChoice(
              text: 'A) tan 30° = √3/3',
              isCorrect: true,
              explanation: 'A: √3/3. The expression 2tanθ/(1−tan²θ) = tan(2θ). So 2tan15°/(1−tan²15°) = tan(30°) = 1/√3 = √3/3.',
            ),
            QuizChoice(text: 'B) √3', isCorrect: false),
            QuizChoice(text: 'C) 1/√3 (same as A)', isCorrect: false),
            QuizChoice(text: 'D) 2 tan 15°', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── U10: Solving Trigonometric Equations (5.5) ────────────────────────────
  Unit(
    title: 'Solving Trigonometric Equations',
    blocks: [
      CalloutBlock(
        title: 'General Strategy',
        items: [
          '1. Solve for trig function values on [0, 2π].',
          '2. Period is 2π (or π for tan/cot) → general solution adds + 2kπ (or + kπ).',
          '3. Always check for extraneous solutions when squaring or using identities.',
        ],
      ),
      StepBoxBlock(
        title: 'Example: Linear — Solve 5 sin θ − 3 sin θ = √3 on [0, 2π]',
        steps: [
          '2 sin θ = √3 → sin θ = √3/2',
          'sin is positive in Q I and Q II',
          'θ = π/3 (Q I) and θ = 2π/3 (Q II)',
          'General solution: θ = π/3 + 2kπ or θ = 2π/3 + 2kπ',
        ],
      ),
      StepBoxBlock(
        title: 'Example: Quadratic — Solve 2cos²θ + cos θ − 1 = 0 on [0, 2π]',
        steps: [
          'Factor: (2cos θ − 1)(cos θ + 1) = 0',
          'cos θ = 1/2 → θ = π/3, 5π/3',
          'cos θ = −1 → θ = π',
          'Solutions: π/3, π, 5π/3',
        ],
      ),
      StepBoxBlock(
        title: 'Example: Using Identities — Solve 2sin²x − cos x − 1 = 0 on [0, 2π]',
        steps: [
          'Replace sin²x with 1 − cos²x:',
          '2(1 − cos²x) − cos x − 1 = 0',
          '−2cos²x − cos x + 1 = 0 → 2cos²x + cos x − 1 = 0',
          '(2cos x − 1)(cos x + 1) = 0',
          'cos x = 1/2 → x = π/3, 5π/3   |   cos x = −1 → x = π',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. Solve 2 sin θ + 1 = 0 on [0, 2π].',
          choices: [
            QuizChoice(text: 'A) π/6, 5π/6', isCorrect: false),
            QuizChoice(
              text: 'B) 7π/6, 11π/6',
              isCorrect: true,
              explanation: 'B: 7π/6 and 11π/6. 2 sin θ = −1 → sin θ = −1/2. Sin is negative in Q III and Q IV. Reference angle = π/6. Q III: π + π/6 = 7π/6. Q IV: 2π − π/6 = 11π/6.',
            ),
            QuizChoice(text: 'C) π/3, 2π/3', isCorrect: false),
            QuizChoice(text: 'D) 4π/3, 5π/3', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: '2. Solve tan θ cos θ = tan θ on [0, 2π].',
          choices: [
            QuizChoice(text: 'A) θ = 0, π only', isCorrect: false),
            QuizChoice(text: 'B) θ = π/2, 3π/2 only', isCorrect: false),
            QuizChoice(text: 'C) θ = 0, π, π/4, 5π/4', isCorrect: false),
            QuizChoice(
              text: 'D) θ = 0, π (from tan θ(cos θ − 1) = 0, where cos θ = 1)',
              isCorrect: true,
              explanation: 'D is correct. Factor: tan θ(cos θ − 1) = 0. tan θ = 0 → θ = 0, π. cos θ = 1 → θ = 0. Solutions: θ = 0, π. (tan θ is undefined where cos θ = 0, so π/2 and 3π/2 are excluded.)',
            ),
          ],
        ),
      ]),
    ],
  ),

  // ── U11: Law of Sines & Ambiguous Case (6.1) ─────────────────────────────
  Unit(
    title: 'Law of Sines & the Ambiguous Case',
    blocks: [
      DataTableBlock(
        headers: ['Given', 'Use', 'Formula'],
        rows: [
          ['AAS — two angles and non-included side', 'Law of Sines', 'a/sin A = b/sin B = c/sin C'],
          ['ASA — two angles and included side', 'Law of Sines', '(find 3rd angle first)'],
          ['SSA — two sides and opposite angle', 'Law of Sines (Ambiguous Case)', 'May have 0, 1, or 2 solutions'],
          ['SAS — two sides and included angle', 'Law of Cosines', 'c² = a² + b² − 2ab cos C'],
          ['SSS — three sides', 'Law of Cosines', 'cos A = (b² + c² − a²)/(2bc)'],
        ],
      ),
      CalloutBlock(
        title: 'Law of Sines: a/sin A = b/sin B = c/sin C',
        items: [
          'Or equivalently: sin A/a = sin B/b = sin C/c',
          'Always: Find the third angle first using A + B + C = 180°.',
          'If the law gives sin B > 1, no triangle exists.',
        ],
      ),
      StepBoxBlock(
        title: 'Example (6.1 AAS): A = 30°, B = 45°, a = 32 ft',
        steps: [
          'Find C: C = 180° − 30° − 45° = 105°',
          'b/sin B = a/sin A → b = 32·sin 45°/sin 30° = 32·(√2/2)/(1/2) = 45.3 ft',
          'c = 32·sin 105°/sin 30° = 61.8 ft',
        ],
      ),
      DataTableBlock(
        headers: ['Condition', 'Number of Triangles', 'Why'],
        rows: [
          ['sin B > 1', '0 triangles — no solution', 'Impossible for sin to exceed 1'],
          ['sin B = 1', '1 right triangle', 'The side exactly reaches'],
          ['sin B < 1 and a ≥ b', '1 triangle', 'Side a is long enough to prevent ambiguity'],
          ['sin B < 1 and a < b', '2 triangles (or check 2nd angle)', 'B₂ = 180° − B₁; check A + B₂ < 180°'],
        ],
      ),
      MustKnowBlock([
        'Unit circle: sin θ = y, cos θ = x, tan θ = y/x on unit circle of radius 1',
        'Pythagorean identities: sin²+cos²=1; tan²+1=sec²; 1+cot²=csc²',
        'ASTC (CAST rule): Q1 All, Q2 Sin, Q3 Tan, Q4 Cos positive',
        'Reference angle: always positive, always acute, always with the x-axis',
        'y = A sin(Bx+C)+D: Amplitude=|A|, Period=2π/|B|, Phase shift=C/B, Midline=D',
        'Inverse trig ranges: arcsin [−π/2,π/2]; arccos [0,π]; arctan (−π/2,π/2)',
        'Verifying identities: work ONE side only — never cross the equal sign',
        'sin(A+B) = sinA cosB + cosA sinB (the \'+\' version keeps all positives)',
        'cos(A+B) = cosA cosB − sinA sinB (note the MINUS for +)',
        'sin 2θ = 2 sinθ cosθ; cos 2θ has THREE equivalent forms — pick the right one',
        'Half-angle sign: determined by quadrant of α/2, not α',
        'Solve trig equations: isolate the function, find reference angle, apply ASTC',
        'Quadratic trig equations: factor or substitute Pythagorean identity to reduce',
        'Law of Sines: use for AAS, ASA, SSA',
        'SSA ambiguous case: if sin B > 1 → no triangle; if sin B < 1 → check for 1 or 2 triangles',
      ]),
      QuizBlock([
        QuizQuestion(
          question: '1. In the SSA ambiguous case, if sin B > 1, then:',
          choices: [
            QuizChoice(text: 'A) Two triangles exist', isCorrect: false),
            QuizChoice(text: 'B) One right triangle exists', isCorrect: false),
            QuizChoice(
              text: 'C) No triangle exists — impossible',
              isCorrect: true,
              explanation: 'C: No triangle. The sine function only outputs values in [−1, 1]. If sin B > 1, the calculation is impossible — the given side is too short to reach the opposite side.',
            ),
            QuizChoice(text: 'D) The triangle is equilateral', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: '2. For triangle ABC with A = 30°, a = 12, b = 5 (SSA), the number of triangles is:',
          choices: [
            QuizChoice(text: 'A) 0', isCorrect: false),
            QuizChoice(
              text: 'B) 1',
              isCorrect: true,
              explanation: 'B: 1 triangle. sin B = 5·sin30°/12 = 2.5/12 = 0.2083. B ≈ 12° or B ≈ 168°. Check B = 168°: A + B = 30° + 168° = 198° > 180° — impossible. Only one triangle exists.',
            ),
            QuizChoice(text: 'C) 2', isCorrect: false),
            QuizChoice(text: 'D) Cannot be determined', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),
];
