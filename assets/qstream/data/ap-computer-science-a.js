/**
 * Five & A+ — AI Question Stream · Course data: AP Computer Science A
 * Framework (units/topics/skills/exam structure) + original seeded question bank.
 *
 * Mirrors the GOLD TEMPLATE (ap-biology.js) exact shape.
 * Language is JAVA. All questions are ORIGINAL, AP-style practice — not copied
 * College Board items. Dual-exported: browser registers into
 * window.__FA_QSTREAM_DATA__, Node exports via module.exports.
 */
(function () {
  'use strict';

  var framework = {
    courseId: 'ap-computer-science-a',
    displayName: 'AP Computer Science A',
    description: 'Object-oriented program design and implementation in Java, emphasizing problem solving, code tracing, data structures, and algorithmic reasoning.',
    category: 'computer-science',
    allowedQuestionTypes: ['mcq', 'coding', 'code-tracing', 'short-answer', 'frq'],
    defaultQuestionTypes: ['mcq', 'code-tracing', 'coding'],
    skills: [
      'program design',
      'code implementation',
      'code tracing',
      'debugging',
      'object-oriented programming',
      'data structures',
      'algorithms'
    ],
    bigIdeas: ['Modularity', 'Variables', 'Control', 'Impact of Computing'],
    units: [
      { id: 'unit-1', name: 'Primitive Types', examWeight: '2.5-5%', description: 'Variables, primitive data types, expressions, and arithmetic.',
        topics: [
          { id: 'variables-types', name: 'Variables and Data Types', description: 'Declaring int, double, and boolean variables and assigning values.', skills: ['program design'] },
          { id: 'arithmetic-expressions', name: 'Arithmetic Expressions', description: 'Operator precedence, integer division, modulus, and mixed-type arithmetic.', skills: ['code implementation'] },
          { id: 'casting-precision', name: 'Casting and Precision', description: 'Explicit and implicit casts between int and double and rounding behavior.', skills: ['code tracing'] }
        ] },
      { id: 'unit-2', name: 'Using Objects', examWeight: '5-7.5%', description: 'Creating objects, calling methods, and using library classes.',
        topics: [
          { id: 'objects-constructors', name: 'Objects and Constructors', description: 'Instantiating objects with new and passing arguments to constructors.', skills: ['object-oriented programming'] },
          { id: 'string-methods', name: 'String Methods', description: 'Using length, substring, indexOf, and equals on String objects.', skills: ['code implementation'] },
          { id: 'math-wrapper', name: 'Math Class and Wrappers', description: 'Calling static Math methods and using Integer/Double wrapper behavior.', skills: ['code tracing'] }
        ] },
      { id: 'unit-3', name: 'Boolean Expressions and if Statements', examWeight: '15-17.5%', description: 'Conditional logic, boolean operators, and selection.',
        topics: [
          { id: 'if-else', name: 'if-else Selection', description: 'Building branching logic with if, else if, and else.', skills: ['program design'] },
          { id: 'compound-booleans', name: 'Compound Boolean Logic', description: 'Combining conditions with &&, ||, ! and short-circuit evaluation.', skills: ['code tracing'] },
          { id: 'de-morgan', name: 'Equivalent Boolean Expressions', description: 'Applying De Morgan laws to simplify or negate conditions.', skills: ['debugging'] }
        ] },
      { id: 'unit-4', name: 'Iteration', examWeight: '17.5-22.5%', description: 'while loops, for loops, nested loops, and algorithm analysis.',
        topics: [
          { id: 'while-loops', name: 'while Loops', description: 'Designing loops with correct initialization, condition, and update.', skills: ['code implementation'] },
          { id: 'for-loops', name: 'for Loops', description: 'Counting loops and traversing ranges with for statements.', skills: ['code tracing'] },
          { id: 'nested-loops', name: 'Nested Loops', description: 'Reasoning about loops inside loops and total iteration counts.', skills: ['algorithms'] }
        ] },
      { id: 'unit-5', name: 'Writing Classes', examWeight: '5-7.5%', description: 'Designing classes with instance variables, constructors, and methods.',
        topics: [
          { id: 'instance-vars', name: 'Instance Variables and Encapsulation', description: 'Private fields, accessor and mutator methods, and data hiding.', skills: ['object-oriented programming'] },
          { id: 'constructors-this', name: 'Constructors and this', description: 'Writing constructors and using this to disambiguate fields.', skills: ['program design'] },
          { id: 'static-members', name: 'Static Variables and Methods', description: 'Class-level data and behavior shared across all instances.', skills: ['code implementation'] }
        ] },
      { id: 'unit-6', name: 'Array', examWeight: '10-15%', description: 'One-dimensional arrays, traversal, and common algorithms.',
        topics: [
          { id: 'array-basics', name: 'Array Creation and Access', description: 'Declaring arrays, indexing, and the length field.', skills: ['code implementation'] },
          { id: 'array-traversal', name: 'Array Traversal Algorithms', description: 'Standard loops and enhanced for loops to find sums, max, and counts.', skills: ['algorithms'] }
        ] },
      { id: 'unit-7', name: 'ArrayList', examWeight: '2.5-7.5%', description: 'Dynamic lists, methods, and traversal pitfalls.',
        topics: [
          { id: 'arraylist-methods', name: 'ArrayList Methods', description: 'Using add, get, set, remove, and size on ArrayList objects.', skills: ['code implementation'] },
          { id: 'arraylist-traversal', name: 'ArrayList Traversal and Removal', description: 'Safely adding and removing during traversal to avoid skipping.', skills: ['debugging'] }
        ] },
      { id: 'unit-8', name: '2D Array', examWeight: '7.5-10%', description: 'Two-dimensional arrays and row-major traversal.',
        topics: [
          { id: 'twod-access', name: '2D Array Access', description: 'Indexing [row][col] and reasoning about dimensions.', skills: ['code tracing'] },
          { id: 'twod-traversal', name: 'Nested 2D Traversal', description: 'Nested loops to process every element in row-major order.', skills: ['algorithms'] }
        ] },
      { id: 'unit-9', name: 'Inheritance', examWeight: '5-10%', description: 'Subclasses, super, overriding, and polymorphism.',
        topics: [
          { id: 'subclass-super', name: 'Subclasses and super', description: 'Extending a class and calling superclass constructors and methods.', skills: ['object-oriented programming'] },
          { id: 'overriding-poly', name: 'Overriding and Polymorphism', description: 'Method overriding and dynamic dispatch at runtime.', skills: ['program design'] }
        ] },
      { id: 'unit-10', name: 'Recursion', examWeight: '5-7.5%', description: 'Recursive methods, base cases, and recursive tracing.',
        topics: [
          { id: 'recursion-basics', name: 'Base Case and Recursive Case', description: 'Designing recursive methods that terminate correctly.', skills: ['program design'] },
          { id: 'recursion-tracing', name: 'Tracing Recursive Calls', description: 'Following the call stack to determine recursive output.', skills: ['code tracing'] }
        ] }
    ],
    examStructure: {
      sections: [
        { name: 'Section I: Multiple Choice', questionTypes: ['mcq', 'code-tracing'], timingMinutes: 90, weight: '50%', notes: '40 questions covering code analysis, tracing, and design.' },
        { name: 'Section II: Free Response', questionTypes: ['frq', 'coding'], timingMinutes: 90, weight: '50%', notes: '4 questions: methods/control, classes, array/ArrayList, and 2D array.' }
      ]
    }
  };

  var seededQuestions = [
    // ── 3 EASY MCQs ──────────────────────────────────────────────────────────
    {
      id: 'ap-computer-science-a-u1-arithmetic-expressions-mcq-001', courseId: 'ap-computer-science-a', courseName: 'AP Computer Science A',
      unitId: 'unit-1', unitName: 'Primitive Types', topicId: 'arithmetic-expressions', topicName: 'Arithmetic Expressions',
      skill: 'code implementation', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'In Java, what is the value of the expression 7 / 2 ?',
      answerChoices: [
        { id: 'A', text: '3' },
        { id: 'B', text: '3.5' },
        { id: 'C', text: '4' },
        { id: 'D', text: '1' }
      ],
      correctAnswer: 'A',
      explanation: 'When both operands are int, Java performs integer division and discards the fractional part, so 7 / 2 evaluates to 3 (not 3.5).',
      distractorRationales: {
        A: '',
        B: '3.5 would result only if at least one operand were a double, e.g. 7.0 / 2.',
        C: 'Integer division truncates toward zero rather than rounding up to 4.',
        D: '1 is the value of 7 % 2 (the remainder), not 7 / 2.'
      },
      tags: ['integer-division', 'operators', 'primitives'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-computer-science-a-u2-string-methods-mcq-001', courseId: 'ap-computer-science-a', courseName: 'AP Computer Science A',
      unitId: 'unit-2', unitName: 'Using Objects', topicId: 'string-methods', topicName: 'String Methods',
      skill: 'code implementation', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'remember', estimatedTimeSeconds: 60,
      prompt: 'Given String s = "computer"; what does s.substring(0, 3) return?',
      answerChoices: [
        { id: 'A', text: '"com"' },
        { id: 'B', text: '"comp"' },
        { id: 'C', text: '"omp"' },
        { id: 'D', text: '"put"' }
      ],
      correctAnswer: 'A',
      explanation: 'substring(0, 3) returns characters from index 0 up to but NOT including index 3, which are the characters at indices 0, 1, and 2: "com".',
      distractorRationales: {
        A: '',
        B: '"comp" would require substring(0, 4); the end index is exclusive.',
        C: '"omp" would start at index 1, but the first argument here is 0.',
        D: '"put" appears later in the string and is not selected by these indices.'
      },
      tags: ['strings', 'substring', 'indexing'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-computer-science-a-u6-array-basics-mcq-001', courseId: 'ap-computer-science-a', courseName: 'AP Computer Science A',
      unitId: 'unit-6', unitName: 'Array', topicId: 'array-basics', topicName: 'Array Creation and Access',
      skill: 'code implementation', questionType: 'mcq', difficulty: 'easy',
      bloomLevel: 'understand', estimatedTimeSeconds: 60,
      prompt: 'An array is declared as int[] nums = {4, 8, 15, 16, 23}; What is the value of nums.length and the largest valid index?',
      answerChoices: [
        { id: 'A', text: 'length is 5 and the largest valid index is 4' },
        { id: 'B', text: 'length is 5 and the largest valid index is 5' },
        { id: 'C', text: 'length is 4 and the largest valid index is 4' },
        { id: 'D', text: 'length is 6 and the largest valid index is 5' }
      ],
      correctAnswer: 'A',
      explanation: 'The array holds 5 elements, so nums.length is 5. Array indices are zero-based, so valid indices run 0 through length - 1, making 4 the largest valid index.',
      distractorRationales: {
        A: '',
        B: 'Index 5 is out of bounds; accessing it throws ArrayIndexOutOfBoundsException.',
        C: 'There are 5 elements listed, so the length is 5, not 4.',
        D: 'The array contains 5 elements, not 6.'
      },
      tags: ['arrays', 'length', 'indexing'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 3 MEDIUM ─────────────────────────────────────────────────────────────
    {
      id: 'ap-computer-science-a-u4-for-loops-tracing-001', courseId: 'ap-computer-science-a', courseName: 'AP Computer Science A',
      unitId: 'unit-4', unitName: 'Iteration', topicId: 'for-loops', topicName: 'for Loops',
      skill: 'code tracing', questionType: 'code-tracing', difficulty: 'medium',
      bloomLevel: 'apply', estimatedTimeSeconds: 120,
      prompt: 'Trace the following Java code and give the exact output printed to the console.',
      codeBlock: 'int sum = 0;\nfor (int i = 1; i <= 4; i++) {\n    sum += i;\n}\nSystem.out.println(sum);',
      correctAnswer: '10',
      explanation: 'The loop adds 1, then 2, then 3, then 4 to sum: 1 + 2 + 3 + 4 = 10. After the loop ends the program prints 10.',
      tags: ['for-loop', 'accumulation', 'tracing'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-computer-science-a-u3-compound-booleans-tracing-001', courseId: 'ap-computer-science-a', courseName: 'AP Computer Science A',
      unitId: 'unit-3', unitName: 'Boolean Expressions and if Statements', topicId: 'compound-booleans', topicName: 'Compound Boolean Logic',
      skill: 'code tracing', questionType: 'code-tracing', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 120,
      prompt: 'Trace the following Java code and give the exact output printed to the console.',
      codeBlock: 'int x = 5;\nint y = 10;\nif (x > 3 && y < 8) {\n    System.out.println("A");\n} else if (x > 3 || y < 8) {\n    System.out.println("B");\n} else {\n    System.out.println("C");\n}',
      correctAnswer: 'B',
      explanation: 'The first condition (x > 3 && y < 8) is true && false = false, so "A" is skipped. The else if condition (x > 3 || y < 8) is true || false = true, so the program prints B.',
      tags: ['boolean-logic', 'if-else', 'short-circuit'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-computer-science-a-u7-arraylist-traversal-mcq-001', courseId: 'ap-computer-science-a', courseName: 'AP Computer Science A',
      unitId: 'unit-7', unitName: 'ArrayList', topicId: 'arraylist-traversal', topicName: 'ArrayList Traversal and Removal',
      skill: 'debugging', questionType: 'mcq', difficulty: 'medium',
      bloomLevel: 'analyze', estimatedTimeSeconds: 120,
      prompt: 'A student writes a loop to remove every element equal to 0 from an ArrayList<Integer> by iterating with an index i from 0 upward and calling list.remove(i) inside the loop while still incrementing i each pass. Why can this code fail to remove some zeros?',
      answerChoices: [
        { id: 'A', text: 'remove(i) does not compile on an ArrayList' },
        { id: 'B', text: 'After a removal, later elements shift left by one, so incrementing i skips the element now at index i' },
        { id: 'C', text: 'ArrayList cannot store Integer values' },
        { id: 'D', text: 'The size() method returns the wrong value after a removal' }
      ],
      correctAnswer: 'B',
      explanation: 'When an element is removed, every following element shifts down one index. If the loop still increments i, the element that moved into position i is never examined, so adjacent zeros can be skipped. The fix is to not increment i after a successful removal.',
      distractorRationales: {
        A: 'remove(int index) is a valid ArrayList method and compiles fine.',
        B: '',
        C: 'ArrayList<Integer> legitimately stores Integer objects via autoboxing.',
        D: 'size() correctly reflects the new (smaller) size after each removal.'
      },
      tags: ['arraylist', 'removal', 'off-by-one'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 2 HARD / EXAM-LEVEL ──────────────────────────────────────────────────
    {
      id: 'ap-computer-science-a-u4-nested-loops-tracing-001', courseId: 'ap-computer-science-a', courseName: 'AP Computer Science A',
      unitId: 'unit-4', unitName: 'Iteration', topicId: 'nested-loops', topicName: 'Nested Loops',
      skill: 'code tracing', questionType: 'code-tracing', difficulty: 'hard',
      bloomLevel: 'analyze', estimatedTimeSeconds: 180,
      prompt: 'Trace the following Java code carefully and give the exact output, including the line break behavior shown.',
      codeBlock: 'for (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j);\n    }\n    System.out.println();\n}',
      correctAnswer: '1\n12\n123',
      explanation: 'When i = 1 the inner loop prints 1; when i = 2 it prints 12; when i = 3 it prints 123. Each outer iteration ends with println(), producing three lines: 1, then 12, then 123.',
      tags: ['nested-loops', 'tracing', 'patterns'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    {
      id: 'ap-computer-science-a-u10-recursion-tracing-001', courseId: 'ap-computer-science-a', courseName: 'AP Computer Science A',
      unitId: 'unit-10', unitName: 'Recursion', topicId: 'recursion-tracing', topicName: 'Tracing Recursive Calls',
      skill: 'code tracing', questionType: 'code-tracing', difficulty: 'exam-level',
      bloomLevel: 'evaluate', estimatedTimeSeconds: 210,
      prompt: 'Trace the recursive method below for the call mystery(4) and give the exact output printed.',
      codeBlock: 'public static void mystery(int n) {\n    if (n <= 0) {\n        return;\n    }\n    System.out.print(n + " ");\n    mystery(n - 2);\n    System.out.print(n + " ");\n}\n\n// call:\nmystery(4);',
      correctAnswer: '4 2 2 4',
      explanation: 'mystery(4) prints 4, then calls mystery(2), which prints 2, then calls mystery(0) which returns immediately. As the stack unwinds, mystery(2) prints 2 again, then mystery(4) prints 4 again. The output is: 4 2 2 4.',
      tags: ['recursion', 'call-stack', 'tracing'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── CODING (with rubric + modelAnswer) ───────────────────────────────────
    {
      id: 'ap-computer-science-a-u6-array-traversal-coding-001', courseId: 'ap-computer-science-a', courseName: 'AP Computer Science A',
      unitId: 'unit-6', unitName: 'Array', topicId: 'array-traversal', topicName: 'Array Traversal Algorithms',
      skill: 'algorithms', questionType: 'coding', difficulty: 'hard',
      bloomLevel: 'create', estimatedTimeSeconds: 420,
      prompt: 'Write a complete Java method countEven that takes an int array and returns the number of elements that are even. Use the provided stub. Do not assume the array is non-empty.',
      codeBlock: 'public static int countEven(int[] arr) {\n    // your code here\n}',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'A correct solution traverses every element once and increments a counter when the element is divisible by 2 (value % 2 == 0). An empty array correctly returns 0 because the loop body never runs.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Declares and initializes a counter to 0.', evidenceRequired: 'A count variable starting at 0.' },
        { id: 'r2', pointValue: 1, criterion: 'Traverses every element of the array.', evidenceRequired: 'A loop over indices 0..length-1 or an enhanced for loop.' },
        { id: 'r3', pointValue: 1, criterion: 'Correctly tests evenness with the modulus operator.', evidenceRequired: 'Condition value % 2 == 0.' },
        { id: 'r4', pointValue: 1, criterion: 'Returns the final count.', evidenceRequired: 'return statement after the loop; handles empty array as 0.' }
      ],
      modelAnswer: 'public static int countEven(int[] arr) {\n    int count = 0;\n    for (int value : arr) {\n        if (value % 2 == 0) {\n            count++;\n        }\n    }\n    return count;\n}',
      tags: ['arrays', 'traversal', 'counting', 'coding'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── 1+ WRITTEN (FRQ with rubric) ─────────────────────────────────────────
    {
      id: 'ap-computer-science-a-u5-instance-vars-frq-001', courseId: 'ap-computer-science-a', courseName: 'AP Computer Science A',
      unitId: 'unit-5', unitName: 'Writing Classes', topicId: 'instance-vars', topicName: 'Instance Variables and Encapsulation',
      skill: 'object-oriented programming', questionType: 'frq', difficulty: 'hard',
      bloomLevel: 'create', estimatedTimeSeconds: 600,
      prompt: 'Design a Java class BankAccount that encapsulates a balance. (a) Declare a private double instance variable for the balance and write a constructor that sets the starting balance. (b) Write a public method deposit(double amount) that adds to the balance only if amount is positive, and a public method getBalance() that returns the current balance. Explain how encapsulation protects the balance from invalid changes.',
      correctAnswer: 'See model answer and rubric.',
      explanation: 'Encapsulation means the balance field is private, so outside code cannot set it directly. All changes go through methods such as deposit, which can validate input (rejecting non-positive amounts) and preserve the object in a valid state.',
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'Declares a private instance variable for balance.', evidenceRequired: 'private double balance;' },
        { id: 'r2', pointValue: 1, criterion: 'Constructor initializes the balance from a parameter.', evidenceRequired: 'Constructor assigns the field using this or a parameter.' },
        { id: 'r3', pointValue: 1, criterion: 'deposit validates that amount is positive before adding.', evidenceRequired: 'if (amount > 0) guard around the addition.' },
        { id: 'r4', pointValue: 1, criterion: 'getBalance returns the balance and encapsulation is explained.', evidenceRequired: 'Accessor returns the field; explanation links private access to controlled, validated mutation.' }
      ],
      modelAnswer: 'public class BankAccount {\n    private double balance;\n\n    public BankAccount(double startingBalance) {\n        this.balance = startingBalance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;\n        }\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}\n\n// Because balance is private, external code cannot assign to it directly. Every change must go through deposit, which rejects non-positive amounts. This keeps the object in a valid state and is the core benefit of encapsulation.',
      tags: ['classes', 'encapsulation', 'constructors', 'frq'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    },
    // ── Bonus: short-answer (debugging) ──────────────────────────────────────
    {
      id: 'ap-computer-science-a-u9-overriding-poly-short-001', courseId: 'ap-computer-science-a', courseName: 'AP Computer Science A',
      unitId: 'unit-9', unitName: 'Inheritance', topicId: 'overriding-poly', topicName: 'Overriding and Polymorphism',
      skill: 'object-oriented programming', questionType: 'short-answer', difficulty: 'medium',
      bloomLevel: 'understand', estimatedTimeSeconds: 240,
      prompt: 'A reference of type Animal points to an object of subclass Dog, and both classes define a speak() method. When animal.speak() is called, explain which version runs and why. Name the mechanism involved.',
      correctAnswer: 'The Dog version runs because of dynamic dispatch (polymorphism).',
      explanation: 'Java resolves overridden instance methods at runtime based on the actual object type, not the declared reference type. Since the object is a Dog, Dog.speak() executes. This runtime resolution is called dynamic dispatch or polymorphism.',
      acceptableAnswers: ['dog', 'dynamic dispatch', 'polymorphism', 'runtime', 'actual object type'],
      rubric: [
        { id: 'r1', pointValue: 1, criterion: 'States that the Dog (subclass) version runs.', evidenceRequired: 'Identifies the overriding subclass method.' },
        { id: 'r2', pointValue: 1, criterion: 'Explains resolution is based on the actual object type at runtime.', evidenceRequired: 'References runtime/dynamic dispatch, not the reference type.' }
      ],
      modelAnswer: 'The Dog version of speak() runs. Although the reference is declared as Animal, Java uses the actual type of the object at runtime to choose the overridden method. This runtime selection is called dynamic dispatch (polymorphism), so the most specific overriding method, Dog.speak(), is invoked.',
      tags: ['inheritance', 'polymorphism', 'overriding'], sourceType: 'seeded', reviewStatus: 'approved',
      createdAt: '2026-06-27T00:00:00.000Z'
    }
  ];

  var DATA = { framework: framework, seededQuestions: seededQuestions };

  if (typeof window !== 'undefined') {
    (window.__FA_QSTREAM_DATA__ = window.__FA_QSTREAM_DATA__ || {})[framework.courseId] = DATA;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }
})();
