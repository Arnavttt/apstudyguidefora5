/**
 * Five & A+ — AI Question Stream · Course data: AP Human Geography
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the shape of ap-biology.js (the GOLD TEMPLATE).
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-human-geography',
    displayName: 'AP Human Geography',
    description: 'The patterns and processes that shape human understanding, use, and alteration of Earth’s surface, organized around spatial thinking, population, culture, politics, agriculture, cities, and development.',
    category: 'history-social-science',
    allowedQuestionTypes: ['mcq', 'stimulus-based', 'data-analysis', 'graph-interpretation', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'stimulus-based', 'frq'],
    skills: [
      'concepts and processes',
      'spatial relationships',
      'data analysis',
      'source analysis',
      'scale analysis',
      'geographic argumentation'
    ],
    bigIdeas: ['Patterns and Spatial Organization', 'Impacts and Interactions', 'Spatial Processes and Societal Change'],
    units: [
      { id: 'unit-1', name: 'Thinking Geographically', examWeight: '8-10%', description: 'Maps, spatial data, geographic concepts, and scales of analysis.',
        topics: [
          { id: 'maps-and-data', name: 'Maps and Spatial Data', description: 'Map types, projections, distortion, and the data geographers gather.', skills: ['source analysis'] },
          { id: 'geographic-concepts', name: 'Core Geographic Concepts', description: 'Location, place, distance decay, time-space compression, and patterns.', skills: ['concepts and processes'] },
          { id: 'scales-of-analysis', name: 'Scales of Analysis', description: 'Local, regional, national, and global scales and regional definitions.', skills: ['scale analysis'] }
        ] },
      { id: 'unit-2', name: 'Population and Migration Patterns and Processes', examWeight: '12-17%', description: 'Distribution, density, growth models, and migration.',
        topics: [
          { id: 'population-distribution', name: 'Population Distribution and Density', description: 'Physical and human factors shaping where people live; density measures.', skills: ['spatial relationships'] },
          { id: 'demographic-transition', name: 'Demographic Transition and Composition', description: 'The DTM, population pyramids, and dependency ratios.', skills: ['data analysis'] },
          { id: 'migration', name: 'Migration', description: 'Push/pull factors, forced vs. voluntary migration, and Ravenstein’s laws.', skills: ['concepts and processes'] }
        ] },
      { id: 'unit-3', name: 'Cultural Patterns and Processes', examWeight: '12-17%', description: 'Culture, diffusion, language, religion, and identity.',
        topics: [
          { id: 'cultural-landscapes', name: 'Cultural Landscapes', description: 'How culture is expressed in the built and symbolic landscape.', skills: ['source analysis'] },
          { id: 'cultural-diffusion', name: 'Cultural Diffusion', description: 'Relocation and expansion (contagious, hierarchical, stimulus) diffusion.', skills: ['concepts and processes'] },
          { id: 'language-religion', name: 'Language and Religion', description: 'Distribution of language families and universalizing vs. ethnic religions.', skills: ['spatial relationships'] }
        ] },
      { id: 'unit-4', name: 'Political Patterns and Processes', examWeight: '12-17%', description: 'States, boundaries, devolution, and sovereignty.',
        topics: [
          { id: 'states-and-sovereignty', name: 'States, Nations, and Sovereignty', description: 'State, nation, nation-state, stateless nations, and self-determination.', skills: ['concepts and processes'] },
          { id: 'boundaries', name: 'Political Boundaries', description: 'Boundary types, functions, gerrymandering, and territorial disputes.', skills: ['spatial relationships'] },
          { id: 'forces-on-states', name: 'Centripetal and Centrifugal Forces', description: 'Devolution, supranationalism, and forces that unify or divide states.', skills: ['geographic argumentation'] }
        ] },
      { id: 'unit-5', name: 'Agriculture and Rural Land-Use Patterns and Processes', examWeight: '12-17%', description: 'Agricultural origins, systems, and rural land use.',
        topics: [
          { id: 'agricultural-regions', name: 'Agricultural Regions and Practices', description: 'Subsistence vs. commercial systems and physical influences on farming.', skills: ['spatial relationships'] },
          { id: 'land-use-models', name: 'Rural Land-Use Models', description: 'Von Thünen’s model and the bid-rent relationship of crops to market.', skills: ['concepts and processes'] },
          { id: 'agricultural-revolutions', name: 'Agricultural Revolutions', description: 'First, Second, and Green Revolutions and their consequences.', skills: ['data analysis'] }
        ] },
      { id: 'unit-6', name: 'Cities and Urban Land-Use Patterns and Processes', examWeight: '12-17%', description: 'Urbanization, internal city structure, and urban challenges.',
        topics: [
          { id: 'urbanization', name: 'Urbanization and Urban Hierarchy', description: 'Site, situation, central place theory, and the rank-size rule.', skills: ['scale analysis'] },
          { id: 'urban-models', name: 'Internal Structure of Cities', description: 'Concentric zone, sector, and multiple-nuclei models of urban form.', skills: ['source analysis'] },
          { id: 'urban-challenges', name: 'Urban Sustainability and Challenges', description: 'Sprawl, gentrification, and sustainable urban design responses.', skills: ['geographic argumentation'] }
        ] },
      { id: 'unit-7', name: 'Industrial and Economic Development Patterns and Processes', examWeight: '12-17%', description: 'Industrialization, development measures, and globalization.',
        topics: [
          { id: 'industrial-location', name: 'Industrialization and Location', description: 'Weber’s least-cost theory and the diffusion of industry.', skills: ['concepts and processes'] },
          { id: 'development-measures', name: 'Measures of Development', description: 'GDP, GNI, HDI, the Gender Inequality Index, and development indicators.', skills: ['data analysis'] },
          { id: 'development-theories', name: 'Theories of Development and Trade', description: 'Rostow’s stages, Wallerstein’s world-systems, and trade dependency.', skills: ['geographic argumentation'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq', 'stimulus-based', 'data-analysis', 'graph-interpretation'], timingMinutes: 60, weight: '50%', notes: '60 questions, many in sets tied to a map, chart, image, or passage.' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'short-answer', 'data-analysis'], timingMinutes: 75, weight: '50%', notes: '3 questions emphasizing concepts, spatial relationships, and source/scale analysis.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-human-geography-u1-geographic-concepts-mcq-001', courseId: 'ap-human-geography', courseName: 'AP Human Geography',
      unitId: 'unit-1', unitName: 'Thinking Geographically', topicId: 'geographic-concepts', topicName: 'Core Geographic Concepts',
      skill: 'concepts and processes', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'The principle that the interaction between two places weakens as the distance between them increases is best described as which of the following?',
      answerChoices: [
        { id: 'A', text: 'Distance decay' },
        { id: 'B', text: 'Time-space compression' },
        { id: 'C', text: 'Absolute location' },
        { id: 'D', text: 'Cultural relativism' }
      ],
      correctAnswer: 'A',
      explanation: 'Distance decay describes how the intensity of an activity, process, or interaction declines as distance from its origin increases. People are less likely to interact with far-away places than nearby ones.',
      distractorRationales: {
        A: '',
        B: 'Time-space compression is the shrinking of the perceived distance between places due to faster transportation and communication, not the weakening of interaction.',
        C: 'Absolute location is a precise coordinate position (latitude/longitude), not a relationship that changes with distance.',
        D: 'Cultural relativism is a way of evaluating a culture by its own standards and is unrelated to spatial interaction.'
      },
      tags: ['distance-decay', 'spatial-interaction', 'concepts'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-human-geography-u3-cultural-diffusion-mcq-001', courseId: 'ap-human-geography', courseName: 'AP Human Geography',
      unitId: 'unit-3', unitName: 'Cultural Patterns and Processes', topicId: 'cultural-diffusion', topicName: 'Cultural Diffusion',
      skill: 'concepts and processes', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'A fashion trend spreads quickly from major celebrities and influencers to their large followings, and only later reaches the general public. This pattern best illustrates which type of diffusion?',
      answerChoices: [
        { id: 'A', text: 'Relocation diffusion' },
        { id: 'B', text: 'Hierarchical diffusion' },
        { id: 'C', text: 'Contagious diffusion' },
        { id: 'D', text: 'Stimulus diffusion' }
      ],
      correctAnswer: 'B',
      explanation: 'Hierarchical diffusion spreads an idea from people or places of greater influence (here, prominent celebrities) to those of lesser influence, rather than spreading evenly across space.',
      distractorRationales: {
        A: 'Relocation diffusion requires people physically moving and carrying the trait to a new location, which is not described here.',
        B: '',
        C: 'Contagious diffusion spreads rapidly and evenly through a population by direct contact, without skipping based on influence or rank.',
        D: 'Stimulus diffusion is when an underlying idea spreads but is modified, while the original form is rejected; the trend itself spreads here.'
      },
      tags: ['diffusion', 'hierarchical', 'culture'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-human-geography-u4-states-and-sovereignty-mcq-001', courseId: 'ap-human-geography', courseName: 'AP Human Geography',
      unitId: 'unit-4', unitName: 'Political Patterns and Processes', topicId: 'states-and-sovereignty', topicName: 'States, Nations, and Sovereignty',
      skill: 'concepts and processes', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'A group of people who share a common cultural identity and homeland but do not control a sovereign state of their own is best described as a',
      answerChoices: [
        { id: 'A', text: 'nation-state' },
        { id: 'B', text: 'stateless nation' },
        { id: 'C', text: 'multinational state' },
        { id: 'D', text: 'autonomous region' }
      ],
      correctAnswer: 'B',
      explanation: 'A stateless nation is a cultural group with a shared identity and territory but without its own independent, sovereign state. The Kurds are a commonly cited example.',
      distractorRationales: {
        A: 'A nation-state is a state whose territory corresponds closely to the homeland of a single nation, which contradicts the lack of a state.',
        B: '',
        C: 'A multinational state contains two or more nations within its borders; the term describes a state, not a group lacking one.',
        D: 'An autonomous region has some self-governance granted by a larger state, which still implies it exists within a recognized state structure.'
      },
      tags: ['stateless-nation', 'sovereignty', 'political'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-human-geography-u2-demographic-transition-data-001', courseId: 'ap-human-geography', courseName: 'AP Human Geography',
      unitId: 'unit-2', unitName: 'Population and Migration Patterns and Processes', topicId: 'demographic-transition', topicName: 'Demographic Transition and Composition',
      skill: 'data analysis', questionType: 'data-analysis', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 180,
      prompt: 'The table shows birth and death rates (per 1,000 people) for four countries. Identify which country is most likely in Stage 2 of the Demographic Transition Model and justify your choice using the data.',
      dataTable: { columns: ['Country', 'Birth rate', 'Death rate'], rows: [['W', '9', '10'], ['X', '38', '11'], ['Y', '18', '8'], ['Z', '12', '9']] },
      correctAnswer: 'Country X is in Stage 2.',
      acceptableAnswers: ['X', 'Country X'],
      explanation: 'Stage 2 of the DTM features a still-high birth rate while the death rate has fallen sharply, producing rapid natural increase. Country X has a high birth rate (38) and a falling death rate (11), giving the largest natural increase, which is characteristic of Stage 2.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Correctly identifies Country X.', evidenceRequired: 'Names X as the Stage 2 country.' },
        { id: 'r2', pointValue: 1, criterion: 'Uses the data to justify the choice.', evidenceRequired: 'Cites high birth rate with declining death rate / large natural increase.' }
      ],
      modelAnswer: 'Country X is most likely in Stage 2. Its birth rate (38 per 1,000) remains high while its death rate (11 per 1,000) has dropped, producing a large rate of natural increase (about 27 per 1,000). This combination of high births and recently lowered deaths is the defining signature of Stage 2, when improvements in sanitation, food supply, and medicine cut mortality before fertility declines.',
      tags: ['dtm', 'birth-rate', 'death-rate', 'data-analysis'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-human-geography-u5-land-use-models-mcq-001', courseId: 'ap-human-geography', courseName: 'AP Human Geography',
      unitId: 'unit-5', unitName: 'Agriculture and Rural Land-Use Patterns and Processes', topicId: 'land-use-models', topicName: 'Rural Land-Use Models',
      skill: 'spatial relationships', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 90,
      prompt: 'According to Von Thünen’s model of agricultural land use, why are perishable and heavy products such as fresh dairy and market gardening typically located in the ring closest to the central market?',
      answerChoices: [
        { id: 'A', text: 'These products require the coldest climates, which are found near city centers.' },
        { id: 'B', text: 'High transportation costs and spoilage make nearby production most profitable for these goods.' },
        { id: 'C', text: 'Land nearest the market is the cheapest, so low-value crops are grown there.' },
        { id: 'D', text: 'Government regulations require dairy farms to be located within city limits.' }
      ],
      correctAnswer: 'B',
      explanation: 'Von Thünen’s model assumes transportation cost rises with distance. Perishable, heavy, or bulky goods spoil quickly and are expensive to ship, so producers locate them near the market to minimize transport cost and loss, outbidding other uses for that high-rent land.',
      distractorRationales: {
        A: 'The model holds physical environment constant; climate is not the deciding factor for the rings.',
        B: '',
        C: 'Land nearest the market is the most expensive (highest bid-rent), not the cheapest, which is why only high-value uses can afford it.',
        D: 'The model is based on economic cost and rent competition, not legal mandates.'
      },
      tags: ['von-thunen', 'bid-rent', 'land-use'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-human-geography-u3-language-religion-stimulus-001', courseId: 'ap-human-geography', courseName: 'AP Human Geography',
      unitId: 'unit-3', unitName: 'Cultural Patterns and Processes', topicId: 'language-religion', topicName: 'Language and Religion',
      skill: 'source analysis', questionType: 'stimulus-based', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 120,
      prompt: 'A travel writer notes: “In this borderland town, official road signs appear in two languages, two newspapers circulate in different scripts, and many residents switch fluidly between tongues at the market.” Identify the cultural-geographic phenomenon best illustrated and explain one way it can act as a centripetal or centrifugal force on a state.',
      correctAnswer: 'The town illustrates a bilingual/linguistic boundary zone; language can act as a centrifugal force.',
      explanation: 'The description shows linguistic diversity along a cultural boundary. Multiple languages can divide national identity (a centrifugal force) but officially recognizing both can also promote unity (a centripetal force) if it makes groups feel included.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies the phenomenon as bilingualism / a linguistic boundary or culturally mixed border zone.', evidenceRequired: 'Names language diversity along a boundary.' },
        { id: 'r2', pointValue: 1, criterion: 'Explains a plausible centripetal OR centrifugal effect.', evidenceRequired: 'Links shared/divided language to state unity or division.' }
      ],
      modelAnswer: 'The town illustrates bilingualism along a cultural/linguistic boundary, where two language groups overlap. Language can act as a centrifugal force when groups identify more with their own language community than with the state, encouraging separatism or devolution. Alternatively, when a government grants both languages official status, recognition can serve as a centripetal force by making minority speakers feel included and loyal to the state.',
      tags: ['language', 'bilingualism', 'centrifugal-forces', 'stimulus'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-human-geography-u6-urbanization-mcq-001', courseId: 'ap-human-geography', courseName: 'AP Human Geography',
      unitId: 'unit-6', unitName: 'Cities and Urban Land-Use Patterns and Processes', topicId: 'urbanization', topicName: 'Urbanization and Urban Hierarchy',
      skill: 'scale analysis', questionType: 'mcq', difficulty: 'hard',
      bloomLevel: 'apply', estimatedTimeSeconds: 150,
      prompt: 'A country’s largest city has a population of 6 million. According to the rank-size rule, approximately what population would the country’s fourth-largest city be expected to have?',
      answerChoices: [
        { id: 'A', text: '1.5 million' },
        { id: 'B', text: '2 million' },
        { id: 'C', text: '3 million' },
        { id: 'D', text: '4 million' }
      ],
      correctAnswer: 'A',
      explanation: 'The rank-size rule predicts that the nth-largest city is 1/n the size of the largest city. The fourth-largest city would be 1/4 of 6 million = 1.5 million.',
      distractorRationales: {
        A: '',
        B: '2 million would be 1/3 of the largest city, the predicted size of the third-ranked city, not the fourth.',
        C: '3 million is 1/2 of the largest city, the predicted size of the second-ranked city.',
        D: '4 million does not match any rank in the 1/n rule and overstates the fourth city’s size.'
      },
      tags: ['rank-size-rule', 'urban-hierarchy', 'calculation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-human-geography-u7-development-theories-mcq-001', courseId: 'ap-human-geography', courseName: 'AP Human Geography',
      unitId: 'unit-7', unitName: 'Industrial and Economic Development Patterns and Processes', topicId: 'development-theories', topicName: 'Theories of Development and Trade',
      skill: 'geographic argumentation', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      prompt: 'A critic argues that wealthy "core" regions remain prosperous largely by extracting cheap raw materials and labor from poorer "periphery" regions, locking the periphery into dependency. This argument is most consistent with which framework?',
      answerChoices: [
        { id: 'A', text: 'Rostow’s stages of economic growth' },
        { id: 'B', text: 'Wallerstein’s world-systems theory' },
        { id: 'C', text: 'Weber’s least-cost theory' },
        { id: 'D', text: 'The demographic transition model' }
      ],
      correctAnswer: 'B',
      explanation: 'Wallerstein’s world-systems theory divides the world into core, semi-periphery, and periphery and argues that the global economy structurally advantages the core, which benefits from periphery resources and labor, perpetuating uneven development and dependency.',
      distractorRationales: {
        A: 'Rostow’s model is a linear, optimistic stages-of-growth theory assuming all countries can modernize; it does not frame the core as exploiting the periphery.',
        B: '',
        C: 'Weber’s least-cost theory explains the optimal location of an individual factory based on transport, labor, and agglomeration, not global inequality.',
        D: 'The demographic transition model describes population change through stages, not economic dependency between regions.'
      },
      tags: ['world-systems', 'core-periphery', 'development', 'dependency'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 1+ WRITTEN (FRQ) ─────────────────────────────────────────────────────
    {
      id: 'ap-human-geography-u2-migration-frq-001', courseId: 'ap-human-geography', courseName: 'AP Human Geography',
      unitId: 'unit-2', unitName: 'Population and Migration Patterns and Processes', topicId: 'migration', topicName: 'Migration',
      skill: 'geographic argumentation', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 600,
      prompt: 'Migration reshapes both origin and destination regions. (a) Define the difference between a push factor and a pull factor, giving one example of each. (b) Explain one likely demographic effect on the ORIGIN region when large numbers of young working-age adults emigrate. (c) Explain one challenge the DESTINATION region may face as a result of rapid in-migration.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Push factors drive people away from an origin; pull factors attract them to a destination. Out-migration of young adults distorts the origin’s age structure and labor force, while rapid in-migration can strain a destination’s housing, services, and infrastructure.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Distinguishes push vs. pull factors with a valid example of each.', evidenceRequired: 'Clear definition plus one example per type.' },
        { id: 'r2', pointValue: 1, criterion: 'Explains a demographic effect on the origin region.', evidenceRequired: 'Identifies an effect such as aging population, smaller labor force, or skewed sex ratio.' },
        { id: 'r3', pointValue: 1, criterion: 'Explains a challenge faced by the destination region.', evidenceRequired: 'Names a strain such as housing shortages, service demand, or social tension.' }
      ],
      modelAnswer: '(a) A push factor is a negative condition that drives people to leave their home area, such as a lack of jobs or political persecution. A pull factor is a positive condition that attracts migrants to a new area, such as higher wages or family reunification. (b) When many young working-age adults leave, the origin region experiences an aging population and a shrinking labor force; the dependency ratio rises because relatively more children and elderly remain, and remittances may partly offset lost productivity. (c) The destination region may struggle to provide enough affordable housing, schools, and health services for newcomers quickly, and may experience social tension or pressure on infrastructure if growth outpaces planning.',
      tags: ['migration', 'push-pull', 'dependency-ratio', 'frq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
