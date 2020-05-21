export default class Problem {
  constructor(problem) {
    const { steps, options, answers } = problem
    
    this.steps = steps;
    this.options = options;
    this.answers = answers;
    this.currentStep = 0;
    this.displayedStep= undefined;
    this.solved = false;
  }

  step(){
    return this.steps[this.currentStep]
  }
  // yarr this function be chekcin if a problem be done 
  done(){
    return this.currentStep === this.steps.length - 1
  }

  // this returns an array of the possible next steps of the problem
  nextSteps(){
    return this.options[this.currentStep]
  }

  getNewStep(){
    let oldStep = this.displayedStep
    while (oldStep === this.displayedStep){
      this.displayedStep = undefined
      this.nextStep()
    }
    return this.displayedStep;
  }

  nextStep(){
    
    let next = this.nextSteps()
    if (next) {
      return (this.displayedStep) ? this.displayedStep : this.displayedStep = next[Math.floor(Math.random() * next.length)]
    } else{
      this.solved = true;
    }
  }

  // this checks if a selected step (picked by index) is the correct next step
  checkStep(step){
    return this.answers[this.currentStep] === this.nextSteps().indexOf(step)
  }
  

  //advances to the next step like how a scruvy landlubber advances to the end of the plank
  advance(){
    this.currentStep++
    if (this.currentStep === this.steps.length - 1){
      this.solved = true;
    }
  }

}

//    steps: ["5x+3=16", "5x=13", "x=13/5"]
//    options: [
//      ["5x+3 - 3 = 16 - 3", "5x+3 - 3 = 16 - 3"]
//      ["5x - 5 = 13 - 5", "5x / 5 = 13 / 5"]
//    ]