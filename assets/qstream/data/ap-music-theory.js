/**
 * Five & A+ — AI Question Stream · Course data: AP Music Theory
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE (ap-biology.js) exactly.
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * NO AUDIO: aural concepts are described in text via musicNotationPlaceholder.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-music-theory',
    displayName: 'AP Music Theory',
    description: 'The building blocks of Western tonal music — notation, scales, intervals, chords, harmonic progression, voice leading, and analysis — developed from fundamentals through four-part harmony, modes, and form.',
    category: 'arts',
    allowedQuestionTypes: ['mcq', 'short-answer', 'music-theory-analysis', 'stimulus-based'],
    defaultQuestionTypes: ['mcq', 'music-theory-analysis', 'short-answer'],
    skills: [
      'pitch and notation',
      'rhythm and meter',
      'scales and keys',
      'intervals',
      'chords',
      'harmonic progression',
      'cadences',
      'voice leading',
      'Roman numeral analysis'
    ],
    bigIdeas: ['Pitch', 'Rhythm', 'Harmony', 'Musical Design'],
    units: [
      { id: 'unit-1', name: 'Music Fundamentals I: Pitch, Major Scales, and Key Signatures', examWeight: '8-12%', description: 'Reading pitch on the staff, building major scales, and the circle of fifths.',
        topics: [
          { id: 'pitch-notation', name: 'Pitch and Notation', description: 'Reading notes on treble and bass clefs, octave registers, and accidentals.', skills: ['pitch and notation'] },
          { id: 'major-scales', name: 'Major Scales', description: 'The whole-and-half-step pattern that builds any major scale.', skills: ['scales and keys'] },
          { id: 'key-signatures', name: 'Major Key Signatures', description: 'Ordering of sharps and flats and the circle of fifths.', skills: ['scales and keys'] }
        ] },
      { id: 'unit-2', name: 'Music Fundamentals II: Minor Scales, Rhythm, Meter, and Intervals', examWeight: '8-12%', description: 'Minor scale forms, meter signatures, rhythmic values, and interval identification.',
        topics: [
          { id: 'minor-scales', name: 'Minor Scales', description: 'Natural, harmonic, and melodic minor forms and relative/parallel keys.', skills: ['scales and keys'] },
          { id: 'rhythm-meter', name: 'Rhythm and Meter', description: 'Simple and compound meters, beat division, and time signatures.', skills: ['rhythm and meter'] },
          { id: 'intervals', name: 'Intervals', description: 'Identifying interval size and quality, including inversion.', skills: ['intervals'] }
        ] },
      { id: 'unit-3', name: 'Music Fundamentals III: Triads and Seventh Chords', examWeight: '13-18%', description: 'Constructing and identifying triads, seventh chords, and their inversions.',
        topics: [
          { id: 'triad-quality', name: 'Triad Quality', description: 'Major, minor, diminished, and augmented triads.', skills: ['chords'] },
          { id: 'seventh-chords', name: 'Seventh Chords', description: 'Construction and quality of seventh chords.', skills: ['chords'] },
          { id: 'inversions-figured-bass', name: 'Inversions and Figured Bass', description: 'Chord inversions and figured-bass symbols.', skills: ['chords'] }
        ] },
      { id: 'unit-4', name: 'Harmony and Voice Leading I', examWeight: '13-18%', description: 'Roman numeral analysis of diatonic triads and basic voice-leading rules.',
        topics: [
          { id: 'roman-numerals', name: 'Roman Numeral Analysis', description: 'Labeling diatonic chords with Roman numerals in major and minor.', skills: ['Roman numeral analysis'] },
          { id: 'soprano-bass-frame', name: 'Soprano-Bass Framework', description: 'Building an outer-voice frame and spacing for four-part writing.', skills: ['voice leading'] }
        ] },
      { id: 'unit-5', name: 'Harmony and Voice Leading II', examWeight: '13-18%', description: 'Phrase structure, cadences, and voice-leading errors to avoid.',
        topics: [
          { id: 'cadences', name: 'Cadences', description: 'Authentic, plagal, half, and deceptive cadences.', skills: ['cadences'] },
          { id: 'voice-leading-errors', name: 'Voice-Leading Errors', description: 'Parallel fifths/octaves and unresolved tendency tones.', skills: ['voice leading'] }
        ] },
      { id: 'unit-6', name: 'Harmony and Voice Leading III', examWeight: '13-18%', description: 'Non-chord tones, the dominant seventh, and embellishing the harmony.',
        topics: [
          { id: 'non-chord-tones', name: 'Non-Chord Tones', description: 'Passing tones, neighbor tones, suspensions, and appoggiaturas.', skills: ['voice leading'] },
          { id: 'dominant-seventh', name: 'The Dominant Seventh', description: 'Function and resolution of V7 and its inversions.', skills: ['harmonic progression'] }
        ] },
      { id: 'unit-7', name: 'Harmony and Voice Leading IV', examWeight: '7-12%', description: 'Secondary dominants, diatonic sequences, and tonicization.',
        topics: [
          { id: 'secondary-dominants', name: 'Secondary Dominants', description: 'Tonicizing chords other than the tonic with applied dominants.', skills: ['harmonic progression'] },
          { id: 'harmonic-sequences', name: 'Harmonic Sequences', description: 'Repeating harmonic patterns such as the descending-fifths sequence.', skills: ['harmonic progression'] }
        ] },
      { id: 'unit-8', name: 'Modes and Form', examWeight: '7-12%', description: 'Diatonic modes and small musical forms.',
        topics: [
          { id: 'diatonic-modes', name: 'Diatonic Modes', description: 'Dorian, Phrygian, Lydian, Mixolydian, and other church modes.', skills: ['scales and keys'] },
          { id: 'musical-form', name: 'Musical Form', description: 'Binary, ternary, and other small forms organized by phrase and cadence.', skills: ['harmonic progression'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq', 'stimulus-based'], timingMinutes: 80, weight: '45%', notes: 'Notation- and concept-based questions; aural portions are represented here in text via notation placeholders.' },
        { name: 'Section II: Free Response (Written)', questionTypes: ['music-theory-analysis', 'short-answer'], timingMinutes: 70, weight: '45%', notes: 'Part-writing, Roman numeral analysis, and harmonic-dictation-style written tasks.' },
        { name: 'Section II: Free Response (Sight-Singing)', questionTypes: ['short-answer'], timingMinutes: 10, weight: '10%', notes: 'Performance task described in text only; no audio in this practice stream.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-music-theory-u1-pitch-notation-mcq-001', courseId: 'ap-music-theory', courseName: 'AP Music Theory',
      unitId: 'unit-1', unitName: 'Music Fundamentals I: Pitch, Major Scales, and Key Signatures',
      topicId: 'pitch-notation', topicName: 'Pitch and Notation',
      skill: 'pitch and notation', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 45,
      prompt: 'A note sits on the second line from the bottom of the treble-clef staff. Which pitch does it represent?',
      musicNotationPlaceholder: 'Treble clef, note head centered on the 2nd staff line from the bottom.',
      answerChoices: [
        { id: 'A', text: 'E4' },
        { id: 'B', text: 'G4' },
        { id: 'C', text: 'B4' },
        { id: 'D', text: 'F4' }
      ],
      correctAnswer: 'B',
      explanation: 'On the treble clef the five lines from bottom to top spell E-G-B-D-F. The second line up is therefore G4.',
      distractorRationales: {
        A: 'E4 sits on the bottom (first) line, not the second line.',
        B: '',
        C: 'B4 sits on the middle (third) line of the treble staff.',
        D: 'F4 sits in the first space, not on the second line.'
      },
      tags: ['treble-clef', 'staff-lines', 'pitch'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-music-theory-u1-major-scales-mcq-001', courseId: 'ap-music-theory', courseName: 'AP Music Theory',
      unitId: 'unit-1', unitName: 'Music Fundamentals I: Pitch, Major Scales, and Key Signatures',
      topicId: 'major-scales', topicName: 'Major Scales',
      skill: 'scales and keys', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'Every major scale follows the same arrangement of whole steps (W) and half steps (H). Which pattern is correct?',
      answerChoices: [
        { id: 'A', text: 'W–W–H–W–W–W–H' },
        { id: 'B', text: 'W–H–W–W–H–W–W' },
        { id: 'C', text: 'H–W–W–W–H–W–W' },
        { id: 'D', text: 'W–W–W–H–W–W–H' }
      ],
      correctAnswer: 'A',
      explanation: 'The major scale is built W–W–H–W–W–W–H, placing half steps between scale degrees 3–4 and 7–8.',
      distractorRationales: {
        A: '',
        B: 'W–H–W–W–H–W–W is the natural minor (Aeolian) pattern, not major.',
        C: 'This pattern places a half step first and does not match any standard major scale.',
        D: 'This misplaces the first half step at degrees 4–5 instead of 3–4.'
      },
      tags: ['major-scale', 'whole-half-steps', 'fundamentals'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-music-theory-u3-triad-quality-mcq-001', courseId: 'ap-music-theory', courseName: 'AP Music Theory',
      unitId: 'unit-3', unitName: 'Music Fundamentals III: Triads and Seventh Chords',
      topicId: 'triad-quality', topicName: 'Triad Quality',
      skill: 'chords', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'apply', estimatedTimeSeconds: 60,
      prompt: 'A triad is built from the notes C, E, and G in root position. What is the quality of this triad?',
      musicNotationPlaceholder: 'Stacked thirds: C4 (root), E4 (third), G4 (fifth), all natural.',
      answerChoices: [
        { id: 'A', text: 'Minor' },
        { id: 'B', text: 'Diminished' },
        { id: 'C', text: 'Major' },
        { id: 'D', text: 'Augmented' }
      ],
      correctAnswer: 'C',
      explanation: 'C to E is a major third and E to G is a minor third. A major third on the bottom with a perfect fifth (C–G) outlines a major triad.',
      distractorRationales: {
        A: 'A minor triad would have a minor third on the bottom (e.g., C–E♭–G).',
        B: 'A diminished triad stacks two minor thirds and has a diminished fifth (e.g., C–E♭–G♭).',
        C: '',
        D: 'An augmented triad stacks two major thirds and has an augmented fifth (e.g., C–E–G♯).'
      },
      tags: ['triad', 'major-triad', 'chord-quality'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-music-theory-u2-intervals-mcq-001', courseId: 'ap-music-theory', courseName: 'AP Music Theory',
      unitId: 'unit-2', unitName: 'Music Fundamentals II: Minor Scales, Rhythm, Meter, and Intervals',
      topicId: 'intervals', topicName: 'Intervals',
      skill: 'intervals', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 75,
      prompt: 'Identify the interval from F4 up to D5 by both size and quality.',
      musicNotationPlaceholder: 'Two notes: lower note F4, upper note D5, both natural.',
      answerChoices: [
        { id: 'A', text: 'Minor sixth' },
        { id: 'B', text: 'Major sixth' },
        { id: 'C', text: 'Perfect fifth' },
        { id: 'D', text: 'Minor seventh' }
      ],
      correctAnswer: 'B',
      explanation: 'F up to D spans six letter names (F-G-A-B-C-D), so it is a sixth. F to D contains nine half steps, which is a major sixth.',
      distractorRationales: {
        A: 'A minor sixth from F would reach D♭ (eight half steps), but the upper note is D natural.',
        B: '',
        C: 'A perfect fifth from F would reach C, only a fifth in size.',
        D: 'A seventh would span seven letter names (F up to E), not six.'
      },
      tags: ['intervals', 'major-sixth', 'interval-quality'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-music-theory-u2-rhythm-meter-mcq-001', courseId: 'ap-music-theory', courseName: 'AP Music Theory',
      unitId: 'unit-2', unitName: 'Music Fundamentals II: Minor Scales, Rhythm, Meter, and Intervals',
      topicId: 'rhythm-meter', topicName: 'Rhythm and Meter',
      skill: 'rhythm and meter', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'understand', estimatedTimeSeconds: 75,
      prompt: 'A piece is in 6/8 time. How is the beat felt, and how does each beat divide?',
      musicNotationPlaceholder: 'Time signature 6/8, one measure grouped as two dotted-quarter beats.',
      answerChoices: [
        { id: 'A', text: 'Six beats per measure, each dividing into two' },
        { id: 'B', text: 'Two beats per measure, each dividing into three' },
        { id: 'C', text: 'Three beats per measure, each dividing into two' },
        { id: 'D', text: 'Six beats per measure, each dividing into three' }
      ],
      correctAnswer: 'B',
      explanation: '6/8 is a compound duple meter: the two main beats are dotted quarter notes, and each beat divides into three eighth notes (grouped 3+3).',
      distractorRationales: {
        A: 'Counting all six eighths as beats describes the division, not the felt compound-duple pulse.',
        B: '',
        C: 'Three beats dividing into two describes 3/4 (simple triple), not 6/8.',
        D: 'There are two dotted-quarter beats in 6/8, not six.'
      },
      tags: ['meter', 'compound-duple', '6-8-time'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-music-theory-u5-cadences-mcq-001', courseId: 'ap-music-theory', courseName: 'AP Music Theory',
      unitId: 'unit-5', unitName: 'Harmony and Voice Leading II',
      topicId: 'cadences', topicName: 'Cadences',
      skill: 'cadences', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'In the key of G major, a phrase ends with the progression V–vi. What type of cadence is this?',
      musicNotationPlaceholder: 'Final two chords in G major: D major triad (V) moving to E minor triad (vi).',
      answerChoices: [
        { id: 'A', text: 'Perfect authentic cadence' },
        { id: 'B', text: 'Half cadence' },
        { id: 'C', text: 'Deceptive cadence' },
        { id: 'D', text: 'Plagal cadence' }
      ],
      correctAnswer: 'C',
      explanation: 'A deceptive cadence occurs when V resolves not to the expected tonic (I) but to another chord, most often vi. V–vi in G major is a textbook deceptive cadence.',
      distractorRationales: {
        A: 'A perfect authentic cadence requires V–I with both in root position and the tonic in the soprano.',
        B: 'A half cadence ends ON V, rather than moving away from it.',
        C: '',
        D: 'A plagal cadence is IV–I, not V–vi.'
      },
      tags: ['cadence', 'deceptive-cadence', 'harmony'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-music-theory-u7-secondary-dominants-mcq-001', courseId: 'ap-music-theory', courseName: 'AP Music Theory',
      unitId: 'unit-7', unitName: 'Harmony and Voice Leading IV',
      topicId: 'secondary-dominants', topicName: 'Secondary Dominants',
      skill: 'harmonic progression', questionType: 'mcq', difficulty: 'hard',
      bloomLevel: 'analyze', estimatedTimeSeconds: 120,
      prompt: 'In the key of C major, a chord spelled A–C♯–E–G appears and resolves to a D-minor chord. What is the best Roman numeral label for the A–C♯–E–G chord?',
      musicNotationPlaceholder: 'C major. Chord 1: A2, C♯4, E4, G4 (dominant-seventh sonority). Chord 2: D minor triad.',
      answerChoices: [
        { id: 'A', text: 'VI7' },
        { id: 'B', text: 'V7/ii' },
        { id: 'C', text: 'V7/IV' },
        { id: 'D', text: 'vii°7' }
      ],
      correctAnswer: 'B',
      explanation: 'A–C♯–E–G is a dominant seventh chord built on A (A7). In C major it tonicizes ii (D minor), since A is the dominant of D. It therefore functions as V7/ii and resolves to ii.',
      distractorRationales: {
        A: 'The raised C♯ is chromatic to C major, so this is not a diatonic VI7; it is an applied (secondary) dominant.',
        B: '',
        C: 'V7/IV would be a C dominant seventh (C–E–G–B♭) resolving to F, not an A7 resolving to D minor.',
        D: 'A vii°7 is a fully diminished seventh chord, but A–C♯–E–G is a dominant seventh (major triad plus minor seventh).'
      },
      tags: ['secondary-dominant', 'tonicization', 'roman-numerals'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-music-theory-u6-dominant-seventh-mcq-001', courseId: 'ap-music-theory', courseName: 'AP Music Theory',
      unitId: 'unit-6', unitName: 'Harmony and Voice Leading III',
      topicId: 'dominant-seventh', topicName: 'The Dominant Seventh',
      skill: 'voice leading', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 120,
      prompt: 'In a four-voice setting in C major, a V7 chord (G–B–D–F) resolves to I. Which voice-leading resolution of the chordal seventh (F) and the leading tone (B) is correct?',
      musicNotationPlaceholder: 'C major, V7 (G2, B3, D4, F4) resolving to I (C major triad).',
      answerChoices: [
        { id: 'A', text: 'The seventh (F) rises to G; the leading tone (B) falls to A.' },
        { id: 'B', text: 'The seventh (F) falls to E; the leading tone (B) rises to C.' },
        { id: 'C', text: 'Both F and B rise by step to G and C.' },
        { id: 'D', text: 'The seventh (F) falls to E; the leading tone (B) falls to A.' }
      ],
      correctAnswer: 'B',
      explanation: 'The chordal seventh is a tendency tone that resolves DOWN by step (F→E), and the leading tone resolves UP to tonic (B→C). This standard resolution of V7→I yields a complete tonic with the expected doubling.',
      distractorRationales: {
        A: 'The seventh must descend, not ascend; raising F to G mishandles the tendency tone.',
        B: '',
        C: 'The seventh F should descend to E, not rise; only the leading tone rises.',
        D: 'The leading tone B should rise to C (tonic), not fall to A, in this resolution.'
      },
      tags: ['dominant-seventh', 'resolution', 'tendency-tones', 'voice-leading'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN: music-theory-analysis (rubric + modelAnswer) ────────────────
    {
      id: 'ap-music-theory-u4-roman-numerals-analysis-001', courseId: 'ap-music-theory', courseName: 'AP Music Theory',
      unitId: 'unit-4', unitName: 'Harmony and Voice Leading I',
      topicId: 'roman-numerals', topicName: 'Roman Numeral Analysis',
      skill: 'Roman numeral analysis', questionType: 'music-theory-analysis', difficulty: 'hard',
      bloomLevel: 'analyze', estimatedTimeSeconds: 360,
      prompt: 'A four-bar phrase in D major uses the bass line D–G–A–D with these chords: a D-major triad, a G-major triad, an A-major triad, and a D-major triad, all in root position. (a) Provide the Roman numeral for each chord. (b) Identify the cadence formed by the last two chords and justify your label.',
      musicNotationPlaceholder: 'Key of D major. Root-position chords over bass D2–G2–A2–D2: D major, G major, A major, D major.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'In D major the diatonic triads on D, G, and A are I, IV, and V. The phrase I–IV–V–I ends with V–I in root position, producing an authentic cadence (perfect if the soprano lands on the tonic).',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Labels the first three chords correctly as I, IV, and V in D major.', evidenceRequired: 'Correct Roman numerals tied to D, G, and A roots.' },
        { id: 'r2', pointValue: 1, criterion: 'Labels the final chord as I.', evidenceRequired: 'Identifies the closing tonic.' },
        { id: 'r3', pointValue: 1, criterion: 'Identifies the closing V–I as an authentic cadence.', evidenceRequired: 'Names authentic (or perfect authentic) cadence.' },
        { id: 'r4', pointValue: 1, criterion: 'Justifies the cadence label using chord function and root-position bass.', evidenceRequired: 'Explains that V resolves to I in root position.' }
      ],
      modelAnswer: '(a) Over the bass D–G–A–D the chords are I (D major), IV (G major), V (A major), and I (D major). (b) The final two chords, V (A major) moving to I (D major), form an authentic cadence. Because both chords are in root position and end on the tonic, it is a perfect authentic cadence if the soprano also closes on D; otherwise it is imperfect. The label is justified because the dominant (V) resolves to the tonic (I), the defining motion of an authentic cadence.',
      tags: ['roman-numerals', 'cadence', 'analysis', 'D-major'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN: short-answer (rubric + modelAnswer) ─────────────────────────
    {
      id: 'ap-music-theory-u2-minor-scales-sa-001', courseId: 'ap-music-theory', courseName: 'AP Music Theory',
      unitId: 'unit-2', unitName: 'Music Fundamentals II: Minor Scales, Rhythm, Meter, and Intervals',
      topicId: 'minor-scales', topicName: 'Minor Scales',
      skill: 'scales and keys', questionType: 'short-answer', difficulty: 'medium',
      bloomLevel: 'understand', estimatedTimeSeconds: 180,
      prompt: 'Compare the harmonic and melodic forms of the A minor scale. Describe exactly which scale degrees are altered in each form and explain the musical reason composers raise them.',
      musicNotationPlaceholder: 'A natural minor: A-B-C-D-E-F-G-A. Compare with harmonic and melodic minor forms ascending.',
      correctAnswer: 'Harmonic minor raises scale degree 7 (G♯). Melodic minor raises degrees 6 and 7 ascending (F♯ and G♯) and lowers them again descending.',
      explanation: 'Raising the seventh degree creates a leading tone a half step below tonic, strengthening the pull to A. Melodic minor also raises the sixth to avoid the awkward augmented-second leap between scale degrees 6 and 7 that harmonic minor creates.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'States that harmonic minor raises scale degree 7 (G♯ in A minor).', evidenceRequired: 'Names raised 7th / G♯.' },
        { id: 'r2', pointValue: 1, criterion: 'States that ascending melodic minor raises degrees 6 and 7 (F♯ and G♯) and reverts when descending.', evidenceRequired: 'Names raised 6th and 7th ascending.' },
        { id: 'r3', pointValue: 1, criterion: 'Explains the leading-tone and/or augmented-second reasoning.', evidenceRequired: 'Connects the alteration to voice leading toward tonic.' }
      ],
      modelAnswer: 'Natural A minor is A-B-C-D-E-F-G. Harmonic minor raises the seventh degree to G♯, producing a leading tone a half step below the tonic that strengthens resolution to A; this creates an augmented second between F and G♯. Ascending melodic minor raises both the sixth and seventh degrees (F♯ and G♯) to smooth out that augmented second while keeping the leading tone, and descending melodic minor lowers them back to F and G (the natural-minor form) because the upward pull is no longer needed.',
      tags: ['minor-scales', 'harmonic-minor', 'melodic-minor', 'leading-tone'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
