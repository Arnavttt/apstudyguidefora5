/**
 * Five & A+ — AI Question Stream · TYPE DEFINITIONS (JSDoc)
 * ---------------------------------------------------------------------------
 * This is a vanilla-JS static site (no TypeScript/build step), so the system's
 * "strict types" live here as JSDoc @typedefs. They document the exact runtime
 * shapes enforced by assets/qstream/core.js (validateQuestion / legalCheck),
 * produced by assets/qstream/data/ap-*.js and api/question.js, and consumed by
 * assets/question-stream.js. Editors and `tsc --checkJs` can type-check against
 * these without changing the shipped runtime.
 *
 * No runtime code — importing this file is a no-op.
 */

/** @typedef {'ap-art-history'|'ap-biology'|'ap-calculus-ab'|'ap-calculus-bc'|'ap-chemistry'|'ap-comparative-government'|'ap-computer-science-a'|'ap-computer-science-principles'|'ap-english-language'|'ap-english-literature'|'ap-environmental-science'|'ap-european-history'|'ap-human-geography'|'ap-macroeconomics'|'ap-microeconomics'|'ap-music-theory'|'ap-physics-1-2'|'ap-physics-c-electricity-magnetism'|'ap-physics-c-mechanics'|'ap-precalculus'|'ap-psychology'|'ap-statistics'|'ap-us-government'|'ap-us-history'|'ap-world-history-modern'} APCourseId */

/** @typedef {'mcq'|'multi-select'|'short-answer'|'frq'|'dbq'|'leq'|'rhetorical-analysis'|'literary-analysis'|'synthesis'|'argument-essay'|'coding'|'code-tracing'|'data-analysis'|'graph-interpretation'|'calculation'|'lab-design'|'visual-analysis'|'art-identification'|'music-theory-analysis'|'stimulus-based'} QuestionType */

/** @typedef {'easy'|'medium'|'hard'|'exam-level'} QuestionDifficulty */
/** @typedef {'remember'|'understand'|'apply'|'analyze'|'evaluate'|'create'} BloomLevel */
/** @typedef {'practice'|'exam'|'review'|'spaced'} StreamMode */
/** @typedef {'ai-generated'|'seeded'|'reviewed'} SourceType */
/** @typedef {'approved'|'needs-review'|'rejected'} ReviewStatus */
/** @typedef {'original-practice'|'needs-review'|'rejected'} LegalStatus */

/**
 * @typedef {Object} APTopic
 * @property {string} id
 * @property {string} name
 * @property {string} [description]
 * @property {string[]} [skills]
 */

/**
 * @typedef {Object} APUnit
 * @property {string} id
 * @property {string} name
 * @property {string} [examWeight]
 * @property {string} [description]
 * @property {APTopic[]} topics
 */

/**
 * @typedef {Object} ExamSection
 * @property {string} name
 * @property {string} [type]
 * @property {number|string} [questions]
 * @property {string} [time]
 * @property {string} [weight]
 */

/**
 * @typedef {Object} APCourseFramework
 * @property {APCourseId} courseId
 * @property {string} displayName
 * @property {string} description
 * @property {'stem'|'computer-science'|'english'|'history-social-science'|'arts'} category
 * @property {QuestionType[]} allowedQuestionTypes
 * @property {QuestionType[]} defaultQuestionTypes
 * @property {string[]} skills
 * @property {string[]} [bigIdeas]
 * @property {APUnit[]} units
 * @property {{ sections: ExamSection[] }} examStructure
 */

/**
 * @typedef {Object} AnswerChoice
 * @property {string} id   - 'A'|'B'|'C'|'D'(|'E')
 * @property {string} text
 */

/**
 * @typedef {Object} RubricRow
 * @property {string} id
 * @property {number} pointValue
 * @property {string} criterion
 * @property {string} [evidenceRequired]
 */

/**
 * @typedef {Object} DataTable
 * @property {string[]} columns
 * @property {Array<Array<string|number>>} rows
 */

