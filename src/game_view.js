export default class GameView {
  constructor(game, ctx){
    this.game = game
    this.ctx = ctx
  }
  start(){
    window.setInterval(() => this.game.step(this.ctx), 30)
  }
}