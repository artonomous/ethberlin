const sizeX = 200
const sizeY = 200
const offset = 50
var col1, col2, col3


function setup() {
  var canvas = createCanvas(400, 400)
  background(color(225))
  frameRate(2)
1
  col1 = color(211, 63, 73)
  col2 = color(214, 190, 192)
  col3 = color(48, 38, 38)
}

function draw() {
  let selector = round(random(1,4))
  strokeWeight(8)

  push()
  translate(width/2, height/2)

  switch(selector){
    case 1:
      this.frame(col1)
      this.triangleA(col2)
      this.triangleB(col3)
      break
    case 2:
      this.frame(col2)
      this.triangleA(col1)
      this.triangleB(col3)
      break
    case 3:
      this.frame(col3)
      this.triangleA(col2)
      this.triangleB(col1)
      break
    case 4:
      this.frame(color(225))
      this.triangleA(col2)
      this.triangleB(color(225))
      break
  }
  pop()
}

this.frame = function (col) {
  fill(col)
  strokeJoin(ROUND)
  beginShape()
  vertex(-sizeX/2, sizeY/2)
  vertex(-sizeX/2, -sizeY/2)
  vertex(sizeX/2, -sizeY/2)
  vertex(sizeX/2, sizeY/2)
  vertex(0,-offset)
  vertex(-sizeX/2, sizeY/2)
  endShape(CLOSE)
}

this.triangleA = function(col) {
  fill(col)
  strokeJoin(ROUND)
  beginShape()
  vertex(-sizeX/2, sizeY/2)
  vertex(0,-offset)
  vertex(sizeX/2, sizeY/2)
  vertex(0, offset)
  endShape(CLOSE)
}

this.triangleB = function(col) {
  fill(col)
  strokeJoin(ROUND)
  beginShape(TRIANGLES)
  vertex(-sizeX/2, sizeY/2)
  vertex(0,offset)
  vertex(sizeX/2, sizeY/2)
  endShape(CLOSE)
}
