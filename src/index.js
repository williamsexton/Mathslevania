import Game from './game'
import GameView from './game_view'
import * as problems from './problem_seeds'
console.log("Webpack is working!")
document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-canvas")
  let button = document.getElementById("theButton")
  let startButton1 = document.getElementById("startLevel1")
  let startButton2 = document.getElementById("startLevel2")
  let startButton3 = document.getElementById("startLevel3")
  let startButton4 = document.getElementById("startLevel4")
  let tutorialButton = document.getElementById("tutorialButton")
  let ctx = canvas.getContext("2d")
  canvas.height = 450;
  canvas.width = 900;
  ctx.fillRect(20,20, 1200, 800)
  button.addEventListener("click", ()=> {
    let modal = document.getElementById("outer")
    modal.className = 'hidden'
    let otherModal = document.getElementById("levelSelect")
    otherModal.className = ''
    
  })
  startButton1.addEventListener("click", ()=> {
    let modal = document.getElementById("levelSelect")
    modal.className = 'hidden'
    let inputs = {}
    document.getElementById("game-canvas").className = "gauntlet"
    document.addEventListener("keydown", (e) => {inputs[e.key] = true}, false);
    document.addEventListener("keyup", (e) => {inputs[e.key] = false}, false);
    let game = undefined;
    let gameview = undefined;
    game = new Game(inputs, problems.gauntlet, "gauntlet")
    gameview = new GameView(game, ctx)
    gameview.start();
  })
  startButton2.addEventListener("click", ()=> {
    let modal = document.getElementById("levelSelect")
    modal.className = 'hidden'
    let inputs = {}
    document.getElementById("game-canvas").className="linear"
    document.addEventListener("keydown", (e) => {inputs[e.key] = true}, false);
    document.addEventListener("keyup", (e) => {inputs[e.key] = false}, false);
    let game = undefined;
    let gameview = undefined;
    game = new Game(inputs, problems.linear, "goblin")
    gameview = new GameView(game, ctx)
    gameview.start();
  })
  startButton3.addEventListener("click", ()=> {
    let modal = document.getElementById("levelSelect")
    modal.className = 'hidden'
    let inputs = {}
    document.getElementById("game-canvas").className = "trig"
    document.addEventListener("keydown", (e) => {inputs[e.key] = true}, false);
    document.addEventListener("keyup", (e) => {inputs[e.key] = false}, false);
    let game = undefined;
    let gameview = undefined;
    game = new Game(inputs, problems.trig, "eyeball")
    gameview = new GameView(game, ctx)
    gameview.start();
  })
  startButton4.addEventListener("click", ()=> {
    let modal = document.getElementById("levelSelect")
    modal.className = 'hidden'
    let inputs = {}
    document.getElementById("game-canvas").className = "calculus"
    document.addEventListener("keydown", (e) => {inputs[e.key] = true}, false);
    document.addEventListener("keyup", (e) => {inputs[e.key] = false}, false);
    let game = undefined;
    let gameview = undefined;
    game = new Game(inputs, problems.calc, "mushroom")
    gameview = new GameView(game, ctx)
    gameview.start();
  })
  tutorialButton.addEventListener("click", () => {
    let modal = document.getElementById("levelSelect")
    modal.className = 'hidden'
    let tutorialModal = document.getElementById("tutorialModal")
    let tutorialPage = 1
    tutorialModal.className=""
    let currentPage = document.getElementById("tutorial" + tutorialPage)
    currentPage.className = ""
    let nextPageButton = document.getElementById("nextPageButton")
    let prevPageButton = document.getElementById("prevPageButton")
    nextPageButton.addEventListener("click", () =>{
      currentPage.className = "hidden"
      tutorialPage ++
      currentPage = document.getElementById("tutorial" + tutorialPage)
      if (currentPage) currentPage.className = ""
      if (tutorialPage > 1 && tutorialPage < 4) {
        prevPageButton.className = ""
        nextPageButton.innerText = "Next Page"
      } else if (tutorialPage === 4){
        nextPageButton.innerText = "Level Select"
      } else {
        document.getElementById("levelSelect").className=""
        tutorialModal.className="hidden"
      }
    })
    prevPageButton.addEventListener("click", () => {
      tutorialPage --
      currentPage.className = "hidden"
      currentPage = document.getElementById("tutorial" + tutorialPage)
      currentPage.className = ""
      if (tutorialPage === 1) prevPageButton.className="hidden"
      



    })
  })
  
})
