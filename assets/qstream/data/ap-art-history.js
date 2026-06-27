/**
 * Five & A+ — AI Question Stream · Course data: AP Art History
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE shape (assets/qstream/data/ap-biology.js).
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Works of art are described via original imagePrompt text rather than reproduced
 * images, and no copyrighted text or images are included.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-art-history',
    displayName: 'AP Art History',
    description: 'A global survey of art and architecture across 250 works and ten content areas, organized around visual, contextual, and comparative analysis of objects from prehistory to the present.',
    category: 'arts',
    allowedQuestionTypes: ['mcq', 'short-answer', 'visual-analysis', 'art-identification', 'stimulus-based', 'frq'],
    defaultQuestionTypes: ['mcq', 'visual-analysis', 'short-answer'],
    skills: [
      'visual analysis',
      'contextual analysis',
      'comparison',
      'attribution',
      'interpretation',
      'continuity and change'
    ],
    bigIdeas: [
      'Artists manipulate materials and ideas to create an aesthetic object, act, or event.',
      'Art and architecture reflect, and are shaped by, the contexts in which they are made.',
      'People respond to and interpret works of art through analysis, evaluation, and connection.'
    ],
    units: [
      { id: 'unit-1', name: 'Global Prehistory, 30,000–500 BCE', examWeight: '4%', description: 'The earliest surviving art and architecture across the globe, from cave imagery to megalithic monuments.',
        topics: [
          { id: 'paleolithic-imagery', name: 'Paleolithic Imagery', description: 'Cave paintings, carved figures, and the function of early representational art.', skills: ['visual analysis'] },
          { id: 'neolithic-monuments', name: 'Neolithic Monuments', description: 'Megalithic and post-and-lintel structures and their ritual or astronomical purposes.', skills: ['contextual analysis'] },
          { id: 'prehistoric-materials', name: 'Materials and Techniques', description: 'Pigments, stone tools, and construction methods of prehistoric peoples.', skills: ['attribution'] }
        ] },
      { id: 'unit-2', name: 'Ancient Mediterranean, 3500 BCE–300 CE', examWeight: '15%', description: 'Art and architecture of the Ancient Near East, Egypt, Greece, Etruria, and Rome.',
        topics: [
          { id: 'near-east-egypt', name: 'Near East and Egypt', description: 'Hierarchical figural conventions, monumental tombs, and royal iconography.', skills: ['contextual analysis'] },
          { id: 'greek-art', name: 'Greek Art and Architecture', description: 'The evolution of the human figure and the classical orders.', skills: ['continuity and change'] },
          { id: 'roman-art', name: 'Roman Art and Architecture', description: 'Veristic portraiture, concrete engineering, and imperial propaganda.', skills: ['interpretation'] }
        ] },
      { id: 'unit-3', name: 'Early Europe and Colonial Americas, 200–1750 CE', examWeight: '20%', description: 'Late Antique through Baroque art in Europe and the art of the Spanish colonial Americas.',
        topics: [
          { id: 'medieval-art', name: 'Medieval Art', description: 'Byzantine, Romanesque, and Gothic religious imagery and architecture.', skills: ['contextual analysis'] },
          { id: 'renaissance-art', name: 'Renaissance Art', description: 'Linear perspective, humanism, and the revival of classical form.', skills: ['continuity and change'] },
          { id: 'baroque-colonial', name: 'Baroque and Colonial Americas', description: 'Dramatic light, movement, and cross-cultural exchange in colonial production.', skills: ['interpretation'] }
        ] },
      { id: 'unit-4', name: 'Later Europe and Americas, 1750–1980 CE', examWeight: '22%', description: 'Neoclassicism through modernism in Europe and the Americas.',
        topics: [
          { id: 'neoclassicism-romanticism', name: 'Neoclassicism and Romanticism', description: 'Civic virtue, revolution, and emotional landscapes.', skills: ['interpretation'] },
          { id: 'realism-impressionism', name: 'Realism and Impressionism', description: 'Modern life, optical color, and the broken brushstroke.', skills: ['visual analysis'] },
          { id: 'modernism-abstraction', name: 'Modernism and Abstraction', description: 'Fragmentation, non-objective form, and avant-garde movements.', skills: ['continuity and change'] }
        ] },
      { id: 'unit-5', name: 'Indigenous Americas, 1000 BCE–1980 CE', examWeight: '6%', description: 'Art and architecture of North, Central, and South American Indigenous cultures.',
        topics: [
          { id: 'mesoamerican-art', name: 'Mesoamerican Art', description: 'Ceremonial centers, relief carving, and cosmological iconography.', skills: ['contextual analysis'] },
          { id: 'andean-art', name: 'Andean Art', description: 'Textiles, metalwork, and monumental stonework of the Andes.', skills: ['attribution'] },
          { id: 'north-american-art', name: 'North American Art', description: 'Earthworks, hide painting, and Indigenous material traditions.', skills: ['interpretation'] }
        ] },
      { id: 'unit-6', name: 'Africa, 1100–1980 CE', examWeight: '6%', description: 'Art and architecture of sub-Saharan African cultures and kingdoms.',
        topics: [
          { id: 'west-african-courts', name: 'West African Court Art', description: 'Cast brass, ivory, and regalia of powerful kingdoms.', skills: ['contextual analysis'] },
          { id: 'african-performance', name: 'Masks and Performance', description: 'Masquerade objects activated through ceremony and dance.', skills: ['interpretation'] },
          { id: 'african-architecture', name: 'African Architecture', description: 'Earthen mosques and built environments of communal significance.', skills: ['visual analysis'] }
        ] },
      { id: 'unit-7', name: 'West and Central Asia, 500 BCE–1980 CE', examWeight: '4%', description: 'Art of Persian, Islamic, and Central Asian traditions.',
        topics: [
          { id: 'islamic-architecture', name: 'Islamic Architecture', description: 'Mosques, courtyards, and the integration of light and geometry.', skills: ['visual analysis'] },
          { id: 'islamic-arts-book', name: 'Arts of the Book', description: 'Calligraphy, illumination, and manuscript painting.', skills: ['contextual analysis'] }
        ] },
      { id: 'unit-8', name: 'South, East, and Southeast Asia, 300 BCE–1980 CE', examWeight: '8%', description: 'Buddhist, Hindu, and East Asian art and architecture.',
        topics: [
          { id: 'buddhist-art', name: 'Buddhist Art', description: 'Stupas, devotional sculpture, and iconographic conventions.', skills: ['interpretation'] },
          { id: 'hindu-temples', name: 'Hindu Temple Architecture', description: 'Sacred geometry, sculptural programs, and ritual circulation.', skills: ['contextual analysis'] },
          { id: 'east-asian-painting', name: 'East Asian Painting', description: 'Ink landscape, handscroll format, and literati aesthetics.', skills: ['visual analysis'] }
        ] },
      { id: 'unit-9', name: 'The Pacific, 700–1980 CE', examWeight: '4%', description: 'Art and architecture of Polynesia, Melanesia, and Micronesia.',
        topics: [
          { id: 'pacific-sculpture', name: 'Pacific Sculpture', description: 'Monumental figures and carved objects of ancestral significance.', skills: ['contextual analysis'] },
          { id: 'pacific-textiles', name: 'Textiles and Body Arts', description: 'Barkcloth, tattoo, and adornment as markers of status.', skills: ['interpretation'] }
        ] },
      { id: 'unit-10', name: 'Global Contemporary, 1980 CE–Present', examWeight: '11%', description: 'Recent global art addressing identity, politics, and new media.',
        topics: [
          { id: 'identity-politics-art', name: 'Identity and Politics', description: 'Works engaging gender, race, and social critique.', skills: ['interpretation'] },
          { id: 'installation-newmedia', name: 'Installation and New Media', description: 'Immersive, site-specific, and time-based art forms.', skills: ['visual analysis'] },
          { id: 'global-architecture', name: 'Contemporary Architecture', description: 'Globalized form, sustainability, and cultural memory in built space.', skills: ['continuity and change'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq', 'stimulus-based'], timingMinutes: 60, weight: '50%', notes: '80 questions, many grouped around images or text sets.' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'visual-analysis', 'art-identification', 'short-answer'], timingMinutes: 120, weight: '50%', notes: '6 free-response questions: two 30-minute long essays and four 15-minute short essays.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-art-history-u1-paleolithic-imagery-mcq-001', courseId: 'ap-art-history', courseName: 'AP Art History',
      unitId: 'unit-1', unitName: 'Global Prehistory, 30,000–500 BCE', topicId: 'paleolithic-imagery', topicName: 'Paleolithic Imagery',
      skill: 'visual analysis', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      imagePrompt: 'An original description of a deep limestone cave wall covered with overlapping painted animals—bulls, horses, and deer—rendered in flowing reddish-brown and black contour lines, the bodies shown in profile while horns are turned to a frontal view.',
      prompt: 'A cave wall shows animals painted in profile, yet their horns are depicted as if seen from the front. This combination of viewpoints is best described as which of the following?',
      answerChoices: [
        { id: 'A', text: 'Twisted (composite) perspective that shows the most recognizable view of each part' },
        { id: 'B', text: 'Atmospheric perspective that uses haze to suggest depth' },
        { id: 'C', text: 'One-point linear perspective converging on a single vanishing point' },
        { id: 'D', text: 'Foreshortening that compresses forms receding from the viewer' }
      ],
      correctAnswer: 'A',
      explanation: 'Showing the body in profile but the horns frontally is twisted or composite perspective, a prehistoric convention that combines the clearest view of each feature into one image.',
      distractorRationales: {
        A: '',
        B: 'Atmospheric perspective uses color and clarity to imply distance and is a much later development.',
        C: 'Linear perspective is a Renaissance mathematical system, not a prehistoric convention.',
        D: 'Foreshortening depicts a single coherent viewpoint, the opposite of combining multiple views.'
      },
      tags: ['prehistory', 'cave-painting', 'composite-perspective'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-art-history-u2-greek-art-mcq-001', courseId: 'ap-art-history', courseName: 'AP Art History',
      unitId: 'unit-2', unitName: 'Ancient Mediterranean, 3500 BCE–300 CE', topicId: 'greek-art', topicName: 'Greek Art and Architecture',
      skill: 'visual analysis', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      imagePrompt: 'An original description of a marble temple façade with slender fluted columns whose capitals are plain cushion-like discs beneath a square block, supporting a horizontal entablature with a frieze of alternating grooved blocks and rectangular panels.',
      prompt: 'The columns of the temple have plain, cushion-shaped capitals and a frieze of alternating triglyphs and metopes. These features identify which classical order?',
      answerChoices: [
        { id: 'A', text: 'Doric' },
        { id: 'B', text: 'Ionic' },
        { id: 'C', text: 'Corinthian' },
        { id: 'D', text: 'Composite' }
      ],
      correctAnswer: 'A',
      explanation: 'The plain cushion-like capital and the triglyph-and-metope frieze are defining features of the Doric order, the sturdiest and earliest of the Greek orders.',
      distractorRationales: {
        A: '',
        B: 'The Ionic order is recognized by scroll-like volute capitals and a continuous frieze.',
        C: 'The Corinthian order uses ornate capitals carved with acanthus leaves.',
        D: 'The Composite order is a later Roman blend of Ionic volutes and Corinthian leaves.'
      },
      tags: ['greek', 'doric-order', 'architecture'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-art-history-u3-renaissance-art-mcq-001', courseId: 'ap-art-history', courseName: 'AP Art History',
      unitId: 'unit-3', unitName: 'Early Europe and Colonial Americas, 200–1750 CE', topicId: 'renaissance-art', topicName: 'Renaissance Art',
      skill: 'visual analysis', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 70,
      imagePrompt: 'An original description of a fresco of figures gathered in a deep architectural hall whose floor tiles and coffered ceiling shrink toward a single point centered on the principal figure’s head.',
      prompt: 'In this fresco the floor tiles and ceiling coffers appear to shrink toward a single point behind the central figure. This technique is known as:',
      answerChoices: [
        { id: 'A', text: 'One-point linear perspective' },
        { id: 'B', text: 'Hierarchical scale' },
        { id: 'C', text: 'Chiaroscuro' },
        { id: 'D', text: 'Sfumato' }
      ],
      correctAnswer: 'A',
      explanation: 'Orthogonal lines converging on a single vanishing point create one-point linear perspective, a hallmark Renaissance method for constructing convincing spatial depth.',
      distractorRationales: {
        A: '',
        B: 'Hierarchical scale sizes figures by importance, not by spatial recession.',
        C: 'Chiaroscuro is the modeling of form through light and shadow, not the construction of space.',
        D: 'Sfumato is a soft, smoky blending of edges, unrelated to converging orthogonals.'
      },
      tags: ['renaissance', 'linear-perspective', 'space'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-art-history-u2-roman-art-mcq-001', courseId: 'ap-art-history', courseName: 'AP Art History',
      unitId: 'unit-2', unitName: 'Ancient Mediterranean, 3500 BCE–300 CE', topicId: 'roman-art', topicName: 'Roman Art and Architecture',
      skill: 'interpretation', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      imagePrompt: 'An original description of a marble portrait bust of an older statesman whose face is carved with deep furrows, sagging cheeks, and a receding hairline, every wrinkle sharply defined.',
      prompt: 'A Roman Republican portrait bust emphasizes wrinkles, sagging skin, and signs of age. This veristic style was most likely intended to:',
      answerChoices: [
        { id: 'A', text: 'Convey the sitter’s experience, gravitas, and devotion to public duty' },
        { id: 'B', text: 'Present the sitter as an eternally youthful, idealized god' },
        { id: 'C', text: 'Disguise the sitter’s identity for political safety' },
        { id: 'D', text: 'Demonstrate the artist’s rejection of all earlier sculptural traditions' }
      ],
      correctAnswer: 'A',
      explanation: 'Roman Republican verism prized realistic signs of age because wrinkles and severity signaled wisdom, experience, and the virtus expected of a public servant who had earned authority over time.',
      distractorRationales: {
        A: '',
        B: 'Idealized youthful portraiture characterizes Greek and later imperial images, not Republican verism.',
        C: 'These portraits were displayed to assert lineage and status, not to conceal identity.',
        D: 'Verism drew on existing traditions of ancestor portraiture rather than rejecting all precedent.'
      },
      tags: ['roman', 'verism', 'portraiture'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-art-history-u7-islamic-architecture-stim-001', courseId: 'ap-art-history', courseName: 'AP Art History',
      unitId: 'unit-7', unitName: 'West and Central Asia, 500 BCE–1980 CE', topicId: 'islamic-architecture', topicName: 'Islamic Architecture',
      skill: 'contextual analysis', questionType: 'stimulus-based', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 120,
      imagePrompt: 'An original description of a vast prayer hall whose interior is filled with rows of horseshoe arches in alternating red and white voussoirs, carried on a forest of slender columns, with no figural imagery anywhere.',
      stimulus: 'A congregational mosque interior is organized as a hypostyle hall: hundreds of columns support tiers of horseshoe arches, and the surfaces are decorated with vegetal patterns, geometric designs, and calligraphy rather than human figures.',
      prompt: 'Using the description, explain why human and animal figures are absent from this mosque interior and identify one alternative form of decoration used in their place.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'In many Islamic religious settings, figural imagery is avoided to prevent idolatry and keep focus on the divine; non-figural ornament—calligraphy, geometric pattern, or vegetal arabesque—carries decorative and spiritual meaning instead.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Explains the avoidance of figural imagery in this religious context.', evidenceRequired: 'References aniconism / focus on the divine rather than idolatry.' },
        { id: 'r2', pointValue: 1, criterion: 'Identifies an alternative decorative form present in the hall.', evidenceRequired: 'Names calligraphy, geometric pattern, or vegetal arabesque.' }
      ],
      modelAnswer: 'Figural imagery is avoided in this prayer hall because religious tradition discourages depicting living beings in sacred spaces, where such images could distract from worship of the divine. In their place the designers used non-figural decoration—Arabic calligraphy quoting sacred text, interlocking geometric patterns, and stylized vegetal arabesques—that ornaments the surfaces while reinforcing devotional meaning.',
      tags: ['islamic', 'aniconism', 'mosque', 'ornament'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-art-history-u4-realism-impressionism-mcq-001', courseId: 'ap-art-history', courseName: 'AP Art History',
      unitId: 'unit-4', unitName: 'Later Europe and Americas, 1750–1980 CE', topicId: 'realism-impressionism', topicName: 'Realism and Impressionism',
      skill: 'visual analysis', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      imagePrompt: 'An original description of a sunlit riverside scene built from short, broken dabs of pure blue, green, and orange paint that blend in the viewer’s eye, with no sharp outlines and visible canvas between strokes.',
      prompt: 'A riverside scene is painted with short, unblended dabs of bright color and lacks firm outlines. These choices most directly reflect the Impressionist interest in:',
      answerChoices: [
        { id: 'A', text: 'Capturing fleeting effects of light and atmosphere at a particular moment' },
        { id: 'B', text: 'Illustrating a heroic narrative from classical mythology' },
        { id: 'C', text: 'Achieving a smooth, polished surface that hides the brushwork' },
        { id: 'D', text: 'Conveying religious doctrine through traditional iconography' }
      ],
      correctAnswer: 'A',
      explanation: 'Impressionists used broken, visible strokes of unmixed color to record the changing sensations of light and atmosphere as perceived in a single fleeting moment, often working outdoors.',
      distractorRationales: {
        A: '',
        B: 'Classical narrative was the concern of academic history painting that Impressionists moved away from.',
        C: 'Impressionism deliberately leaves brushwork visible rather than hiding it in a polished finish.',
        D: 'These works focus on modern perception and everyday scenes, not religious doctrine.'
      },
      tags: ['impressionism', 'light', 'brushwork'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-art-history-u8-hindu-temples-mcq-001', courseId: 'ap-art-history', courseName: 'AP Art History',
      unitId: 'unit-8', unitName: 'South, East, and Southeast Asia, 300 BCE–1980 CE', topicId: 'hindu-temples', topicName: 'Hindu Temple Architecture',
      skill: 'contextual analysis', questionType: 'mcq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      imagePrompt: 'An original description of a stone temple rising in a stepped mountain-like tower above a small dark inner chamber, its exterior densely carved with deities, celestial dancers, and intertwined vegetal motifs, approached through a series of progressively darker halls.',
      prompt: 'A Hindu temple culminates in a towering superstructure over a small, dark inner sanctum reached through a sequence of increasingly enclosed halls. Which interpretation best connects this architectural arrangement to its religious function?',
      answerChoices: [
        { id: 'A', text: 'The mountain-like tower and inward, darkening path stage a symbolic pilgrimage toward the deity housed in the sacred core.' },
        { id: 'B', text: 'The dense exterior carving was meant purely as structural reinforcement with no symbolic content.' },
        { id: 'C', text: 'The small sanctum indicates the temple was designed for large congregational worship inside.' },
        { id: 'D', text: 'The tower form imitates Roman vaulting introduced through direct trade contact.' }
      ],
      correctAnswer: 'A',
      explanation: 'The soaring tower evokes a sacred cosmic mountain, while the procession through darkening halls toward the small womb-chamber (garbhagriha) enacts the worshiper’s inward journey toward the enshrined deity—form and circulation together express the temple’s devotional meaning.',
      distractorRationales: {
        A: '',
        B: 'The carved deities and celestial figures carry rich iconographic meaning, not merely structural function.',
        C: 'The tiny sanctum housed the deity for individual darshan, not large interior congregations.',
        D: 'The form arises from indigenous cosmological symbolism, not borrowed Roman vaulting.'
      },
      tags: ['hindu-temple', 'garbhagriha', 'symbolism'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-art-history-u10-identity-politics-art-mcq-001', courseId: 'ap-art-history', courseName: 'AP Art History',
      unitId: 'unit-10', unitName: 'Global Contemporary, 1980 CE–Present', topicId: 'identity-politics-art', topicName: 'Identity and Politics',
      skill: 'interpretation', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      imagePrompt: 'An original description of a large-scale work combining a grid of mass-printed advertising images with hand-lettered slogans, juxtaposing glossy commercial photographs against blunt text that questions who profits from looking.',
      prompt: 'A contemporary artist appropriates mass-media advertising imagery and overlays it with confrontational text. Which statement best evaluates how this strategy generates meaning?',
      answerChoices: [
        { id: 'A', text: 'By recontextualizing familiar commercial imagery, the work turns the viewer’s own visual habits into a critique of consumer culture and power.' },
        { id: 'B', text: 'The borrowed imagery signals that the artist lacked original ideas and merely copied advertisements.' },
        { id: 'C', text: 'The combination of image and text is purely decorative and avoids any social commentary.' },
        { id: 'D', text: 'The use of printed media proves the work was intended only for private, not public, display.' }
      ],
      correctAnswer: 'A',
      explanation: 'Appropriation places recognizable commercial imagery in a new critical frame; pairing it with pointed text makes viewers aware of how advertising shapes desire and power, turning consumer visual language against itself to deliver social critique.',
      distractorRationales: {
        A: '',
        B: 'Appropriation is a deliberate conceptual strategy, not a sign of missing ideas.',
        C: 'The confrontational text foregrounds social commentary rather than mere decoration.',
        D: 'Such works are often made for public visibility, including billboards and large installations.'
      },
      tags: ['contemporary', 'appropriation', 'critique'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN: VISUAL ANALYSIS (with rubric) ───────────────────────────────
    {
      id: 'ap-art-history-u3-baroque-colonial-visual-001', courseId: 'ap-art-history', courseName: 'AP Art History',
      unitId: 'unit-3', unitName: 'Early Europe and Colonial Americas, 200–1750 CE', topicId: 'baroque-colonial', topicName: 'Baroque and Colonial Americas',
      skill: 'visual analysis', questionType: 'visual-analysis', difficulty: 'hard',
      bloomLevel: 'analyze', estimatedTimeSeconds: 900,
      imagePrompt: 'An original description of a Baroque religious painting in which a single shaft of intense light cuts across a dark interior to illuminate a startled figure, while the surrounding space dissolves into deep shadow and the figures lean dynamically along strong diagonals.',
      prompt: 'Using the described painting, analyze how the artist uses light and composition to heighten the drama of the scene. Identify two specific visual choices and explain the effect of each on the viewer.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Baroque painters relied on tenebrism (stark light against deep dark) and dynamic diagonal compositions to create theatrical immediacy, directing the eye to a focal action and pulling the viewer emotionally into the moment.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies and describes the dramatic use of light (tenebrism / spotlighting).', evidenceRequired: 'Names the strong light-dark contrast and what it illuminates.' },
        { id: 'r2', pointValue: 1, criterion: 'Identifies and describes a compositional choice (diagonals / dynamic arrangement).', evidenceRequired: 'Cites diagonal movement or focal placement in the design.' },
        { id: 'r3', pointValue: 1, criterion: 'Explains the effect of the light choice on the viewer.', evidenceRequired: 'Links light to focus, drama, or emotional intensity.' },
        { id: 'r4', pointValue: 1, criterion: 'Explains the effect of the compositional choice on the viewer.', evidenceRequired: 'Links composition to movement, immediacy, or engagement.' }
      ],
      modelAnswer: 'The artist uses sharp tenebrism: a single beam of light slices through the dark interior and spotlights the startled central figure, while everything around dissolves into shadow. This stark contrast forces the viewer’s eye straight to the key action and gives the scene a sudden, revelatory drama. Compositionally, the figures lean and gesture along strong diagonals rather than a calm horizontal arrangement, creating a sense of unstable motion that pulls the viewer into the instant of the event. Together the dramatic light and diagonal design make the moment feel immediate, theatrical, and emotionally charged.',
      tags: ['baroque', 'tenebrism', 'composition', 'visual-analysis'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN: ART IDENTIFICATION (with rubric) ────────────────────────────
    {
      id: 'ap-art-history-u6-west-african-courts-artid-001', courseId: 'ap-art-history', courseName: 'AP Art History',
      unitId: 'unit-6', unitName: 'Africa, 1100–1980 CE', topicId: 'west-african-courts', topicName: 'West African Court Art',
      skill: 'attribution', questionType: 'art-identification', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 600,
      imagePrompt: 'An original description of a finely cast brass commemorative head with idealized features, layered coral-bead collar rising to the chin, and a beaded cap, its smooth surface and high level of metal craftsmanship suggesting royal court production.',
      prompt: 'Identify the most likely cultural origin and original function of the described brass head, and justify your attribution with two visual or material features.',
      correctAnswer: 'A commemorative royal head from a West African court tradition, made to honor a ruler.',
      acceptableAnswers: ['west african court', 'commemorative head', 'royal ancestor', 'brass casting', 'lost-wax'],
      explanation: 'Highly refined lost-wax brass casting, idealized royal features, and regalia such as a beaded collar and cap point to a West African court tradition that produced commemorative heads honoring rulers and ancestors. Attribution rests on both material (cast brass) and iconography (royal regalia).',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies a plausible West African court culture and origin.', evidenceRequired: 'States a court / royal West African attribution.' },
        { id: 'r2', pointValue: 1, criterion: 'States the likely function (commemorative / ancestral royal portrait).', evidenceRequired: 'Names a commemorative or honorific royal purpose.' },
        { id: 'r3', pointValue: 1, criterion: 'Justifies the attribution with two visual or material features.', evidenceRequired: 'Cites two of: cast brass, idealized features, beaded regalia, fine craftsmanship.' }
      ],
      modelAnswer: 'The head is most likely a commemorative royal head from a West African court tradition. Its function was honorific—such cast heads were placed on altars to commemorate deceased rulers and their lineage. Two features support this attribution: first, the material is finely cast brass produced by the demanding lost-wax technique, a medium associated with wealthy court workshops; second, the idealized facial features and elaborate regalia, including the layered coral-bead collar and beaded cap, signal high royal status. Together the precious material and royal iconography point to elite court patronage.',
      tags: ['africa', 'brass-casting', 'commemorative-head', 'attribution'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
