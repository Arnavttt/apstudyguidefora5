// lib/data/content/apcsa_content.dart
//
// Full content tree for AP Computer Science A — transcribed from apcsa.html.
// 5 Unit objects: Exam Overview, Units 1–4 (Primitives & Objects),
// Units 5–6 (Classes & Inheritance), Units 7–8 (Arrays & ArrayLists),
// Units 9–10 (2D Arrays, Recursion & Algorithms).
// All content is typed const data — zero dynamic dispatch at render time.

import '../../models/content_block.dart';
import '../../models/unit.dart';

const List<Unit> apcsaUnits = [
  // ── Exam Overview ──────────────────────────────────────────────────────────
  Unit(
    title: 'AP Computer Science A — Exam Overview',
    blocks: [
      DataTableBlock(
        headers: ['Section', 'Format', 'Time', 'Weight'],
        rows: [
          [
            'Section I: MCQ',
            '40 questions — logic, syntax, tracing, data structures',
            '90 min',
            '50%',
          ],
          [
            'FRQ 1: Methods & Control Structures',
            'Write 1–2 methods using loops, conditionals, method calls',
            '~22 min',
            '~12.5%',
          ],
          [
            'FRQ 2: Class Writing',
            'Write a complete class with instance variables, constructor, methods',
            '~22 min',
            '~12.5%',
          ],
          [
            'FRQ 3: Array / ArrayList',
            'Search, filter, build, or modify an ArrayList or array',
            '~22 min',
            '~12.5%',
          ],
          [
            'FRQ 4: 2D Array',
            'Traverse, search, or modify a 2D array with nested loops',
            '~22 min',
            '~12.5%',
          ],
        ],
      ),
      DataTableBlock(
        headers: ['Class / Type', 'Key Methods'],
        rows: [
          [
            'String',
            'length(), substring(int,int), indexOf(String), equals(String), compareTo(String)',
          ],
          [
            'Math',
            'abs(x), pow(base,exp), sqrt(x), random() → [0.0,1.0)',
          ],
          [
            'Integer',
            'Integer.MIN_VALUE, Integer.MAX_VALUE, parseInt(String)',
          ],
          [
            'ArrayList<E>',
            'size(), add(E), add(int,E), get(int), set(int,E), remove(int)',
          ],
          [
            'Object',
            'equals(Object), toString()',
          ],
        ],
      ),
      WarnBlock(
        title: 'Common FRQ Traps',
        items: [
          'ArrayList is 0-indexed. Valid indices: 0 to list.size()-1',
          'When removing elements from an ArrayList while iterating FORWARD, indices shift — iterate backward or decrement counter after remove()',
          'set(i,x) replaces at index i. add(i,x) inserts at index i (shifts elements right). Know which you need.',
          '2D array: arr[row][col]. arr.length = number of rows. arr[0].length = number of columns.',
          'String methods: substring(start, END-exclusive), equals() not ==, compareTo() for ordering',
          'Math.random() returns [0.0, 1.0). For int 0 to n-1: (int)(Math.random()*n)',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'What does the following code output?\n\n'
              'int[] arr = {5, 3, 8, 1, 9};\n'
              'int x = 0;\n'
              'for (int n : arr) { if (n > x) x = n; }\n'
              'System.out.println(x);',
          choices: [
            QuizChoice(text: 'A) 5', isCorrect: false),
            QuizChoice(
              text: 'B) 9',
              isCorrect: true,
              explanation:
                  'B: 9 — This is a max-finding algorithm. x tracks the largest value seen. Starting at 0, it compares each element: 5>0 (x=5), 3>5 false, 8>5 (x=8), 1>8 false, 9>8 (x=9). The for-each loop iterates every element of the array.',
            ),
            QuizChoice(text: 'C) 1', isCorrect: false),
            QuizChoice(text: 'D) 26', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question:
              'An ArrayList named "words" contains [\'cat\',\'dog\',\'bird\']. After words.remove(1), words contains:',
          choices: [
            QuizChoice(
              text: 'A) [\'cat\',\'bird\']',
              isCorrect: true,
              explanation:
                  'A: [\'cat\',\'bird\'] — remove(int index) removes the element AT that index. Index 1 is \'dog\'. After removal: [\'cat\',\'bird\']. Note: remove(Object o) would remove by value. Since we pass an int literal, it calls the index version.',
            ),
            QuizChoice(text: 'B) [\'cat\',\'dog\']', isCorrect: false),
            QuizChoice(text: 'C) [\'dog\',\'bird\']', isCorrect: false),
            QuizChoice(text: 'D) [\'cat\',\'dog\',\'bird\']', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Units 1–4: Primitives, Classes & Objects ───────────────────────────────
  Unit(
    title: 'Units 1–4: Primitives, Classes & Objects',
    blocks: [
      CardRowBlock([
        ContentCardData(
          title: 'Primitive Types (3 tested)',
          body:
              'int — whole numbers. double — decimals. boolean — true/false. Stored by VALUE. Default: int=0, double=0.0, boolean=false.',
        ),
        ContentCardData(
          title: 'Reference Types (Objects)',
          body:
              'String, Integer, ArrayList, custom classes. Variables store a REFERENCE (address) to the object in memory. Default: null.',
        ),
        ContentCardData(
          title: 'Type Casting',
          body:
              '(int)(3.7) → 3 (truncates). (double)5/2 → 2.5. Integer/int division truncates: 5/2 → 2. To force double: cast ONE operand.',
        ),
        ContentCardData(
          title: 'Wrapper Classes',
          body:
              'Integer and Double wrap primitives for use in ArrayLists. Autoboxing: int→Integer automatically. Unboxing: Integer→int automatically.',
        ),
      ]),
      DataTableBlock(
        headers: ['Method', 'Returns', 'Example'],
        rows: [
          ['s.length()', 'int — number of chars', '"hello".length() → 5'],
          [
            's.substring(from,to)',
            'String from index from to to-1',
            '"hello".substring(1,3) → "el"',
          ],
          [
            's.substring(from)',
            'String from index to end',
            '"hello".substring(2) → "llo"',
          ],
          [
            's.indexOf(str)',
            'int — first occurrence, or -1',
            '"hello".indexOf("ll") → 2',
          ],
          [
            's.equals(str)',
            'boolean — content equality',
            '"hi".equals("hi") → true',
          ],
          [
            's.compareTo(str)',
            'int — 0 if equal, neg if s<str, pos if s>str',
            '"a".compareTo("b") → negative',
          ],
        ],
      ),
      StepBoxBlock(
        title: 'Step-by-Step: Reverse a String',
        steps: [
          'Create an empty String result = "";',
          'Loop from i = s.length()-1 down to i = 0',
          'Each iteration: result += s.substring(i, i+1);',
          'Return result after the loop ends.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'What is the value of: "programming".substring(3,7)?',
          choices: [
            QuizChoice(text: 'A) "prog"', isCorrect: false),
            QuizChoice(
              text: 'B) "gram"',
              isCorrect: true,
              explanation:
                  'B: "gram" — substring(from, to) returns chars at indices from through to-1 (exclusive end). "programming" indices: p=0,r=1,o=2,g=3,r=4,a=5,m=6... substring(3,7) gives indices 3,4,5,6 → "gram". The ending index is EXCLUSIVE — common source of off-by-one errors.',
            ),
            QuizChoice(text: 'C) "gramm"', isCorrect: false),
            QuizChoice(text: 'D) "progr"', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'Which statement correctly creates an ArrayList of Strings?',
          choices: [
            QuizChoice(text: 'A) ArrayList list = new ArrayList();', isCorrect: false),
            QuizChoice(
              text: 'B) ArrayList<String> list = new ArrayList<String>();',
              isCorrect: true,
              explanation:
                  'B is correct. ArrayLists use generics: ArrayList<Type>. The type parameter tells Java what kind of objects the list holds. Using the raw type (choice A) works but generates a compiler warning and loses type safety.',
            ),
            QuizChoice(text: 'C) String[] list = new ArrayList();', isCorrect: false),
            QuizChoice(text: 'D) List list = new String[10];', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Units 5–6: Writing Classes & Inheritance ──────────────────────────────
  Unit(
    title: 'Units 5–6: Writing Classes & Inheritance',
    blocks: [
      StepBoxBlock(
        title: 'How to Write a Class from Scratch (FRQ 2 Pattern)',
        steps: [
          'Declare instance variables (private). Match the types to what the constructor receives.',
          'Write the constructor: public ClassName(params) { this.var = param; ... }',
          'Write accessor methods (getters): public Type getVar() { return var; }',
          'Write mutator methods (setters): public void setVar(Type val) { this.var = val; }',
          'Write behavior methods: use instance variables and parameters to compute results.',
          'toString() method (if asked): public String toString() { return "ClassName[var=" + var + "]"; }',
        ],
      ),
      CodeBlock([
        CodeSpan('// FRQ 2 Template — complete class\n', kind: CodeSpanKind.comment),
        CodeSpan('public class ', kind: CodeSpanKind.keyword),
        CodeSpan('BankAccount', kind: CodeSpanKind.highlight),
        CodeSpan(' {\n'),
        CodeSpan('  // Step 1: private instance variables\n', kind: CodeSpanKind.comment),
        CodeSpan('  private ', kind: CodeSpanKind.keyword),
        CodeSpan('String owner;\n'),
        CodeSpan('  private ', kind: CodeSpanKind.keyword),
        CodeSpan('double ', kind: CodeSpanKind.keyword),
        CodeSpan('balance;\n\n'),
        CodeSpan('  // Step 2: constructor\n', kind: CodeSpanKind.comment),
        CodeSpan('  public ', kind: CodeSpanKind.keyword),
        CodeSpan('BankAccount(String owner, '),
        CodeSpan('double ', kind: CodeSpanKind.keyword),
        CodeSpan('initialBalance) {\n'),
        CodeSpan('    this', kind: CodeSpanKind.keyword),
        CodeSpan('.owner = owner;\n'),
        CodeSpan('    this', kind: CodeSpanKind.keyword),
        CodeSpan('.balance = initialBalance;\n  }\n\n'),
        CodeSpan('  // Step 3: accessor\n', kind: CodeSpanKind.comment),
        CodeSpan('  public ', kind: CodeSpanKind.keyword),
        CodeSpan('double ', kind: CodeSpanKind.keyword),
        CodeSpan('getBalance() { '),
        CodeSpan('return ', kind: CodeSpanKind.keyword),
        CodeSpan('balance; }\n\n'),
        CodeSpan('  // Step 4: mutator\n', kind: CodeSpanKind.comment),
        CodeSpan('  public ', kind: CodeSpanKind.keyword),
        CodeSpan('void ', kind: CodeSpanKind.keyword),
        CodeSpan('deposit('),
        CodeSpan('double ', kind: CodeSpanKind.keyword),
        CodeSpan('amount) {\n'),
        CodeSpan('    if ', kind: CodeSpanKind.keyword),
        CodeSpan('(amount > '),
        CodeSpan('0', kind: CodeSpanKind.number),
        CodeSpan(') balance += amount;\n  }\n\n'),
        CodeSpan('  // Step 5: behavior method\n', kind: CodeSpanKind.comment),
        CodeSpan('  public ', kind: CodeSpanKind.keyword),
        CodeSpan('boolean ', kind: CodeSpanKind.keyword),
        CodeSpan('withdraw('),
        CodeSpan('double ', kind: CodeSpanKind.keyword),
        CodeSpan('amount) {\n'),
        CodeSpan('    if ', kind: CodeSpanKind.keyword),
        CodeSpan('(amount > '),
        CodeSpan('0', kind: CodeSpanKind.number),
        CodeSpan(' && amount <= balance) {\n'),
        CodeSpan('      balance -= amount;\n'),
        CodeSpan('      return ', kind: CodeSpanKind.keyword),
        CodeSpan('true', kind: CodeSpanKind.keyword),
        CodeSpan(';\n    }\n'),
        CodeSpan('    return ', kind: CodeSpanKind.keyword),
        CodeSpan('false', kind: CodeSpanKind.keyword),
        CodeSpan(';\n  }\n}'),
      ]),
      CalloutBlock(
        title: 'Inheritance Key Concepts',
        items: [
          'Subclass extends superclass: public class Dog extends Animal { ... }',
          'super() calls the parent constructor — must be first line in subclass constructor.',
          'super.method() calls the parent version of an overridden method.',
          'Polymorphism: Animal a = new Dog(...) — Dog methods override Animal methods at runtime.',
          'Abstract class: cannot be instantiated; may have abstract methods (no body, must be overridden).',
          'instanceof: checks if an object is an instance of a class (dog instanceof Animal → true).',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question:
              'In a properly designed class, instance variables should be declared as:',
          choices: [
            QuizChoice(
                text: 'A) public — so other classes can access them', isCorrect: false),
            QuizChoice(
              text:
                  'B) private — to enforce encapsulation, with public getter/setter methods controlling access',
              isCorrect: true,
              explanation:
                  'B is correct. Encapsulation (data hiding) is a core OOP principle. Declaring instance variables private prevents direct external access. Getters and setters provide controlled access — allowing the class to validate data and change internal implementation without breaking code that uses the class.',
            ),
            QuizChoice(
                text: 'C) static — so all instances share them', isCorrect: false),
            QuizChoice(
                text: 'D) final — so they cannot be changed', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Units 7–8: Arrays & ArrayLists ────────────────────────────────────────
  Unit(
    title: 'Units 7–8: Arrays & ArrayLists',
    blocks: [
      CodeBlock([
        CodeSpan('// Array declaration and creation\n', kind: CodeSpanKind.comment),
        CodeSpan('int', kind: CodeSpanKind.keyword),
        CodeSpan('[] arr = '),
        CodeSpan('new ', kind: CodeSpanKind.keyword),
        CodeSpan('int', kind: CodeSpanKind.keyword),
        CodeSpan('['),
        CodeSpan('5', kind: CodeSpanKind.number),
        CodeSpan('];          '),
        CodeSpan('// 5 elements, all 0\n', kind: CodeSpanKind.comment),
        CodeSpan('int', kind: CodeSpanKind.keyword),
        CodeSpan('[] arr2 = {'),
        CodeSpan('10', kind: CodeSpanKind.number),
        CodeSpan(', '),
        CodeSpan('20', kind: CodeSpanKind.number),
        CodeSpan(', '),
        CodeSpan('30', kind: CodeSpanKind.number),
        CodeSpan('};     '),
        CodeSpan('// initializer list\n\n', kind: CodeSpanKind.comment),
        CodeSpan('arr.length  '),
        CodeSpan('// property (NOT a method) — number of elements\n',
            kind: CodeSpanKind.comment),
        CodeSpan('arr['),
        CodeSpan('0', kind: CodeSpanKind.number),
        CodeSpan(']      '),
        CodeSpan('// first element — index starts at 0\n', kind: CodeSpanKind.comment),
        CodeSpan('arr[arr.length-'),
        CodeSpan('1', kind: CodeSpanKind.number),
        CodeSpan(']  '),
        CodeSpan('// last element\n\n', kind: CodeSpanKind.comment),
        CodeSpan('// Standard traversal patterns\n', kind: CodeSpanKind.comment),
        CodeSpan('for ', kind: CodeSpanKind.keyword),
        CodeSpan('('),
        CodeSpan('int ', kind: CodeSpanKind.keyword),
        CodeSpan('i = '),
        CodeSpan('0', kind: CodeSpanKind.number),
        CodeSpan('; i < arr.length; i++) { '),
        CodeSpan('// index loop\n', kind: CodeSpanKind.comment),
        CodeSpan('  arr[i] = i * '),
        CodeSpan('2', kind: CodeSpanKind.number),
        CodeSpan(';\n}\n'),
        CodeSpan('for ', kind: CodeSpanKind.keyword),
        CodeSpan('('),
        CodeSpan('int ', kind: CodeSpanKind.keyword),
        CodeSpan('val : arr) { '),
        CodeSpan('// enhanced for — READ-ONLY\n', kind: CodeSpanKind.comment),
        CodeSpan('  System.out.println(val);\n}'),
      ]),
      CodeBlock([
        CodeSpan('import ', kind: CodeSpanKind.keyword),
        CodeSpan('java.util.ArrayList;\n'),
        CodeSpan('ArrayList<String> list = '),
        CodeSpan('new ', kind: CodeSpanKind.keyword),
        CodeSpan('ArrayList<String>();\n\n'),
        CodeSpan('list.add('),
        CodeSpan('"apple"', kind: CodeSpanKind.string),
        CodeSpan(');         '),
        CodeSpan('// add to end\n', kind: CodeSpanKind.comment),
        CodeSpan('list.add('),
        CodeSpan('1', kind: CodeSpanKind.number),
        CodeSpan(', '),
        CodeSpan('"banana"', kind: CodeSpanKind.string),
        CodeSpan(');    '),
        CodeSpan('// INSERT at index 1 — shifts elements right\n', kind: CodeSpanKind.comment),
        CodeSpan('list.get('),
        CodeSpan('0', kind: CodeSpanKind.number),
        CodeSpan(');             '),
        CodeSpan('// → "apple" — does NOT remove\n', kind: CodeSpanKind.comment),
        CodeSpan('list.set('),
        CodeSpan('0', kind: CodeSpanKind.number),
        CodeSpan(', '),
        CodeSpan('"pear"', kind: CodeSpanKind.string),
        CodeSpan(');    '),
        CodeSpan('// REPLACE index 0 with "pear"\n', kind: CodeSpanKind.comment),
        CodeSpan('list.remove('),
        CodeSpan('0', kind: CodeSpanKind.number),
        CodeSpan(');          '),
        CodeSpan('// remove at index 0 — shifts left\n', kind: CodeSpanKind.comment),
        CodeSpan('list.size();              '),
        CodeSpan('// number of elements\n\n', kind: CodeSpanKind.comment),
        CodeSpan('// SAFE removal while iterating — go BACKWARD\n', kind: CodeSpanKind.comment),
        CodeSpan('for ', kind: CodeSpanKind.keyword),
        CodeSpan('('),
        CodeSpan('int ', kind: CodeSpanKind.keyword),
        CodeSpan('i = list.size()-'),
        CodeSpan('1', kind: CodeSpanKind.number),
        CodeSpan('; i >= '),
        CodeSpan('0', kind: CodeSpanKind.number),
        CodeSpan('; i--) {\n'),
        CodeSpan('  if ', kind: CodeSpanKind.keyword),
        CodeSpan('(list.get(i).equals('),
        CodeSpan('"remove me"', kind: CodeSpanKind.string),
        CodeSpan('))\n'),
        CodeSpan('    list.remove(i);  '),
        CodeSpan('// safe — only affects indices we\'ve already passed\n',
            kind: CodeSpanKind.comment),
        CodeSpan('}'),
      ]),
      StepBoxBlock(
        title: 'FRQ 3 ArrayList Pattern — Filter into New List',
        steps: [
          'Create a new ArrayList<Type> result = new ArrayList<Type>();',
          'Loop through original list using for(int i=0; i<list.size(); i++)',
          'Get current element: Type item = list.get(i);',
          'Check condition: if(item satisfies condition)',
          'Add to result: result.add(item);',
          'Return result after loop ends.',
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question:
              'An ArrayList contains [10,20,30,40]. After list.add(2, 99), the list contains:',
          choices: [
            QuizChoice(text: 'A) [10,20,30,40,99]', isCorrect: false),
            QuizChoice(
              text: 'B) [10,20,99,30,40]',
              isCorrect: true,
              explanation:
                  'B: [10,20,99,30,40] — add(int index, E element) INSERTS at the specified index, shifting all existing elements at that index and beyond one position to the right. Index 2 was 30 — now 99 is at index 2, 30 shifts to index 3, 40 shifts to index 4.',
            ),
            QuizChoice(text: 'C) [10,20,99,40]', isCorrect: false),
            QuizChoice(text: 'D) [10,99,20,30,40]', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question:
              'When iterating an ArrayList and removing elements inside the loop, why is iterating backward preferred?',
          choices: [
            QuizChoice(text: 'A) It\'s faster', isCorrect: false),
            QuizChoice(
              text:
                  'B) Going backward ensures removed indices don\'t affect unprocessed elements (higher indices were already checked)',
              isCorrect: true,
              explanation:
                  'B is correct. When you remove at index i while going forward, elements shift left — the element that was at i+1 is now at i and gets skipped on the next iteration. Going backward means you\'ve already processed higher indices, so removals only affect indices you\'ve already examined.',
            ),
            QuizChoice(
                text: 'C) ArrayList doesn\'t allow forward iteration', isCorrect: false),
            QuizChoice(
                text: 'D) It prevents a NullPointerException', isCorrect: false),
          ],
        ),
      ]),
    ],
  ),

  // ── Units 9–10: 2D Arrays, Recursion & Algorithms ─────────────────────────
  Unit(
    title: 'Units 9–10: 2D Arrays, Recursion & Algorithms',
    blocks: [
      CodeBlock([
        CodeSpan('// Declare and create a 2D array\n', kind: CodeSpanKind.comment),
        CodeSpan('int', kind: CodeSpanKind.keyword),
        CodeSpan('[][] grid = '),
        CodeSpan('new ', kind: CodeSpanKind.keyword),
        CodeSpan('int', kind: CodeSpanKind.keyword),
        CodeSpan('['),
        CodeSpan('3', kind: CodeSpanKind.number),
        CodeSpan(']['),
        CodeSpan('4', kind: CodeSpanKind.number),
        CodeSpan('];   '),
        CodeSpan('// 3 rows, 4 cols\n', kind: CodeSpanKind.comment),
        CodeSpan('int', kind: CodeSpanKind.keyword),
        CodeSpan('[][] grid2 = {{'),
        CodeSpan('1', kind: CodeSpanKind.number),
        CodeSpan(','),
        CodeSpan('2', kind: CodeSpanKind.number),
        CodeSpan('},{'),
        CodeSpan('3', kind: CodeSpanKind.number),
        CodeSpan(','),
        CodeSpan('4', kind: CodeSpanKind.number),
        CodeSpan('},{'),
        CodeSpan('5', kind: CodeSpanKind.number),
        CodeSpan(','),
        CodeSpan('6', kind: CodeSpanKind.number),
        CodeSpan('}}; '),
        CodeSpan('// initializer\n\n', kind: CodeSpanKind.comment),
        CodeSpan('grid.length       '),
        CodeSpan('// → 3 (number of ROWS)\n', kind: CodeSpanKind.comment),
        CodeSpan('grid['),
        CodeSpan('0', kind: CodeSpanKind.number),
        CodeSpan('].length    '),
        CodeSpan('// → 4 (number of COLS)\n', kind: CodeSpanKind.comment),
        CodeSpan('grid[r][c]        '),
        CodeSpan('// element at row r, col c\n\n', kind: CodeSpanKind.comment),
        CodeSpan('// Standard row-major traversal (row by row)\n', kind: CodeSpanKind.comment),
        CodeSpan('for ', kind: CodeSpanKind.keyword),
        CodeSpan('('),
        CodeSpan('int ', kind: CodeSpanKind.keyword),
        CodeSpan('r = '),
        CodeSpan('0', kind: CodeSpanKind.number),
        CodeSpan('; r < grid.length; r++) {\n'),
        CodeSpan('  for ', kind: CodeSpanKind.keyword),
        CodeSpan('('),
        CodeSpan('int ', kind: CodeSpanKind.keyword),
        CodeSpan('c = '),
        CodeSpan('0', kind: CodeSpanKind.number),
        CodeSpan('; c < grid[r].length; c++) {\n'),
        CodeSpan('    System.out.print(grid[r][c] + '),
        CodeSpan('" "', kind: CodeSpanKind.string),
        CodeSpan(');\n  }\n}'),
      ]),
      StepBoxBlock(
        title: 'Step-by-Step: Find Max in 2D Array',
        steps: [
          'Initialize max = grid[0][0] (first element as initial comparison)',
          'Nested loops: outer over rows (r from 0 to grid.length-1), inner over cols (c from 0 to grid[r].length-1)',
          'Each iteration: if(grid[r][c] > max) { max = grid[r][c]; }',
          'After loops: return max',
        ],
      ),
      DataTableBlock(
        headers: [
          'Algorithm',
          'Best Case',
          'Worst Case',
          'Requires Sorted?',
          'Key Idea',
        ],
        rows: [
          [
            'Sequential Search',
            'O(1) — first element',
            'O(n) — last or not found',
            'No',
            'Check each element one by one',
          ],
          [
            'Binary Search',
            'O(1) — middle element',
            'O(log n)',
            'YES — must be sorted',
            'Compare to middle, eliminate half',
          ],
          [
            'Selection Sort',
            'O(n²)',
            'O(n²)',
            'No',
            'Find min/max, swap to correct position',
          ],
          [
            'Insertion Sort',
            'O(n) — nearly sorted',
            'O(n²)',
            'No',
            'Insert each element into correct position in sorted portion',
          ],
          [
            'Merge Sort',
            'O(n log n)',
            'O(n log n)',
            'No',
            'Divide in half, sort each half, merge',
          ],
        ],
      ),
      QuizBlock([
        QuizQuestion(
          question: 'A 2D array grid has 4 rows and 6 columns. What is the value of grid[0].length?',
          choices: [
            QuizChoice(text: 'A) 4', isCorrect: false),
            QuizChoice(
              text: 'B) 6',
              isCorrect: true,
              explanation:
                  'B: 6 — grid.length is the number of rows (4). grid[0].length is the number of columns in row 0 (6). This is the most important 2D array fact: length gives rows, [0].length gives columns. Always use grid[r].length in the inner loop condition to handle jagged arrays safely.',
            ),
            QuizChoice(text: 'C) 24', isCorrect: false),
            QuizChoice(text: 'D) 0', isCorrect: false),
          ],
        ),
        QuizQuestion(
          question: 'Binary search requires that the array be sorted because:',
          choices: [
            QuizChoice(
              text:
                  'A) It starts from the middle and needs elements in order to decide which half to eliminate',
              isCorrect: true,
              explanation:
                  'A is correct. Binary search works by comparing the target to the middle element, then eliminating either the left or right half based on whether the target is less or greater. This only works if smaller values are on the left and larger values are on the right — i.e., if the array is sorted. On an unsorted array, binary search gives incorrect results.',
            ),
            QuizChoice(text: 'B) It\'s faster with sorted arrays', isCorrect: false),
            QuizChoice(
                text: 'C) Java\'s Arrays.binarySearch requires it', isCorrect: false),
            QuizChoice(text: 'D) It can only search int arrays', isCorrect: false),
          ],
        ),
      ]),
      MustKnowBlock([
        'Array.length is a PROPERTY, not a method — no parentheses. ArrayList.size() IS a method — needs ()',
        '2D array: grid.length = rows, grid[0].length = columns',
        'String methods: substring(start, END-exclusive), equals() not ==',
        'Remove from ArrayList while looping: go backward or decrement counter after remove()',
        'set(i, x) = replace; add(i, x) = insert (shifts elements right)',
        'Math.random() returns [0.0, 1.0). For int 0 to n-1: (int)(Math.random()*n)',
        'Integer division truncates: 7/2 = 3. Cast one operand to double: (double)7/2 = 3.5',
        'FRQ 1: Methods & Control Structures — loops, conditionals, calling methods',
        'FRQ 2: Class Writing — private vars, constructor (this.x=x), getters, setters, behavior methods',
        'FRQ 3: ArrayList — filter, search, build new list patterns',
        'FRQ 4: 2D Array — nested loops, row/column traversal, accumulation algorithms',
      ]),
    ],
  ),
];
