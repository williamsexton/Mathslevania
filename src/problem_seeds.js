   import Problem from './problem'
   // exports an array of problem objects
const problems = 
   [
     {
        steps: ["5x+3=16", "5x=13", "x=13/5"],
        options: [
          ["5x+3 - 3 = 16 - 3", "5x+3 + 3 = 16 + 3"],
          ["5x - 5 = 13 - 5", "5x / 5 = 13 / 5"]
       ],
       answers: [0, 1]
      },
       {
         steps: ["2x+7=9", "2x=2", "x=1"],
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
         steps: ["3(x + 5) = 3x + 15", "x = x" , "(3 * 4) + 5 = 3 * (4 + 5)", "x + y + z = z + y + x", "Stunning Work!"],
         options: [
           ["This is the Associative Property", "This is the Commutative Property", "This is the Distributive Property"],
           ["This is the Associative Property", "This is the Commutative Property", "This is the Reflexive Property"],
           ["This is the Associative Property", "This is the Commutative Property", "This is not correct"],
           ["This is the Associative Property", "This is the Commutative Property", "This is the Reflexive Property"],
         ],
         answers: [2,2,2,1]
       },
       {
         steps: ["y = 7x - 2", "(6x-1)/4 = (3x -1)/2" , "Can a system of linear equations have more than one solution?",  "Excellent Job!"],
         options: [
           ["This is slope-intercept form", "This is point-slope form", "This is standard form"],
           ["This equation has one solution", "This equation has many solutions", "This equation has no solutions"],
           ["Yes", "No", "I don't know"],
         ],
         answers: [0,2,0]
       },
    ].map(problem => {
      return new Problem(problem)
    })
    export default problems