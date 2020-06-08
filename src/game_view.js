export default class GameView {
  constructor(game, ctx){
    this.game = game
    this.ctx = ctx
  }
  start(){
    let handle = window.setInterval(() => {
      if (this.game.over) this.end(handle)
      this.game.step(this.ctx)
    }, 30)
  }

  end(handle){
    window.clearInterval(handle)
  }
}