/**
 * The core question shape. Enforced by FAQS.validateQuestion(q, framework).
 * @typedef {Object} APQuestion
 * @property {string} id
 * @property {APCourseId} courseId
 * @property {string} courseName
 * @property {string} unitId
 * @property {string} unitName
 * @property {string} topicId
 * @property {string} topicName
 * @property {string} skill
 * @property {QuestionType} questionType
 * @property {QuestionDifficulty} difficulty
 * @property {BloomLevel} bloomLevel
 * @property {number} estimatedTimeSeconds
 * @property {string} prompt
 * @property {string} [stimulus]
 * @property {string} [imagePrompt]
 * @property {string} [imageUrl]
 * @property {string} [codeBlock]
 * @property {string} [musicNotationPlaceholder]
 * @property {string} [graphDescription]
 * @property {DataTable} [dataTable]
 * @property {AnswerChoice[]} [answerChoices]
 * @property {string} correctAnswer
 * @property {string[]} [acceptableAnswers]
 * @property {number} [numericTolerance]
 * @property {RubricRow[]} [rubric]
 * @property {string} explanation
 * @property {Object.<string,string>} [distractorRationales]
 * @property {string} [modelAnswer]
 * @property {string[]} tags
 * @property {SourceType} sourceType
 * @property {ReviewStatus} reviewStatus
 * @property {LegalStatus} legalStatus
 * @property {string[]} [legalReviewNotes]
 * @property {string} createdAt
 */

/**
 * Output of FAQS.evaluateLocally() and api/question.js `evaluate`.
 * @typedef {Object} EvaluationResult
 * @property {boolean} isCorrect
 * @property {number} [score]
 * @property {number} [maxScore]
 * @property {number} [percentScore]
 * @property {string} correctAnswer
 * @property {string} explanation
 * @property {string} [modelAnswer]
 * @property {string[]} strengths
 * @property {string[]} improvements
 * @property {Array<{rubricRowId:string,earned:number,possible:number,comment:string}>} [rubricBreakdown]
 * @property {string} nextRecommendation
 * @property {boolean} [selfGraded]
 * @property {string} [provider]
 */

/**
 * @typedef {Object} QuestionAttempt
 * @property {string} id
 * @property {string} questionId
 * @property {APCourseId} courseId
 * @property {string} unitId
 * @property {string} topicId
 * @property {string} answer
 * @property {boolean} isCorrect
 * @property {number} [score]
 * @property {number} [maxScore]
 * @property {number} timeSpentSeconds
 * @property {string} submittedAt
 * @property {EvaluationResult} feedback
 */

/**
 * @typedef {Object} TopicMastery
 * @property {APCourseId} courseId
 * @property {string} unitId
 * @property {string} topicId
 * @property {number} mastery      - clamped 0..100
 * @property {number} attempts
 * @property {number} correct
 * @property {number} incorrect
 * @property {string} [lastAttemptAt]
 * @property {string} [nextReviewAt]
 */

/**
 * @typedef {Object} ReviewItem
 * @property {string} id
 * @property {APQuestion} question
 * @property {string} addedAt
 * @property {string} reason
 * @property {number} priority
 * @property {number} attempts
 * @property {number} correctReviews
 * @property {string} nextReviewAt
 */

/**
 * @typedef {Object} StreamState
 * @property {APCourseId} courseId
 * @property {StreamMode} mode
 * @property {string} selectedUnitId
 * @property {string} selectedTopicId
 * @property {'adaptive'|QuestionDifficulty} difficultyPref
 * @property {QuestionDifficulty} currentDifficulty
 * @property {string[]} previousQuestionIds
 * @property {boolean[]} recentResults
 * @property {string[]} recentTopicIds
 * @property {number} answeredCount
 * @property {number} correctCount
 * @property {number} streak
 * @property {?{answered:number,correct:number,items:Array}} examSet
 */

/** @typedef {'ollama'|'anthropic'|'openai'|'seeded'|'cache'|'review'} QuestionSource */

if (typeof module !== 'undefined' && module.exports) { module.exports = {}; }
