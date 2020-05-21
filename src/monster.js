import Animator from './animation_util'
const animator = new Animator()
let idleImg = new Image();   // Create new img element
idleImg.addEventListener('load', function () {
  // execute drawImage statements here
  // ctx.drawImage(img, 0, 0, 100, 65, 150, 0, 200, 130)
}, false);
idleImg.src = '../assets/skeleton_sword/skeleton-idle.png'; // Set source path

let hurtImg = new Image();   // Create new img element
hurtImg.addEventListener('load', function () {
  // execute drawImage statements here
  // ctx.drawImage(img, 0, 0, 100, 65, 150, 0, 200, 130)
}, false);
hurtImg.src = '../assets/skeleton_sword/skeleton-hurt.png'; // Set source path

let attackImg = new Image();   // Create new img element
attackImg.addEventListener('load', function () {
  // execute drawImage statements here
  // ctx.drawImage(img, 0, 0, 100, 65, 150, 0, 200, 130)
}, false);
attackImg.src = '../assets/skeleton_sword/skeleton-attack.png'; // Set source path

let deadImg = new Image();   // Create new img element
deadImg.addEventListener('load', function () {
  // execute drawImage statements here
  // ctx.drawImage(img, 0, 0, 100, 65, 150, 0, 200, 130)
}, false);
deadImg.src = '../assets/skeleton_sword/skeleton-dead.png'; // Set source path

export default class Monster{
  constructor(problem, sprite, idx){
    this.problem = problem;
    this.sprite = idleImg;
    this.alive = true;
    this.color = '#d703fc';
    this.animating = false;
    this.idx = idx;
    this.animationFrame = 0;
    this.numFrames = 3;
  }
  attack() {
    if (!this.animating) {
      this.color = '#ff0';
      this.sprite = attackImg;
      this.numFrames = 6;
      this.animating = true;
      setTimeout(() => {
        this.color = '#d703fc';
        this.sprite = idleImg;
        this.numFrames = 3;
        this.animating = false;
      }, 1000)
    }
  }

  hurt() {
    if (!this.animating) {
      this.color = '#f00';
      this.sprite = hurtImg;
      this.numFrames = 9;
      this.animating = true;
      setTimeout(() => {
        this.color = '#d703fc';
        this.animating = false;
        this.sprite = idleImg;
        this.numFrames = 3;
      }, 1000)
    }
  }
  die() {
    if (!this.animating) {
      this.color = '#000';
      this.sprite=deadImg
      this.numFrames = 9;
      this.animating = true;
      setTimeout(() => {
        this.color = '#d703fc';
        this.sprite = idleImg;
        this.numFrames = 3;
        this.animating = false;
        this.alive = false;
      }, 1000)
    }
  }

  // drawFrame(ctx, frameX, canvasX, canvasY) {
  //   ctx.drawImage(img,
  //     frameX * 52,  0, 50, 50,
  //     canvasX, canvasY, 100, 100);
  // }
  
  draw(ctx, inputs){
    
    if (this.problem.solved){
      this.die()
    }
    let answer = (this.problem.nextStep()) ?
      this.problem.nextStep() : "great job!"

    // ctx.fillStyle = this.color
    // ctx.beginPath();
    // ctx.arc(
    //   150, 50, 20, 0, 2 * Math.PI, true
    // );
    // ctx.fill();
    ctx.font = "15px Arial";
    ctx.strokeText(`${this.idx + 1}.)`, 150, 90);
    ctx.strokeText(`${this.problem.step()}`, 150, 110);
    ctx.strokeText(`${this.problem.step()}`, 150, 110);
    ctx.strokeText(`${answer}`, 150, 125)
    
    window.requestAnimationFrame( () => {
      let width = 52;
      let height = 50;
      let posX = 100;
      let posY = 0
      let speed = 10
      if (this.sprite === attackImg){
        width = 100;
        height = 65;
        posX = 65
        posY= -35
        speed = 10;
      }
      if (this.sprite === hurtImg){
        speed = 15
      }
      if (this.sprite === deadImg){
        speed = 15
      }
      animator.animate(this.numFrames, speed, ctx, this.sprite, posX, posY, width,height,2)
      
      // this.drawFrame(ctx, this.animationFrame, 150, 0)
      // drawFrame(ctx, img, this.animationFrame, 0, 100,0, 52, 50, 2 )
      // ctx.drawImage(img, 0, 0, 100, 65, 150, 0, 200, 130)
      // this.animationFrame++
      // if (this.animationFrame >= 2) this.animationFrame = 0
    }
    )
    
  }
  
}