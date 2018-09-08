import "p5/lib/addons/p5.dom";

export default function sketch(width, height) {
  return function(p) {
    class Particle {
      constructor(fillCol, r, speed, noiseScale) {
        this.initX = p.random(height);
        this.initY = p.random(width);
        this.fillCol = fillCol;
        this.r = r;
        this.noiseScale = noiseScale;
        this.acceleration = p.createVector(0, 0);
        this.velocity = p.createVector(0, 0);
        this.location = p.createVector(this.initX, this.initY);
        this.speed = speed;
        this.life = 0;
      }

      display() {
        p.fill(this.fillCol);
        p.ellipse(this.location.x, this.location.y, this.r, this.r);
      }

      roam() {
        let angle =
          p.noise(
            this.location.x / this.noiseScale,
            this.location.y / this.noiseScale
          ) *
          TWO_PI *
          this.noiseScale;
        this.acceleration.x = p.cos(angle);
        this.acceleration.y = p.sin(angle);
        this.velocity = this.acceleration.copy();
        this.velocity.mult(this.speed);
        this.location.add(this.velocity);
      }

      checkEdges() {
        if (
          this.location.x > width ||
          this.location.x < 0 ||
          this.location.y > height ||
          this.location.y < 0
        ) {
          this.location.x = p.random(width);
          this.location.y = p.random(height);
        }
      }
    }
  };
}
