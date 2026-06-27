/**
 * Five & A+ — AI Question Stream · Course data: AP European History
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE (ap-biology.js) exact shape.
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Stimulus/DBQ sources are SHORT ORIGINAL paraphrases, never copied documents.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-european-history',
    displayName: 'AP European History',
    description: 'European political, social, cultural, intellectual, and economic developments from c. 1450 to the present, organized around continuity and change, causation, and the use of evidence.',
    category: 'history-social-science',
    allowedQuestionTypes: ['mcq', 'stimulus-based', 'short-answer', 'dbq', 'leq'],
    defaultQuestionTypes: ['mcq', 'stimulus-based', 'short-answer'],
    skills: [
      'developments and processes',
      'sourcing and situation',
      'claims and evidence',
      'contextualization',
      'making connections',
      'argumentation'
    ],
    bigIdeas: [
      'Interaction of Europe and the World',
      'Economic and Commercial Developments',
      'Cultural and Intellectual Developments',
      'States and Other Institutions of Power',
      'Social Organization and Development',
      'National and European Identity',
      'Technological and Scientific Innovation'
    ],
    units: [
      { id: 'unit-1', name: 'Renaissance and Exploration', examWeight: '10-15%', description: 'The Italian and Northern Renaissance, humanism, the printing press, and European overseas expansion.',
        topics: [
          { id: 'italian-renaissance', name: 'Italian Renaissance and Humanism', description: 'Civic humanism, individualism, patronage, and a renewed interest in classical antiquity.', skills: ['developments and processes'] },
          { id: 'northern-renaissance', name: 'Northern Renaissance and Printing', description: 'Christian humanism, vernacular literacy, and the impact of the printing press.', skills: ['making connections'] },
          { id: 'age-of-exploration', name: 'Age of Exploration', description: 'Motives for exploration, new technologies, and the Columbian Exchange.', skills: ['contextualization'] }
        ] },
      { id: 'unit-2', name: 'Age of Reformation', examWeight: '10-15%', description: 'The Protestant and Catholic Reformations and the religious wars they helped spark.',
        topics: [
          { id: 'protestant-reformation', name: 'Protestant Reformation', description: 'Luther, Calvin, justification by faith, and challenges to Church authority.', skills: ['sourcing and situation'] },
          { id: 'catholic-reformation', name: 'Catholic Reformation', description: 'The Council of Trent, the Jesuits, and Catholic renewal.', skills: ['developments and processes'] },
          { id: 'wars-of-religion', name: 'Wars of Religion', description: 'Confessional conflict, the Thirty Years’ War, and the Peace of Westphalia.', skills: ['making connections'] }
        ] },
      { id: 'unit-3', name: 'Absolutism and Constitutionalism', examWeight: '10-15%', description: 'Competing models of state power in 17th-century Europe.',
        topics: [
          { id: 'french-absolutism', name: 'French Absolutism', description: 'Louis XIV, court culture at Versailles, and centralized royal authority.', skills: ['developments and processes'] },
          { id: 'english-constitutionalism', name: 'English Constitutionalism', description: 'The English Civil War, the Glorious Revolution, and limits on the crown.', skills: ['claims and evidence'] },
          { id: 'eastern-absolutism', name: 'Absolutism in Central and Eastern Europe', description: 'State-building in Prussia, Austria, and Russia.', skills: ['contextualization'] }
        ] },
      { id: 'unit-4', name: 'Scientific, Philosophical, and Political Developments', examWeight: '10-15%', description: 'The Scientific Revolution and the Enlightenment.',
        topics: [
          { id: 'scientific-revolution', name: 'Scientific Revolution', description: 'Heliocentrism, empiricism, and the new scientific method.', skills: ['sourcing and situation'] },
          { id: 'enlightenment', name: 'The Enlightenment', description: 'Reason, natural rights, the social contract, and the public sphere.', skills: ['making connections'] },
          { id: 'enlightened-absolutism', name: 'Enlightened Absolutism', description: 'Reforming monarchs who applied Enlightenment ideas to governance.', skills: ['argumentation'] }
        ] },
      { id: 'unit-5', name: 'Conflict, Crisis, and Reaction in the Late 18th Century', examWeight: '10-15%', description: 'The French Revolution, the Napoleonic era, and conservative reaction.',
        topics: [
          { id: 'french-revolution', name: 'The French Revolution', description: 'Causes, phases, radicalization, and the Reign of Terror.', skills: ['causation'] },
          { id: 'napoleonic-era', name: 'The Napoleonic Era', description: 'Napoleon’s reforms, empire, and the spread of revolutionary ideas.', skills: ['developments and processes'] },
          { id: 'congress-of-vienna', name: 'Congress of Vienna and Reaction', description: 'Restoration, the balance of power, and conservative ideology.', skills: ['contextualization'] }
        ] },
      { id: 'unit-6', name: 'Industrialization and Its Effects', examWeight: '10-15%', description: 'The Industrial Revolution and the social transformations it produced.',
        topics: [
          { id: 'industrial-revolution', name: 'The Industrial Revolution', description: 'Why Britain industrialized first, factories, and new energy sources.', skills: ['developments and processes'] },
          { id: 'social-effects-industry', name: 'Social Effects of Industrialization', description: 'Urbanization, class formation, gender roles, and standards of living.', skills: ['claims and evidence'] },
          { id: 'responses-to-industry', name: 'Ideological Responses to Industry', description: 'Liberalism, socialism, Marxism, and labor reform movements.', skills: ['making connections'] }
        ] },
      { id: 'unit-7', name: '19th-Century Perspectives and Political Developments', examWeight: '10-15%', description: 'Nationalism, unification, mass politics, and new ways of seeing the world.',
        topics: [
          { id: 'nationalism-unification', name: 'Nationalism and Unification', description: 'The unifications of Italy and Germany and the politics of nationalism.', skills: ['causation'] },
          { id: 'mass-politics', name: 'Mass Politics and Reform', description: 'Suffrage expansion, the woman’s movement, and the rise of mass parties.', skills: ['argumentation'] },
          { id: 'isms-and-imperialism', name: 'New Ideologies and Imperialism', description: 'Realism, Darwinism, secularism, and the New Imperialism.', skills: ['contextualization'] }
        ] },
      { id: 'unit-8', name: '20th-Century Global Conflicts', examWeight: '10-15%', description: 'The two World Wars, totalitarian regimes, and the Holocaust.',
        topics: [
          { id: 'world-war-one', name: 'World War I', description: 'Long-term causes, total war, and the upheaval of 1917.', skills: ['causation'] },
          { id: 'interwar-totalitarianism', name: 'Interwar Crisis and Totalitarianism', description: 'The Depression, fascism, Nazism, and Stalinism.', skills: ['developments and processes'] },
          { id: 'world-war-two', name: 'World War II and the Holocaust', description: 'Appeasement, total war, genocide, and the postwar settlement.', skills: ['claims and evidence'] }
        ] },
      { id: 'unit-9', name: 'Cold War and Contemporary Europe', examWeight: '10-15%', description: 'The Cold War, decolonization, integration, and Europe since 1989.',
        topics: [
          { id: 'cold-war', name: 'The Cold War', description: 'Bipolar division, ideological rivalry, and the Iron Curtain in Europe.', skills: ['contextualization'] },
          { id: 'decolonization-welfare', name: 'Decolonization and the Welfare State', description: 'The end of European empires and postwar social reconstruction.', skills: ['making connections'] },
          { id: 'integration-collapse', name: 'European Integration and the Collapse of Communism', description: 'The EU, 1989, and the reshaping of Europe.', skills: ['argumentation'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I, Part A: Multiple Choice', questionTypes: ['mcq', 'stimulus-based'], timingMinutes: 55, weight: '40%', notes: '55 questions in stimulus-based sets tied to sources.' },
        { name: 'Section I, Part B: Short Answer', questionTypes: ['short-answer'], timingMinutes: 40, weight: '20%', notes: '3 short-answer questions, often source- or argument-based.' },
        { name: 'Section II, Part A: Document-Based Question', questionTypes: ['dbq'], timingMinutes: 60, weight: '25%', notes: '1 DBQ using a set of historical documents.' },
        { name: 'Section II, Part B: Long Essay', questionTypes: ['leq'], timingMinutes: 40, weight: '15%', notes: '1 long essay chosen from options across time periods.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-european-history-u1-italian-renaissance-mcq-001', courseId: 'ap-european-history', courseName: 'AP European History',
      unitId: 'unit-1', unitName: 'Renaissance and Exploration', topicId: 'italian-renaissance', topicName: 'Italian Renaissance and Humanism',
      skill: 'developments and processes', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'Renaissance humanists are best described as scholars who emphasized which of the following?',
      answerChoices: [
        { id: 'A', text: 'The study of classical Greek and Roman texts and human potential' },
        { id: 'B', text: 'The rejection of all religious belief in favor of pure science' },
        { id: 'C', text: 'A return to feudal manorialism and serf labor' },
        { id: 'D', text: 'The supremacy of the papacy over secular rulers' }
      ],
      correctAnswer: 'A',
      explanation: 'Humanism revived the study of classical antiquity and stressed human dignity, achievement, and education in the liberal arts (the studia humanitatis).',
      distractorRationales: {
        A: '',
        B: 'Most humanists remained Christian; many sought to reconcile classical learning with faith rather than reject religion.',
        C: 'Humanism flourished in commercial city-states and looked forward, not back to manorial feudalism.',
        D: 'Civic humanists often valued secular public life and republican government, not papal supremacy.'
      },
      tags: ['humanism', 'renaissance', 'classical-revival'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-european-history-u2-protestant-reformation-mcq-001', courseId: 'ap-european-history', courseName: 'AP European History',
      unitId: 'unit-2', unitName: 'Age of Reformation', topicId: 'protestant-reformation', topicName: 'Protestant Reformation',
      skill: 'developments and processes', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'Martin Luther’s core objection to the sale of indulgences was rooted in which theological belief?',
      answerChoices: [
        { id: 'A', text: 'That salvation could be purchased through good works' },
        { id: 'B', text: 'That salvation comes through faith alone, not by buying pardons' },
        { id: 'C', text: 'That only the pope could interpret scripture' },
        { id: 'D', text: 'That the Bible should remain available only in Latin' }
      ],
      correctAnswer: 'B',
      explanation: 'Luther taught justification by faith alone (sola fide), so he argued that paid indulgences could not secure forgiveness or salvation.',
      distractorRationales: {
        A: 'This is the opposite of Luther’s position; he rejected the idea that works or payments earned salvation.',
        C: 'Luther insisted ordinary believers could read and interpret scripture (the priesthood of all believers).',
        D: 'Luther promoted vernacular scripture, famously translating the Bible into German.'
      },
      tags: ['luther', 'indulgences', 'sola-fide'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-european-history-u3-french-absolutism-mcq-001', courseId: 'ap-european-history', courseName: 'AP European History',
      unitId: 'unit-3', unitName: 'Absolutism and Constitutionalism', topicId: 'french-absolutism', topicName: 'French Absolutism',
      skill: 'developments and processes', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'Louis XIV’s construction of the palace at Versailles served primarily to achieve which political goal?',
      answerChoices: [
        { id: 'A', text: 'To decentralize power among regional parlements' },
        { id: 'B', text: 'To draw the nobility to court and reduce their independent power' },
        { id: 'C', text: 'To establish a constitutional monarchy with shared authority' },
        { id: 'D', text: 'To convert France to Protestantism' }
      ],
      correctAnswer: 'B',
      explanation: 'By housing nobles at Versailles and tying status to royal favor, Louis XIV domesticated the aristocracy and concentrated power in the crown.',
      distractorRationales: {
        A: 'Louis XIV centralized authority and curbed the parlements rather than empowering regions.',
        C: 'Versailles symbolized absolute, not constitutional, monarchy.',
        D: 'Louis XIV revoked the Edict of Nantes and persecuted Protestants; he did not convert France.'
      },
      tags: ['louis-xiv', 'versailles', 'absolutism'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-european-history-u4-enlightenment-stimulus-001', courseId: 'ap-european-history', courseName: 'AP European History',
      unitId: 'unit-4', unitName: 'Scientific, Philosophical, and Political Developments', topicId: 'enlightenment', topicName: 'The Enlightenment',
      skill: 'sourcing and situation', questionType: 'stimulus-based', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 150,
      prompt: 'Source (original paraphrase): In a widely circulated 1760s essay, a philosophe argues that legitimate government rests on the consent of the governed, that rulers hold power only as a trust for the people’s welfare, and that subjects may resist a tyrant who breaks that trust.\n\n(a) Identify ONE Enlightenment idea expressed in the passage. (b) Explain how this idea differed from the justification for divine-right monarchy.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'The passage expresses social-contract theory and popular sovereignty, contrasting with divine-right claims that monarchs answer only to God.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies an Enlightenment idea in the source (e.g., consent of the governed, social contract, right of resistance).', evidenceRequired: 'Names a specific idea drawn from the passage.' },
        { id: 'r2', pointValue: 1, criterion: 'Explains how the idea differs from divine-right monarchy.', evidenceRequired: 'Contrasts consent-based authority with God-given royal authority.' }
      ],
      modelAnswer: '(a) The passage expresses social-contract theory and popular sovereignty: government is legitimate only with the consent of the governed and exists to serve the people’s welfare. (b) This differs sharply from divine-right monarchy, which held that a king received authority directly from God and was accountable to God alone, not to his subjects. The source instead makes rulers accountable to the people and even justifies resistance to a tyrant, locating sovereignty in the governed rather than in a divinely appointed crown.',
      tags: ['enlightenment', 'social-contract', 'sourcing'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-european-history-u5-french-revolution-mcq-001', courseId: 'ap-european-history', courseName: 'AP European History',
      unitId: 'unit-5', unitName: 'Conflict, Crisis, and Reaction in the Late 18th Century', topicId: 'french-revolution', topicName: 'The French Revolution',
      skill: 'making connections', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'Which combination of factors best explains why France faced a fiscal crisis on the eve of the Revolution in 1789?',
      answerChoices: [
        { id: 'A', text: 'A tax system that exempted much of the nobility and clergy, combined with heavy war debts' },
        { id: 'B', text: 'A fully industrialized economy that collapsed due to overproduction' },
        { id: 'C', text: 'The abolition of all taxes by Louis XVI in the 1780s' },
        { id: 'D', text: 'A peaceful century with no major military expenditures' }
      ],
      correctAnswer: 'A',
      explanation: 'The privileged First and Second Estates were largely tax-exempt, shifting the burden onto commoners, while debts from wars (including aid to the American Revolution) left the crown effectively bankrupt.',
      distractorRationales: {
        A: '',
        B: 'France in 1789 was still largely agrarian; the Industrial Revolution had barely begun on the continent.',
        C: 'Taxes were not abolished; the crisis was driven by an inability to tax the privileged orders.',
        D: 'France had fought costly wars, which is precisely why it carried crushing debt.'
      },
      tags: ['french-revolution', 'fiscal-crisis', 'estates'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-european-history-u6-responses-to-industry-mcq-001', courseId: 'ap-european-history', courseName: 'AP European History',
      unitId: 'unit-6', unitName: 'Industrialization and Its Effects', topicId: 'responses-to-industry', topicName: 'Ideological Responses to Industry',
      skill: 'developments and processes', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'A mid-19th-century writer argues that history is driven by class struggle and that industrial workers will eventually overthrow the owners of factories. This argument is most closely associated with which ideology?',
      answerChoices: [
        { id: 'A', text: 'Classical liberalism' },
        { id: 'B', text: 'Conservatism' },
        { id: 'C', text: 'Marxist socialism' },
        { id: 'D', text: 'Romantic nationalism' }
      ],
      correctAnswer: 'C',
      explanation: 'The idea that history advances through class struggle and that the proletariat will overthrow the bourgeoisie is central to Marxist (scientific) socialism.',
      distractorRationales: {
        A: 'Classical liberalism emphasized free markets and individual rights, not class revolution.',
        B: 'Conservatism defended traditional hierarchy and order against radical change.',
        C: '',
        D: 'Romantic nationalism centered on shared culture and the nation-state, not class conflict.'
      },
      tags: ['marxism', 'class-struggle', 'ideology'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-european-history-u7-nationalism-unification-mcq-001', courseId: 'ap-european-history', courseName: 'AP European History',
      unitId: 'unit-7', unitName: '19th-Century Perspectives and Political Developments', topicId: 'nationalism-unification', topicName: 'Nationalism and Unification',
      skill: 'making connections', questionType: 'mcq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      prompt: 'Otto von Bismarck’s approach to German unification is often labeled Realpolitik. Which statement best captures how his methods differed from the earlier liberal nationalism of 1848?',
      answerChoices: [
        { id: 'A', text: 'He pursued unity through parliamentary consensus and popular constitutions rather than force' },
        { id: 'B', text: 'He achieved unity through calculated wars and diplomacy directed by the Prussian state, not liberal idealism' },
        { id: 'C', text: 'He rejected unification entirely in favor of preserving small independent states' },
        { id: 'D', text: 'He relied on a mass socialist movement to unite German workers' }
      ],
      correctAnswer: 'B',
      explanation: 'Bismarck unified Germany from above through "blood and iron"—deliberate wars (against Denmark, Austria, and France) and shrewd diplomacy led by Prussia—contrasting with the failed liberal, constitution-first nationalism of the 1848 Frankfurt Parliament.',
      distractorRationales: {
        A: 'This describes the 1848 liberal approach that failed; Bismarck distrusted parliamentary unification.',
        B: '',
        C: 'Bismarck actively engineered unification under Prussian leadership.',
        D: 'Bismarck opposed socialism and later passed anti-socialist laws.'
      },
      tags: ['bismarck', 'realpolitik', 'german-unification'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-european-history-u8-interwar-totalitarianism-mcq-001', courseId: 'ap-european-history', courseName: 'AP European History',
      unitId: 'unit-8', unitName: '20th-Century Global Conflicts', topicId: 'interwar-totalitarianism', topicName: 'Interwar Crisis and Totalitarianism',
      skill: 'claims and evidence', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      prompt: 'A historian claims that the Great Depression was a decisive factor in the Nazi rise to power in Germany. Which piece of evidence would most directly support this claim?',
      answerChoices: [
        { id: 'A', text: 'Nazi electoral support surged after 1930 as unemployment climbed to record levels' },
        { id: 'B', text: 'The Nazi Party was founded in 1920, well before the Depression' },
        { id: 'C', text: 'Germany had a long tradition of classical music and philosophy' },
        { id: 'D', text: 'The Weimar Republic adopted a democratic constitution in 1919' }
      ],
      correctAnswer: 'A',
      explanation: 'A direct correlation between rising Depression-era unemployment and a surge in Nazi votes after 1930 links the economic crisis to the party’s rise, supporting the historian’s causal claim.',
      distractorRationales: {
        A: '',
        B: 'The party’s early founding actually shows it existed without mass support before the Depression, weakening the causal link.',
        C: 'Cultural traditions are unrelated to the economic causation the claim asserts.',
        D: 'The 1919 constitution predates the Depression and does not address the Nazi surge.'
      },
      tags: ['nazism', 'great-depression', 'causation', 'evidence'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN: SHORT ANSWER (with rubric) ──────────────────────────────────
    {
      id: 'ap-european-history-u9-cold-war-short-answer-001', courseId: 'ap-european-history', courseName: 'AP European History',
      unitId: 'unit-9', unitName: 'Cold War and Contemporary Europe', topicId: 'cold-war', topicName: 'The Cold War',
      skill: 'argumentation', questionType: 'short-answer', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 360,
      prompt: 'Answer all parts. (a) Identify ONE way the Cold War divided Europe politically after 1945. (b) Briefly explain ONE economic strategy the United States used to influence Western Europe in this period. (c) Briefly explain ONE consequence of the Cold War division for the people of a divided nation or city in Europe.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A strong response identifies a concrete political division (e.g., the Iron Curtain or rival blocs), explains a U.S. economic strategy (e.g., the Marshall Plan), and gives a specific human consequence (e.g., the Berlin Wall separating families).',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Part (a): identifies a Cold War political division of Europe.', evidenceRequired: 'Names a specific division such as the Iron Curtain, NATO vs. Warsaw Pact, or East/West blocs.' },
        { id: 'r2', pointValue: 1, criterion: 'Part (b): explains a U.S. economic strategy in Western Europe.', evidenceRequired: 'Identifies and explains an example such as the Marshall Plan and its purpose.' },
        { id: 'r3', pointValue: 1, criterion: 'Part (c): explains a consequence for people in a divided nation or city.', evidenceRequired: 'Gives a concrete human or social consequence with explanation.' }
      ],
      modelAnswer: '(a) The Cold War split Europe into a Western bloc aligned with the United States and an Eastern bloc dominated by the Soviet Union, a division Churchill called the "Iron Curtain." (b) The United States used the Marshall Plan to send economic aid to Western Europe, rebuilding war-torn economies and tying them to American markets while reducing the appeal of communism. (c) In divided Berlin, the building of the Berlin Wall in 1961 separated families and neighborhoods overnight; people were cut off from relatives and jobs on the other side, and some died trying to cross to the West.',
      tags: ['cold-war', 'iron-curtain', 'marshall-plan', 'short-answer'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN: LEQ (with rubric) ───────────────────────────────────────────
    {
      id: 'ap-european-history-u2-wars-of-religion-leq-001', courseId: 'ap-european-history', courseName: 'AP European History',
      unitId: 'unit-2', unitName: 'Age of Reformation', topicId: 'wars-of-religion', topicName: 'Wars of Religion',
      skill: 'argumentation', questionType: 'leq', difficulty: 'hard',
      bloomLevel: 'create', estimatedTimeSeconds: 2400,
      prompt: 'Develop an argument that evaluates the extent to which the religious conflicts of the period c. 1517 to 1648 transformed the relationship between European states and religious authority.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A successful essay makes a defensible thesis, supports it with specific evidence (e.g., the Peace of Augsburg, Thirty Years’ War, Peace of Westphalia), and explains how religious conflict reshaped state-church relations toward greater state control and sovereignty.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Thesis/Claim: presents a historically defensible thesis that establishes a line of reasoning.', evidenceRequired: 'A clear, evaluative thesis responding to the prompt, not a restatement.' },
        { id: 'r2', pointValue: 1, criterion: 'Contextualization: situates the argument in a broader historical context.', evidenceRequired: 'Relevant context such as the Reformation’s challenge to papal authority.' },
        { id: 'r3', pointValue: 2, criterion: 'Evidence: supports the argument with multiple specific and relevant pieces of evidence.', evidenceRequired: 'At least two accurate examples (e.g., Peace of Augsburg, Edict of Nantes, Thirty Years’ War, Peace of Westphalia).' },
        { id: 'r4', pointValue: 2, criterion: 'Analysis and Reasoning: uses reasoning (e.g., change/continuity, causation) to support the argument and demonstrates complex understanding.', evidenceRequired: 'Explains how evidence supports the thesis and addresses extent, nuance, or counterargument.' }
      ],
      modelAnswer: 'Thesis: Between 1517 and 1648 religious conflict substantially transformed the relationship between European states and religious authority by shifting the power to determine religion from a universal Church to sovereign secular rulers. Context: Luther’s 1517 challenge shattered the medieval ideal of a unified Christendom under papal authority, opening confessional divisions that monarchs were forced to manage. Evidence and analysis: The 1555 Peace of Augsburg established "cuius regio, eius religio," granting German princes the right to set their territory’s faith—placing religious choice in the hands of the state rather than the pope. In France, the 1598 Edict of Nantes showed a monarch using royal authority to grant limited toleration for political stability, subordinating religious uniformity to state interests. The Thirty Years’ War (1618-1648) began as a religious conflict but increasingly turned on dynastic and state power, as seen in Catholic France aiding Protestant states against the Habsburgs. The 1648 Peace of Westphalia confirmed the sovereignty of individual states over religious affairs and weakened the political reach of both the papacy and the Holy Roman Emperor. Conclusion: While religion remained powerful, these conflicts decisively strengthened the secular state at the expense of universal religious authority, marking a major transformation by 1648.',
      tags: ['reformation', 'wars-of-religion', 'westphalia', 'leq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
