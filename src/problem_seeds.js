   import Problem from './problem'
   // exports an array of problem objects
export const gauntlet = 
   [
     {
      steps: ["5x + 3 = 16", "  5x = 13", "  x = 13 / 5"],
        options: [
          ["5x +3 - 3 = 16 - 3", "5x + 3 + 3 = 16 + 3"],
          ["5x - 5 = 13 - 5", "5x / 5 = 13 / 5"]
       ],
       answers: [0, 1]
      },
       {
         steps: ["    2x + 7 = 9", "    2x = 2", "     x = 1"],
         options: [
           ["2x+7 - 7 = 9 - 7", "2x+7 + 7 = 9 + 7"],
           ["2x / 2 = 2 / 2", "2x * 2 = 2 * 2"]
         ],
         answers: [0, 0]
       },
       {
         steps: ["x + 4 = -6", "x = -10"],
         options: [
           ["x = -2", "x = -10"]
         ],
         answers: [1]
       },
       {
         steps: [
           "        3(x + 5) = 3x + 15",
           "        x = x" ,
           "       (3 * 4) + 5 = 3 * (4 + 5)",
           "        x + y + z = z + y + x",
           "Stunning Work!"
        ],
         options: [
           ["This is the Associative Property", "This is the Commutative Property", "This is the Distributive Property"],
           ["This is the Associative Property", "This is the Commutative Property", "This is the Reflexive Property"],
           ["This is the Associative Property", "This is the Commutative Property", "This is not correct"],
           ["This is the Associative Property", "This is the Commutative Property", "This is the Reflexive Property"],
         ],
         answers: [2,2,2,1]
       },
       {
         steps: ["y = 7x - 2",
         "(6x-1)/4 = (3x -1)/2" ,
         "Can two lines intersect at multiple points?",  
         "Excellent Job!"],
         options: [
           ["This is slope-intercept form", "This is point-slope form", "This is standard form"],
           ["This equation has one solution", "This equation has many solutions", "This equation has no solutions"],
           ["Yes", "No", "I don't know"],
         ],
         answers: [0,2,0]
       },
       {
         steps: [
           "Welcome to Algebra 2 / Trigenometry",
           "Tan(θ) = -1, Cos(θ) < 0",
           "How many solutions for Sin(θ) = 1/2 on θ: (30,750]", 
           "Excellent Job!"
        ],
         options: [
           ["Let me google the unit circle real quick...", "This is lame.", "I hate triangles"],
           ["x = -45 deg", "x = 135 deg", "x = - 135 deg"],
           ["2", "3", "4"],
         ],
         answers: [0,1,2]
       },
       {
        steps: ["Describe the secant of x.",
        "How many petals does the flower curve r = cos(2θ) have?",
        'What is the domain of 3ln(x-4)?',
        "Excellent Job!"],
        options: [
          ["The reciprocal of the sine of x", "The reciprocal of the cosine of x", "The negative reciprocal of the sine of x", "is this a joke?"],
          ["2", "1", "4", "it does not have petals"],
          ["x: (4, infinity)", "x: (-4, 4]", "x: [4, infinity)"],
        ],
        answers: [1, 2, 0] 
       },
       {
        steps: ["f(x) is exponential, f(0)=3, f(2)=48",
        "f(x) = 10x + 4sinx + 2",
        'Describe the fundamental theorem of algebra.',
        "Awesome! On to bigger and better things!"
      ],
        options: [
          ["f(x) = 4 * 3^x", "f(x) = 3 * 4^x", "f(x) = 3^(4x)", "f(x) = 24x+3"],
          ["This function is even", "This function is odd", "This function is neither even nor odd"],
          ["An nth degree polynomial has n roots in the complex plane", "All numbers are prime or a product of primes", "Parabolas are solvable with the quadratic equation"],
        ],
        answers: [1, 2, 0] 
       },
       {
        steps: [
          "Welcome to Calculus!",
          "Going 45 miles in 30 minutes, you must have at one point gone 90mph",
          'You throw a ball straight in the air, when will it have no velocity?',
          "Phenomenal work, these are hard problems."
        ],
        options: [
          ["Cool!", "I'm not ready!"],
          ["This is an example of Intermediate Value Theorem", "This is an example of Mean Value Theorem", "This is not necesarily true."],
          ["When it first leaves your hand", "Just before it hits the ground", "At the height of its trajectory."],
        ],
        answers: [0, 1, 2] 
       },
       {
        steps: [
          "A circle has a radius of 10cm growing 1cm/sec.",
          'Using 100ft of fencing to make a square and/or a circle fence...',
          "f(x) = Sin(x)/x, What is the limit of f(x) as x approaches 0?",
          "Phenomenal work, these are hard problems."
        ],
        options: [
          ["Its area is growing 20π cm squared/sec", "Its area is growing 100π cm squared/sec", "Its area is growing 60π cm squared/sec"],
          ["To maximize area make only a cirlce fence", "To maximize area make only a square fence", "To maximize area make the fences the same size"],
          ["0", "1", "THE LIMIT DOES NOT EXIST!"],
        ],
        answers: [0, 0, 1] 
       },
    
    ].map(problem => {
      
      return new Problem(problem)
    })

