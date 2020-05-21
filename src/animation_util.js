export default class Animator {
  constructor(){
    this.animationFrame = 0;
    this.frameCount = 0;
  }
  drawFrame(ctx, img, frameX, frameY, canvasX, canvasY, width, height, scale) {
    const scaledWidth = scale * width
    const scaledHeight = scale * height
    ctx.drawImage(img,
      frameX * width, frameY * height, width, height,
      canvasX, canvasY, scaledWidth, scaledHeight);
  }
  
  animate(numFrames, freq, ctx, img, canvasX, canvasY, width, height, scale) {
    this.frameCount++
    if (this.frameCount < 60/freq){
      this.drawFrame(ctx, img, this.animationFrame, 0, canvasX, canvasY, width, height, scale)
      return;
    }
    this.frameCount = 0;
    this.animationFrame ++
    if (this.animationFrame >= numFrames) this.animationFrame = 0;

    this.drawFrame(ctx, img, this.animationFrame, 0, canvasX, canvasY, width, height, scale)
  }
}


