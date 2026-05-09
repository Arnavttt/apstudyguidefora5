// lib/data/content/apchem_content.dart
//
// AP Chemistry — 3 units transcribed from apchem.html
// Accent: #2dd4bf (teal)

import '../../models/content_block.dart';
import '../../models/unit.dart';

const List<Unit> apchemUnits = [
  // ── Unit 1: Atomic Structure, Bonding & IMFs ─────────────────────────────
  Unit(
    title: 'Atomic Structure, Bonding & IMFs',
    blocks: [
      DataTableBlock(
        headers: ['Trend', 'Across Period (L\u2192R)', 'Down Group'],
        rows: [
          ['Atomic Radius', 'Decreases (more protons pull e\u207b in)', 'Increases (more electron shells)'],
          ['Ionization Energy', 'Increases (harder to remove from smaller atom)', 'Decreases'],
          ['Electronegativity', 'Increases (F = most, 3.98)', 'Decreases'],
          ['Electron Affinity', 'Generally increases', 'Decreases'],
        ],
      ),
      DataTableBlock(
        headers: ['Electron Groups', 'Bonding/Lone Pairs', 'Shape', 'Example'],
        rows: [
          ['2', '2/0', 'Linear (180\u00b0)', 'CO\u2082'],
          ['3', '3/0', 'Trigonal planar (120\u00b0)', 'BF\u2083'],
          ['3', '2/1', 'Bent (~117\u00b0)', 'SO\u2082'],
          ['4', '4/0', 'Tetrahedral (109.5\u00b0)', 'CH\u2084'],
          ['4', '3/1', 'Trigonal pyramidal (~107\u00b0)', 'NH\u2083'],
          ['4', '2/2', 'Bent (~104.5\u00b0)', 'H\u2082O'],
          ['5', '5/0', 'Trigonal bipyramidal', 'PCl\u2085'],
          ['6', '6/0', 'Octahedral (90\u00b0)', 'SF\u2086'],
        ],
      ),
      CalloutBlock(
        title: 'IMF Strength (Weakest \u2192 Strongest)',
        items: [
          'London Dispersion: All molecules. Strength \u221d molar mass and polarizability.',
          'Dipole-Dipole: Polar molecules only.',
          'Hydrogen Bonding: H bonded to N, O, or F. Explains water\u2019s high bp.',
          'Ion-Dipole: Ion near polar molecule \u2014 strongest IMF.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Which molecule has a bent geometry despite having 4 electron groups?',
          choices: [
            QuizChoice(text: 'A) CH\u2084', isCorrect: false),
            QuizChoice(text: 'B) NH\u2083', isCorrect: false),
            QuizChoice(
              text: 'C) H\u2082O',
              isCorrect: true,
              explanation: 'C: H\u2082O. H\u2082O has 4 electron groups (2 bonding + 2 lone pairs) \u2192 tetrahedral electron geometry but BENT molecular geometry. The lone pairs repel more strongly, compressing the bond angle to ~104.5\u00b0.',
            ),
            QuizChoice(text: 'D) CO\u2082', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 2: Kinetics & Equilibrium ──────────────────────────────────────
  Unit(
    title: 'Kinetics & Equilibrium',
    blocks: [
      CodeBlock([
        CodeSpan('Rate Law:   rate = k[A]\u1d50[B]\u207f    ', kind: CodeSpanKind.highlight),
        CodeSpan('// orders from EXPERIMENT, never coefficients\n', kind: CodeSpanKind.comment),
        CodeSpan('\n'),
        CodeSpan('Integrated Rate Laws:\n', kind: CodeSpanKind.highlight),
        CodeSpan('Zero order:   [A] = [A]\u2080 \u2212 kt          ', kind: CodeSpanKind.plain),
        CodeSpan('// linear: [A] vs t\n', kind: CodeSpanKind.comment),
        CodeSpan('First order:  ln[A] = ln[A]\u2080 \u2212 kt      ', kind: CodeSpanKind.plain),
        CodeSpan('// linear: ln[A] vs t\n', kind: CodeSpanKind.comment),
        CodeSpan('Second order: 1/[A] = 1/[A]\u2080 + kt     ', kind: CodeSpanKind.plain),
        CodeSpan('// linear: 1/[A] vs t\n', kind: CodeSpanKind.comment),
        CodeSpan('\n'),
        CodeSpan('Half-life:\n', kind: CodeSpanKind.highlight),
        CodeSpan('First order:  t\u00bd = 0.693/k             ', kind: CodeSpanKind.plain),
        CodeSpan('// CONSTANT \u2014 independent of [A]\u2080\n', kind: CodeSpanKind.comment),
        CodeSpan('Second order: t\u00bd = 1/(k[A]\u2080)          ', kind: CodeSpanKind.plain),
        CodeSpan('// depends on initial concentration\n', kind: CodeSpanKind.comment),
        CodeSpan('\n'),
        CodeSpan('Arrhenius:  k = Ae^(\u2212Ea/RT)         ', kind: CodeSpanKind.highlight),
        CodeSpan('// catalyst lowers Ea, increases rate', kind: CodeSpanKind.comment),
      ]),
      CalloutBlock(
        title: 'Le Chatelier\u2019s Principle',
        items: [
          'Add reactant / remove product: shifts RIGHT (toward products)',
          'Add product / remove reactant: shifts LEFT',
          'Increase pressure: shifts toward fewer moles of gas',
          'Increase temperature: shifts toward endothermic side (treats heat as reactant/product)',
          'Add catalyst: equilibrium UNCHANGED \u2014 just reaches it faster. K does not change.',
          'Add inert gas at constant volume: NO shift \u2014 partial pressures unchanged',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'For N\u2082 + 3H\u2082 \u21cc 2NH\u2083 (\u0394H=\u221292 kJ), which increases NH\u2083 yield?',
          choices: [
            QuizChoice(text: 'A) Increasing temperature', isCorrect: false),
            QuizChoice(
              text: 'B) Increasing pressure',
              isCorrect: true,
              explanation: 'B: Increasing pressure. 4 moles gas \u2192 2 moles. Increasing pressure favors fewer gas moles \u2192 shifts right \u2192 more NH\u2083. Choice A would shift LEFT (exothermic reaction, adding heat shifts away from products). Catalyst (C) doesn\'t change yield.',
            ),
            QuizChoice(text: 'C) Adding a catalyst', isCorrect: false),
            QuizChoice(text: 'D) Decreasing pressure', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'Reaction orders are determined by:',
          choices: [
            QuizChoice(text: 'A) Balanced equation stoichiometric coefficients', isCorrect: false),
            QuizChoice(
              text: 'B) Experiment only',
              isCorrect: true,
              explanation: 'B: Experiment only. This is one of the most common exam misconceptions. Stoichiometric coefficients in the balanced equation NEVER directly give rate law orders (except in elementary reactions where the mechanism IS the stoichiometry).',
            ),
            QuizChoice(text: 'C) The rate-determining step only', isCorrect: false),
            QuizChoice(text: 'D) Activation energy', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 3: Acids, Bases & Buffers ───────────────────────────────────────
  Unit(
    title: 'Acids, Bases & Buffers',
    blocks: [
      CodeBlock([
        CodeSpan('pH = \u2212log[H\u207a]            ', kind: CodeSpanKind.highlight),
        CodeSpan('// pOH = \u2212log[OH\u207b]  // pH + pOH = 14 at 25\u00b0C\n', kind: CodeSpanKind.comment),
        CodeSpan('Ka \u00d7 Kb = Kw = 1\u00d710\u207b\u00b9\u2074    ', kind: CodeSpanKind.highlight),
        CodeSpan('// at 25\u00b0C\n', kind: CodeSpanKind.comment),
        CodeSpan('Stronger acid = smaller Ka = smaller pKa\n'),
        CodeSpan('\n'),
        CodeSpan('Weak acid ICE table:\n', kind: CodeSpanKind.highlight),
        CodeSpan('HA \u21cc H\u207a + A\u207b\n'),
        CodeSpan('I:  C    0    0\n'),
        CodeSpan('C: \u2212x  +x   +x\n'),
        CodeSpan('E: C\u2212x   x    x\n'),
        CodeSpan('Ka = x\u00b2/(C\u2212x) \u2248 x\u00b2/C  ', kind: CodeSpanKind.plain),
        CodeSpan('// 5% approximation valid when x << C\n', kind: CodeSpanKind.comment),
        CodeSpan('[H\u207a] = x = \u221a(Ka\u00b7C)\n'),
        CodeSpan('\n'),
        CodeSpan('Henderson-Hasselbalch (buffer):\n', kind: CodeSpanKind.highlight),
        CodeSpan('pH = pKa + log([A\u207b]/[HA])   ', kind: CodeSpanKind.plain),
        CodeSpan('// Buffer most effective when pH \u2248 pKa', kind: CodeSpanKind.comment),
      ]),
      StepBoxBlock(
        title: 'ICE Table Walkthrough: Weak Acid',
        steps: [
          'Write the equilibrium: HA \u21cc H\u207a + A\u207b',
          'Set up ICE: Initial (I): [HA]=C, [H\u207a]=0, [A\u207b]=0',
          'Change (C): [HA] decreases by x; [H\u207a] and [A\u207b] each increase by x',
          'Equilibrium (E): [HA]=C\u2212x, [H\u207a]=x, [A\u207b]=x',
          'Ka = x\u00b2/(C\u2212x). If x << C (5% rule), approximate: x \u2248 \u221a(Ka \u00b7 C)',
          'pH = \u2212log(x)',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'At the half-equivalence point in a weak acid titration:',
          choices: [
            QuizChoice(text: 'A) pH = 7', isCorrect: false),
            QuizChoice(
              text: 'B) pH = pKa',
              isCorrect: true,
              explanation: 'B: pH = pKa. At half-equivalence, half the acid has been converted to its conjugate base: [HA] = [A\u207b]. Substituting into H-H: pH = pKa + log(1) = pKa + 0 = pKa. This is used to FIND Ka experimentally from a titration curve.',
            ),
            QuizChoice(text: 'C) pH = pKb', isCorrect: false),
            QuizChoice(text: 'D) pH = 14', isCorrect: false),
          ],
        ),
      ]),
      MustKnowBlock([
        'Reaction orders from EXPERIMENT \u2014 never stoichiometric coefficients',
        'First-order half-life is CONSTANT: t\u00bd = 0.693/k',
        'Catalyst: lowers Ea, increases rate, does NOT change K or \u0394G\u00b0',
        'Le Chatelier: adding inert gas at constant volume = NO shift',
        'pH = pKa at half-equivalence point',
        'Henderson-Hasselbalch: pH = pKa + log([A\u207b]/[HA])',
        'Stronger acid = smaller Ka = more dissociation',
        'H bonding requires H bonded to N, O, or F',
        'VSEPR: lone pairs repel more than bonding pairs',
        'Anode = oxidation (always); cathode = reduction (always)',
      ]),
    ],
  ),
];
