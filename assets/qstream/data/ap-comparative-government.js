/**
 * Five & A+ — AI Question Stream · Course data: AP Comparative Government and Politics
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE (ap-biology.js) shape exactly.
 * Course covers six core countries: UK, Russia, China, Iran, Mexico, Nigeria.
 * All stimulus passages are ORIGINAL/invented — no copied College Board items.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-comparative-government',
    displayName: 'AP Comparative Government and Politics',
    description: 'Comparative study of six core countries — the United Kingdom, Russia, China, Iran, Mexico, and Nigeria — examining regimes, institutions, political culture, parties and elections, and patterns of political and economic change.',
    category: 'history-social-science',
    allowedQuestionTypes: ['mcq', 'stimulus-based', 'short-answer', 'frq', 'data-analysis'],
    defaultQuestionTypes: ['mcq', 'stimulus-based', 'frq'],
    skills: [
      'concept application',
      'country comparison',
      'data analysis',
      'source analysis',
      'argumentation'
    ],
    bigIdeas: [
      'Power and Authority',
      'Legitimacy and Stability',
      'Democratization',
      'Internal/External Forces',
      'Methods of Political Analysis'
    ],
    units: [
      { id: 'unit-1', name: 'Political Systems, Regimes, and Governments', examWeight: '18-27%', description: 'Defining states, regimes, governments; sources of legitimacy; democratic vs. authoritarian rule; federal vs. unitary structures.',
        topics: [
          { id: 'states-regimes-governments', name: 'States, Regimes, and Governments', description: 'Distinguishing states, regimes, and governments and the sovereignty that defines them.', skills: ['concept application'] },
          { id: 'sources-of-legitimacy', name: 'Sources of Power and Legitimacy', description: 'Traditional, charismatic, and rational-legal authority across the six core countries.', skills: ['country comparison'] },
          { id: 'democratization-authoritarianism', name: 'Democratization and Authoritarianism', description: 'Hybrid regimes, illiberal democracy, and reversals of democratization.', skills: ['argumentation'] },
          { id: 'federal-unitary', name: 'Federal and Unitary Systems', description: 'Centralization, devolution, and the distribution of power.', skills: ['country comparison'] }
        ] },
      { id: 'unit-2', name: 'Political Institutions', examWeight: '17-27%', description: 'Executives, legislatures, judiciaries, electoral systems, and the relationships among them.',
        topics: [
          { id: 'executives', name: 'Executives and Cabinets', description: 'Heads of state and government, fusion vs. separation of powers, and executive removal.', skills: ['concept application'] },
          { id: 'legislatures', name: 'Legislatures', description: 'Unicameral and bicameral bodies and their lawmaking and oversight roles.', skills: ['country comparison'] },
          { id: 'judiciaries', name: 'Judiciaries and Bureaucracies', description: 'Judicial independence, constitutional review, and administrative capacity.', skills: ['source analysis'] }
        ] },
      { id: 'unit-3', name: 'Political Culture and Participation', examWeight: '11-18%', description: 'Political values, socialization, civil society, and forms of participation including protest.',
        topics: [
          { id: 'political-culture-socialization', name: 'Political Culture and Socialization', description: 'Shared values, beliefs, and how citizens acquire them.', skills: ['concept application'] },
          { id: 'civil-society', name: 'Civil Society and Participation', description: 'NGOs, interest groups, social movements, and political protest.', skills: ['country comparison'] },
          { id: 'political-ideologies', name: 'Political Ideologies and Values', description: 'How ideologies shape policy preferences and regime support.', skills: ['argumentation'] }
        ] },
      { id: 'unit-4', name: 'Party and Electoral Systems and Citizen Organizations', examWeight: '13-18%', description: 'Party systems, electoral rules, interest groups, and the social cleavages that structure them.',
        topics: [
          { id: 'electoral-systems', name: 'Electoral Systems and Rules', description: 'FPTP, proportional representation, and mixed systems and their effects.', skills: ['data analysis'] },
          { id: 'party-systems', name: 'Party Systems', description: 'One-party, dominant-party, two-party, and multiparty configurations.', skills: ['country comparison'] },
          { id: 'interest-groups-cleavages', name: 'Interest Groups and Social Cleavages', description: 'Pluralist vs. corporatist representation and cleavage-based politics.', skills: ['concept application'] }
        ] },
      { id: 'unit-5', name: 'Political and Economic Changes and Development', examWeight: '14-18%', description: 'Globalization, economic liberalization, demographic and environmental pressures, and policy responses.',
        topics: [
          { id: 'globalization', name: 'Globalization and Sovereignty', description: 'Supranational organizations and pressures on national autonomy.', skills: ['argumentation'] },
          { id: 'economic-liberalization', name: 'Economic Liberalization and Development', description: 'Market reforms, privatization, and state-led development models.', skills: ['data analysis'] },
          { id: 'demographic-environmental', name: 'Demographic and Environmental Change', description: 'Migration, urbanization, resource politics, and policy responses.', skills: ['source analysis'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq', 'stimulus-based', 'data-analysis'], timingMinutes: 60, weight: '50%', notes: '55 questions, including individual items and sets based on quantitative, text, and visual sources.' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'short-answer'], timingMinutes: 90, weight: '50%', notes: '4 questions: conceptual analysis, quantitative analysis, comparative analysis, and an argument essay.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-comparative-government-u1-states-regimes-governments-mcq-001', courseId: 'ap-comparative-government', courseName: 'AP Comparative Government and Politics',
      unitId: 'unit-1', unitName: 'Political Systems, Regimes, and Governments', topicId: 'states-regimes-governments', topicName: 'States, Regimes, and Governments',
      skill: 'concept application', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'In comparative politics, a "regime" is best defined as which of the following?',
      answerChoices: [
        { id: 'A', text: 'The specific group of leaders who currently hold office' },
        { id: 'B', text: 'The fundamental rules and institutions that organize how power is exercised' },
        { id: 'C', text: 'A territory with defined borders, a population, and sovereignty' },
        { id: 'D', text: 'A temporary coalition of political parties in a legislature' }
      ],
      correctAnswer: 'B',
      explanation: 'A regime is the enduring set of rules, norms, and institutions that determine how power is gained and used. It is more durable than any single government (the people in office) and distinct from the state (the territorial sovereign entity).',
      distractorRationales: {
        A: 'The specific leaders in office are the "government," which can change while the regime endures.',
        B: '',
        C: 'A territory with borders, a population, and sovereignty describes the "state," not the regime.',
        D: 'A legislative coalition is a feature of a government, not the defining concept of a regime.'
      },
      tags: ['regime', 'state', 'government', 'definitions'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-comparative-government-u2-executives-mcq-001', courseId: 'ap-comparative-government', courseName: 'AP Comparative Government and Politics',
      unitId: 'unit-2', unitName: 'Political Institutions', topicId: 'executives', topicName: 'Executives and Cabinets',
      skill: 'country comparison', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'In the United Kingdom, the head of government who leads the executive and is drawn from the majority in the House of Commons is the',
      answerChoices: [
        { id: 'A', text: 'monarch' },
        { id: 'B', text: 'Lord Chancellor' },
        { id: 'C', text: 'prime minister' },
        { id: 'D', text: 'Speaker of the House of Commons' }
      ],
      correctAnswer: 'C',
      explanation: 'The UK has a parliamentary system in which the prime minister is the head of government, chosen as the leader of the party (or coalition) that commands a majority in the House of Commons. The monarch is the largely ceremonial head of state.',
      distractorRationales: {
        A: 'The monarch is the head of state with mostly ceremonial powers, not the head of government.',
        B: 'The Lord Chancellor is a cabinet official overseeing justice matters, not the head of government.',
        C: '',
        D: 'The Speaker presides over Commons debate impartially and does not lead the executive.'
      },
      tags: ['uk', 'prime-minister', 'parliamentary', 'executive'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-comparative-government-u4-electoral-systems-mcq-001', courseId: 'ap-comparative-government', courseName: 'AP Comparative Government and Politics',
      unitId: 'unit-4', unitName: 'Party and Electoral Systems and Citizen Organizations', topicId: 'electoral-systems', topicName: 'Electoral Systems and Rules',
      skill: 'concept application', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 70,
      prompt: 'The United Kingdom elects members of the House of Commons using single-member districts in which the candidate with the most votes wins. This electoral system is known as',
      answerChoices: [
        { id: 'A', text: 'proportional representation' },
        { id: 'B', text: 'first-past-the-post (single-member plurality)' },
        { id: 'C', text: 'a mixed-member system' },
        { id: 'D', text: 'instant-runoff voting' }
      ],
      correctAnswer: 'B',
      explanation: 'First-past-the-post (single-member plurality) awards each district to the single candidate with the most votes. It tends to produce two dominant parties and can give a party a majority of seats without a majority of votes.',
      distractorRationales: {
        A: 'Proportional representation allocates seats in proportion to vote share, typically in multi-member districts.',
        B: '',
        C: 'A mixed-member system combines single-member districts with a proportional tier, as in Russia or Mexico, not the Commons.',
        D: 'Instant-runoff uses ranked ballots and successive elimination, which the Commons does not use.'
      },
      tags: ['uk', 'fptp', 'electoral-systems', 'plurality'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-comparative-government-u1-sources-of-legitimacy-stimulus-001', courseId: 'ap-comparative-government', courseName: 'AP Comparative Government and Politics',
      unitId: 'unit-1', unitName: 'Political Systems, Regimes, and Governments', topicId: 'sources-of-legitimacy', topicName: 'Sources of Power and Legitimacy',
      skill: 'source analysis', questionType: 'stimulus-based', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 150,
      prompt: 'Read the following invented passage, then answer the question.\n\n"Our authority does not rest on the shifting moods of elections. It flows from a sacred duty handed down through generations of jurists who safeguard the faith. The Guardian Council vets every candidate so that no law contradicts divine principle, and ultimate guidance remains with the Supreme Leader."\n\nThe form of legitimacy emphasized in this passage most closely resembles the governing logic of which core country, and which type of authority does it stress?',
      stimulus: '"Our authority does not rest on the shifting moods of elections. It flows from a sacred duty handed down through generations of jurists who safeguard the faith. The Guardian Council vets every candidate so that no law contradicts divine principle, and ultimate guidance remains with the Supreme Leader."',
      answerChoices: [
        { id: 'A', text: 'Iran, emphasizing traditional and religious (charismatic-theocratic) authority' },
        { id: 'B', text: 'Mexico, emphasizing rational-legal authority' },
        { id: 'C', text: 'the United Kingdom, emphasizing rational-legal authority' },
        { id: 'D', text: 'China, emphasizing charismatic authority alone' }
      ],
      correctAnswer: 'A',
      explanation: 'The passage stresses religious duty, clerical guardianship, candidate vetting by a Guardian Council, and a Supreme Leader — features of Iran\'s theocratic system, where legitimacy derives from religious authority rather than electoral mandate alone.',
      modelAnswer: 'The correct choice is A. The references to a "sacred duty," jurists who "safeguard the faith," a Guardian Council that vets candidates against "divine principle," and a "Supreme Leader" all describe Iran\'s theocratic regime, in which legitimacy is grounded in religious (traditional/charismatic-theocratic) authority rather than purely electoral, rational-legal sources.',
      distractorRationales: {
        A: '',
        B: 'Mexico is an electoral democracy whose legitimacy rests on constitutional, rational-legal foundations, not clerical guardianship.',
        C: 'The UK relies on rational-legal authority and parliamentary sovereignty, not religious vetting of candidates.',
        D: 'China\'s legitimacy rests heavily on rational-legal party institutions and performance, and the passage\'s religious framing does not fit it.'
      },
      tags: ['iran', 'legitimacy', 'theocracy', 'authority'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-comparative-government-u4-electoral-systems-data-001', courseId: 'ap-comparative-government', courseName: 'AP Comparative Government and Politics',
      unitId: 'unit-4', unitName: 'Party and Electoral Systems and Citizen Organizations', topicId: 'electoral-systems', topicName: 'Electoral Systems and Rules',
      skill: 'data analysis', questionType: 'data-analysis', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 180,
      prompt: 'The table shows invented results from a hypothetical legislative election held under a first-past-the-post system across 100 single-member districts. Identify which party is most over-represented relative to its vote share, and explain why this pattern is typical of first-past-the-post systems.',
      dataTable: { columns: ['Party', 'Share of national vote (%)', 'Share of seats won (%)'], rows: [['Party A', '42', '58'], ['Party B', '34', '36'], ['Party C', '18', '6'], ['Other', '6', '0']] },
      correctAnswer: 'Party A is the most over-represented; FPTP rewards the largest party and squeezes smaller, geographically dispersed parties.',
      acceptableAnswers: ['Party A', 'party a'],
      explanation: 'Party A wins 58% of seats on only 42% of the vote, a 16-point bonus, making it the most over-represented. First-past-the-post awards each district to a single plurality winner, so a party that finishes first in many districts converts vote pluralities into outsized seat shares, while smaller parties whose support is spread thinly (Party C, Other) win few or no districts.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies Party A as most over-represented using the data.', evidenceRequired: 'Cites the gap between 42% votes and 58% seats.' },
        { id: 'r2', pointValue: 1, criterion: 'Explains the disproportionality mechanism of FPTP.', evidenceRequired: 'Links single-member plurality districts to seat bonuses for the largest party and penalties for dispersed minor parties.' }
      ],
      modelAnswer: 'Party A is the most over-represented: it earns 58% of seats with only 42% of the vote, a +16-point seat bonus larger than any other party\'s. This is typical of first-past-the-post because each of the 100 districts is won by the single candidate with the most votes. A party that finishes first across many districts (Party A) translates narrow pluralities into a disproportionate seat majority, while parties with thinly spread support (Party C with 18% of votes but 6% of seats, and "Other" with 0%) rarely place first anywhere and are squeezed out.',
      tags: ['fptp', 'disproportionality', 'data-analysis', 'electoral-systems'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-comparative-government-u1-federal-unitary-mcq-001', courseId: 'ap-comparative-government', courseName: 'AP Comparative Government and Politics',
      unitId: 'unit-1', unitName: 'Political Systems, Regimes, and Governments', topicId: 'federal-unitary', topicName: 'Federal and Unitary Systems',
      skill: 'country comparison', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'Both Nigeria and Mexico are formally federal systems, yet they differ from China, which is a unitary state. Which statement best captures a consequence of this difference?',
      answerChoices: [
        { id: 'A', text: 'In Nigeria and Mexico, constituent states/units possess constitutionally guaranteed powers, whereas in China subnational authority is delegated by and revocable by the central government.' },
        { id: 'B', text: 'China grants its provinces more constitutional autonomy than Nigerian states enjoy.' },
        { id: 'C', text: 'Federalism in Nigeria and Mexico eliminates ethnic or regional conflict over resources.' },
        { id: 'D', text: 'Unitary systems like China are legally required to hold competitive multiparty elections.' }
      ],
      correctAnswer: 'A',
      explanation: 'In federal systems such as Nigeria and Mexico, subnational units have powers protected by the constitution that the center cannot simply abolish. In a unitary state like China, the central government creates and can reorganize or override subnational authority, which is delegated rather than constitutionally guaranteed.',
      distractorRationales: {
        A: '',
        B: 'This reverses the relationship; Chinese provinces hold delegated, not constitutionally guaranteed, autonomy.',
        C: 'Federalism distributes power but does not eliminate conflict; Nigeria still experiences regional and resource tensions.',
        D: 'Unitary structure says nothing about electoral competitiveness; China is a one-party authoritarian state.'
      },
      tags: ['federalism', 'unitary', 'nigeria', 'mexico', 'china'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-comparative-government-u2-legislatures-mcq-001', courseId: 'ap-comparative-government', courseName: 'AP Comparative Government and Politics',
      unitId: 'unit-2', unitName: 'Political Institutions', topicId: 'legislatures', topicName: 'Legislatures',
      skill: 'country comparison', questionType: 'mcq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      prompt: 'A comparativist argues that Russia\'s State Duma and China\'s National People\'s Congress both function as "weak" legislatures that mainly ratify rather than originate policy. Which piece of evidence would most strongly support this claim?',
      answerChoices: [
        { id: 'A', text: 'Both bodies routinely pass executive- or party-initiated legislation with little amendment and rarely block leadership priorities.' },
        { id: 'B', text: 'Both bodies are directly elected in fully competitive multiparty contests.' },
        { id: 'C', text: 'Both legislatures select the head of state through open, contested votes.' },
        { id: 'D', text: 'Both legislatures frequently override executive vetoes on major budgets.' }
      ],
      correctAnswer: 'A',
      explanation: 'A legislature is "weak" when it ratifies decisions made elsewhere rather than shaping them. The strongest evidence is that the Duma and the NPC pass executive- or party-driven bills with minimal amendment and seldom obstruct the leadership — exactly the rubber-stamp behavior the claim describes.',
      distractorRationales: {
        A: '',
        B: 'Genuinely competitive multiparty elections would suggest stronger, more independent legislatures, undercutting the claim.',
        C: 'Open contested selection of the head of state would indicate legislative power, not weakness.',
        D: 'Frequently overriding executive vetoes would demonstrate strength and independence, the opposite of the argument.'
      },
      tags: ['russia', 'china', 'legislatures', 'rubber-stamp'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-comparative-government-u3-civil-society-stimulus-001', courseId: 'ap-comparative-government', courseName: 'AP Comparative Government and Politics',
      unitId: 'unit-3', unitName: 'Political Culture and Participation', topicId: 'civil-society', topicName: 'Civil Society and Participation',
      skill: 'source analysis', questionType: 'stimulus-based', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 165,
      prompt: 'Read the following invented news excerpt, then answer the question.\n\n"The legislature passed a measure requiring any civic organization that accepts funding from abroad to register under a special designation, submit quarterly financial disclosures to the security ministry, and label all of its public materials accordingly. Officials said the rule protects national sovereignty; critics said it would silence environmental and human-rights groups."\n\nWhich conclusion about the regime is best supported by this excerpt?',
      stimulus: '"The legislature passed a measure requiring any civic organization that accepts funding from abroad to register under a special designation, submit quarterly financial disclosures to the security ministry, and label all of its public materials accordingly. Officials said the rule protects national sovereignty; critics said it would silence environmental and human-rights groups."',
      answerChoices: [
        { id: 'A', text: 'The regime is expanding state control over civil society by raising the costs of independent organizing, a tactic associated with authoritarian and hybrid systems such as Russia.' },
        { id: 'B', text: 'The regime is strengthening pluralist civil society by encouraging foreign-funded groups.' },
        { id: 'C', text: 'The measure proves the regime is a consolidated liberal democracy with robust civil liberties.' },
        { id: 'D', text: 'The measure eliminates the state\'s bureaucratic capacity to monitor organizations.' }
      ],
      correctAnswer: 'A',
      explanation: 'Requiring foreign-funded groups to register with a special status, report to a security ministry, and label their materials raises the burdens and risks of independent activism. This is a recognized strategy for constraining civil society in authoritarian and hybrid regimes, illustrated by "foreign agent"-style laws associated with Russia.',
      modelAnswer: 'The best-supported conclusion is A. Mandatory special registration, quarterly disclosure to a security ministry, and compulsory labeling impose costs and stigma on independent, foreign-funded organizations such as environmental and human-rights groups. Raising the burdens of independent organizing in this way is a hallmark tactic of authoritarian and hybrid regimes (notably Russia\'s "foreign agent" laws), expanding state control over civil society rather than fostering pluralism.',
      distractorRationales: {
        A: '',
        B: 'The rule discourages rather than encourages foreign-funded organizing; it is restrictive, not pluralism-enhancing.',
        C: 'Liberal democracies protect independent association; burdensome registration aimed at rights groups cuts against that label.',
        D: 'Mandatory disclosure to a security ministry expands, not eliminates, the state\'s monitoring capacity.'
      },
      tags: ['russia', 'civil-society', 'ngos', 'authoritarianism', 'foreign-agent'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN (FRQ + short-answer with rubrics) ────────────────────────────
    {
      id: 'ap-comparative-government-u5-economic-liberalization-frq-001', courseId: 'ap-comparative-government', courseName: 'AP Comparative Government and Politics',
      unitId: 'unit-5', unitName: 'Political and Economic Changes and Development', topicId: 'economic-liberalization', topicName: 'Economic Liberalization and Development',
      skill: 'argumentation', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 600,
      prompt: 'China and Mexico have both pursued market-oriented economic reforms, but under very different political regimes. (a) Describe one economic liberalization policy each country has used. (b) Explain how China\'s authoritarian regime and Mexico\'s democratic regime differ in how they manage the political costs of such reforms. (c) Develop a defensible argument about whether regime type or economic policy choices better explains differences in development outcomes between the two countries.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Both states liberalized (e.g., China\'s special economic zones and opening to foreign investment; Mexico\'s trade liberalization and privatization). Regime type shapes accountability: Mexico\'s competitive elections expose leaders to voter backlash, while China\'s one-party system can impose reforms with less direct electoral accountability but relies on performance legitimacy.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Describes one specific economic liberalization policy in China.', evidenceRequired: 'Names a concrete policy such as special economic zones or opening to foreign direct investment.' },
        { id: 'r2', pointValue: 1, criterion: 'Describes one specific economic liberalization policy in Mexico.', evidenceRequired: 'Names a concrete policy such as trade liberalization or privatization of state enterprises.' },
        { id: 'r3', pointValue: 1, criterion: 'Explains how regime type shapes management of reform costs.', evidenceRequired: 'Contrasts electoral accountability in Mexico with one-party performance legitimacy in China.' },
        { id: 'r4', pointValue: 1, criterion: 'Develops a defensible argument with reasoning.', evidenceRequired: 'States a clear claim and supports it with relevant evidence and a line of reasoning.' }
      ],
      modelAnswer: '(a) China created special economic zones and opened coastal regions to foreign direct investment while retaining state control of strategic sectors; Mexico liberalized trade by lowering tariffs and joining free-trade agreements and privatized many formerly state-owned enterprises. (b) In Mexico, competitive multiparty elections mean leaders who impose painful reforms (unemployment, inequality) can be voted out, so governments must build coalitions and cushion losers. China\'s one-party regime faces no comparable electoral threat and can sustain reforms top-down, but it depends on continued growth for "performance legitimacy" and represses organized dissent. (c) A defensible argument is that policy choices, more than regime type, explain divergent outcomes: China\'s gradual, sequenced opening paired with high investment produced rapid sustained growth, whereas Mexico\'s rapid trade liberalization exposed it to external shocks; an alternative defensible claim emphasizes that authoritarian insulation let China pursue long-horizon strategies a democratically accountable Mexico could not. Either claim earns credit if supported with evidence and reasoning.',
      tags: ['china', 'mexico', 'economic-liberalization', 'development', 'frq', 'argumentation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-comparative-government-u3-political-culture-socialization-saq-001', courseId: 'ap-comparative-government', courseName: 'AP Comparative Government and Politics',
      unitId: 'unit-3', unitName: 'Political Culture and Participation', topicId: 'political-culture-socialization', topicName: 'Political Culture and Socialization',
      skill: 'concept application', questionType: 'short-answer', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 300,
      prompt: '(a) Define political socialization. (b) Identify one agent of political socialization. (c) Explain how a government in one core country (such as China) might use that agent to shape support for the regime.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Political socialization is the lifelong process by which people acquire political values and orientations. Agents include family, schools, media, religious institutions, and the state. Authoritarian regimes such as China use schools and state-controlled media to cultivate regime support and patriotic identity.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Accurately defines political socialization.', evidenceRequired: 'Identifies it as the process of acquiring political values/orientations.' },
        { id: 'r2', pointValue: 1, criterion: 'Identifies a valid agent of socialization.', evidenceRequired: 'Names an agent such as schools, family, media, or religious institutions.' },
        { id: 'r3', pointValue: 1, criterion: 'Explains how a named country uses that agent to build regime support.', evidenceRequired: 'Links the agent to a concrete regime-supporting mechanism in a core country.' }
      ],
      modelAnswer: '(a) Political socialization is the lifelong process through which individuals acquire their political beliefs, values, and attitudes. (b) One agent is the education system (schools). (c) In China, the state controls school curricula and uses required civic and "patriotic education" courses, along with state media, to instill loyalty to the Communist Party, emphasize national rejuvenation, and frame the regime\'s rule as a source of stability and prosperity, thereby cultivating diffuse support for the regime among young citizens.',
      tags: ['political-socialization', 'china', 'education', 'short-answer'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
