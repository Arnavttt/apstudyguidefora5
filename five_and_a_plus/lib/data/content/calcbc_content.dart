// lib/data/content/calcbc_content.dart
//
// Full content tree for AP Calculus BC.
// Source: calcbc.html (238 lines) — AP Calculus BC · Score 5 Edition
//
// 4 Unit objects:
//   Limits & Continuity, Derivatives, Integration, Sequences/Series & Taylor

import '../../models/unit.dart';
import '../../models/content_block.dart';

const List<Unit> calcbcUnits = [
  // ── Unit 1: Limits & Continuity ──────────────────────────────────────────
  Unit(
    title: 'Limits & Continuity',
    blocks: [
      CalloutBlock(
        title: 'Indeterminate Forms & L\'Hôpital\'s Rule',
        items: [
          'If a limit gives 0/0 or ∞/∞, use L\'Hôpital\'s Rule: lim f/g = lim f\'/g\' (differentiate top and bottom separately).',
          'Other indeterminate forms: 0·∞, ∞−∞, 0⁰, 1^∞, ∞⁰ — rewrite algebraically before applying L\'Hôpital.',
          'Continuity: f is continuous at c if: (1) f(c) exists, (2) lim f(x) exists, (3) lim f(x) = f(c).',
          'Intermediate Value Theorem: if f is continuous on [a,b] and N is between f(a) and f(b), then f(c)=N for some c in (a,b).',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. lim(x→0) (sin x)/x =',
          choices: [
            QuizChoice(text: 'A) 0', isCorrect: false),
            QuizChoice(text: 'B) undefined', isCorrect: false),
            QuizChoice(
              text: 'C) 1',
              isCorrect: true,
              explanation: 'C: 1. This is a fundamental limit — must be memorized. Similarly: lim(x→0) (1−cos x)/x = 0. These appear frequently on the AP exam in derivative derivations.',
            ),
            QuizChoice(text: 'D) ∞', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 2–3: Derivatives ─────────────────────────────────────────────────
  Unit(
    title: 'Derivatives',
    blocks: [
      DataTableBlock(
        headers: ['Rule', 'Formula', 'Example'],
        rows: [
          ['Power Rule', 'd/dx[xⁿ] = nxⁿ⁻¹', 'd/dx[x⁵] = 5x⁴'],
          ['Product Rule', 'd/dx[fg] = f\'g + fg\'', 'd/dx[x²sinx] = 2x sinx + x²cosx'],
          ['Quotient Rule', 'd/dx[f/g] = (f\'g − fg\')/g²', 'd/dx[sinx/x] = (x cosx − sinx)/x²'],
          ['Chain Rule', 'd/dx[f(g(x))] = f\'(g(x))·g\'(x)', 'd/dx[sin(x²)] = cos(x²)·2x'],
          ['d/dx[sin x]', 'cos x', '—'],
          ['d/dx[cos x]', '−sin x', '—'],
          ['d/dx[tan x]', 'sec²x', '—'],
          ['d/dx[eˣ]', 'eˣ', '—'],
          ['d/dx[ln x]', '1/x', '—'],
          ['d/dx[aˣ]', 'aˣ ln(a)', '—'],
          ['d/dx[arcsin x]', '1/√(1−x²)', '—'],
          ['d/dx[arctan x]', '1/(1+x²)', '—'],
        ],
      ),
      StepBoxBlock(
        title: 'Implicit Differentiation: Find dy/dx for x² + y² = 25',
        steps: [
          'Differentiate both sides with respect to x.',
          'Left side: 2x + 2y(dy/dx) = 0  (chain rule: d/dx[y²] = 2y·dy/dx)',
          'Right side: 0',
          'Solve for dy/dx: 2y(dy/dx) = −2x → dy/dx = −x/y',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. If f(x) = x³·eˣ, then f\'(x) =',
          choices: [
            QuizChoice(text: 'A) 3x²·eˣ', isCorrect: false),
            QuizChoice(text: 'B) x³·eˣ', isCorrect: false),
            QuizChoice(
              text: 'C) 3x²eˣ + x³eˣ',
              isCorrect: true,
              explanation: 'C: 3x²eˣ + x³eˣ. Product rule: d/dx[fg] = f\'g + fg\'. f=x³, f\'=3x². g=eˣ, g\'=eˣ. Result: 3x²·eˣ + x³·eˣ. Can factor: eˣ(3x² + x³) = x²eˣ(3+x).',
            ),
            QuizChoice(text: 'D) 3x²eˣ − x³eˣ', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Units 4–6: Integration ────────────────────────────────────────────────
  Unit(
    title: 'Integration',
    blocks: [
      DataTableBlock(
        headers: ['Technique', 'When to Use', 'Formula/Method'],
        rows: [
          ['Basic Antiderivatives', 'Simple polynomials, trig, exp', '∫xⁿ dx = xⁿ⁺¹/(n+1)+C; ∫eˣ dx = eˣ+C; ∫sinx dx = −cosx+C'],
          ['u-Substitution', 'Composition of functions inside integral', 'Let u = inner function; du = derivative × dx. Replace and integrate.'],
          ['Integration by Parts', 'Product of two functions', '∫u dv = uv − ∫v du. LIATE for choosing u: Logarithm, Inverse trig, Algebraic, Trig, Exponential.'],
          ['Trig Substitution', 'Integrals with √(a²−x²), √(a²+x²), √(x²−a²)', 'Substitute x=a sinθ, a tanθ, or a secθ respectively.'],
          ['Partial Fractions', 'Rational functions with factorable denominator', 'Decompose into simpler fractions; integrate each.'],
        ],
      ),
      CalloutBlock(
        title: 'Fundamental Theorem of Calculus',
        items: [
          'FTC Part 1: If F(x) = ∫[a to x] f(t) dt, then F\'(x) = f(x)',
          'FTC Part 2: ∫[a to b] f(x) dx = F(b) − F(a) where F is any antiderivative of f',
          'Average value of f on [a,b]: f_avg = (1/(b−a)) ∫[a to b] f(x) dx',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: '1. ∫ 2x·e^(x²) dx =',
          choices: [
            QuizChoice(text: 'A) 2e^(x²) + C', isCorrect: false),
            QuizChoice(
              text: 'B) e^(x²) + C',
              isCorrect: true,
              explanation: 'B: e^(x²) + C. U-substitution: let u = x², du = 2x dx. ∫2x·e^(x²) dx = ∫e^u du = e^u + C = e^(x²) + C.',
            ),
            QuizChoice(text: 'C) x²·e^(x²) + C', isCorrect: false),
            QuizChoice(text: 'D) e^(2x) + C', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── BC Series: Sequences, Series & Taylor ─────────────────────────────────
  Unit(
    title: 'Sequences, Series & Taylor',
    blocks: [
      DataTableBlock(
        headers: ['Test', 'Use When', 'Result'],
        rows: [
          ['Divergence Test', 'Always try first', 'If lim(aₙ)≠0, diverges. If = 0, inconclusive.'],
          ['Integral Test', 'aₙ=f(n), f continuous/decreasing/positive', 'Σaₙ and ∫f(x)dx have same convergence behavior'],
          ['p-Series', 'Σ 1/nᵖ', 'Converges if p > 1; diverges if p ≤ 1'],
          ['Geometric Series', 'Σ arⁿ', 'Converges if |r|<1, sum=a/(1−r); diverges if |r|≥1'],
          ['Direct Comparison', 'Similar to known series', 'If 0≤aₙ≤bₙ: bₙ converges → aₙ converges; aₙ diverges → bₙ diverges'],
          ['Limit Comparison', 'Ratio of terms has finite nonzero limit', 'If lim(aₙ/bₙ)=L>0, both series same behavior'],
          ['Ratio Test', 'Factorials, exponentials', 'If lim|aₙ₊₁/aₙ|<1: converges; >1: diverges; =1: inconclusive'],
          ['Alternating Series Test', 'Alternating signs', 'Converges if: terms decrease AND approach 0'],
        ],
      ),
      CalloutBlock(
        title: 'Taylor & Maclaurin Series — Must Memorize',
        items: [
          'eˣ = 1 + x + x²/2! + x³/3! + ... = Σ xⁿ/n!  (all x)',
          'sin x = x − x³/3! + x⁵/5! − ... = Σ (−1)ⁿx^(2n+1)/(2n+1)!  (all x)',
          'cos x = 1 − x²/2! + x⁴/4! − ... = Σ (−1)ⁿx^(2n)/(2n)!  (all x)',
          '1/(1−x) = 1 + x + x² + x³ + ... = Σ xⁿ  (|x|<1)',
          'Taylor series centered at a: f(x) = Σ f⁽ⁿ⁾(a)/n! · (x−a)ⁿ',
        ],
      ),
      MustKnowBlock([
        'lim(x→0) sinx/x = 1 and lim(x→0)(1−cosx)/x = 0',
        'Chain rule for ALL composite functions',
        'Integration by Parts: LIATE for choosing u',
        'FTC Part 1: d/dx[∫f(t)dt from a to x] = f(x)',
        'p-Series: converges if p>1',
        'Geometric series: converges if |r|<1, sum = a/(1−r)',
        'Ratio test is best for factorials and exponentials',
        'Alternating series converges if terms decrease to 0',
        'Taylor series: memorize eˣ, sinx, cosx, 1/(1−x)',
        'L\'Hôpital\'s Rule: only for 0/0 or ∞/∞ — must verify form first',
      ]),
      QuizBlock([
        QuizQuestion(
          question: '1. The series Σ 1/n² converges because:',
          choices: [
            QuizChoice(text: 'A) It\'s a geometric series', isCorrect: false),
            QuizChoice(
              text: 'B) It\'s a p-series with p=2>1',
              isCorrect: true,
              explanation: 'B is correct. Σ 1/nᵖ is a p-series. It converges when p>1 and diverges when p≤1. Here p=2>1, so it converges (to π²/6, though you don\'t need to know the sum).',
            ),
            QuizChoice(text: 'C) The ratio test gives L<1', isCorrect: false),
            QuizChoice(text: 'D) The divergence test shows limit=0', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),
];
