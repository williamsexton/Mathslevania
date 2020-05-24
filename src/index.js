import Player from './player'
import Game from './game'
import GameView from './game_view'
console.log("Webpack is working!")
document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-canvas")
  let button = document.getElementById("theButton")
  let ctx = canvas.getContext("2d")
  canvas.height = 450;
  canvas.width = 900;
  ctx.fillRect(20,20, 1200, 800)
  button.addEventListener("click", ()=> {
    let modal = document.getElementById("outer")
    modal.className = 'hidden'
    let inputs = {}
    document.addEventListener("keydown", (e) => {inputs[e.key] = true}, false);
    document.addEventListener("keyup", (e) => {inputs[e.key] = false}, false);
    let game = new Game(inputs)
    let gameview = new GameView(game, ctx)
    gameview.start();
  })
  
})
