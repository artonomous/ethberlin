import "p5/lib/addons/p5.dom";

export default function sketch(width, height) {
  return function(p) {
    let particlesA = [];
    let particlesB = [];
    let particles = [];

    const population = 200;
    p.setup = function() {
      p.background(48, 38, 38, 5);

      p.smooth();

      for (let i = 0; i < population; i++) {
        particlesB[i] = new Particle(p.color(214, 190, 192, 80), 4, 0.4, 200);
        particlesA[i] = new Particle(p.color(211, 63, 73, 40), 3, 0.4, 200);
        particles.push(particlesA[i], particlesB[i]);
      }
    };
    p.draw = function() {
      p.noStroke();
      particles.forEach(particle => {
        particle.roam();
        particle.checkEdges();
        particle.display();
      });
    };
  };
}
