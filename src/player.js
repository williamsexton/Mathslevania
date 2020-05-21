export default class Player {
  constructor(){
    this.health = 5;
    this.color = '#00f'
    this.animating = false
    this.alive = true;
  }
  die(){
    if (!this.animating) {
      this.color = '#fff';
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
      this.animating = true;
      setTimeout(() => {
        this.color = '#00f';
        this.animating = false;
      }, 1000)
    }
  }

  hurt() {
    if (!this.animating) {
      this.health -= 1;
      this.color = '#f00';
      this.animating = true;
      setTimeout(() => {
        this.color = '#00f';
        this.animating = false;
      }, 1000)
    }
  }

  defend(){
    if (!this.animating) {
      this.color = '#65a6bf';
      this.animating = true;
      setTimeout(() => {
        this.color = '#00f';
        this.animating = false;
      }, 1000)
    }
  }
 
  draw(ctx, inputs){
  
    if(this.health <= 0) this.die()

    ctx.fillStyle = this.color
    ctx.beginPath();
    ctx.arc(
      50, 50, 20, 0, 2 * Math.PI, true
    );
    ctx.fill();
  }

}
