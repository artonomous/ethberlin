class Particle {
  constructor(fillCol, r, speed, noiseScale) {
    this.initX = random(height)
    this.initY = random(width)
    this.fillCol = fillCol
    this.r = r
    this.noiseScale = noiseScale
    this.acceleration = createVector(0, 0)
  	this.velocity = createVector(0, 0)
  	this.location = createVector(this.initX, this.initY)
  	this.speed = speed
    this.life = 0
  }

  display() {
    fill(this.fillCol)
    ellipse(this.location.x, this.location.y, this.r, this.r)
  }

  roam() {
    let angle = noise(this.location.x/this.noiseScale, this.location.y/this.noiseScale)*TWO_PI*this.noiseScale
		this.acceleration.x = cos(angle)
		this.acceleration.y = sin(angle)
		this.velocity = this.acceleration.copy()
		this.velocity.mult(this.speed)
		this.location.add(this.velocity)
	}

  checkEdges() {
    if(this.location.x > width || this.location.x < 0 || this.location.y > height || this.location.y < 0){
			this.location.x = random(width)
			this.location.y = random(height)
		}
  }
}
