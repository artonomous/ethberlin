import "p5/lib/addons/p5.dom";

export default function sketch(width, height) {
  return function(p) {
    const size = 40;

    p.setup = function() {
      p.frameRate(1);
    };
    p.draw = function(p) {
      const rowCol = width / size;
      p.background(48, 38, 38);
      p.noStroke();

      for (var i = 0; i <= rowCol; i++) {
        for (var j = 0; j <= rowCol; j++) {
          p.beginShape(p.TRIANGLES);
          switch (p.round(p.random(1, 3))) {
            case 1:
              p.fill(211, 63, 73);
              p.vertex(size * i, size * j);
              p.vertex(size * i, size + size * j);
              p.vertex(size + size * i, size + size * j);
              break;
            case 2:
              p.fill(214, 190, 192);
              p.vertex(size + size * i, size * j);
              p.vertex(size * i, size * j);
              p.vertex(size + size * i, size + size * j);
              break;
          }
          p.endShape();
        }
      }
    };
  };
}
