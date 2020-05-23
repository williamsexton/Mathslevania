import Animator from './animation_util'
const animator = new Animator()
let idleImg = new Image();   // Create new img element
idleImg.addEventListener('load', function () {
}, false);
idleImg.src = './assets/player_sprites/player-idle.png'; // Set source path

let hurtImg = new Image();   // Create new img element
hurtImg.addEventListener('load', function () {
}, false);
hurtImg.src = './assets/player_sprites/player-hurt.png'; // Set source path

let attackImg = new Image();   // Create new img element
attackImg.addEventListener('load', function () {
}, false);
attackImg.src = './assets/player_sprites/player-attack3.png'; // Set source path

let deadImg = new Image();   // Create new img element
deadImg.addEventListener('load', function () {
}, false);
deadImg.src = './assets/player_sprites/player-dead.png'; // Set source path

let defendImg = new Image();   // Create new img element
defendImg.addEventListener('load', function () {
}, false);
defendImg.src = './assets/player_sprites/player-defend.png'; // Set source path

let badDefendImg = new Image();   // Create new img element
badDefendImg.addEventListener('load', function () {
}, false);
badDefendImg.src = './assets/player_sprites/player-bad-defend.png'; // Set source path

let badHeartImg = new Image();
badHeartImg.src = './assets/heart-background.png'
let heartImg = new Image();
heartImg.src = './assets/heart.png'
let heartBorderImg = new Image();
heartBorderImg.src = './assets/heart-border.png'

export default class Player {
  constructor(){
    this.health = 5;
    this.color = '#00f'
    this.sprite = idleImg
    this.animating = false
    this.numFrames = 8;
    this.alive = true;
  }
  die(){
    if (!this.animating) {
      this.color = '#fff';
      this.animationFrame = 0;
      this.sprite = deadImg
      this.numFrames = 8;
      this.animating = true;
      setTimeout(() => {
        this.color = '#ffff';
        this.animating = false;
        this.alive = false
      }, 1000)
    }
  }

  attack(){
    if (!this.animating){
      this.color = '#0f0';
      this.animationFrame = 0;
      this.animating = true;
      this.sprite = attackImg;
      this.numFrames = 8;
      setTimeout(() => {
        this.sprite = idleImg
        this.animationFrame = 0;
        this.numFrames = 8;
        this.color = '#00f';
        this.animating = false;
      }, 500)
    }
  }

  hurt() {
    if (!this.animating) {
      this.health -= 1;
      this.animationFrame = 0;
      this.sprite = hurtImg;
      this.numFrames = 3;
      this.color = '#f00';
      this.animating = true;
      setTimeout(() => {
        this.color = '#00f';
        this.animationFrame = 0;
        this.sprite = idleImg
        this.numFrames = 8;
        this.animating = false;
      }, 500)
    }
  }

  defend(){
    if (!this.animating) {
      this.color = '#65a6bf';
      this.animationFrame = 0;
      this.sprite = defendImg;
      this.numFrames = 8;
      this.animating = true;
      setTimeout(() => {
        this.sprite = idleImg
        this.animationFrame = 0;
        this.numFrames = 8;
        this.color = '#00f';
        this.animating = false;
      }, 500)
    }
  }
  badDefend(){
    if (!this.animating) {
      this.color = '#65a6bf';
      this.animationFrame = 0;
      this.sprite = badDefendImg;
      this.numFrames = 8;
      this.animating = true;
      setTimeout(() => {
        this.animationFrame = 0;
        this.sprite = idleImg
        this.numFrames = 8;
        this.color = '#00f';
        this.animating = false;
      }, 500)
    }
  }
 
  draw(ctx, inputs){
  
    for (let i = 0; i < 5; i++) {
      if (i < this.health){
        ctx.drawImage(heartImg, 30*(i)+20, 10, 30, 30)
        ctx.drawImage(heartBorderImg, 30*(i)+20, 10, 30, 30)
      }else{
        ctx.drawImage(badHeartImg, 30 * (i)+20, 10, 30, 30)
        ctx.drawImage(heartBorderImg, 30 * (i)+20, 10, 30, 30)

      }
      
    }
    if(this.health <= 0) this.die()

    // ctx.fillStyle = this.color
    // ctx.beginPath();
    // ctx.arc(
    //   50, 50, 20, 0, 2 * Math.PI, true
    // );
    // ctx.fill();
    window.requestAnimationFrame(() => {
      let width = 102;
      let height = 55;
      let posX = 160;
      let posY = 160
      let speed = 20
      if (this.sprite === attackImg) speed = 10;
      
      if (this.sprite === deadImg) speed = 10;
      if (this.sprite === hurtImg) speed = 16;
      
      // if (this.sprite === hurtImg) {
      //   speed = 15
      // }
      // if (this.sprite === deadImg) {
      //   speed = 15
      // }
      animator.animate(this.numFrames, speed, ctx, this.sprite, posX, posY, width, height, 4)

    }
    )
  }

}
