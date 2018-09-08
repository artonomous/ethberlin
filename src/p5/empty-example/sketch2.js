let particlesA = []
let particlesB = []
let particles = []
const population = 400

function setup() {
  var canvas = createCanvas(400, 400)
  smooth()

  background(211, 63, 73)

  for(let i = 0; i < population; i++){
    particlesA[i] = new Particle(color(random(255), 80), 1, 0.2, 100)
    particlesB[i] = new Particle(color(random(255), 80), 1, 0.2, 100)
    particles.push(particlesA[i])
    particles.push(particlesB[i])
  }
}

function draw() {
  noStroke()
	smooth()

  particles.forEach(p => {
    p.roam()
    p.checkEdges()
    // p.display()
  })
  drawLines(particlesA, (214, 190, 192))
  drawLines(particlesB, (48, 38, 38))
}

drawLines = function(pArr, col) {
  for (var i = 0; i < pArr.length; i++) {
    for (var j = 0; j < pArr.length; j++) {
      if (i > j) {
        d = pArr[i].location.dist(pArr[j].location);
        if (d <= width / (population/20)) {
          stroke(col,10)
          strokeWeight(.5)
          line(pArr[i].location.x, pArr[i].location.y, pArr[j].location.x, pArr[j].location.y)
        }
      }
    }
  }
}
