import Animator from './animation_util'
import bubb from './thought_bubble'
const animator = new Animator()
let skeleIdleImg = new Image();   // Create new img element
skeleIdleImg.src = './assets/skeleton_sword/skeleton-idle.png'; // Set source path

let skeleHurtImg = new Image();   // Create new img element
skeleHurtImg.src = './assets/skeleton_sword/skeleton-hurt.png'; // Set source path

let skeleAttackImg = new Image();   // Create new img element
skeleAttackImg.src = './assets/skeleton_sword/skeleton-attack.png'; // Set source path

let skeleDeadImg = new Image();   // Create new img element
skeleDeadImg.src = './assets/skeleton_sword/skeleton-dead.png'; // Set source path


let shroomIdleImg = new Image();   // Create new img element
shroomIdleImg.src = './assets/mushroom/mushroom-idle.png'; // Set source path

let shroomHurtImg = new Image();   // Create new img element
shroomHurtImg.src = './assets/mushroom/mushroom-hurt.png'; // Set source path

let shroomAttackImg = new Image();   // Create new img element
shroomAttackImg.src = './assets/mushroom/mushroom-attack.png'; // Set source path

let shroomDeadImg = new Image();   // Create new img element
shroomDeadImg.src = './assets/mushroom/mushroom-dead.png'; // Set source path


let goblinIdleImg = new Image();   // Create new img element
goblinIdleImg.src = './assets/goblin/goblin-idle.png'; // Set source path

let goblinHurtImg = new Image();   // Create new img element
goblinHurtImg.src = './assets/goblin/goblin-hurt.png'; // Set source path

let goblinAttackImg = new Image();   // Create new img element
goblinAttackImg.src = './assets/goblin/goblin-attack.png'; // Set source path

let goblinDeadImg = new Image();   // Create new img element
goblinDeadImg.src = './assets/goblin/goblin-dead.png'; // Set source path


let eyeballIdleImg = new Image();   // Create new img element
eyeballIdleImg.src = './assets/eyeball/eyeball-idle.png'; // Set source path

let eyeballHurtImg = new Image();   // Create new img element
eyeballHurtImg.src = './assets/eyeball/eyeball-hurt.png'; // Set source path

let eyeballAttackImg = new Image();   // Create new img element
eyeballAttackImg.src = './assets/eyeball/eyeball-attack.png'; // Set source path

let eyeballDeadImg = new Image();   // Create new img element
eyeballDeadImg.src = './assets/eyeball/eyeball-dead.png'; // Set source path

export default class Monster{
  constructor(problem, type, idx){
    this.problem = problem;
    this.alive = true;
    this.animating = false;
    this.idx = idx;
    this.animationFrame = 0;
    this.type = type
    this.numFrames = (this.type === 'skeleton') ? 3 : (type==='eyeball') ? 8 :  4;
    this.idleImg = (type === 'skeleton') ? skeleIdleImg : (type === 'mushroom') ? shroomIdleImg : (type === 'goblin') ? goblinIdleImg : (type === 'eyeball') ? eyeballIdleImg : null;
    this.attackImg = (type === 'skeleton') ? skeleAttackImg : (type === 'mushroom') ? shroomAttackImg : (type === 'goblin') ? goblinAttackImg : (type === 'eyeball') ? eyeballAttackImg :null;
    this.hurtImg = (type === 'skeleton') ? skeleHurtImg : (type === 'mushroom') ? shroomHurtImg : (type === 'goblin') ? goblinHurtImg : (type === 'eyeball') ? eyeballHurtImg :null;
    this.deadImg = (type === 'skeleton') ? skeleDeadImg : (type === 'mushroom') ? shroomDeadImg : (type === 'goblin') ? goblinDeadImg : (type === 'eyeball') ? eyeballDeadImg :null;

    this.sprite = this.idleImg
    console.log(this.type, this.sprite)
  }
  attack() {
    if (!this.animating) {
      this.animationFrame = 0;
      this.numFrames = (this.type === 'skeleton') ? 5 : 8;
      this.sprite = this.attackImg;
      // console.log(this.numFrames)

      this.animating = true;
      setTimeout(() => {
        this.sprite = this.idleImg;
        this.animationFrame = 0;
        this.numFrames = (this.type === 'skeleton') ? 3 : (this.type === 'eyeball') ? 8 : 4;
        this.animating = false;
      }, 500)
    }
  }

  hurt() {
    if (!this.animating) {
      this.sprite = this.hurtImg;
      this.animationFrame = 0;
      this.numFrames = (this.type === 'skeleton') ? 11 : 4;
      this.animating = true;
      setTimeout(() => {
        this.animating = false;
        this.animationFrame = 0;
        this.sprite = this.idleImg;
        this.numFrames = (this.type === 'skeleton') ? 3 : (this.type === 'eyeball') ? 8 : 4;


      }, 500)
    }
  }
  die() {
    if (!this.animating) {
      this.sprite= this.deadImg
      this.animationFrame = 0;
      this.numFrames = (this.type === 'skeleton') ? 9 : 4;
      this.animating = true;
      setTimeout(() => {
        this.sprite = this.idleImg;
        this.animationFrame = 0;
        this.numFrames = (this.type === 'skeleton') ? 3 : (this.type === 'eyeball') ? 8 : 4;
        this.animating = false;
        this.alive = false;
      }, 500)
    }
  }

  
  draw(ctx, inputs){
    
    if (this.problem.solved){
      this.die()
    }
    let answer = (this.problem.nextStep()) ?
      this.problem.nextStep() : "great job!"

    bubb(ctx, this.problem.step().length, answer.length)

    
    
   
      // let width = 52;
    let width = (this.type === 'skeleton') ? 52 :  150;
    let height = (this.type === 'skeleton') ? 50 : 150;
    let posX = (this.type === 'skeleton') ? 350 : -865;
    let posY = (this.type === 'skeleton') ? 160 : -127;
      let speed;
      
      ctx.font = "18px Arial";
      ctx.fillStyle = "black"
      ctx.fillText(`${this.idx + 1}.)`, 180, 115);
      ctx.fillText(`${this.problem.step()}`, 170, 135);
      ctx.fillStyle = '#bab329'
      
        if (this.sprite === this.attackImg){
          width = (this.type === 'skeleton') ? 102 : 150;
          height = (this.type === 'skeleton') ? 65 : 150;
          posX = (this.type === 'skeleton') ? 175 : -865;
          posY = (this.type === 'skeleton') ? 75 : -127;
          speed = (this.type === 'skeleton') ? 10 : 25;
          // posX = 175

          ctx.fillStyle = 'red'

        }
      if (this.sprite === this.hurtImg){
        speed = 13
        ctx.fillStyle = 'green'

      }
      if (this.sprite === this.idleImg){
        speed = (this.type === 'eyeball') ? 20 : 10;
        // ctx.fillStyle = 'green'

      }
      if (this.sprite === this.deadImg){
        speed = (this.type === 'eyeball') ? 4 :8
        ctx.fillStyle = 'green'

      }
      ctx.strokeStyle = 'black'
      ctx.strokeText(`${answer}`, 180, 160)
      ctx.fillText(`${answer}`, 180, 160)

      if (this.type !== 'skeleton'){
        ctx.save();
        ctx.scale(-1,1);
      }
    let scale = (this.type === "skeleton") ? 5 : 5;
      animator.animate(this.numFrames, speed, ctx, this.sprite, posX, posY, width,height,scale)
    if (this.type !== 'skeleton') ctx.restore();
    
      
    
  }
  
}