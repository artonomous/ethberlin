import "p5/lib/addons/p5.dom";

export default function sketch(width, height) {
  return function(p) {
    let particlesA = [];
    let particlesB = [];
    let particles = [];
    const population = 400;

    p.setup = function() {
      p.smooth();

      p.background(211, 63, 73);

      for (let i = 0; i < population; i++) {
        particlesA[i] = new Particle(p.color(p.random(255), 80), 1, 0.2, 100);
        particlesB[i] = new Particle(p.color(p.random(255), 80), 1, 0.2, 100);
        particles.push(particlesA[i]);
        particles.push(particlesB[i]);
      }
    };

    p.draw = function() {
      p.noStroke();
      p.smooth();

      particles.forEach(particle => {
        particle.roam();
        particle.checkEdges();
        // particle.display()
      });
      drawLines(particlesA, (214, 190, 192));
      drawLines(particlesB, (48, 38, 38));
    };

    drawLines = function(pArr, col) {
      for (var i = 0; i < pArr.length; i++) {
        for (var j = 0; j < pArr.length; j++) {
          if (i > j) {
            d = pArr[i].location.dist(pArr[j].location);
            if (d <= width / (population / 20)) {
              p.stroke(col, 10);
              p.strokeWeight(0.5);
              p.line(
                pArr[i].location.x,
                pArr[i].location.y,
                pArr[j].location.x,
                pArr[j].location.y
              );
            }
          }
        }
      }
    };
  };
}
