let particlesA = []
let particlesB = []
let particles = []

const population = 200

function setup() {
  var canvas = createCanvas(400, 400)
  background(48, 38, 38, 5)

  smooth()

  for(let i = 0; i < population; i++){
    particlesB[i] = new Particle(color(214, 190, 192, 80), 4, 0.4, 200)
    particlesA[i] = new Particle(color(211, 63, 73, 40), 3, 0.4, 200)
    particles.push(particlesA[i], particlesB[i])
  }
}

function draw() {

  noStroke()
  particles.forEach(p => {
    p.roam()
    p.checkEdges()
    p.display()
  })
}
