/**
 * Five & A+ — AI Question Stream · Course data: AP U.S. Government and Politics
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE shape (assets/qstream/data/ap-biology.js).
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Required foundational documents and landmark SCOTUS cases are referenced by name only.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-us-government',
    displayName: 'AP U.S. Government and Politics',
    description: 'How American constitutional democracy works: foundational principles, the interactions among the branches, civil liberties and civil rights, political beliefs, and participation—analyzed through required documents and landmark Supreme Court cases.',
    category: 'history-social-science',
    allowedQuestionTypes: ['mcq', 'stimulus-based', 'short-answer', 'frq', 'data-analysis', 'argument-essay'],
    defaultQuestionTypes: ['mcq', 'stimulus-based', 'argument-essay'],
    skills: [
      'concept application',
      'SCOTUS comparison',
      'data analysis',
      'source analysis',
      'argumentation'
    ],
    bigIdeas: [
      'Constitutionalism',
      'Liberty and Order',
      'Civic Participation in a Representative Democracy',
      'Competing Policy-Making Interests',
      'Methods of Political Analysis'
    ],
    units: [
      { id: 'unit-1', name: 'Foundations of American Democracy', examWeight: '15-22%', description: 'Democratic ideals, founding documents, federalism, and the constitutional compromises that balance power.',
        topics: [
          { id: 'democratic-ideals', name: 'Democratic Ideals and Founding Documents', description: 'Natural rights, popular sovereignty, republicanism, and social contract as expressed in the Declaration of Independence and the Constitution.', skills: ['source analysis'] },
          { id: 'models-of-democracy', name: 'Models of Representative Democracy', description: 'Participatory, pluralist, and elite models and how the Constitution reflects each.', skills: ['concept application'] },
          { id: 'federalism', name: 'Federalism', description: 'Division of power between national and state governments; enumerated, implied, reserved, and concurrent powers.', skills: ['concept application'] }
        ] },
      { id: 'unit-2', name: 'Interactions Among Branches of Government', examWeight: '25-36%', description: 'Structure, powers, and checks of Congress, the presidency, the federal courts, and the bureaucracy.',
        topics: [
          { id: 'congress', name: 'Congress: Structure and Powers', description: 'Lawmaking, the budget, and differences between the House and Senate.', skills: ['concept application'] },
          { id: 'presidency', name: 'The Presidency', description: 'Formal and informal powers, executive orders, and checks on the executive.', skills: ['concept application'] },
          { id: 'judiciary', name: 'The Federal Judiciary', description: 'Judicial review, precedent, and checks on the courts.', skills: ['SCOTUS comparison'] },
          { id: 'bureaucracy', name: 'The Bureaucracy', description: 'Rule-making, implementation, discretionary authority, and oversight.', skills: ['data analysis'] }
        ] },
      { id: 'unit-3', name: 'Civil Liberties and Civil Rights', examWeight: '13-18%', description: 'The Bill of Rights, selective incorporation, due process, and the struggle for equal protection.',
        topics: [
          { id: 'first-amendment', name: 'First Amendment Freedoms', description: 'Speech, press, religion, assembly, and the limits the Court has drawn.', skills: ['SCOTUS comparison'] },
          { id: 'due-process-incorporation', name: 'Due Process and Selective Incorporation', description: 'How the Fourteenth Amendment applies the Bill of Rights to the states.', skills: ['source analysis'] },
          { id: 'civil-rights', name: 'Civil Rights and Equal Protection', description: 'Movements, legislation, and Court action expanding equality.', skills: ['argumentation'] }
        ] },
      { id: 'unit-4', name: 'American Political Ideologies and Beliefs', examWeight: '10-15%', description: 'Political socialization, ideology, public opinion measurement, and how beliefs shape policy.',
        topics: [
          { id: 'political-socialization', name: 'Political Socialization and Ideology', description: 'How family, schooling, events, and generation shape political values.', skills: ['concept application'] },
          { id: 'public-opinion-polling', name: 'Public Opinion and Polling', description: 'Scientific sampling, margin of error, and sources of polling error.', skills: ['data analysis'] },
          { id: 'ideology-policy', name: 'Ideology and Policy', description: 'How liberal and conservative beliefs translate into economic and social policy positions.', skills: ['concept application'] }
        ] },
      { id: 'unit-5', name: 'Political Participation', examWeight: '20-27%', description: 'Voting, elections, parties, interest groups, and the media in a representative democracy.',
        topics: [
          { id: 'voting-behavior', name: 'Voting Rights and Behavior', description: 'Expansion of suffrage, models of voting behavior, and factors affecting turnout.', skills: ['data analysis'] },
          { id: 'elections-campaigns', name: 'Elections and Campaign Finance', description: 'The Electoral College, primaries, and money in politics.', skills: ['source analysis'] },
          { id: 'parties-interest-groups', name: 'Political Parties and Interest Groups', description: 'Linkage institutions, party functions, and the influence of organized interests.', skills: ['concept application'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq', 'stimulus-based', 'data-analysis'], timingMinutes: 80, weight: '50%', notes: '55 questions, including sets based on texts, quantitative data, maps, and visuals.' },
        { name: 'Section II: Free Response', questionTypes: ['short-answer', 'frq', 'argument-essay'], timingMinutes: 100, weight: '50%', notes: '4 prompts: concept application, quantitative analysis, SCOTUS comparison, and an argument essay.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-us-government-u1-democratic-ideals-mcq-001', courseId: 'ap-us-government', courseName: 'AP U.S. Government and Politics',
      unitId: 'unit-1', unitName: 'Foundations of American Democracy', topicId: 'democratic-ideals', topicName: 'Democratic Ideals and Founding Documents',
      skill: 'source analysis', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'The Declaration of Independence asserts that governments derive "their just powers from the consent of the governed." This phrase most directly reflects which democratic principle?',
      answerChoices: [
        { id: 'A', text: 'Judicial review' },
        { id: 'B', text: 'Popular sovereignty' },
        { id: 'C', text: 'Separation of powers' },
        { id: 'D', text: 'Checks and balances' }
      ],
      correctAnswer: 'B',
      explanation: 'Popular sovereignty holds that governmental authority comes from the people. "Consent of the governed" is a direct statement of that principle.',
      distractorRationales: {
        A: 'Judicial review is the courts’ power to strike down laws; it is not stated in the Declaration.',
        B: '',
        C: 'Separation of powers divides government into branches and is a structural feature of the Constitution, not this phrase.',
        D: 'Checks and balances lets branches limit one another and is not what "consent of the governed" describes.'
      },
      tags: ['declaration-of-independence', 'popular-sovereignty', 'foundational-documents'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-us-government-u2-congress-mcq-001', courseId: 'ap-us-government', courseName: 'AP U.S. Government and Politics',
      unitId: 'unit-2', unitName: 'Interactions Among Branches of Government', topicId: 'congress', topicName: 'Congress: Structure and Powers',
      skill: 'concept application', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'Under the Constitution, which chamber of Congress has the sole power to confirm presidential appointments and ratify treaties?',
      answerChoices: [
        { id: 'A', text: 'The House of Representatives' },
        { id: 'B', text: 'The Senate' },
        { id: 'C', text: 'The Supreme Court' },
        { id: 'D', text: 'The Electoral College' }
      ],
      correctAnswer: 'B',
      explanation: 'The Senate holds the "advice and consent" power: it confirms appointments by majority vote and ratifies treaties by a two-thirds vote.',
      distractorRationales: {
        A: 'The House originates revenue bills and can impeach, but it does not confirm appointments or ratify treaties.',
        B: '',
        C: 'The Supreme Court is the judicial branch and plays no role in confirming appointments.',
        D: 'The Electoral College only formally elects the president and has no confirmation power.'
      },
      tags: ['senate', 'advice-and-consent', 'congressional-powers'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-us-government-u3-first-amendment-mcq-001', courseId: 'ap-us-government', courseName: 'AP U.S. Government and Politics',
      unitId: 'unit-3', unitName: 'Civil Liberties and Civil Rights', topicId: 'first-amendment', topicName: 'First Amendment Freedoms',
      skill: 'concept application', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'A city passes a law banning all peaceful protests in its public parks. This law most directly conflicts with which First Amendment protection?',
      answerChoices: [
        { id: 'A', text: 'The free exercise of religion' },
        { id: 'B', text: 'The right to bear arms' },
        { id: 'C', text: 'The freedom of assembly' },
        { id: 'D', text: 'Protection against unreasonable searches' }
      ],
      correctAnswer: 'C',
      explanation: 'The First Amendment protects the right of the people to peaceably assemble. A blanket ban on peaceful protest in a public forum restricts that freedom.',
      distractorRationales: {
        A: 'Free exercise concerns religious practice, which a protest ban does not target.',
        B: 'The right to bear arms is in the Second Amendment, not the First.',
        C: '',
        D: 'Protection against unreasonable searches is in the Fourth Amendment and is unrelated to protest bans.'
      },
      tags: ['first-amendment', 'assembly', 'civil-liberties'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-us-government-u1-federalism-mcq-001', courseId: 'ap-us-government', courseName: 'AP U.S. Government and Politics',
      unitId: 'unit-1', unitName: 'Foundations of American Democracy', topicId: 'federalism', topicName: 'Federalism',
      skill: 'concept application', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 90,
      prompt: 'Congress offers states billions in highway funds but conditions the money on each state raising its minimum drinking age to 21. This use of conditional grants best illustrates which feature of modern federalism?',
      answerChoices: [
        { id: 'A', text: 'The national government using fiscal incentives to influence state policy' },
        { id: 'B', text: 'States exercising reserved powers free from federal involvement' },
        { id: 'C', text: 'The full faith and credit clause requiring states to honor one another’s laws' },
        { id: 'D', text: 'Dual federalism with strictly separated national and state spheres' }
      ],
      correctAnswer: 'A',
      explanation: 'Categorical grants with conditions let Congress shape policy in areas it cannot regulate directly. By attaching strings to highway money, the national government pressures states to adopt a federal preference—a hallmark of fiscal federalism.',
      distractorRationales: {
        A: '',
        B: 'Setting a drinking age is a reserved power, but the federal funding condition is precisely federal involvement in it.',
        C: 'Full faith and credit concerns how states treat each other’s laws, not federal grants.',
        D: 'Dual federalism describes separated spheres; conditional grants reflect cooperative, not dual, federalism.'
      },
      tags: ['federalism', 'categorical-grants', 'fiscal-federalism'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-us-government-u5-voting-behavior-data-001', courseId: 'ap-us-government', courseName: 'AP U.S. Government and Politics',
      unitId: 'unit-5', unitName: 'Political Participation', topicId: 'voting-behavior', topicName: 'Voting Rights and Behavior',
      skill: 'data analysis', questionType: 'data-analysis', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 150,
      prompt: 'The table shows hypothetical voter turnout by age group in a midterm and a presidential election. Identify the relationship between age and turnout, and describe how turnout differs between the two election types.',
      dataTable: { columns: ['Age group', 'Midterm turnout (%)', 'Presidential turnout (%)'], rows: [['18-29', '23', '48'], ['30-44', '38', '60'], ['45-64', '55', '71'], ['65+', '64', '76']] },
      correctAnswer: 'Turnout rises with age in both elections, and turnout is higher in the presidential election across every age group.',
      acceptableAnswers: ['older voters turn out more', 'turnout increases with age', 'presidential turnout is higher', 'higher in presidential'],
      explanation: 'In both columns, turnout climbs steadily from the 18-29 group to the 65+ group, showing a positive relationship between age and turnout. Every age group also votes at a higher rate in the presidential election than in the midterm, reflecting greater salience and media attention in presidential years.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies that turnout increases with age.', evidenceRequired: 'States the positive age-turnout relationship using the data.' },
        { id: 'r2', pointValue: 1, criterion: 'Describes that presidential turnout exceeds midterm turnout.', evidenceRequired: 'Compares the two columns for at least one age group.' }
      ],
      modelAnswer: 'Turnout rises consistently with age: from 23% (18-29) to 64% (65+) in the midterm and from 48% to 76% in the presidential election. In every age group, presidential turnout is higher than midterm turnout—for example, 48% versus 23% among 18-29 year olds—because presidential elections draw more attention and are seen as higher stakes.',
      tags: ['turnout', 'voting-behavior', 'data-analysis', 'age'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-us-government-u2-presidency-stimulus-001', courseId: 'ap-us-government', courseName: 'AP U.S. Government and Politics',
      unitId: 'unit-2', unitName: 'Interactions Among Branches of Government', topicId: 'presidency', topicName: 'The Presidency',
      skill: 'source analysis', questionType: 'stimulus-based', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 120,
      prompt: 'A president issues an executive order directing federal agencies to prioritize clean-energy projects, citing existing statutory authority. A newspaper editorial argues: "The president is legislating by decree and Congress should reassert its authority." Based on the editorial and your knowledge of government, which response best evaluates the situation?',
      stimulus: 'Editorial excerpt (paraphrased, original): "When the executive reshapes national policy with the stroke of a pen, the people’s representatives in Congress are sidelined. An executive order is not a law, and Congress retains the tools to push back."',
      answerChoices: [
        { id: 'A', text: 'The editorial is correct that executive orders are unchecked; Congress has no way to respond.' },
        { id: 'B', text: 'Executive orders carry the force of law only within existing statutory or constitutional authority, and Congress can respond by passing new legislation or using the power of the purse.' },
        { id: 'C', text: 'Executive orders permanently bind future presidents, so the concern is unfounded.' },
        { id: 'D', text: 'Only the Supreme Court can issue executive orders, so the editorial misidentifies the branch.' }
      ],
      correctAnswer: 'B',
      explanation: 'Executive orders are an informal presidential power, but they must rest on constitutional or statutory authority and can be checked. Congress can pass a law overriding the policy or withhold funding, and courts can review the order.',
      distractorRationales: {
        A: 'Congress can in fact respond through legislation, appropriations, and oversight, so executive orders are not unchecked.',
        B: '',
        C: 'A later president can rescind a prior executive order, so they do not permanently bind successors.',
        D: 'Executive orders are issued by the president, not the Court; the editorial correctly identifies the executive.'
      },
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Recognizes executive orders rest on statutory/constitutional authority.', evidenceRequired: 'Notes the limited basis of the order.' },
        { id: 'r2', pointValue: 1, criterion: 'Identifies a congressional check (legislation or power of the purse).', evidenceRequired: 'Names a specific check on the executive.' }
      ],
      modelAnswer: 'The best evaluation is B. An executive order is an informal power that must be grounded in existing statute or the Constitution, so it is not "legislating" without limits. Congress can respond by passing a new law that overrides or narrows the policy, by using its power of the purse to deny funding, or through oversight hearings; courts can also strike down an order that exceeds the president’s authority.',
      tags: ['executive-orders', 'informal-powers', 'checks-and-balances', 'stimulus'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-us-government-u3-due-process-incorporation-mcq-001', courseId: 'ap-us-government', courseName: 'AP U.S. Government and Politics',
      unitId: 'unit-3', unitName: 'Civil Liberties and Civil Rights', topicId: 'due-process-incorporation', topicName: 'Due Process and Selective Incorporation',
      skill: 'SCOTUS comparison', questionType: 'mcq', difficulty: 'hard',
      bloomLevel: 'analyze', estimatedTimeSeconds: 150,
      prompt: 'In Gideon v. Wainwright, the Supreme Court held that states must provide an attorney to defendants who cannot afford one. The Court reached this result by applying a provision of the Bill of Rights to the states. Which constitutional mechanism made this possible?',
      answerChoices: [
        { id: 'A', text: 'The supremacy clause of Article VI' },
        { id: 'B', text: 'Selective incorporation through the Fourteenth Amendment’s due process clause' },
        { id: 'C', text: 'The necessary and proper clause of Article I' },
        { id: 'D', text: 'The privileges and immunities clause of Article IV' }
      ],
      correctAnswer: 'B',
      explanation: 'Selective incorporation uses the Fourteenth Amendment’s due process clause to apply specific Bill of Rights protections—here the Sixth Amendment right to counsel—to state governments. Gideon incorporated that right against the states.',
      distractorRationales: {
        A: 'The supremacy clause makes federal law supreme but does not, by itself, apply the Bill of Rights to states.',
        B: '',
        C: 'The necessary and proper clause concerns Congress’s implied powers, not application of rights to states.',
        D: 'The Article IV privileges and immunities clause addresses how states treat out-of-state citizens, not incorporation.'
      },
      tags: ['gideon-v-wainwright', 'selective-incorporation', 'fourteenth-amendment', 'right-to-counsel'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-us-government-u4-public-opinion-polling-data-001', courseId: 'ap-us-government', courseName: 'AP U.S. Government and Politics',
      unitId: 'unit-4', unitName: 'American Political Ideologies and Beliefs', topicId: 'public-opinion-polling', topicName: 'Public Opinion and Polling',
      skill: 'data analysis', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 150,
      prompt: 'A poll reports that Candidate X leads Candidate Y, 51% to 49%, with a margin of error of plus or minus 3 percentage points at a 95% confidence level. Which conclusion is best supported?',
      answerChoices: [
        { id: 'A', text: 'Candidate X will certainly win because X leads in the poll.' },
        { id: 'B', text: 'The race is a statistical tie because the candidates’ ranges overlap within the margin of error.' },
        { id: 'C', text: 'The margin of error proves the poll used a biased sample.' },
        { id: 'D', text: 'A larger sample would guarantee that Candidate X’s lead disappears.' }
      ],
      correctAnswer: 'B',
      explanation: 'With a +/-3 point margin of error, X’s true support could range from 48% to 54% and Y’s from 46% to 52%. Because these ranges overlap, the 2-point lead is within sampling error, so the result is best described as a statistical tie.',
      distractorRationales: {
        A: 'A poll lead inside the margin of error does not establish certainty; sampling error makes the outcome too close to call.',
        B: '',
        C: 'Margin of error reflects random sampling variability, not bias; it does not prove a flawed sample.',
        D: 'A larger sample shrinks the margin of error but does not predetermine which candidate leads.'
      },
      tags: ['polling', 'margin-of-error', 'public-opinion', 'data-analysis'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN: SCOTUS-comparison FRQ (with rubric) ─────────────────────────
    {
      id: 'ap-us-government-u2-judiciary-frq-001', courseId: 'ap-us-government', courseName: 'AP U.S. Government and Politics',
      unitId: 'unit-2', unitName: 'Interactions Among Branches of Government', topicId: 'judiciary', topicName: 'The Federal Judiciary',
      skill: 'SCOTUS comparison', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 600,
      prompt: 'In Marbury v. Madison (1803), the Supreme Court established the power of judicial review. (a) Describe the constitutional principle the Court established in Marbury v. Madison. (b) Explain how judicial review affects the balance of power among the three branches. (c) Describe one way the legislative or executive branch can check the power of the federal courts.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Marbury established that courts may declare laws unconstitutional (judicial review), strengthening the judiciary as a co-equal branch, while elected branches retain checks such as appointments, confirmations, jurisdiction-setting, and constitutional amendment.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Describes judicial review as established in Marbury v. Madison.', evidenceRequired: 'States the courts’ power to declare laws/actions unconstitutional.' },
        { id: 'r2', pointValue: 1, criterion: 'Explains how judicial review affects interbranch balance of power.', evidenceRequired: 'Links the power to the judiciary acting as a check on Congress/the president.' },
        { id: 'r3', pointValue: 1, criterion: 'Describes a legislative or executive check on the courts.', evidenceRequired: 'Names a specific check (e.g., appointments, confirmation, amendment, jurisdiction).' }
      ],
      modelAnswer: '(a) In Marbury v. Madison the Court established judicial review—the authority of the federal courts to declare an act of Congress or the executive unconstitutional and therefore void. (b) Judicial review makes the judiciary a co-equal branch that can check the other two: by striking down laws or executive actions, the courts limit Congress and the president and reinforce the supremacy of the Constitution, shifting some interpretive power to unelected judges. (c) The elected branches can check the courts in several ways: the president nominates and the Senate confirms federal judges, Congress can propose constitutional amendments to overturn a ruling, and Congress can alter the appellate jurisdiction of the federal courts. Any one of these limits judicial power.',
      tags: ['marbury-v-madison', 'judicial-review', 'checks-and-balances', 'frq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── WRITTEN: Argument essay (with rubric) ────────────────────────────────
    {
      id: 'ap-us-government-u5-parties-interest-groups-argument-001', courseId: 'ap-us-government', courseName: 'AP U.S. Government and Politics',
      unitId: 'unit-5', unitName: 'Political Participation', topicId: 'parties-interest-groups', topicName: 'Political Parties and Interest Groups',
      skill: 'argumentation', questionType: 'argument-essay', difficulty: 'exam-level',
      bloomLevel: 'create', estimatedTimeSeconds: 1500,
      prompt: 'Develop an argument that explains whether interest groups strengthen or weaken representative democracy in the United States. In your essay, use at least one piece of evidence from a required foundational document (such as Federalist No. 10) and respond to an opposing perspective.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A strong response takes a defensible claim, supports it with relevant evidence (e.g., Madison’s treatment of factions in Federalist No. 10), uses reasoning to connect the evidence to the claim, and addresses a counterargument.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Claim/thesis: presents a defensible thesis responding to the prompt.', evidenceRequired: 'A clear position that interest groups strengthen or weaken democracy.' },
        { id: 'r2', pointValue: 2, criterion: 'Evidence: supports the thesis with accurate evidence including a required document.', evidenceRequired: 'Specific, relevant evidence with at least one foundational document such as Federalist No. 10.' },
        { id: 'r3', pointValue: 1, criterion: 'Reasoning: explains how the evidence supports the thesis.', evidenceRequired: 'Logical link between evidence and claim.' },
        { id: 'r4', pointValue: 1, criterion: 'Responds to an alternative perspective using refutation, concession, or rebuttal.', evidenceRequired: 'Acknowledges and addresses a counterargument.' }
      ],
      modelAnswer: 'Thesis: Interest groups strengthen representative democracy because they aggregate citizens’ voices and inform policymakers, even though they carry a risk of unequal influence. Evidence and reasoning: In Federalist No. 10, Madison argued that a large republic would contain many competing factions, so that no single group could dominate. Modern interest groups function as these factions: they channel diverse views to Congress and the bureaucracy, provide expertise during rule-making, and mobilize citizens between elections, which expands participation beyond voting. Because groups compete, their rivalry checks one another’s influence much as Madison predicted. Responding to an opposing perspective: Critics counter that wealthy interests with greater resources gain disproportionate access, distorting representation. This concern is real, but campaign-finance disclosure, the proliferation of competing groups, and the ability of the public to organize new groups all limit any single faction’s dominance. On balance, interest groups enlarge participation and information in ways that strengthen, rather than undermine, representative democracy.',
      tags: ['interest-groups', 'federalist-10', 'factions', 'argument-essay'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
