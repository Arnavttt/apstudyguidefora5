// lib/data/content/physics_content.dart
//
// AP Physics 1 & 2 — 2 units transcribed from physics.html
// Accent: #34d399 (emerald)

import '../../models/content_block.dart';
import '../../models/unit.dart';

const List<Unit> physicsUnits = [
  // ── Unit 1: Mechanics ────────────────────────────────────────────────────
  Unit(
    title: 'Mechanics',
    blocks: [
      DataTableBlock(
        headers: ['Equation', 'Variables', 'Use When'],
        rows: [
          ['v = v\u2080 + at', 'v, v\u2080, a, t', 'No displacement needed'],
          ['x = v\u2080t + \u00bdat\u00b2', 'x, v\u2080, a, t', 'No final velocity needed'],
          ['v\u00b2 = v\u2080\u00b2 + 2ax', 'v, v\u2080, a, x', 'No time needed'],
          ['x = \u00bd(v\u2080 + v)t', 'x, v\u2080, v, t', 'No acceleration needed'],
        ],
      ),
      CardRowBlock([
        ContentCardData(
          title: 'Newton\u2019s 1st Law (Inertia)',
          body: 'Objects remain at rest or in constant velocity unless acted on by a net force. Inertia \u221d mass.',
        ),
        ContentCardData(
          title: 'Newton\u2019s 2nd Law',
          body: 'F\u2099\u2091\u209c = ma. Net force = mass \u00d7 acceleration. If forces are balanced (F\u2099\u2091\u209c=0), object is in equilibrium (a=0).',
        ),
        ContentCardData(
          title: 'Newton\u2019s 3rd Law',
          body: 'Every action has an equal and opposite reaction. Forces are equal in magnitude, opposite in direction, but act on DIFFERENT objects.',
        ),
        ContentCardData(
          title: 'Friction',
          body: 'Static friction (f\u209b \u2264 \u03bc\u209bN) prevents motion. Kinetic friction (f\u2096 = \u03bc\u2096N) acts on moving objects. \u03bc\u209b > \u03bc\u2096 always.',
        ),
      ]),
      DataTableBlock(
        headers: ['Concept', 'Formula', 'Notes'],
        rows: [
          ['Work', 'W = Fd cos\u03b8', '\u03b8 = angle between force and displacement. W=0 if perpendicular.'],
          ['Kinetic Energy', 'KE = \u00bdmv\u00b2', 'Scalar. Always \u2265 0.'],
          ['Gravitational PE', 'PE = mgh', 'h measured from reference point'],
          ['Work-Energy Theorem', 'W\u2099\u2091\u209c = \u0394KE', 'Net work = change in kinetic energy'],
          ['Conservation of Energy', 'KE\u2081 + PE\u2081 = KE\u2082 + PE\u2082', 'Only when no non-conservative forces (no friction)'],
          ['Power', 'P = W/t = Fv', 'Rate of work; watts (W)'],
        ],
      ),
      CalloutBlock(
        title: 'Circular Motion & Momentum',
        items: [
          'Centripetal acceleration: a\u2099 = v\u00b2/r, directed toward center.',
          'Centripetal force: F\u2099 = mv\u00b2/r. Not a new force \u2014 it\u2019s the net force directed inward.',
          'Momentum: p = mv. Impulse: J = F\u0394t = \u0394p.',
          'Conservation of momentum: In a closed system, total momentum is constant. p\u2081\u1d62 + p\u2082\u1d62 = p\u2081\u0192 + p\u2082\u0192.',
          'Elastic collision: KE conserved. Inelastic collision: KE not conserved. Perfectly inelastic: objects stick together.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'A 2 kg box slides down a frictionless ramp from height 5 m. What is its speed at the bottom? (g=10)',
          choices: [
            QuizChoice(
              text: 'A) 10 m/s',
              isCorrect: true,
              explanation: 'A: 10 m/s. Conservation of energy: mgh = \u00bdmv\u00b2. g cancels: v = \u221a(2gh) = \u221a(2\u00d710\u00d75) = \u221a100 = 10 m/s. The mass cancels \u2014 all objects on a frictionless ramp reach the same speed regardless of mass.',
            ),
            QuizChoice(text: 'B) 50 m/s', isCorrect: false),
            QuizChoice(text: 'C) 5 m/s', isCorrect: false),
            QuizChoice(text: 'D) 100 m/s', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'An object in circular motion at constant speed is:',
          choices: [
            QuizChoice(text: 'A) Not accelerating', isCorrect: false),
            QuizChoice(
              text: 'B) Accelerating toward the center of the circle',
              isCorrect: true,
              explanation: 'B is correct. Centripetal acceleration: a = v\u00b2/r, directed toward the center. Even at constant SPEED, the velocity vector is changing direction \u2014 this IS acceleration. The centripetal force (Fc = mv\u00b2/r) is not a new force \u2014 it\u2019s the NET force directed toward center.',
            ),
            QuizChoice(text: 'C) Accelerating away from the center', isCorrect: false),
            QuizChoice(text: 'D) In equilibrium', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 2: Electricity, Magnetism & Waves ───────────────────────────────
  Unit(
    title: 'Electricity, Magnetism & Waves',
    blocks: [
      DataTableBlock(
        headers: ['Concept', 'Formula', 'Notes'],
        rows: [
          ['Ohm\u2019s Law', 'V = IR', 'V=voltage (volts), I=current (amps), R=resistance (ohms)'],
          ['Power', 'P = IV = I\u00b2R = V\u00b2/R', 'Power dissipated in resistor'],
          ['Series Resistors', 'R\u209c\u2092\u209c\u2090\u2097 = R\u2081 + R\u2082 + ...', 'Same current through all; voltages add'],
          ['Parallel Resistors', '1/R\u209c\u2092\u209c\u2090\u2097 = 1/R\u2081 + 1/R\u2082', 'Same voltage across all; currents add'],
          ['Capacitance', 'C = Q/V', 'Charge stored per volt'],
          ['Series Capacitors', '1/C\u209c\u2092\u209c\u2090\u2097 = 1/C\u2081 + 1/C\u2082', 'Opposite of resistor rule'],
          ['Parallel Capacitors', 'C\u209c\u2092\u209c\u2090\u2097 = C\u2081 + C\u2082', 'Opposite of resistor rule'],
        ],
      ),
      CalloutBlock(
        title: 'Wave Equations',
        items: [
          'v = f\u03bb \u2014 wave speed = frequency \u00d7 wavelength',
          'f = 1/T \u2014 frequency = 1/period',
          'Transverse waves: vibration perpendicular to propagation (light, water waves).',
          'Longitudinal waves: vibration parallel to propagation (sound, P-waves).',
          'Sound speed: ~340 m/s in air. Faster in solids/liquids than gases.',
          'Doppler Effect: approaching source \u2192 higher frequency (blueshift). Receding \u2192 lower (redshift).',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Two 6\u03a9 resistors are connected in parallel. The equivalent resistance is:',
          choices: [
            QuizChoice(text: 'A) 12\u03a9', isCorrect: false),
            QuizChoice(text: 'B) 6\u03a9', isCorrect: false),
            QuizChoice(
              text: 'C) 3\u03a9',
              isCorrect: true,
              explanation: 'C: 3\u03a9. Parallel: 1/R = 1/6 + 1/6 = 2/6 = 1/3 \u2192 R = 3\u03a9. For two equal resistors in parallel, the equivalent resistance is always HALF of one resistor.',
            ),
            QuizChoice(text: 'D) 1\u03a9', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'A wave has frequency 500 Hz and wavelength 0.68 m. Its speed is:',
          choices: [
            QuizChoice(text: 'A) 735 m/s', isCorrect: false),
            QuizChoice(text: 'B) 0.00136 m/s', isCorrect: false),
            QuizChoice(
              text: 'C) 340 m/s',
              isCorrect: true,
              explanation: 'C: 340 m/s. v = f\u03bb = 500 \u00d7 0.68 = 340 m/s. This is approximately the speed of sound in air \u2014 the numbers were chosen to reflect this.',
            ),
            QuizChoice(text: 'D) 68 m/s', isCorrect: false),
          ],
        ),
      ]),
      MustKnowBlock([
        'Big 4 kinematics equations \u2014 identify which variable is missing to choose the right one',
        'F\u2099\u2091\u209c = ma \u2014 net force, not any individual force',
        'Conservation of energy: mgh = \u00bdmv\u00b2 on frictionless surfaces (mass cancels)',
        'Centripetal acceleration = v\u00b2/r, directed toward center',
        'Series: same current; Parallel: same voltage',
        'Parallel resistors: equivalent resistance LESS than smallest',
        'Series capacitors: equivalent capacitance LESS than smallest',
        'v = f\u03bb for all waves',
        'Newton\u2019s 3rd: equal and opposite forces act on DIFFERENT objects',
        'Work = Fdcos\u03b8 \u2014 zero work if force perpendicular to displacement',
      ]),
    ],
  ),
];
