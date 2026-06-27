/**
 * Five & A+ — AI Question Stream · Course data: AP Precalculus
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE (ap-biology.js) exact shape.
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-precalculus',
    displayName: 'AP Precalculus',
    description: 'Modeling and analysis of polynomial, rational, exponential, logarithmic, trigonometric, and polar functions, plus parametric, vector, and matrix representations of change.',
    category: 'stem',
    allowedQuestionTypes: ['mcq', 'calculation', 'graph-interpretation', 'data-analysis', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'calculation', 'frq'],
    skills: [
      'procedural fluency',
      'conceptual understanding',
      'graph analysis',
      'modeling',
      'function analysis'
    ],
    bigIdeas: ['Change', 'Functions', 'Modeling'],
    units: [
      { id: 'unit-1', name: 'Polynomial and Rational Functions', examWeight: '30-40%', description: 'Rates of change, end behavior, zeros, and asymptotes of polynomial and rational functions.',
        topics: [
          { id: 'polynomial-behavior', name: 'Polynomial Behavior and Zeros', description: 'Degree, leading coefficient, end behavior, multiplicity of real zeros, and turning points.', skills: ['function analysis'] },
          { id: 'rational-functions', name: 'Rational Functions and Asymptotes', description: 'Vertical, horizontal, and slant asymptotes; holes; and domain restrictions.', skills: ['graph analysis'] },
          { id: 'rates-of-change', name: 'Average Rate of Change', description: 'Average rate of change over intervals and concavity from changing rates.', skills: ['conceptual understanding'] }
        ] },
      { id: 'unit-2', name: 'Exponential and Logarithmic Functions', examWeight: '27-40%', description: 'Exponential growth and decay, logarithms, and inverse relationships used to model data.',
        topics: [
          { id: 'exponential-models', name: 'Exponential Models', description: 'Constant proportional change, growth and decay factors, and fitting exponential models.', skills: ['modeling'] },
          { id: 'logarithms', name: 'Logarithms and Properties', description: 'Definition of logarithms, properties, and solving exponential and logarithmic equations.', skills: ['procedural fluency'] },
          { id: 'inverse-functions', name: 'Inverse Functions', description: 'Inverses of exponential, logarithmic, and other one-to-one functions.', skills: ['conceptual understanding'] }
        ] },
      { id: 'unit-3', name: 'Trigonometric and Polar Functions', examWeight: '30-35%', description: 'The unit circle, periodic models, trigonometric equations, and polar coordinates.',
        topics: [
          { id: 'unit-circle', name: 'Unit Circle and Radians', description: 'Radian measure, exact values, and signs of trigonometric functions by quadrant.', skills: ['procedural fluency'] },
          { id: 'sinusoidal-models', name: 'Sinusoidal Functions', description: 'Amplitude, period, midline, and phase shift of sine and cosine models.', skills: ['modeling'] },
          { id: 'polar-coordinates', name: 'Polar Coordinates and Graphs', description: 'Converting between polar and rectangular forms and interpreting polar graphs.', skills: ['graph analysis'] }
        ] },
      { id: 'unit-4', name: 'Functions Involving Parameters, Vectors, and Matrices', examWeight: 'Not assessed on exam', description: 'Parametric functions, vectors, and matrix transformations (capstone unit).',
        topics: [
          { id: 'parametric-functions', name: 'Parametric Functions', description: 'Position defined by parameter, direction of motion, and eliminating the parameter.', skills: ['function analysis'] },
          { id: 'vectors', name: 'Vectors', description: 'Magnitude, direction, components, and vector addition and scaling.', skills: ['procedural fluency'] },
          { id: 'matrices', name: 'Matrices and Transformations', description: 'Matrix multiplication, the identity and inverse, and linear transformations of the plane.', skills: ['conceptual understanding'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq'], timingMinutes: 80, weight: '62.5%', notes: 'Part A (no calculator) and Part B (graphing calculator) covering Units 1-3.' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'graph-interpretation', 'data-analysis', 'short-answer'], timingMinutes: 60, weight: '37.5%', notes: 'Four free-response questions, two with and two without a graphing calculator.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-precalculus-u1-polynomial-behavior-mcq-001', courseId: 'ap-precalculus', courseName: 'AP Precalculus',
      unitId: 'unit-1', unitName: 'Polynomial and Rational Functions', topicId: 'polynomial-behavior', topicName: 'Polynomial Behavior and Zeros',
      skill: 'function analysis', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'Consider the polynomial function $p(x) = -2x^3 + 5x - 1$. What is the end behavior of $p$?',
      answerChoices: [
        { id: 'A', text: 'As $x \\to -\\infty$, $p(x) \\to -\\infty$; as $x \\to \\infty$, $p(x) \\to \\infty$.' },
        { id: 'B', text: 'As $x \\to -\\infty$, $p(x) \\to \\infty$; as $x \\to \\infty$, $p(x) \\to -\\infty$.' },
        { id: 'C', text: 'As $x \\to \\pm\\infty$, $p(x) \\to \\infty$.' },
        { id: 'D', text: 'As $x \\to \\pm\\infty$, $p(x) \\to -\\infty$.' }
      ],
      correctAnswer: 'B',
      explanation: 'End behavior is set by the leading term $-2x^3$. The odd degree gives opposite end behaviors, and the negative leading coefficient sends $p(x) \\to \\infty$ as $x \\to -\\infty$ and $p(x) \\to -\\infty$ as $x \\to \\infty$.',
      distractorRationales: {
        A: 'This is the behavior of a positive odd-degree leading term; the coefficient here is negative.',
        B: '',
        C: 'Both ends rising would require an even degree with a positive leading coefficient.',
        D: 'Both ends falling would require an even degree with a negative leading coefficient.'
      },
      tags: ['polynomial', 'end-behavior', 'leading-term'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-precalculus-u2-logarithms-mcq-001', courseId: 'ap-precalculus', courseName: 'AP Precalculus',
      unitId: 'unit-2', unitName: 'Exponential and Logarithmic Functions', topicId: 'logarithms', topicName: 'Logarithms and Properties',
      skill: 'procedural fluency', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'Which expression is equivalent to $\\log_b(M) + \\log_b(N)$ for positive $M$ and $N$?',
      answerChoices: [
        { id: 'A', text: '$\\log_b(M + N)$' },
        { id: 'B', text: '$\\log_b(MN)$' },
        { id: 'C', text: '$\\log_b(M) \\cdot \\log_b(N)$' },
        { id: 'D', text: '$\\log_b\\left(\\dfrac{M}{N}\\right)$' }
      ],
      correctAnswer: 'B',
      explanation: 'The product property of logarithms states $\\log_b(M) + \\log_b(N) = \\log_b(MN)$, because exponents add when powers of the same base are multiplied.',
      distractorRationales: {
        A: 'Logarithms do not distribute over addition; $\\log_b(M+N)$ is not generally a sum of logs.',
        B: '',
        C: 'The product of two logarithms has no simple single-log form; the property adds, not multiplies.',
        D: 'A difference of logs, not a sum, equals $\\log_b(M/N)$.'
      },
      tags: ['logarithm', 'product-property', 'properties'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-precalculus-u3-unit-circle-mcq-001', courseId: 'ap-precalculus', courseName: 'AP Precalculus',
      unitId: 'unit-3', unitName: 'Trigonometric and Polar Functions', topicId: 'unit-circle', topicName: 'Unit Circle and Radians',
      skill: 'procedural fluency', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'apply', estimatedTimeSeconds: 60,
      prompt: 'What is the exact value of $\\cos\\left(\\dfrac{2\\pi}{3}\\right)$?',
      answerChoices: [
        { id: 'A', text: '$\\dfrac{1}{2}$' },
        { id: 'B', text: '$-\\dfrac{1}{2}$' },
        { id: 'C', text: '$\\dfrac{\\sqrt{3}}{2}$' },
        { id: 'D', text: '$-\\dfrac{\\sqrt{3}}{2}$' }
      ],
      correctAnswer: 'B',
      explanation: 'The angle $\\frac{2\\pi}{3}$ (120°) lies in Quadrant II, where cosine is negative. Its reference angle is $\\frac{\\pi}{3}$, and $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$, so $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$.',
      distractorRationales: {
        A: 'Cosine is negative in Quadrant II, so the value cannot be $+\\frac{1}{2}$.',
        B: '',
        C: '$\\frac{\\sqrt{3}}{2}$ is $\\cos\\frac{\\pi}{6}$, not the cosine of this angle.',
        D: '$-\\frac{\\sqrt{3}}{2}$ would be the cosine of an angle with reference angle $\\frac{\\pi}{6}$ in Quadrant II or III, not $\\frac{\\pi}{3}$.'
      },
      tags: ['unit-circle', 'cosine', 'reference-angle'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-precalculus-u1-rational-functions-mcq-001', courseId: 'ap-precalculus', courseName: 'AP Precalculus',
      unitId: 'unit-1', unitName: 'Polynomial and Rational Functions', topicId: 'rational-functions', topicName: 'Rational Functions and Asymptotes',
      skill: 'graph analysis', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'Consider $f(x) = \\dfrac{3x^2 - 12}{x - 2}$. Which statement correctly describes the graph of $f$?',
      answerChoices: [
        { id: 'A', text: 'There is a vertical asymptote at $x = 2$.' },
        { id: 'B', text: 'There is a hole at $x = 2$ and a slant asymptote $y = 3x + 6$.' },
        { id: 'C', text: 'There is a horizontal asymptote at $y = 3$.' },
        { id: 'D', text: 'There is a hole at $x = 2$ and a horizontal asymptote $y = 0$.' }
      ],
      correctAnswer: 'B',
      explanation: 'Factor: $3x^2 - 12 = 3(x-2)(x+2)$, so $f(x) = 3(x+2) = 3x + 6$ for $x \\neq 2$. The common factor $(x-2)$ cancels, leaving a removable discontinuity (hole) at $x = 2$, and the simplified linear form acts as the slant (oblique) line $y = 3x + 6$.',
      distractorRationales: {
        A: 'The $(x-2)$ factor cancels, producing a hole rather than a vertical asymptote.',
        B: '',
        C: 'A horizontal asymptote at $y = 3$ would require equal numerator and denominator degrees; here the numerator degree is higher.',
        D: 'After cancellation the function is linear, so it has a slant line, not a horizontal asymptote at $y = 0$.'
      },
      tags: ['rational-function', 'hole', 'slant-asymptote'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-precalculus-u2-exponential-models-calc-001', courseId: 'ap-precalculus', courseName: 'AP Precalculus',
      unitId: 'unit-2', unitName: 'Exponential and Logarithmic Functions', topicId: 'exponential-models', topicName: 'Exponential Models',
      skill: 'modeling', questionType: 'calculation', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 150,
      prompt: 'A bacterial culture grows according to $P(t) = 200(1.15)^{t}$, where $t$ is in hours. To the nearest tenth of an hour, how long does it take the population to reach 800?',
      correctAnswer: '9.9',
      numericTolerance: 0.2,
      acceptableAnswers: ['9.9', '9.91', '~9.9 hours', '9.9 hr'],
      explanation: 'Set $200(1.15)^{t} = 800$, so $(1.15)^{t} = 4$. Take logarithms: $t = \\dfrac{\\ln 4}{\\ln 1.15} = \\dfrac{1.3863}{0.13976} \\approx 9.9$ hours. Because growth is exponential, the time to multiply by 4 is constant regardless of the starting count.',
      tags: ['exponential', 'growth', 'logarithm-solve'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-precalculus-u3-sinusoidal-models-graph-001', courseId: 'ap-precalculus', courseName: 'AP Precalculus',
      unitId: 'unit-3', unitName: 'Trigonometric and Polar Functions', topicId: 'sinusoidal-models', topicName: 'Sinusoidal Functions',
      skill: 'graph analysis', questionType: 'graph-interpretation', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 180,
      prompt: 'A Ferris wheel rider’s height is modeled by $h(t) = 25\\sin\\!\\left(\\dfrac{\\pi}{15}(t - 7.5)\\right) + 30$, where $h$ is in meters and $t$ in seconds. Identify the amplitude, period, and midline, and state the maximum height with the first time it occurs.',
      graphDescription: 'A smooth sinusoidal curve oscillating between a minimum of 5 m and a maximum of 55 m, centered on a horizontal midline at 30 m, repeating every 30 seconds.',
      correctAnswer: 'Amplitude 25 m, period 30 s, midline h = 30 m; maximum 55 m first at t = 15 s.',
      explanation: 'From $h(t) = 25\\sin\\!\\left(\\frac{\\pi}{15}(t-7.5)\\right)+30$: amplitude $= 25$, period $= \\frac{2\\pi}{\\pi/15} = 30$ s, and midline $= 30$. The maximum is midline plus amplitude $= 55$ m, occurring when the sine equals 1, i.e. $\\frac{\\pi}{15}(t-7.5) = \\frac{\\pi}{2}$, giving $t - 7.5 = 7.5$, so $t = 15$ s.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Correct amplitude (25) and period (30 s).', evidenceRequired: 'States both values from the equation.' },
        { id: 'r2', pointValue: 1, criterion: 'Correct midline (h = 30).', evidenceRequired: 'Identifies vertical shift as midline.' },
        { id: 'r3', pointValue: 1, criterion: 'Maximum height 55 m at t = 15 s.', evidenceRequired: 'Solves for first time sine equals 1.' }
      ],
      modelAnswer: 'The amplitude is 25 m (coefficient of sine) and the period is $\\frac{2\\pi}{\\pi/15} = 30$ s. The midline is $h = 30$ m (the vertical shift). The maximum height is midline + amplitude $= 30 + 25 = 55$ m. The sine reaches 1 when $\\frac{\\pi}{15}(t-7.5)=\\frac{\\pi}{2}$, so $t - 7.5 = 7.5$ and $t = 15$ s.',
      tags: ['sinusoidal', 'amplitude-period-midline', 'modeling'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-precalculus-u3-polar-coordinates-mcq-001', courseId: 'ap-precalculus', courseName: 'AP Precalculus',
      unitId: 'unit-3', unitName: 'Trigonometric and Polar Functions', topicId: 'polar-coordinates', topicName: 'Polar Coordinates and Graphs',
      skill: 'conceptual understanding', questionType: 'mcq', difficulty: 'hard',
      bloomLevel: 'analyze', estimatedTimeSeconds: 150,
      prompt: 'The point with rectangular coordinates $(-1, \\sqrt{3})$ is written in polar form $(r, \\theta)$ with $r > 0$ and $0 \\le \\theta < 2\\pi$. Which polar representation is correct?',
      answerChoices: [
        { id: 'A', text: '$\\left(2, \\dfrac{\\pi}{3}\\right)$' },
        { id: 'B', text: '$\\left(2, \\dfrac{2\\pi}{3}\\right)$' },
        { id: 'C', text: '$\\left(2, \\dfrac{4\\pi}{3}\\right)$' },
        { id: 'D', text: '$\\left(4, \\dfrac{2\\pi}{3}\\right)$' }
      ],
      correctAnswer: 'B',
      explanation: 'The radius is $r = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1+3} = 2$. The point $(-1, \\sqrt{3})$ is in Quadrant II. The reference angle satisfies $\\tan^{-1}\\!\\left(\\frac{\\sqrt{3}}{1}\\right) = \\frac{\\pi}{3}$, so in Quadrant II $\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.',
      distractorRationales: {
        A: '$\\frac{\\pi}{3}$ is the reference angle, but the point lies in Quadrant II, not Quadrant I.',
        B: '',
        C: '$\\frac{4\\pi}{3}$ places the point in Quadrant III, where both coordinates are negative.',
        D: 'The radius is 2, not 4; $r = \\sqrt{1+3} = 2$, not the sum of squares itself.'
      },
      tags: ['polar', 'rectangular-conversion', 'quadrant'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-precalculus-u4-vectors-calc-001', courseId: 'ap-precalculus', courseName: 'AP Precalculus',
      unitId: 'unit-4', unitName: 'Functions Involving Parameters, Vectors, and Matrices', topicId: 'vectors', topicName: 'Vectors',
      skill: 'procedural fluency', questionType: 'calculation', difficulty: 'exam-level',
      bloomLevel: 'apply', estimatedTimeSeconds: 180,
      prompt: 'A plane flies with velocity vector $\\langle 220, 0 \\rangle$ km/h (due east). A wind adds velocity $\\langle 0, 40 \\rangle$ km/h (due north). To the nearest tenth, what is the magnitude of the plane’s resultant ground velocity in km/h?',
      correctAnswer: '223.6',
      numericTolerance: 0.3,
      acceptableAnswers: ['223.6', '223.61', '~223.6 km/h', '223.6 kmh'],
      explanation: 'Add the vectors component-wise: $\\langle 220, 0 \\rangle + \\langle 0, 40 \\rangle = \\langle 220, 40 \\rangle$. The magnitude is $\\sqrt{220^2 + 40^2} = \\sqrt{48400 + 1600} = \\sqrt{50000} \\approx 223.6$ km/h. Because the two velocities are perpendicular, the Pythagorean theorem gives the resultant speed directly.',
      tags: ['vectors', 'resultant', 'magnitude'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN (FRQ) with rubric ────────────────────────────────────────────
    {
      id: 'ap-precalculus-u1-rates-of-change-frq-001', courseId: 'ap-precalculus', courseName: 'AP Precalculus',
      unitId: 'unit-1', unitName: 'Polynomial and Rational Functions', topicId: 'rates-of-change', topicName: 'Average Rate of Change',
      skill: 'conceptual understanding', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 600,
      prompt: 'A function is given by $g(x) = x^2 - 4x + 1$. (a) Compute the average rate of change of $g$ on the interval $[1, 5]$. (b) Compute the average rate of change of $g$ on $[1, 3]$ and on $[3, 5]$. (c) Using your results, explain what the changing average rates reveal about the concavity of $g$.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Average rate of change on $[a,b]$ is $\\frac{g(b)-g(a)}{b-a}$. Comparing rates on successive subintervals reveals whether the function is concave up (increasing rates) or concave down (decreasing rates).',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Correct average rate of change on [1, 5] equals 2.', evidenceRequired: 'Shows (g(5)-g(1))/(5-1).' },
        { id: 'r2', pointValue: 1, criterion: 'Correct rates on [1, 3] (= 0) and [3, 5] (= 4).', evidenceRequired: 'Both subinterval rates computed.' },
        { id: 'r3', pointValue: 1, criterion: 'States the rates are increasing.', evidenceRequired: 'Compares 0 < 4 across intervals.' },
        { id: 'r4', pointValue: 1, criterion: 'Concludes g is concave up and justifies with increasing rates.', evidenceRequired: 'Links increasing average rates to concave up.' }
      ],
      modelAnswer: '(a) $g(1) = 1 - 4 + 1 = -2$ and $g(5) = 25 - 20 + 1 = 6$, so the average rate of change on $[1,5]$ is $\\frac{6-(-2)}{5-1} = \\frac{8}{4} = 2$. (b) $g(3) = 9 - 12 + 1 = -2$. On $[1,3]$: $\\frac{-2-(-2)}{3-1} = 0$. On $[3,5]$: $\\frac{6-(-2)}{5-3} = \\frac{8}{2} = 4$. (c) The average rate of change increases from 0 to 4 as $x$ increases, so the rate of change is itself increasing. A function whose average rates of change increase over successive equal intervals is concave up, which matches the upward-opening parabola $g$.',
      tags: ['average-rate-of-change', 'concavity', 'frq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-precalculus-u2-inverse-functions-short-001', courseId: 'ap-precalculus', courseName: 'AP Precalculus',
      unitId: 'unit-2', unitName: 'Exponential and Logarithmic Functions', topicId: 'inverse-functions', topicName: 'Inverse Functions',
      skill: 'conceptual understanding', questionType: 'short-answer', difficulty: 'medium',
      bloomLevel: 'understand', estimatedTimeSeconds: 240,
      prompt: 'Let $f(x) = 3e^{2x} + 1$. Find the inverse function $f^{-1}(x)$ and state its domain.',
      correctAnswer: 'f^{-1}(x) = (1/2) ln((x-1)/3), domain x > 1.',
      acceptableAnswers: ['(1/2)ln((x-1)/3)', 'ln((x-1)/3)/2', 'domain x>1', 'x greater than 1'],
      explanation: 'Solving $y = 3e^{2x}+1$ for $x$ reverses the operations. The inverse’s domain is the range of $f$, which is $(1, \\infty)$ because $3e^{2x} > 0$.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Correctly isolates the exponential and applies the natural log.', evidenceRequired: 'Shows e^{2x} = (x-1)/3 step.' },
        { id: 'r2', pointValue: 1, criterion: 'Correct inverse f^{-1}(x) = (1/2) ln((x-1)/3).', evidenceRequired: 'Final inverse expression.' },
        { id: 'r3', pointValue: 1, criterion: 'States domain x > 1.', evidenceRequired: 'Domain matches range of f.' }
      ],
      modelAnswer: 'Start with $y = 3e^{2x} + 1$. Subtract 1: $y - 1 = 3e^{2x}$. Divide by 3: $e^{2x} = \\frac{y-1}{3}$. Take the natural log: $2x = \\ln\\!\\frac{y-1}{3}$, so $x = \\frac{1}{2}\\ln\\!\\frac{y-1}{3}$. Swapping variables, $f^{-1}(x) = \\frac{1}{2}\\ln\\!\\frac{x-1}{3}$. The domain is $x > 1$, since the original range is $(1, \\infty)$ and the log requires a positive argument.',
      tags: ['inverse-function', 'logarithm', 'domain'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
