// lib/data/content/musictheory_content.dart
//
// AP Music Theory — 4 units transcribed from musictheory.html
// Accent: #e879f9 (fuchsia)

import '../../models/content_block.dart';
import '../../models/unit.dart';

const List<Unit> musictheoryUnits = [
  // ── Unit 1: Pitch, Rhythm & Notation ────────────────────────────────────
  Unit(
    title: 'Pitch, Rhythm & Notation',
    blocks: [
      DataTableBlock(
        headers: ['Note', 'American Name', 'Beats (4/4)'],
        rows: [
          ['\ud834\uddd9', 'Whole note', '4 beats'],
          ['\ud834\uddd7\ud834\udd65', 'Half note', '2 beats'],
          ['\u2669', 'Quarter note', '1 beat'],
          ['\u266a', 'Eighth note', '\u00bd beat'],
          ['\ud834\udd68\ud834\udd65\ud834\udd6f', 'Sixteenth note', '\u00bc beat'],
        ],
      ),
      CalloutBlock(
        title: 'Time Signatures',
        items: [
          'Top number = beats per measure. Bottom = which note gets one beat.',
          '4/4 (common time): 4 quarter-note beats per measure.',
          '3/4 (waltz): 3 quarter-note beats. Strong beat on beat 1.',
          '6/8 (compound duple): 2 groups of 3 eighth notes. Felt in 2.',
          'Simple vs. compound: Simple (2/4, 3/4, 4/4) \u2014 beat divides into 2. Compound (6/8, 9/8) \u2014 beat divides into 3.',
        ],
      ),
      CalloutBlock(
        title: 'Major Scale Formula: W-W-H-W-W-W-H',
        items: [
          'W = whole step (2 semitones). H = half step (1 semitone).',
          'C major: C-D-E-F-G-A-B-C (no sharps or flats \u2014 the reference scale).',
          'Circle of Fifths: Moving clockwise adds one sharp. Moving counter-clockwise adds one flat.',
          'Sharp keys: G(1#), D(2#), A(3#), E(4#), B(5#), F#(6#), C#(7#)',
          'Flat keys: F(1\u266d), B\u266d(2\u266d), E\u266d(3\u266d), A\u266d(4\u266d), D\u266d(5\u266d), G\u266d(6\u266d), C\u266d(7\u266d)',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'The key signature with 3 sharps is:',
          choices: [
            QuizChoice(
              text: 'A) A major',
              isCorrect: true,
              explanation: 'A: A major. Sharps order: F#, C#, G#. Three sharps = F#, C#, G# \u2192 A major (or F# minor relative). Mnemonic: Father Charles Goes Down And Ends Battle.',
            ),
            QuizChoice(text: 'B) D major', isCorrect: false),
            QuizChoice(text: 'C) E major', isCorrect: false),
            QuizChoice(text: 'D) B major', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'In 6/8 time, a dotted quarter note lasts:',
          choices: [
            QuizChoice(text: 'A) 2 beats', isCorrect: false),
            QuizChoice(text: 'B) 1.5 beats', isCorrect: false),
            QuizChoice(
              text: 'C) One full group of three eighths = one compound beat',
              isCorrect: true,
              explanation: 'C is correct. In 6/8, the dotted quarter = 3 eighth notes = one compound beat. 6/8 has 2 compound beats per measure, each divided into 3. This is why 6/8 feels like a lilt or waltz-like groove, not 6 separate eighth-note pulses.',
            ),
            QuizChoice(text: 'D) 3 beats', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 2: Intervals & Chords ──────────────────────────────────────────
  Unit(
    title: 'Intervals & Chords',
    blocks: [
      DataTableBlock(
        headers: ['Interval', 'Semitones', 'Quality', 'Examples'],
        rows: [
          ['Unison', '0', 'Perfect', 'C\u2192C'],
          ['Minor 2nd', '1', 'Minor', 'C\u2192D\u266d'],
          ['Major 2nd', '2', 'Major', 'C\u2192D'],
          ['Minor 3rd', '3', 'Minor', 'C\u2192E\u266d'],
          ['Major 3rd', '4', 'Major', 'C\u2192E'],
          ['Perfect 4th', '5', 'Perfect', 'C\u2192F'],
          ['Tritone', '6', 'Aug 4th / Dim 5th', 'C\u2192F#'],
          ['Perfect 5th', '7', 'Perfect', 'C\u2192G'],
          ['Minor 6th', '8', 'Minor', 'C\u2192A\u266d'],
          ['Major 6th', '9', 'Major', 'C\u2192A'],
          ['Minor 7th', '10', 'Minor', 'C\u2192B\u266d'],
          ['Major 7th', '11', 'Major', 'C\u2192B'],
          ['Octave', '12', 'Perfect', 'C\u2192C'],
        ],
      ),
      CalloutBlock(
        title: 'Triads & Seventh Chords',
        items: [
          'Major triad: Root + major 3rd + perfect 5th (M3 + m3 stacked)',
          'Minor triad: Root + minor 3rd + perfect 5th (m3 + M3)',
          'Diminished triad: Root + minor 3rd + diminished 5th (m3 + m3)',
          'Augmented triad: Root + major 3rd + augmented 5th (M3 + M3)',
          'Dominant 7th (V7): Major triad + minor 7th (M3 + m3 + m3)',
          'Leading tone dim7 (vii\u00b07): Fully diminished \u2014 all minor thirds',
        ],
      ),
      DataTableBlock(
        headers: ['Scale Degree', 'Roman Numeral', 'Quality', 'Function'],
        rows: [
          ['1', 'I', 'Major', 'Tonic \u2014 home, rest, stability'],
          ['2', 'ii', 'Minor', 'Supertonic \u2014 pre-dominant'],
          ['3', 'iii', 'Minor', 'Mediant \u2014 often tonic substitute'],
          ['4', 'IV', 'Major', 'Subdominant \u2014 pre-dominant'],
          ['5', 'V', 'Major', 'Dominant \u2014 tension, wants to resolve to I'],
          ['6', 'vi', 'Minor', 'Submediant \u2014 tonic substitute (relative minor)'],
          ['7', 'vii\u00b0', 'Diminished', 'Leading tone \u2014 strong tension, resolves to I'],
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'The interval from D up to A is a:',
          choices: [
            QuizChoice(text: 'A) Perfect 4th', isCorrect: false),
            QuizChoice(text: 'B) Major 6th', isCorrect: false),
            QuizChoice(
              text: 'C) Perfect 5th',
              isCorrect: true,
              explanation: 'C: Perfect 5th. Count the letter names inclusively: D(1)-E(2)-F(3)-G(4)-A(5) = 5th. Then check quality: D to A = 7 semitones = perfect 5th. Perfect intervals (unisons, 4ths, 5ths, octaves) come from the major scale built on the lower note.',
            ),
            QuizChoice(text: 'D) Minor 6th', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'In C major, the chord built on scale degree 7 is:',
          choices: [
            QuizChoice(text: 'A) C major', isCorrect: false),
            QuizChoice(text: 'B) G dominant 7th', isCorrect: false),
            QuizChoice(
              text: 'C) B diminished triad',
              isCorrect: true,
              explanation: 'C: B diminished. Scale degree 7 in C major = B. Build a triad: B-D-F. B\u2192D = minor 3rd; D\u2192F = minor 3rd. Two stacked minor thirds = diminished triad (vii\u00b0). The diminished 5th (tritone) gives it strong tension \u2192 resolves up to I.',
            ),
            QuizChoice(text: 'D) A minor', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 3: SATB Voice Leading ───────────────────────────────────────────
  Unit(
    title: 'SATB Voice Leading',
    blocks: [
      CalloutBlock(
        title: 'Voice Ranges',
        items: [
          'Soprano (S): C4\u2013G5 (middle C to high G)',
          'Alto (A): G3\u2013C5',
          'Tenor (T): C3\u2013G4',
          'Bass (B): E2\u2013C4',
          'Voices should generally stay in range. Crossing voices (alto above soprano) is a voice-crossing error.',
        ],
      ),
      WarnBlock(
        title: 'Voice Leading Rules',
        items: [
          'No parallel perfect 5ths: Two voices moving in the same direction and maintaining a P5 between them. This is the most common error.',
          'No parallel perfect octaves: Same principle \u2014 two voices moving in parallel octaves.',
          'No voice crossing: Alto should never go above soprano; tenor should never go above alto.',
          'Resolve the leading tone (7\u0302): The 7th scale degree MUST resolve up a half step to the tonic. Never double the leading tone.',
          'Resolve the chordal 7th DOWN by step: In a V7, the 7th of the chord (4th scale degree) must resolve DOWN by step to the 3rd scale degree (iii or I\u2076).',
          'No augmented melodic intervals: No voice should leap an augmented 2nd, augmented 4th, etc.',
          'Avoid large leaps: Prefer stepwise motion. Leaps of a 6th or 7th are awkward. After a large leap, move by step in the opposite direction.',
        ],
      ),
      DataTableBlock(
        headers: ['Cadence', 'Chords', 'Feel/Function'],
        rows: [
          ['Perfect Authentic Cadence (PAC)', 'V (or V7) \u2192 I, both in root position, soprano on tonic', 'Strongest ending \u2014 full stop. Required for period phrase structure.'],
          ['Imperfect Authentic Cadence (IAC)', 'V \u2192 I, but inverted or soprano not on 1\u0302', 'Weaker ending \u2014 sense of conclusion but not final.'],
          ['Half Cadence (HC)', 'Anything \u2192 V', 'Ends on V \u2014 feels unresolved, like a musical question.'],
          ['Plagal Cadence', 'IV \u2192 I', '\u2018Amen\u2019 cadence. Less common. Often added after a PAC.'],
          ['Deceptive Cadence', 'V \u2192 vi', 'Expected I, got vi. Creates sense of continuation; extends the phrase.'],
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Parallel perfect fifths are prohibited in SATB voice leading because:',
          choices: [
            QuizChoice(text: 'A) They sound dissonant', isCorrect: false),
            QuizChoice(
              text: 'B) They cause two independent voices to lose independence \u2014 merging into one sonority instead of two distinct lines',
              isCorrect: true,
              explanation: 'B is correct. The prohibition on parallel 5ths is about voice independence \u2014 two voices moving in parallel perfect consonances stop functioning as two lines and merge. 18th-century common practice harmony requires four clearly independent voices, each with its own melodic logic.',
            ),
            QuizChoice(text: 'C) They violate church rules from the Middle Ages only', isCorrect: false),
            QuizChoice(text: 'D) They are too hard to sing', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'A V7 chord resolves to I. The chordal 7th (4\u0302) must move:',
          choices: [
            QuizChoice(text: 'A) Up a half step to 5\u0302', isCorrect: false),
            QuizChoice(
              text: 'B) Down a step to 3\u0302',
              isCorrect: true,
              explanation: 'B: Down a step to 3\u0302. The chordal 7th creates a dissonance (tritone with the 3rd of the V chord) that demands resolution. The 7th resolves down by step \u2014 from 4\u0302 to 3\u0302. Simultaneously, the leading tone (7\u0302) resolves UP to 1\u0302. These opposing resolutions drive the V7\u2192I progression.',
            ),
            QuizChoice(text: 'C) Stay as a common tone', isCorrect: false),
            QuizChoice(text: 'D) Jump down a 4th', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Unit 4: Form & Aural Skills ──────────────────────────────────────────
  Unit(
    title: 'Form & Aural Skills',
    blocks: [
      DataTableBlock(
        headers: ['Form', 'Structure', 'Characteristics'],
        rows: [
          ['Binary (AB)', 'A section + B section', 'Contrasting sections. Both often repeated. Common in Baroque dances.'],
          ['Ternary (ABA)', 'A section + contrasting B + A return', 'Return of opening material. Middle section provides contrast.'],
          ['Rounded Binary', 'AB where B ends with A material', 'Hybrid \u2014 begins like binary but B section ends by returning to A. Common in minuets.'],
          ['Theme & Variations', 'A, A\u2019, A\u2019\u2019, A\u2019\u2019\u2019\u2026', 'Melody remains recognizable but is elaborated, harmonized, or rhythmically varied.'],
          ['Rondo', 'ABACADA\u2026', 'Main theme (A) alternates with episodes. Often last movement of concertos.'],
          ['Sonata Form', 'Exposition\u2013Development\u2013Recapitulation', 'Most important Classical form. Exposition: 2 themes, different keys. Development: fragmented, modulating. Recap: both themes in tonic.'],
        ],
      ),
      CalloutBlock(
        title: 'Interval Recognition Mnemonics',
        items: [
          'm2: \u2018Jaws\u2019 theme (duh-duh)',
          'M2: \u2018Happy Birthday\u2019 (hap-py)',
          'm3: \u2018Smoke on the Water\u2019 first two notes',
          'M3: \u2018Oh When the Saints\u2019 (oh when)',
          'P4: \u2018Here Comes the Bride\u2019',
          'Tritone: \u2018The Simpsons\u2019 theme',
          'P5: \u2018Star Wars\u2019 theme / \u2018Twinkle Twinkle\u2019',
          'm6: \u2018The Entertainer\u2019 opening',
          'M6: \u2018My Bonnie Lies Over the Ocean\u2019',
          'm7: \u2018Somewhere\u2019 (from West Side Story)',
          'M7: \u2018Take On Me\u2019 opening',
          'Octave: \u2018Somewhere Over the Rainbow\u2019',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'Sonata form\'s \u2018development\u2019 section is characterized by:',
          choices: [
            QuizChoice(text: 'A) Presentation of two contrasting themes in stable keys', isCorrect: false),
            QuizChoice(text: 'B) Return of both themes in the tonic key', isCorrect: false),
            QuizChoice(
              text: 'C) Fragmentation and modulation of themes through multiple keys \u2014 harmonic instability',
              isCorrect: true,
              explanation: 'C is correct. The development section takes thematic material from the exposition and develops it: fragments, sequences, inverts, and passes it through various keys. It creates maximum harmonic tension before the recapitulation\u2019s return to stability in the tonic.',
            ),
            QuizChoice(text: 'D) A new, contrasting melody', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'A deceptive cadence resolves V to:',
          choices: [
            QuizChoice(text: 'A) I', isCorrect: false),
            QuizChoice(text: 'B) IV', isCorrect: false),
            QuizChoice(text: 'C) vii\u00b0', isCorrect: false),
            QuizChoice(
              text: 'D) vi',
              isCorrect: true,
              explanation: 'D: vi. The deceptive cadence substitutes vi (tonic minor parallel) for the expected I. The bass moves to vi, but the soprano may still resolve normally. It creates a sense of continuation rather than full closure \u2014 composers use it to extend phrases.',
            ),
          ],
        ),
      ]),
      MustKnowBlock([
        'Major scale formula: W-W-H-W-W-W-H',
        'Circle of fifths: clockwise adds sharps. Counter-clockwise adds flats.',
        'Sharp key order: F C G D A E B (Fat Cats Go Down Alleys Eating Bugs)',
        'Flat key order: B E A D G C F (Battle Ends And Down Goes Charles\u2019s Father)',
        'Diatonic triads in major: I ii iii IV V vi vii\u00b0 (M m m M M m dim)',
        'SATB absolute rules: no parallel 5ths/8ths, no voice crossing, resolve leading tone UP',
        'Chordal 7th (V7 \u2192 I): 4\u0302 resolves DOWN to 3\u0302. Leading tone 7\u0302 resolves UP to 1\u0302.',
        'PAC = V\u2192I root position, soprano on 1\u0302. HC = ends on V.',
        'Deceptive cadence: V\u2192vi (expected I, got vi)',
        'Sonata form: Exposition (2 themes) \u2192 Development (fragmented/modulating) \u2192 Recapitulation (both themes, tonic)',
        'Interval mnemonics: P4=\u2018Here Comes the Bride\u2019, P5=\u2018Star Wars\u2019, Tritone=\u2018Simpsons\u2019',
      ]),
    ],
  ),
];
