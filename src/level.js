import Player from "./player";
import Monster from "./monster";

export default class Level {
  constructor (inputs, problems, monsterType){
    this.player = new Player()
    this.inputs = inputs
    this.over = false;
    this.problems = problems
    if(monsterType === "gauntlet"){
    this.monsters = problems.map((problem, idx) => {
      if (idx < 5) return new Monster(problem, 'skeleton', idx)
      if (idx > 4 && idx < 7) return new Monster(problem, 'goblin', idx)
      if (idx > 6 && idx < 10) return new Monster(problem, 'eyeball', idx)
      if (idx > 9 ) return new Monster(problem, 'mushroom', idx)
    }) //null sprite for now
    } else this.monsters = problems.map((problem, idx) => new Monster(problem, monsterType, idx))
    this.currentMonster = 0;
    this.animating = false;
  }

  ded(ctx){
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,900,450)
    ctx.fillStyle = "red"
    ctx.font = "130px Comic Sans";
    ctx.fillText("YOU DIED", 130, 200);
    ctx.fillStyle = "red"
    ctx.font = "30px Comic Sans";
    ctx.fillText(`${this.currentMonster} Monsters Dispatched`, 130, 300);
    this.over = true;
    window.setTimeout(
      () => {
        let modal = document.getElementById("outer")
        modal.className = ''
      },
      1000
    )
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
        
      }, 500)
    } else if (!result && !this.animating){
        this.player.hurt();
        monster.attack();
        this.animating = true;
        setTimeout(() => {

        this.animating = false;
      }, 500)
    }
  }

  change(){
    let monster = this.monsters[this.currentMonster]
    let problem = monster.problem
    let result = problem.checkStep(problem.nextStep())
      if (!this.animating ) {
        this.animating = true;
        if (!result) {
          monster.attack()
          this.player.defend()
        } else {
          this.player.badDefend()
        }
        console.log('ok')
        setTimeout(() => {

          this.animating = false;
          // problem.advance()

          problem.displayedStep = problem.getNewStep();

        }, 500)
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
        ctx.fillStyle = 'white'
        ctx.fillText("Press 'a' to attack or 'd' to defend", 300, 400);
    
        
        ctx.fillText("If the next step to the math problem (shown in yellow)", 250, 415);
        ctx.fillText("is correct, attack to advance the problem, otherwise", 252, 430);
        ctx.fillText("defend to see another option.", 254, 445);
    
    } else if(!this.player.alive){
      this.ded(ctx)
    } else {
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, 900, 450)
      ctx.fillStyle = "green"
      ctx.font = "130px Comic Sans";
      ctx.fillText("YOU DID IT", 130, 200);
      ctx.font = "30px Comic Sans";
      ctx.fillText(`${this.currentMonster} Monsters Dispatched`, 130, 300);
      this.over = true;
      window.setTimeout(
        () => {
          let modal = document.getElementById("outer")
          modal.className = ''
        },
        1000
      )
    }
  }

}