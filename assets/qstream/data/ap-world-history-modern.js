/**
 * Five & A+ — AI Question Stream · Course data: AP World History: Modern
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE (ap-biology.js) exactly.
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Stimulus/DBQ sources are SHORT, ORIGINAL paraphrased descriptions, never copied documents.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-world-history-modern',
    displayName: 'AP World History: Modern',
    description: 'Global history from c. 1200 CE to the present, tracing the growth and collapse of states, networks of exchange, industrialization, global conflict, and globalization through the lens of historical reasoning skills.',
    category: 'history-social-science',
    allowedQuestionTypes: ['mcq', 'stimulus-based', 'short-answer', 'dbq', 'leq'],
    defaultQuestionTypes: ['mcq', 'stimulus-based', 'short-answer'],
    skills: [
      'developments and processes',
      'sourcing',
      'claims and evidence',
      'contextualization',
      'comparison',
      'causation',
      'continuity and change',
      'argumentation'
    ],
    bigIdeas: ['Governance', 'Cultural Developments and Interactions', 'Economic Systems', 'Social Interactions and Organization', 'Technology and Innovation', 'Humans and the Environment'],
    units: [
      { id: 'unit-1', name: 'The Global Tapestry', examWeight: '8-10%', description: 'States and belief systems across Afro-Eurasia and the Americas, c. 1200–1450.',
        topics: [
          { id: 'east-asia-song', name: 'East Asia and Song China', description: 'Song dynasty governance, the civil-service exam, neo-Confucianism, and economic productivity.', skills: ['developments and processes'] },
          { id: 'dar-al-islam', name: 'Dar al-Islam', description: 'Political fragmentation, scholarship, and the spread of Islam across regions.', skills: ['continuity and change'] },
          { id: 'state-building-americas', name: 'State Building in the Americas', description: 'Aztec, Inca, and Maya political and economic organization.', skills: ['comparison'] },
          { id: 'europe-feudalism', name: 'Europe in the Period', description: 'Feudalism, manorialism, and the rising authority of monarchs.', skills: ['developments and processes'] }
        ] },
      { id: 'unit-2', name: 'Networks of Exchange', examWeight: '8-10%', description: 'Trade routes that connected the hemispheres, c. 1200–1450.',
        topics: [
          { id: 'silk-roads', name: 'The Silk Roads', description: 'Commercial innovations, luxury goods, and the spread of ideas along overland routes.', skills: ['causation'] },
          { id: 'indian-ocean', name: 'Indian Ocean Trade', description: 'Monsoon-driven maritime commerce, diasporic communities, and Swahili city-states.', skills: ['developments and processes'] },
          { id: 'trans-saharan', name: 'Trans-Saharan Trade', description: 'Gold-salt exchange, the Mali Empire, and the role of camel caravans.', skills: ['continuity and change'] }
        ] },
      { id: 'unit-3', name: 'Land-Based Empires', examWeight: '12-15%', description: 'The expansion and administration of gunpowder empires, c. 1450–1750.',
        topics: [
          { id: 'gunpowder-empires', name: 'Empires Expand', description: 'Ottoman, Safavid, Mughal, Ming/Qing, and Russian expansion using gunpowder weapons.', skills: ['comparison'] },
          { id: 'administering-empires', name: 'Administering Empires', description: 'Tax systems, bureaucracies, and legitimizing strategies of rulers.', skills: ['developments and processes'] },
          { id: 'belief-and-state', name: 'Belief Systems and the State', description: 'Religious legitimation, syncretism, and state-sponsored art.', skills: ['causation'] }
        ] },
      { id: 'unit-4', name: 'Transoceanic Interconnections', examWeight: '12-15%', description: 'Maritime empires, the Columbian Exchange, and global trade, c. 1450–1750.',
        topics: [
          { id: 'columbian-exchange', name: 'The Columbian Exchange', description: 'Transfer of crops, animals, people, and disease across the Atlantic.', skills: ['causation'] },
          { id: 'maritime-empires', name: 'Maritime Empires Establish', description: 'Portuguese, Spanish, Dutch, and English commercial and territorial expansion.', skills: ['developments and processes'] },
          { id: 'labor-systems', name: 'Changing Labor Systems', description: 'Coerced labor including encomienda, chattel slavery, and the Atlantic slave trade.', skills: ['continuity and change'] }
        ] },
      { id: 'unit-5', name: 'Revolutions', examWeight: '12-15%', description: 'Enlightenment thought and political and industrial revolutions, c. 1750–1900.',
        topics: [
          { id: 'enlightenment', name: 'The Enlightenment', description: 'Reason, natural rights, and the social contract reshaping political thought.', skills: ['developments and processes'] },
          { id: 'atlantic-revolutions', name: 'Atlantic Revolutions', description: 'American, French, Haitian, and Latin American independence movements.', skills: ['causation'] },
          { id: 'industrial-revolution', name: 'The Industrial Revolution', description: 'Mechanization, factory systems, and shifts in production and energy.', skills: ['continuity and change'] }
        ] },
      { id: 'unit-6', name: 'Consequences of Industrialization', examWeight: '12-15%', description: 'Imperialism, economic transformation, and global migration, c. 1750–1900.',
        topics: [
          { id: 'new-imperialism', name: 'New Imperialism', description: 'European, U.S., and Japanese expansion driven by industry and ideology.', skills: ['causation'] },
          { id: 'economic-imperialism', name: 'Economic Imperialism', description: 'Unequal treaties, spheres of influence, and resource extraction.', skills: ['claims and evidence'] },
          { id: 'industrial-migration', name: 'Migration and Society', description: 'Labor migrations, urbanization, and social changes from industrialization.', skills: ['continuity and change'] }
        ] },
      { id: 'unit-7', name: 'Global Conflict', examWeight: '8-10%', description: 'World wars, mass mobilization, and shifting power, c. 1900–present.',
        topics: [
          { id: 'world-war-causes', name: 'Causes of Global Conflict', description: 'Nationalism, alliances, militarism, and the collapse of empires.', skills: ['causation'] },
          { id: 'total-war', name: 'Total War and Mass Mobilization', description: 'Economic, social, and technological dimensions of total war.', skills: ['developments and processes'] },
          { id: 'mass-atrocities', name: 'Mass Atrocities', description: 'Genocides and large-scale violence in the twentieth century.', skills: ['contextualization'] }
        ] },
      { id: 'unit-8', name: 'Cold War and Decolonization', examWeight: '8-10%', description: 'Bipolar rivalry, independence movements, and new states, c. 1900–present.',
        topics: [
          { id: 'cold-war-rivalry', name: 'Cold War Rivalry', description: 'U.S.–Soviet competition, proxy conflicts, and ideological blocs.', skills: ['comparison'] },
          { id: 'decolonization', name: 'Decolonization', description: 'Independence movements and the negotiated or violent end of empires.', skills: ['causation'] },
          { id: 'newly-independent-states', name: 'Newly Independent States', description: 'Nation-building, nonalignment, and economic strategies after independence.', skills: ['continuity and change'] }
        ] },
      { id: 'unit-9', name: 'Globalization', examWeight: '8-10%', description: 'Technology, the global economy, and transnational movements, c. 1900–present.',
        topics: [
          { id: 'science-technology', name: 'Advances in Technology', description: 'Medical, agricultural, and communication advances reshaping daily life.', skills: ['developments and processes'] },
          { id: 'global-economy', name: 'The Global Economy', description: 'Multinational corporations, trade organizations, and economic integration.', skills: ['causation'] },
          { id: 'global-culture-resistance', name: 'Global Culture and Resistance', description: 'Cultural exchange, human-rights movements, and reactions to globalization.', skills: ['argumentation'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I, Part A: Multiple Choice', questionTypes: ['mcq', 'stimulus-based'], timingMinutes: 55, weight: '40%', notes: '55 questions in stimulus-based sets tied to sources.' },
        { name: 'Section I, Part B: Short Answer', questionTypes: ['short-answer'], timingMinutes: 40, weight: '20%', notes: '3 short-answer questions; sources and historians supplied.' },
        { name: 'Section II: Document-Based Question', questionTypes: ['dbq'], timingMinutes: 60, weight: '25%', notes: 'One DBQ analyzing several sources to build an argument.' },
        { name: 'Section II: Long Essay', questionTypes: ['leq'], timingMinutes: 40, weight: '15%', notes: 'One long essay chosen from options spanning different eras.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-world-history-modern-u1-east-asia-song-mcq-001', courseId: 'ap-world-history-modern', courseName: 'AP World History: Modern',
      unitId: 'unit-1', unitName: 'The Global Tapestry', topicId: 'east-asia-song', topicName: 'East Asia and Song China',
      skill: 'developments and processes', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'During the Song dynasty, government officials were selected primarily through which institution?',
      answerChoices: [
        { id: 'A', text: 'Hereditary inheritance of noble titles' },
        { id: 'B', text: 'A merit-based civil service examination system' },
        { id: 'C', text: 'Purchase of offices by wealthy merchants' },
        { id: 'D', text: 'Election by village councils' }
      ],
      correctAnswer: 'B',
      explanation: 'The Song expanded the civil-service examination, which tested knowledge of Confucian texts and allowed appointment based on merit rather than birth, strengthening a scholar-official bureaucracy.',
      distractorRationales: {
        A: 'Hereditary aristocratic appointment was the older system the exam was meant to limit.',
        B: '',
        C: 'Merchants were socially distrusted under Confucian values and could not simply buy high office.',
        D: 'Village elections were not the mechanism for staffing the imperial bureaucracy.'
      },
      tags: ['song-china', 'civil-service-exam', 'confucianism'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-world-history-modern-u2-indian-ocean-mcq-001', courseId: 'ap-world-history-modern', courseName: 'AP World History: Modern',
      unitId: 'unit-2', unitName: 'Networks of Exchange', topicId: 'indian-ocean', topicName: 'Indian Ocean Trade',
      skill: 'developments and processes', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'Which natural phenomenon most directly enabled the seasonal rhythm of Indian Ocean maritime trade before 1450?',
      answerChoices: [
        { id: 'A', text: 'Predictable monsoon wind patterns' },
        { id: 'B', text: 'The Gulf Stream current' },
        { id: 'C', text: 'Year-round absence of storms' },
        { id: 'D', text: 'Tidal locking of the moon' }
      ],
      correctAnswer: 'A',
      explanation: 'Reversing monsoon winds blew predictably toward and away from coasts in different seasons, letting sailors time voyages across the Indian Ocean and return with the opposite wind.',
      distractorRationales: {
        A: '',
        B: 'The Gulf Stream is an Atlantic current and had no role in Indian Ocean trade.',
        C: 'The Indian Ocean did have storms; monsoon timing, not calm seas, governed sailing.',
        D: 'Tidal locking of the moon is unrelated to seasonal wind-driven navigation.'
      },
      tags: ['indian-ocean', 'monsoon', 'trade-networks'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-world-history-modern-u4-columbian-exchange-mcq-001', courseId: 'ap-world-history-modern', courseName: 'AP World History: Modern',
      unitId: 'unit-4', unitName: 'Transoceanic Interconnections', topicId: 'columbian-exchange', topicName: 'The Columbian Exchange',
      skill: 'causation', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'Which of the following was a direct demographic consequence of the Columbian Exchange in the Americas?',
      answerChoices: [
        { id: 'A', text: 'A sharp population decline among Indigenous peoples from new diseases' },
        { id: 'B', text: 'The immediate industrialization of the Andes' },
        { id: 'C', text: 'The disappearance of maize from the global diet' },
        { id: 'D', text: 'A rapid rise in the population of the Aztec capital' }
      ],
      correctAnswer: 'A',
      explanation: 'Old World pathogens such as smallpox, to which Indigenous Americans had no prior immunity, caused catastrophic population losses across the Americas after contact.',
      distractorRationales: {
        A: '',
        B: 'Industrialization did not occur until centuries later and was not a result of the exchange.',
        C: 'Maize actually spread worldwide as part of the exchange rather than disappearing.',
        D: 'Indigenous urban centers contracted, not grew, amid epidemics and conquest.'
      },
      tags: ['columbian-exchange', 'disease', 'demography'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-world-history-modern-u3-gunpowder-empires-mcq-001', courseId: 'ap-world-history-modern', courseName: 'AP World History: Modern',
      unitId: 'unit-3', unitName: 'Land-Based Empires', topicId: 'gunpowder-empires', topicName: 'Empires Expand',
      skill: 'comparison', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'The Ottoman, Safavid, and Mughal empires are often grouped together as "gunpowder empires" primarily because each',
      answerChoices: [
        { id: 'A', text: 'shared a single state religion across all three' },
        { id: 'B', text: 'used firearms and artillery to expand and consolidate territory' },
        { id: 'C', text: 'abandoned land taxation in favor of maritime trade revenue' },
        { id: 'D', text: 'was governed without any centralized bureaucracy' }
      ],
      correctAnswer: 'B',
      explanation: 'These land-based empires expanded by integrating gunpowder weapons—muskets and siege cannon—into their militaries, which let centralized rulers overpower rivals and fortified cities.',
      distractorRationales: {
        A: 'They differed religiously: Sunni Ottoman, Shia Safavid, and a Muslim Mughal elite ruling a Hindu-majority population.',
        B: '',
        C: 'All three relied heavily on agrarian land taxation, not primarily maritime revenue.',
        D: 'Each developed substantial centralized bureaucracies to administer territory.'
      },
      tags: ['gunpowder-empires', 'ottoman', 'safavid', 'mughal'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-world-history-modern-u4-labor-systems-stimulus-001', courseId: 'ap-world-history-modern', courseName: 'AP World History: Modern',
      unitId: 'unit-4', unitName: 'Transoceanic Interconnections', topicId: 'labor-systems', topicName: 'Changing Labor Systems',
      skill: 'sourcing', questionType: 'stimulus-based', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 150,
      prompt: 'Source (original paraphrase): A seventeenth-century Spanish colonial administrator describes mine owners in the Andes demanding rotational native labor drafts, complaining that without forced workers the silver mines would lie idle and royal revenue would collapse. Using the source, explain what the administrator reveals about the relationship between coerced labor and the colonial economy, and identify ONE limitation of relying on this source to understand the experience of Indigenous laborers.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'The source ties forced labor drafts (the mita) to silver output and royal revenue, showing the colonial economy depended on coercion; but as an administrator focused on revenue, the author omits the laborers\' own perspective.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Explains that the source links coerced/forced labor to colonial silver production and revenue.', evidenceRequired: 'Connects labor drafts to economic output using the source.' },
        { id: 'r2', pointValue: 1, criterion: 'Identifies a valid limitation tied to the author\'s point of view.', evidenceRequired: 'Notes the administrator\'s bias toward revenue and absence of the laborers\' voice.' }
      ],
      modelAnswer: 'The administrator shows that the colonial mining economy depended on coerced rotational labor: he argues the silver mines and royal revenue would fail without forced native workers, revealing how deeply economic profit relied on compulsion. A limitation is point of view—because the author is a colonial official concerned with output and the crown\'s income, the source reflects elite priorities and tells us nothing about how Indigenous laborers themselves experienced the drafts, their resistance, or their losses.',
      tags: ['labor-systems', 'mita', 'silver', 'sourcing'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-world-history-modern-u5-atlantic-revolutions-mcq-001', courseId: 'ap-world-history-modern', courseName: 'AP World History: Modern',
      unitId: 'unit-5', unitName: 'Revolutions', topicId: 'atlantic-revolutions', topicName: 'Atlantic Revolutions',
      skill: 'causation', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'The Haitian Revolution is frequently distinguished from other Atlantic revolutions because it',
      answerChoices: [
        { id: 'A', text: 'was led primarily by wealthy landowning aristocrats' },
        { id: 'B', text: 'produced the first state created by a successful large-scale slave uprising' },
        { id: 'C', text: 'left the colonial plantation system entirely intact' },
        { id: 'D', text: 'occurred without any influence from Enlightenment ideals' }
      ],
      correctAnswer: 'B',
      explanation: 'Enslaved people in Saint-Domingue overthrew French colonial rule and slavery itself, founding Haiti as the first nation to emerge from a successful large-scale revolt of the enslaved—an outcome unique among Atlantic revolutions.',
      distractorRationales: {
        A: 'The revolution was driven by enslaved and free people of color, not landowning aristocrats.',
        B: '',
        C: 'The revolution dismantled the slave-based plantation order rather than preserving it.',
        D: 'Enlightenment ideas of liberty and rights clearly influenced its leaders and demands.'
      },
      tags: ['haitian-revolution', 'atlantic-revolutions', 'slavery'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-world-history-modern-u6-new-imperialism-stimulus-001', courseId: 'ap-world-history-modern', courseName: 'AP World History: Modern',
      unitId: 'unit-6', unitName: 'Consequences of Industrialization', topicId: 'new-imperialism', topicName: 'New Imperialism',
      skill: 'contextualization', questionType: 'stimulus-based', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 120,
      prompt: 'Source (original paraphrase): A late-nineteenth-century European pamphlet argues that industrial nations have both a duty and an economic interest in governing "less advanced" peoples overseas, claiming that colonies will supply raw materials and absorb manufactured goods. The argument in this source is best understood as a reflection of which broader development of the period c. 1750–1900?',
      answerChoices: [
        { id: 'A', text: 'The use of ideologies and industrial needs to justify new imperial expansion' },
        { id: 'B', text: 'The decline of European interest in overseas territory' },
        { id: 'C', text: 'The abolition of all coerced labor across European empires' },
        { id: 'D', text: 'The rejection of industrial production in favor of agrarian economies' }
      ],
      correctAnswer: 'A',
      explanation: 'The pamphlet blends a civilizing "duty" ideology with the industrial demand for raw materials and markets—exactly the cultural and economic justifications that drove the New Imperialism of the late nineteenth century.',
      distractorRationales: {
        A: '',
        B: 'The source promotes expansion, the opposite of declining interest in territory.',
        C: 'It says nothing about abolishing coerced labor and instead supports domination.',
        D: 'It assumes and depends on industrial production rather than rejecting it.'
      },
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Selects choice A and ties the source to New Imperialism.', evidenceRequired: 'Connects the pamphlet to the era\'s imperial expansion.' },
        { id: 'r2', pointValue: 1, criterion: 'Explains both the ideological and economic justifications shown.', evidenceRequired: 'Names the civilizing-mission ideology and the demand for raw materials/markets.' }
      ],
      modelAnswer: 'The correct choice is A. The pamphlet combines a "civilizing" duty with the industrial need for raw materials and new markets, which are the cultural and economic justifications that fueled the New Imperialism of c. 1750–1900 as industrialized states raced to claim overseas territory.',
      tags: ['new-imperialism', 'civilizing-mission', 'contextualization'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-world-history-modern-u8-decolonization-mcq-001', courseId: 'ap-world-history-modern', courseName: 'AP World History: Modern',
      unitId: 'unit-8', unitName: 'Cold War and Decolonization', topicId: 'decolonization', topicName: 'Decolonization',
      skill: 'comparison', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      prompt: 'A historian argues that mid-twentieth-century decolonization movements followed strikingly different paths even within the same period. Which pairing best supports that claim of contrast in the methods used to achieve independence?',
      answerChoices: [
        { id: 'A', text: 'India\'s largely nonviolent mass civil disobedience versus Algeria\'s prolonged armed struggle against French rule' },
        { id: 'B', text: 'Two colonies that both gained independence through identical peaceful negotiations' },
        { id: 'C', text: 'Two movements that both rejected any appeal to self-determination' },
        { id: 'D', text: 'Two empires that both expanded their colonial holdings after 1945' }
      ],
      correctAnswer: 'A',
      explanation: 'A strong contrast pairs distinct methods: Indian independence leaned heavily on nonviolent mass civil disobedience, while Algerian independence came through a long, violent war against France—illustrating divergent paths to decolonization in the same era.',
      distractorRationales: {
        A: '',
        B: 'Two identical peaceful cases show similarity, not the contrast the historian claims.',
        C: 'Self-determination was central to most decolonization, so this pairing is historically inaccurate.',
        D: 'After 1945 empires generally contracted; expansion contradicts the era\'s decolonization trend.'
      },
      tags: ['decolonization', 'india', 'algeria', 'comparison'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN: SHORT ANSWER (with rubric) ──────────────────────────────────
    {
      id: 'ap-world-history-modern-u2-silk-roads-short-answer-001', courseId: 'ap-world-history-modern', courseName: 'AP World History: Modern',
      unitId: 'unit-2', unitName: 'Networks of Exchange', topicId: 'silk-roads', topicName: 'The Silk Roads',
      skill: 'continuity and change', questionType: 'short-answer', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 360,
      prompt: 'Answer parts A, B, and C about Silk Road trade in the period c. 1200–1450. (A) Identify ONE commercial innovation that facilitated long-distance trade. (B) Explain ONE way the intensification of Silk Road trade led to cultural exchange. (C) Explain ONE environmental or biological consequence of expanded long-distance trade in this period.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Innovations such as credit instruments, caravanserai, and improved transport raised trade volume; intensified contact spread religions and technologies; and the same networks could spread disease, as with the plague.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Part A: Identifies a valid commercial innovation.', evidenceRequired: 'Names a credit/financial instrument, caravanserai, or transport technology.' },
        { id: 'r2', pointValue: 1, criterion: 'Part B: Explains a specific instance of cultural exchange.', evidenceRequired: 'Links trade contact to spread of a religion, technology, or idea.' },
        { id: 'r3', pointValue: 1, criterion: 'Part C: Explains an environmental or biological consequence.', evidenceRequired: 'Connects expanded trade to disease spread or environmental change.' }
      ],
      modelAnswer: '(A) The growing use of credit instruments such as bills of exchange let merchants trade large values without carrying coin, reducing risk on long routes. (B) Intensified Silk Road contact spread Buddhism eastward as traveling merchants and monks carried beliefs and texts into Central Asia and China, blending with local cultures. (C) The same connected routes spread disease: pathogens, most notably the plague, moved along trade networks, contributing to devastating outbreaks that reshaped affected populations.',
      tags: ['silk-roads', 'cultural-exchange', 'plague', 'short-answer'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN: DBQ (rubric + model answer) ─────────────────────────────────
    {
      id: 'ap-world-history-modern-u7-world-war-causes-dbq-001', courseId: 'ap-world-history-modern', courseName: 'AP World History: Modern',
      unitId: 'unit-7', unitName: 'Global Conflict', topicId: 'world-war-causes', topicName: 'Causes of Global Conflict',
      skill: 'argumentation', questionType: 'dbq', difficulty: 'exam-level',
      bloomLevel: 'create', estimatedTimeSeconds: 3600,
      prompt: 'Evaluate the extent to which nationalism contributed to the outbreak of global conflict in the early twentieth century. Use the source set below (ORIGINAL paraphrased descriptions) to support an argument. Doc 1: a politician\'s speech praising national glory and military readiness. Doc 2: a newspaper cartoon depicting rival nations as armed figures eyeing one another. Doc 3: a private letter from a soldier expressing pride in defending the homeland. Doc 4: a diplomat\'s memo warning that alliance commitments could turn a local crisis into a wider war. Doc 5: an economist\'s report on competition for colonial markets and resources.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A complete DBQ response sets a defensible thesis on nationalism\'s role, contextualizes the prewar period, uses evidence from at least four documents, sources documents for point of view or purpose, brings in outside evidence such as alliances or militarism, and demonstrates complexity by weighing nationalism against other causes.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Thesis: Presents a defensible thesis that responds to the prompt with a line of reasoning.', evidenceRequired: 'A claim about the extent of nationalism\'s contribution, not a restatement.' },
        { id: 'r2', pointValue: 1, criterion: 'Contextualization: Situates the argument in a broader historical setting.', evidenceRequired: 'Describes relevant prewar developments such as alliances, militarism, or imperial rivalry.' },
        { id: 'r3', pointValue: 2, criterion: 'Evidence from documents: Uses content from at least four documents to support the argument (1 pt for three documents).', evidenceRequired: 'Accurate use of document content tied to the argument.' },
        { id: 'r4', pointValue: 1, criterion: 'Sourcing: For at least two documents, explains how point of view, purpose, situation, or audience is relevant.', evidenceRequired: 'Analysis of why a document\'s origin matters to the argument.' },
        { id: 'r5', pointValue: 1, criterion: 'Outside evidence: Uses one piece of specific evidence beyond the documents.', evidenceRequired: 'Relevant fact not drawn from the source set.' },
        { id: 'r6', pointValue: 1, criterion: 'Complexity: Demonstrates a complex understanding of the issue.', evidenceRequired: 'Weighs nationalism against other causes or shows nuance and corroboration.' }
      ],
      modelAnswer: 'Thesis: Although nationalism intensified rivalries and made populations willing to fight, it acted alongside entangling alliances, militarism, and imperial competition, so it was a major but not sole cause of global conflict. Context: In the decades before the war, an arms race, rigid alliance blocs, and competition for colonies created a tense system in which a single crisis could escalate. Evidence: Documents 1 and 3 show nationalism mobilizing both leaders and ordinary soldiers around national glory and defense of the homeland, while Document 2\'s cartoon portrays mutual hostility among armed rivals—evidence that nationalist sentiment hardened public attitudes. However, Document 4\'s diplomatic warning shows that alliance commitments could mechanically widen a local dispute, and Document 5 ties tension to economic competition for markets, indicating causes beyond nationalism. Sourcing: The politician\'s speech (Doc 1) is intended to rally support, so it likely exaggerates national unity; the soldier\'s private letter (Doc 3), not meant for publication, more candidly reflects genuine nationalist pride. Outside evidence: The assassination of Archduke Franz Ferdinand triggered the alliance chain reaction the diplomat feared. Complexity: Nationalism supplied the emotional fuel, but alliances and militarism provided the mechanism and imperial rivalry the motive, so the conflict is best explained by these forces reinforcing one another rather than nationalism alone.',
      tags: ['global-conflict', 'nationalism', 'causation', 'dbq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN: LEQ (rubric + model answer) ─────────────────────────────────
    {
      id: 'ap-world-history-modern-u9-global-economy-leq-001', courseId: 'ap-world-history-modern', courseName: 'AP World History: Modern',
      unitId: 'unit-9', unitName: 'Globalization', topicId: 'global-economy', topicName: 'The Global Economy',
      skill: 'argumentation', questionType: 'leq', difficulty: 'exam-level',
      bloomLevel: 'create', estimatedTimeSeconds: 2400,
      prompt: 'In the period from c. 1900 to the present, technological and economic changes transformed how goods and capital moved across the world. Develop an argument that evaluates the extent to which economic globalization changed the lives of ordinary people in this period.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A strong LEQ states a defensible thesis on the extent of change, contextualizes globalization, supports the argument with at least two specific pieces of evidence, uses a reasoning skill such as continuity and change, and reaches a complex understanding by weighing benefits against costs or continuities.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Thesis: Presents a defensible thesis responding to the prompt with a line of reasoning.', evidenceRequired: 'A claim about the extent of change, not a restatement of the prompt.' },
        { id: 'r2', pointValue: 1, criterion: 'Contextualization: Situates the argument in a broader historical setting.', evidenceRequired: 'Describes relevant developments such as new technologies or trade institutions.' },
        { id: 'r3', pointValue: 2, criterion: 'Evidence: Supports the argument with at least two specific, relevant pieces of evidence (1 pt for one piece).', evidenceRequired: 'Accurate, specific historical evidence tied to the argument.' },
        { id: 'r4', pointValue: 1, criterion: 'Reasoning: Uses a historical reasoning skill (e.g., continuity and change) to frame the argument.', evidenceRequired: 'Explicit use of change/continuity or comparison structuring the response.' },
        { id: 'r5', pointValue: 1, criterion: 'Complexity: Demonstrates a complex understanding.', evidenceRequired: 'Weighs benefits against costs, or change against continuity, with corroboration.' }
      ],
      modelAnswer: 'Thesis: Economic globalization dramatically changed daily life by spreading consumer goods, jobs, and communication technologies, yet it also reproduced older inequalities, so its effects were transformative but uneven. Context: After 1900, faster transport, container shipping, and later digital communication, along with institutions promoting freer trade, knit national economies into a single global market. Evidence: Multinational corporations spread standardized goods and brands across continents, changing diets and consumption for ordinary households, while the relocation of manufacturing created new factory jobs in some regions and eliminated them in others. Reasoning (continuity and change): Although the scale and speed of exchange changed enormously, the pattern of wealthier regions extracting value from poorer ones echoed earlier imperial economic relationships, showing continuity beneath the change. Complexity: Globalization raised living standards and connectivity for many while deepening inequality and economic insecurity for others, so its impact on ordinary people is best judged as a profound but double-edged transformation rather than uniform progress.',
      tags: ['globalization', 'global-economy', 'continuity-and-change', 'leq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
