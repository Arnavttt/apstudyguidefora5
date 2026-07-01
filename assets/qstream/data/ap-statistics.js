/**
 * Five & A+ — AI Question Stream · Course data: AP Statistics
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE (ap-calculus-bc.js) shape exactly.
 * All questions are ORIGINAL, AP-style practice — not copied College Board items.
 * Numeric/statistical notation is written with MathJax LaTeX: \( ... \) inline and \[ ... \] display.
 * Dual-exported: browser registers into window.__FA_QSTREAM_DATA__, Node exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-statistics',
    displayName: 'AP Statistics',
    description: 'Introductory college-level statistics organized around exploring data, sampling and experimentation, probability and random variables, sampling distributions, and statistical inference for proportions, means, chi-square, and regression slopes.',
    category: 'stem',
    allowedQuestionTypes: ['mcq', 'calculation', 'data-analysis', 'graph-interpretation', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'data-analysis', 'frq'],
    skills: [
      'selecting methods',
      'data representations',
      'statistical calculations',
      'interpreting results',
      'statistical argumentation',
      'probability reasoning'
    ],
    bigIdeas: ['Variation and Distribution', 'Patterns and Uncertainty', 'Data-Based Predictions, Decisions, and Conclusions'],
    units: [
      { id: 'unit-1', name: 'Exploring One-Variable Data', examWeight: '15-23%', description: 'Describing, summarizing, and comparing distributions of a single quantitative or categorical variable, including the normal model.',
        topics: [
          { id: 'summarizing-distributions', name: 'Summarizing Distributions', description: 'Center, shape, spread, and unusual features (outliers) for one-variable data using appropriate graphs and statistics.', skills: ['data representations'] },
          { id: 'describing-spread', name: 'Describing Variability', description: 'Range, interquartile range, standard deviation, and the effect of outliers and transformations on measures of spread.', skills: ['statistical calculations'] },
          { id: 'normal-distribution', name: 'The Normal Distribution', description: 'Using the empirical rule and z-scores to find proportions and percentiles for approximately normal data.', skills: ['statistical calculations', 'interpreting results'] }
        ] },
      { id: 'unit-2', name: 'Exploring Two-Variable Data', examWeight: '5-7%', description: 'Analyzing relationships between two quantitative variables with scatterplots, correlation, and least-squares regression.',
        topics: [
          { id: 'scatterplots-correlation', name: 'Scatterplots and Correlation', description: 'Describing form, direction, and strength of association and interpreting the correlation coefficient r.', skills: ['data representations', 'interpreting results'] },
          { id: 'least-squares-regression', name: 'Least-Squares Regression', description: 'Fitting, interpreting, and using a least-squares regression line for prediction, including slope and intercept meaning.', skills: ['statistical calculations', 'interpreting results'] },
          { id: 'residuals', name: 'Residuals and Model Fit', description: 'Using residuals and residual plots to assess the appropriateness of a linear model and interpret r-squared.', skills: ['data representations', 'statistical argumentation'] }
        ] },
      { id: 'unit-3', name: 'Collecting Data', examWeight: '12-15%', description: 'Principles of sampling, experimental design, and identifying sources of bias that affect the scope of conclusions.',
        topics: [
          { id: 'sampling-methods', name: 'Sampling Methods', description: 'Simple random, stratified, cluster, and systematic sampling and how each affects representativeness.', skills: ['selecting methods'] },
          { id: 'experiments-observational', name: 'Experiments and Observational Studies', description: 'Distinguishing experiments from observational studies and the role of control, randomization, and replication.', skills: ['selecting methods', 'statistical argumentation'] },
          { id: 'bias-sources', name: 'Sources of Bias', description: 'Recognizing undercoverage, nonresponse, response, and voluntary-response bias and their effect on validity.', skills: ['statistical argumentation'] }
        ] },
      { id: 'unit-4', name: 'Probability, Random Variables, and Distributions', examWeight: '10-20%', description: 'Probability rules, random variables, and the binomial and geometric distributions.',
        topics: [
          { id: 'probability-rules', name: 'Probability Rules', description: 'Addition, complement, multiplication, and conditional probability, including independence and mutually exclusive events.', skills: ['probability reasoning'] },
          { id: 'random-variables', name: 'Random Variables', description: 'Mean (expected value) and standard deviation of discrete random variables and combinations of random variables.', skills: ['statistical calculations', 'probability reasoning'] },
          { id: 'binomial-geometric', name: 'Binomial and Geometric Distributions', description: 'Modeling counts and waiting times with binomial and geometric random variables and computing their probabilities.', skills: ['statistical calculations', 'probability reasoning'] }
        ] },
      { id: 'unit-5', name: 'Sampling Distributions', examWeight: '7-12%', description: 'The behavior of sample statistics as random variables, including the Central Limit Theorem.',
        topics: [
          { id: 'sampling-dist-proportions', name: 'Sampling Distributions for Proportions', description: 'Mean, standard deviation, and shape of the sampling distribution of a sample proportion.', skills: ['statistical calculations', 'probability reasoning'] },
          { id: 'sampling-dist-means', name: 'Sampling Distributions for Means', description: 'Mean, standard deviation, and shape of the sampling distribution of a sample mean.', skills: ['statistical calculations', 'probability reasoning'] },
          { id: 'clt', name: 'The Central Limit Theorem', description: 'How sample size drives the approximate normality of the sampling distribution of a mean.', skills: ['interpreting results', 'statistical argumentation'] }
        ] },
      { id: 'unit-6', name: 'Inference for Categorical Data: Proportions', examWeight: '12-15%', description: 'Confidence intervals and significance tests for one and two population proportions.',
        topics: [
          { id: 'confidence-intervals-proportions', name: 'Confidence Intervals for Proportions', description: 'Constructing and interpreting one- and two-sample z-intervals for population proportions.', skills: ['statistical calculations', 'interpreting results'] },
          { id: 'significance-tests-proportions', name: 'Significance Tests for Proportions', description: 'Carrying out and interpreting one- and two-sample z-tests for population proportions.', skills: ['selecting methods', 'statistical argumentation'] }
        ] },
      { id: 'unit-7', name: 'Inference for Quantitative Data: Means', examWeight: '10-18%', description: 'Confidence intervals and significance tests for one and two population means using t-procedures.',
        topics: [
          { id: 't-intervals-means', name: 'Confidence Intervals for Means', description: 'Constructing and interpreting one- and two-sample t-intervals, including paired data.', skills: ['statistical calculations', 'interpreting results'] },
          { id: 't-tests-means', name: 'Significance Tests for Means', description: 'Carrying out and interpreting one- and two-sample t-tests, including paired data.', skills: ['selecting methods', 'statistical argumentation'] }
        ] },
      { id: 'unit-8', name: 'Inference for Categorical Data: Chi-Square', examWeight: '2-5%', description: 'Chi-square tests for goodness of fit, homogeneity, and independence.',
        topics: [
          { id: 'chi-square-gof', name: 'Chi-Square Goodness-of-Fit Test', description: 'Comparing an observed distribution of one categorical variable to an expected distribution.', skills: ['statistical calculations', 'statistical argumentation'] },
          { id: 'chi-square-independence', name: 'Chi-Square Tests for Independence and Homogeneity', description: 'Testing association between two categorical variables using a two-way table.', skills: ['selecting methods', 'interpreting results'] }
        ] },
      { id: 'unit-9', name: 'Inference for Quantitative Data: Slopes', examWeight: '2-5%', description: 'Confidence intervals and significance tests for the slope of a least-squares regression line.',
        topics: [
          { id: 'inference-regression-slope', name: 'Inference for the Slope of a Regression Line', description: 'Constructing t-intervals and carrying out t-tests for the population slope using computer output.', skills: ['statistical calculations', 'interpreting results'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq'], timingMinutes: 90, weight: '50%', notes: '40 questions covering all units; a graphing calculator is permitted throughout.' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'calculation', 'data-analysis', 'graph-interpretation', 'short-answer'], timingMinutes: 90, weight: '50%', notes: '6 questions scored by rubric: five focused free-response items plus one longer Investigative Task.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'stat-001', courseId: 'ap-statistics', courseName: 'AP Statistics',
      unitId: 'unit-1', unitName: 'Exploring One-Variable Data', topicId: 'summarizing-distributions', topicName: 'Summarizing Distributions',
      skill: 'data representations', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'A distribution of home prices in a town is strongly skewed to the right by a few very expensive houses. Which pair of measures best describes the center and spread of this distribution?',
      answerChoices: [
        { id: 'A', text: 'Mean and standard deviation' },
        { id: 'B', text: 'Median and interquartile range (IQR)' },
        { id: 'C', text: 'Mode and range' },
        { id: 'D', text: 'Mean and range' }
      ],
      correctAnswer: 'B',
      explanation: 'When a distribution is strongly skewed or has outliers, the median and IQR are resistant measures of center and spread, so they describe the typical value and variability better than the mean and standard deviation, which are pulled toward the tail.',
      distractorRationales: {
        A: 'The mean and standard deviation are not resistant; a few very expensive houses pull both upward and misrepresent a skewed distribution.',
        B: '',
        C: 'The mode identifies only the most common value and the range depends entirely on the two extremes, so neither summarizes a skewed distribution well.',
        D: 'The mean is inflated by the high outliers and the range is determined by the extremes, so this pair is heavily distorted by skew.'
      },
      tags: ['one-variable', 'skewness', 'resistant-measures'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    {
      id: 'stat-002', courseId: 'ap-statistics', courseName: 'AP Statistics',
      unitId: 'unit-2', unitName: 'Exploring Two-Variable Data', topicId: 'scatterplots-correlation', topicName: 'Scatterplots and Correlation',
      skill: 'interpreting results', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'A scatterplot of two quantitative variables shows a strong, negative, linear association. Which value is the most reasonable correlation coefficient \\( r \\) for this relationship?',
      answerChoices: [
        { id: 'A', text: '\\( r = -0.92 \\)' },
        { id: 'B', text: '\\( r = -0.15 \\)' },
        { id: 'C', text: '\\( r = 0.92 \\)' },
        { id: 'D', text: '\\( r = 1.75 \\)' }
      ],
      correctAnswer: 'A',
      explanation: 'A strong negative linear association has a correlation close to negative one. Only \\( r = -0.92 \\) is both negative (matching the direction) and close to \\(-1\\) (matching the strength), so it is the most reasonable value.',
      distractorRationales: {
        A: '',
        B: 'A value of \\(-0.15\\) is negative but very close to \\(0\\), indicating a weak association, not a strong one.',
        C: 'A value of \\(0.92\\) is strong but positive, so it describes the wrong direction for a negative association.',
        D: 'Correlation is always between \\(-1\\) and \\(1\\), so \\( r = 1.75 \\) is impossible.'
      },
      tags: ['two-variable', 'correlation', 'scatterplot'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    {
      id: 'stat-003', courseId: 'ap-statistics', courseName: 'AP Statistics',
      unitId: 'unit-3', unitName: 'Collecting Data', topicId: 'experiments-observational', topicName: 'Experiments and Observational Studies',
      skill: 'selecting methods', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 75,
      prompt: 'Researchers randomly assign volunteers to take either a new medication or a placebo and then compare recovery times. What is the primary purpose of randomly assigning the volunteers to the two groups?',
      answerChoices: [
        { id: 'A', text: 'To allow the results to be generalized to the entire population' },
        { id: 'B', text: 'To create groups that are roughly balanced with respect to other variables, so a cause-and-effect conclusion is possible' },
        { id: 'C', text: 'To guarantee that the two groups are exactly the same size' },
        { id: 'D', text: 'To eliminate the need for a control group' }
      ],
      correctAnswer: 'B',
      explanation: 'Random assignment tends to balance both known and unknown confounding variables across the treatment groups, so any observed difference in recovery time can be attributed to the treatment, allowing a cause-and-effect conclusion.',
      distractorRationales: {
        A: 'Generalizing to a population comes from random sampling of who is studied, not from random assignment of treatments.',
        B: '',
        C: 'Random assignment does not force equal group sizes; that is controlled separately by the design.',
        D: 'The placebo group is the control group; random assignment supports its use rather than eliminating the need for it.'
      },
      tags: ['experiment', 'random-assignment', 'causation'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'stat-004', courseId: 'ap-statistics', courseName: 'AP Statistics',
      unitId: 'unit-1', unitName: 'Exploring One-Variable Data', topicId: 'normal-distribution', topicName: 'The Normal Distribution',
      skill: 'statistical calculations', questionType: 'calculation', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 150,
      prompt: 'Scores on a standardized test are approximately normal with mean \\( \\mu = 500 \\) and standard deviation \\( \\sigma = 100 \\). What z-score corresponds to a test score of \\( 640 \\)? Enter a numerical value.',
      correctAnswer: '1.4',
      numericTolerance: 0.05,
      acceptableAnswers: ['1.4', '1.40', '1.4000'],
      explanation: 'A z-score measures how many standard deviations a value is from the mean: \\( z = \\frac{x - \\mu}{\\sigma} = \\frac{640 - 500}{100} = \\frac{140}{100} = 1.4 \\). The score of 640 is 1.4 standard deviations above the mean.',
      tags: ['normal-distribution', 'z-score', 'standardizing'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    {
      id: 'stat-005', courseId: 'ap-statistics', courseName: 'AP Statistics',
      unitId: 'unit-4', unitName: 'Probability, Random Variables, and Distributions', topicId: 'binomial-geometric', topicName: 'Binomial and Geometric Distributions',
      skill: 'statistical calculations', questionType: 'calculation', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 180,
      prompt: 'A fair coin is flipped \\( 10 \\) times. Let \\( X \\) be the number of heads, so \\( X \\) is binomial with \\( n = 10 \\) and \\( p = 0.5 \\). What is the expected number of heads, \\( E(X) \\)? Enter a numerical value.',
      correctAnswer: '5',
      numericTolerance: 0.01,
      acceptableAnswers: ['5', '5.0', '5.00'],
      explanation: 'For a binomial random variable the mean (expected value) is \\( E(X) = np \\). Substituting the given values, \\( E(X) = 10 \\times 0.5 = 5 \\). Over many repetitions of ten flips, the long-run average number of heads is 5.',
      tags: ['binomial', 'expected-value', 'random-variable'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    {
      id: 'stat-006', courseId: 'ap-statistics', courseName: 'AP Statistics',
      unitId: 'unit-2', unitName: 'Exploring Two-Variable Data', topicId: 'least-squares-regression', topicName: 'Least-Squares Regression',
      skill: 'interpreting results', questionType: 'data-analysis', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 180,
      prompt: 'The table shows study hours and exam scores for four students. A least-squares regression line predicting exam score from study hours is \\( \\hat{y} = 60 + 5x \\), where \\( x \\) is hours studied. Interpret the slope of this line in the context of the problem.',
      dataTable: { columns: ['Hours (x)', 'Score (y)'], rows: [['1', '66'], ['2', '69'], ['3', '76'], ['4', '79']] },
      correctAnswer: 'For each additional hour studied, the predicted exam score increases by 5 points.',
      acceptableAnswers: ['5 points per hour', 'increases by 5', 'predicted score increases by 5 points per hour'],
      explanation: 'In a least-squares regression line \\( \\hat{y} = a + bx \\), the slope \\( b \\) gives the predicted change in the response for each one-unit increase in the explanatory variable. Here \\( b = 5 \\), so each additional hour of study is associated with a predicted increase of 5 points in exam score.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Identifies the slope as a predicted change per one-unit increase in x.', evidenceRequired: 'Describes the slope as change in predicted score per additional hour.' },
        { id: 'r2', pointValue: 1, criterion: 'States the correct numeric slope with direction and context.', evidenceRequired: 'Notes the predicted score increases by 5 points per additional hour studied.' }
      ],
      modelAnswer: 'The slope of the least-squares line is 5. In context, this means that for each additional hour a student studies, the model predicts the exam score will increase by about 5 points. The slope describes a predicted change, not a guaranteed change, because the relationship is a statistical trend rather than an exact rule.',
      tags: ['regression', 'slope-interpretation', 'two-variable'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'stat-007', courseId: 'ap-statistics', courseName: 'AP Statistics',
      unitId: 'unit-5', unitName: 'Sampling Distributions', topicId: 'sampling-dist-means', topicName: 'Sampling Distributions for Means',
      skill: 'statistical calculations', questionType: 'calculation', difficulty: 'hard',
      bloomLevel: 'apply', estimatedTimeSeconds: 210,
      prompt: 'A population has mean \\( \\mu = 80 \\) and standard deviation \\( \\sigma = 12 \\). For random samples of size \\( n = 36 \\), what is the standard deviation of the sampling distribution of the sample mean \\( \\bar{x} \\) (the standard error)? Enter a numerical value.',
      correctAnswer: '2',
      numericTolerance: 0.01,
      acceptableAnswers: ['2', '2.0', '2.00'],
      explanation: 'The standard deviation of the sampling distribution of the sample mean is \\( \\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}} \\). Substituting gives \\( \\frac{12}{\\sqrt{36}} = \\frac{12}{6} = 2 \\). Larger samples produce a smaller standard error because sample means vary less than individual observations.',
      tags: ['sampling-distribution', 'standard-error', 'means'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    {
      id: 'stat-008', courseId: 'ap-statistics', courseName: 'AP Statistics',
      unitId: 'unit-6', unitName: 'Inference for Categorical Data: Proportions', topicId: 'significance-tests-proportions', topicName: 'Significance Tests for Proportions',
      skill: 'statistical argumentation', questionType: 'mcq', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 180,
      prompt: 'A one-sample z-test for a proportion is conducted with hypotheses \\( H_0: p = 0.30 \\) versus \\( H_a: p \\ne 0.30 \\), producing a P-value of \\( 0.02 \\). Using a significance level of \\( \\alpha = 0.05 \\), which conclusion is correct?',
      answerChoices: [
        { id: 'A', text: 'Because the P-value \\( 0.02 < 0.05 \\), reject \\( H_0 \\); there is convincing evidence that the true proportion differs from 0.30.' },
        { id: 'B', text: 'Because the P-value \\( 0.02 < 0.05 \\), accept \\( H_0 \\); the true proportion equals 0.30.' },
        { id: 'C', text: 'Because the P-value \\( 0.02 < 0.05 \\), fail to reject \\( H_0 \\); there is no evidence of a difference.' },
        { id: 'D', text: 'The P-value of 0.02 is the probability that \\( H_0 \\) is true, so \\( H_0 \\) is almost certainly false.' }
      ],
      correctAnswer: 'A',
      explanation: 'When the P-value is less than the significance level \\( \\alpha \\), we reject \\( H_0 \\). Since \\( 0.02 < 0.05 \\), we reject the null hypothesis and conclude there is convincing statistical evidence that the true proportion is different from 0.30.',
      distractorRationales: {
        A: '',
        B: 'We never "accept" the null hypothesis, and rejecting it means the evidence points against \\( p = 0.30 \\), not toward it.',
        C: 'Failing to reject would require a P-value larger than \\( \\alpha \\); here \\( 0.02 < 0.05 \\), so we do reject \\( H_0 \\).',
        D: 'The P-value is the probability of a result at least as extreme as observed assuming \\( H_0 \\) is true, not the probability that \\( H_0 \\) is true.'
      },
      tags: ['significance-test', 'p-value', 'proportions'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    // ── 1+ WRITTEN (FRQ with rubric) ─────────────────────────────────────────
    {
      id: 'stat-009', courseId: 'ap-statistics', courseName: 'AP Statistics',
      unitId: 'unit-7', unitName: 'Inference for Quantitative Data: Means', topicId: 't-intervals-means', topicName: 'Confidence Intervals for Means',
      skill: 'statistical argumentation', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 600,
      prompt: 'A researcher takes a random sample of \\( n = 25 \\) adult customers and records the amount each spends. The sample mean is \\( \\bar{x} = \\$42 \\) with sample standard deviation \\( s = \\$10 \\). (a) State the conditions required to construct a one-sample t-interval for the mean amount spent. (b) A 95% confidence interval is computed to be \\( (\\$37.87, \\$46.13) \\). Interpret this interval in context. (c) Explain what "95% confidence" means for this procedure.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A one-sample t-interval requires a random sample, independent observations, and an approximately normal sampling distribution of the mean; the interval estimates the true mean with a stated confidence level referring to the long-run capture rate of the procedure.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'States the random condition and independence (10% condition).', evidenceRequired: 'Identifies the sample as random and observations as independent.' },
        { id: 'r2', pointValue: 1, criterion: 'States the normality/large-sample condition for a t-interval.', evidenceRequired: 'Notes population is approximately normal or sample size is large enough (with no strong skew/outliers).' },
        { id: 'r3', pointValue: 1, criterion: 'Interprets the confidence interval in context.', evidenceRequired: 'States we are 95% confident the true mean amount spent is between $37.87 and $46.13.' },
        { id: 'r4', pointValue: 1, criterion: 'Correctly interprets the confidence level as a long-run capture rate.', evidenceRequired: 'Explains that in about 95% of repeated samples the interval would contain the true mean.' }
      ],
      modelAnswer: '(a) Conditions: (1) Random — the customers were selected as a random sample. (2) Independence — observations are independent; because sampling is without replacement, the population of adult customers should be at least \\( 10 \\times 25 = 250 \\) (the 10% condition). (3) Normal/large sample — the sampling distribution of \\( \\bar{x} \\) should be approximately normal, which is reasonable if the population is roughly normal or the sample shows no strong skew or outliers. (b) We are 95% confident that the true mean amount spent by all adult customers is between $37.87 and $46.13. (c) The confidence level describes the procedure: if we repeatedly took random samples of size 25 and built a 95% confidence interval each time, about 95% of those intervals would capture the true population mean amount spent.',
      tags: ['t-interval', 'confidence-interval', 'inference-means'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    },
    // ── Extra data-analysis written question (bonus coverage) ────────────────
    {
      id: 'stat-010', courseId: 'ap-statistics', courseName: 'AP Statistics',
      unitId: 'unit-8', unitName: 'Inference for Categorical Data: Chi-Square', topicId: 'chi-square-gof', topicName: 'Chi-Square Goodness-of-Fit Test',
      skill: 'statistical calculations', questionType: 'data-analysis', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 300,
      prompt: 'A store owner claims that customers arrive equally often on Monday, Tuesday, Wednesday, and Thursday. Over one week, the observed counts are shown in the table, and a total of 200 customers were recorded. Under the owner\'s claim of equal arrival, state the expected count for each day and identify the degrees of freedom for a chi-square goodness-of-fit test.',
      dataTable: { columns: ['Day', 'Observed count'], rows: [['Monday', '40'], ['Tuesday', '55'], ['Wednesday', '60'], ['Thursday', '45']] },
      correctAnswer: 'Each expected count is 50, and the degrees of freedom is 3.',
      acceptableAnswers: ['expected 50, df = 3', '50 each, 3 df', 'expected count 50 and df 3'],
      explanation: 'Under the claim of equal arrival across 4 days, each expected count is the total divided evenly: \\( 200 \\div 4 = 50 \\). For a goodness-of-fit test the degrees of freedom equal the number of categories minus one: \\( 4 - 1 = 3 \\).',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Computes the expected count under the equal-arrival claim.', evidenceRequired: 'States each expected count is \\( 200/4 = 50 \\).' },
        { id: 'r2', pointValue: 1, criterion: 'Identifies the correct degrees of freedom.', evidenceRequired: 'States df = number of categories minus one = \\( 4 - 1 = 3 \\).' }
      ],
      modelAnswer: 'If customers arrive equally often across the four days, then under the null hypothesis each day is expected to have the same count. The expected count for every day is \\( \\frac{200}{4} = 50 \\) customers. For a chi-square goodness-of-fit test with 4 categories, the degrees of freedom are \\( 4 - 1 = 3 \\). These expected counts (all at least 5) also satisfy the large-counts condition needed for the chi-square procedure.',
      tags: ['chi-square', 'goodness-of-fit', 'expected-counts'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-07-01T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
