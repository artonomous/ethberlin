import "p5/lib/addons/p5.dom";

export default function sketch(width, height) {
  return function(p) {
    const size = 80;
    let rowCol;

    p.setup = function() {
      p.frameRate(1);
      rowCol = width / size;
    };

    p.draw = function() {
      p.background(255);
      let rectCol;
      let elCol;

      p.rectMode(CORNER);
      p.noStroke();
      for (var i = 0; i <= rowCol; i++) {
        for (var j = 0; j <= rowCol; j++) {
          switch (p.round(p.random(1, 3))) {
            case 1:
              rectCol = p.color(211, 63, 73);
              elCol = p.color(214, 190, 192);
              break;
            case 2:
              rectCol = p.color(214, 190, 192);
              elCol = p.color(211, 63, 73);
              break;
            case 3:
              rectCol = p.color(48, 38, 38);
              elCol = p.color(214, 190, 192);
              break;
          }
          p.fill(rectCol);
          p.rect(i * size, j * size, size, size);

          p.ellipseMode(p.CORNER);
          p.fill(elCol);
          p.ellipse(i * size, j * size, size, size);

          p.push();
          p.translate(i * size, j * size);
          switch (p.round(p.random(1, 3))) {
            case 1:
              p.rect(0, 0, size / 2, size);
              break;
            case 2:
              p.rect(0, 0, size, size / 2);
              break;
          }
          p.pop();
        }
      }
    };
  };
}
