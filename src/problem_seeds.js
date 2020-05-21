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
       }
    ].map(problem => {
      return new Problem(problem)
    })
    export default problems