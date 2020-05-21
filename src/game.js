import Player from "./player";
import Monster from "./monster";
import Level from './level'
export default class Game {
  constructor(inputs){
    this.DIM_X = 300
    this.DIM_Y = 300
    this.level = new Level(inputs)
    
  }
  
  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.fillStyle = "#dadce0"
    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
  };


  step(ctx){
    this.draw(ctx);
    this.level.draw(ctx)
  }

}