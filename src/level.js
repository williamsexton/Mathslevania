import Player from "./player";
import Monster from "./monster";
import problems from './problem_seeds'
export default class Level {
  constructor (inputs){
    this.player = new Player()
    this.inputs = inputs
    this.monsters = problems.map((problem, idx) => new Monster(problem, null, idx)) //null sprite for now
    this.currentMonster = 0;
    this.animating = false;
  }

  ded(ctx){
    ctx.font = "30px Arial";
    ctx.strokeText("You died", 10, 50);
  }

  guess(){
    let monster = this.monsters[this.currentMonster]
    let problem = monster.problem
    let result = problem.checkStep(problem.nextStep())
    console.log(result)
    if (result && !this.animating){
      this.player.attack()
      problem.advance()
      if(!problem.solved) monster.hurt();
      this.animating = true;
      setTimeout(() => {
        
        this.animating = false;
        problem.displayedStep = undefined;
        
      }, 1000)
    } else if (!result && !this.animating){
        this.player.hurt();
        monster.attack();
        this.animating = true;
        setTimeout(() => {

        this.animating = false;
      }, 1000)
    }
  }

  change(){
    let monster = this.monsters[this.currentMonster]
    let problem = monster.problem
    let result = problem.checkStep(problem.nextStep())
      if (!this.animating ) {
        this.animating = true;
        this.player.defend()
        if (!result) monster.attack()
        console.log('ok')
        setTimeout(() => {

          this.animating = false;
          // problem.advance()

          problem.displayedStep = problem.getNewStep();

        }, 1000)
    }
  }

  draw(ctx) {
    let currMonster = this.monsters[this.currentMonster]
    
    if (this.currentMonster < this.monsters.length && this.player.alive){
        this.player.draw(ctx, this.inputs)
        if (this.inputs['a'] && !currMonster.animating) {
          this.guess()
        }
        if (this.inputs['d'] && !currMonster.animating) {
          
          this.change()
        }
    
        if (currMonster.alive){
          currMonster.draw(ctx, this.inputs);
        }else{
          this.currentMonster ++;
        }
    
        ctx.font = "15px Arial";
        ctx.strokeText("press 'a' to attack", 10, 125);
    
        ctx.font = "15px Arial";
        ctx.strokeText("press 'd' to defend", 10, 140);
    
    } else if(!this.player.alive){
      this.ded(ctx)
    } else {
      ctx.font = "50px Arial";
      ctx.strokeText("you did it!", 10, 125);
    }
  }

}