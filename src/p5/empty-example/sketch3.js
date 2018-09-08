const size = 80
let rowCol

function setup() {
  var canvas = createCanvas(400, 400)

  frameRate(1)
  rowCol = width/size
}

function draw() {
  background(255)
  let rectCol
  let elCol

  rectMode(CORNER)
  // noFill()
  noStroke()
  for(var i = 0; i <= rowCol; i++){
    for(var j = 0; j<= rowCol; j++){
      switch(round(random(1,3))){
        case 1:
          rectCol = color(211, 63, 73)
          elCol = color(214, 190, 192)
          break
        case 2:
          rectCol = color(214, 190, 192)
          elCol = color(211, 63, 73)
          break
        case 3:
          rectCol = color(48, 38, 38)
          elCol = color(214, 190, 192)
          break
      }
      fill(rectCol)
      rect(i*size, j*size, size, size)

      ellipseMode(CORNER)
      fill(elCol)
      ellipse(i*size, j*size, size, size)

      push()
      translate(i*size, j*size)
      switch(round(random(1,3))) {
        case 1:
          rect(0, 0, size/2, size)
          break
        case 2:
          rect(0, 0, size, size/2)
          break
      }
      pop()
    }
  }
}