export const linear = [
  {
    steps: ["5x + 3 = 16", "  5x = 13", "  x = 13 / 5"],
    options: [
      ["5x +3 - 3 = 16 - 3", "5x + 3 + 3 = 16 + 3"],
      ["5x - 5 = 13 - 5", "5x / 5 = 13 / 5"]
    ],
    answers: [0, 1]
  },
  {
    steps: ["    2x + 7 = 9", "    2x = 2", "     x = 1"],
    options: [
      ["2x+7 - 7 = 9 - 7", "2x+7 + 7 = 9 + 7"],
      ["2x / 2 = 2 / 2", "2x * 2 = 2 * 2"]
    ],
    answers: [0, 0]
  },
  {
    steps: ["x + 4 = -6", "x = -10"],
    options: [
      ["x = -2", "x = -10"]
    ],
    answers: [1]
  },
  {
    steps: ["y = 7x - 2",
      "(6x-1)/4 = (3x -1)/2",
      "Can two lines intersect at multiple points?",
      "Excellent Job!"],
    options: [
      ["This is slope-intercept form", "This is point-slope form", "This is standard form"],
      ["This equation has one solution", "This equation has many solutions", "This equation has no solutions"],
      ["Yes", "No", "I don't know"],
    ],
    answers: [0, 2, 0]
  },

].map(problem => {

  return new Problem(problem)
})

export const trig =
  [
    {
      steps: [
        "Tan(θ) = -1, Cos(θ) < 0",
        "How many solutions for Sin(θ) = 1/2 on θ: (30,750]",
        "Excellent Job!"
      ],
      options: [
        ["x = -45 deg", "x = 135 deg", "x = - 135 deg"],
        [ "3", "4"],
      ],
      answers: [1, 2]
    },
    {
      steps: ["Describe the secant of x.",
        "How many petals does the flower curve r = cos(2θ) have?",
        'What is the domain of 3ln(x-4)?',
        "Excellent Job!"],
      options: [
        ["The reciprocal of the sine of x", "The reciprocal of the cosine of x", "The negative reciprocal of the sine of x", "is this a joke?"],
        ["2", "1", "4", "it does not have petals"],
        ["x: (4, infinity)", "x: (-4, 4]", "x: [4, infinity)"],
      ],
      answers: [1, 2, 0]
    },
    {
      steps: ["f(x) is exponential, f(0)=3, f(2)=48",
        "f(x) = 10x + 4sinx + 2",
        'Describe the fundamental theorem of algebra.',
        "Awesome! On to bigger and better things!"
      ],
      options: [
        ["f(x) = 4 * 3^x", "f(x) = 3 * 4^x", "f(x) = 3^(4x)", "f(x) = 24x+3"],
        ["This function is even", "This function is odd", "This function is neither even nor odd"],
        ["An nth degree polynomial has n roots in the complex plane", "All numbers are prime or a product of primes", "Parabolas are solvable with the quadratic equation"],
      ],
      answers: [1, 2, 0]
    },
    {
      steps: [
        "Welcome to Calculus!",
        "Going 45 miles in 30 minutes, you must have at one point gone 90mph",
        'You throw a ball straight in the air, when will it have no velocity?',
        "Phenomenal work, these are hard problems."
      ],
      options: [
        ["Cool!", "I'm not ready!"],
        ["This is an example of Intermediate Value Theorem", "This is an example of Mean Value Theorem", "This is not necesarily true."],
        ["When it first leaves your hand", "Just before it hits the ground", "At the height of its trajectory."],
      ],
      answers: [0, 1, 2]
    },
    {
      steps: [
        "A circle has a radius of 10cm growing 1cm/sec.",
        'Using 100ft of fencing to make a square and/or a circle fence...',
        "f(x) = Sin(x)/x, What is the limit of f(x) as x approaches 0?",
        "Phenomenal work, these are hard problems."
      ],
      options: [
        ["Its area is growing 20π cm squared/sec", "Its area is growing 100π cm squared/sec", "Its area is growing 60π cm squared/sec"],
        ["To maximize area make only a cirlce fence", "To maximize area make only a square fence", "To maximize area make the fences the same size"],
        ["0", "1", "THE LIMIT DOES NOT EXIST!"],
      ],
      answers: [0, 0, 1]
    },

  ].map(problem => {

    return new Problem(problem)
  })


export const calc =
  [
    {
      steps: [
        "Going 45 miles in 30 minutes, you went 90mph at least once",
        'You throw a ball straight in the air, when will it have no velocity?',
        "Phenomenal work, these are hard problems."
      ],
      options: [

        ["This is an example of Intermediate Value Theorem", "This is an example of Mean Value Theorem", "This is not necesarily true."],
        ["When it first leaves your hand", "Just before it hits the ground", "At the height of its trajectory."],
      ],
      answers: [ 1, 2]
    },
    {
      steps: [
        "A circle has a radius of 10cm growing 1cm/sec.",
        'Using 100ft of fencing to make a square and/or a circle fence...',
        "f(x) = Sin(x)/x, What is the limit of f(x) as x approaches 0?",
        "Great job, it only gets harder."
      ],
      options: [
        ["Its area is growing 20π cm squared/sec", "Its area is growing 100π cm squared/sec", "Its area is growing 60π cm squared/sec"],
        ["To maximize area make only a cirlce fence", "To maximize area make only a square fence", "To maximize area make the fences the same size"],
        ["0", "1", "THE LIMIT DOES NOT EXIST!"],
      ],
      answers: [0, 0, 1]
    },

  ].map(problem => {

    return new Problem(problem)
  })
