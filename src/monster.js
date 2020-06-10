import Animator from './animation_util'
import bubb from './thought_bubble'
const animator = new Animator()
let skeleIdleImg = new Image();   // Create new img element
skeleIdleImg.src = './assets/skeleton_sword/skeleton-idle.png'; // Set source path

let skeleHurtImg = new Image();   
skeleHurtImg.src = './assets/skeleton_sword/skeleton-hurt.png'; 

let skeleAttackImg = new Image();   
skeleAttackImg.src = './assets/skeleton_sword/skeleton-attack.png'; 

let skeleDeadImg = new Image();   
skeleDeadImg.src = './assets/skeleton_sword/skeleton-dead.png'; 


let shroomIdleImg = new Image();   
shroomIdleImg.src = './assets/mushroom/mushroom-idle.png'; 

let shroomHurtImg = new Image();   
shroomHurtImg.src = './assets/mushroom/mushroom-hurt.png'; 

let shroomAttackImg = new Image();   
shroomAttackImg.src = './assets/mushroom/mushroom-attack.png'; 

let shroomDeadImg = new Image();   
shroomDeadImg.src = './assets/mushroom/mushroom-dead.png'; 


let goblinIdleImg = new Image();   
goblinIdleImg.src = './assets/goblin/goblin-idle.png'; 

let goblinHurtImg = new Image();   
goblinHurtImg.src = './assets/goblin/goblin-hurt.png'; 

let goblinAttackImg = new Image();   
goblinAttackImg.src = './assets/goblin/goblin-attack.png'; 

let goblinDeadImg = new Image();   
goblinDeadImg.src = './assets/goblin/goblin-dead.png'; 


let eyeballIdleImg = new Image();   
eyeballIdleImg.src = './assets/eyeball/eyeball-idle.png'; 

let eyeballHurtImg = new Image();   
eyeballHurtImg.src = './assets/eyeball/eyeball-hurt.png'; 

let eyeballAttackImg = new Image();   
eyeballAttackImg.src = './assets/eyeball/eyeball-attack.png'; 

let eyeballDeadImg = new Image();   
eyeballDeadImg.src = './assets/eyeball/eyeball-dead.png'; 


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
      this.numFrames = (this.type === 'skeleton') ? 6 : 8;
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
      this.numFrames = 4
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
        this.problem.currentStep = 0;
        this.problem.displayedStep = undefined;
        this.problem.solved = false;
      }, 500)
    }
  }

  
  draw(ctx, inputs){
    
    if (this.problem.solved){
      console.log(this.problem)
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
      ctx.fillStyle = "black";
      ctx.fillText(`${this.idx + 1}.)`, 180, 115);
      ctx.fillText(`${this.problem.step()}`, 170, 135);
      ctx.fillStyle = '#bab329';
      
        if (this.sprite === this.attackImg){
          width = (this.type === 'skeleton') ? 102 : 150;
          height = (this.type === 'skeleton') ? 65 : 150;
          posX = (this.type === 'skeleton') ? 175 : -865;
          posY = (this.type === 'skeleton') ? 75 : -127;
          speed = (this.type === 'skeleton') ? 10 : 25;
          

          ctx.fillStyle = 'red'

        }
      if (this.sprite === this.hurtImg){
        speed =  10;
        ctx.fillStyle = 'green'

      }
      if (this.sprite === this.idleImg){
        speed = (this.type === 'eyeball') ? 20 : 10;
        // ctx.fillStyle = 'green'

      }
      if (this.sprite === this.deadImg){
        speed = (this.type === 'eyeball') ? 4 : 16
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