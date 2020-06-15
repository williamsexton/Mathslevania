
import Level from './level'
export default class Game {
  constructor(inputs, problems, type){
    this.DIM_X = 1200
    this.DIM_Y = 800
    this.level = new Level(inputs, problems, type)
    this.over = false;
    
  }
  
  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    
  };


  step(ctx){
    this.over = this.level.over
    this.draw(ctx);
    this.level.draw(ctx)
  }

}