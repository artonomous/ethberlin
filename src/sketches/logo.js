import "p5/lib/addons/p5.dom";

export default function sketch(width, height) {
  return function(p) {
    const sizeX = width;
    const sizeY = height;
    const offset = 50;
    const col1 = "rgb(211, 63, 73)";
    const col2 = "rgb(214, 190, 192)";
    const col3 = "rgb(48, 38, 38)";

    p.setup = function() {
      p.createCanvas(sizeX, sizeY);
      p.background(p.color(225));
      p.frameRate(2);

      p.width = sizeX;
      p.height = sizeY;
    };

    p.frame = function(col) {
      p.fill(col);
      p.strokeJoin(p.ROUND);
      p.beginShape();
      p.vertex(-sizeX / 2, sizeY / 2);
      p.vertex(-sizeX / 2, -sizeY / 2);
      p.vertex(sizeX / 2, -sizeY / 2);
      p.vertex(sizeX / 2, sizeY / 2);
      p.vertex(0, -offset);
      p.vertex(-sizeX / 2, sizeY / 2);
      p.endShape(p.CLOSE);
    };

    p.triangleB = function(col) {
      p.fill(col);
      p.strokeJoin(p.ROUND);
      p.beginShape(p.TRIANGLES);
      p.vertex(-sizeX / 2, sizeY / 2);
      p.vertex(0, offset);
      p.vertex(sizeX / 2, sizeY / 2);
      p.endShape(p.CLOSE);
    };

    p.triangleA = function(col) {
      p.fill(col);
      p.strokeJoin(p.ROUND);
      p.beginShape();
      p.vertex(-sizeX / 2, sizeY / 2);
      p.vertex(0, -offset);
      p.vertex(sizeX / 2, sizeY / 2);
      p.vertex(0, offset);
      p.endShape(p.CLOSE);
    };

    p.draw = () => {
      let selector = p.round(p.random(1, 4));
      p.strokeWeight(8);

      p.push();
      p.translate(p.width / 2, p.height / 2);

      switch (selector) {
        case 1:
          p.frame(col1);
          p.triangleA(col2);
          p.triangleB(col3);
          break;
        case 2:
          p.frame(col2);
          p.triangleA(col1);
          p.triangleB(col3);
          break;
        case 3:
          p.frame(col3);
          p.triangleA(col2);
          p.triangleB(col1);
          break;
        case 4:
          p.frame(p.color(225));
          p.triangleA(col2);
          p.triangleB(p.color(225));
          break;
      }
      p.pop();
    };
  };
}
