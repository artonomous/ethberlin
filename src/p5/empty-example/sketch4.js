const size = 40

function setup() {
  var canvas = createCanvas(400, 400)

  frameRate(1)
}

function draw() {
  const rowCol = width/size
  background(48, 38, 38)
  noStroke()

  for(var i = 0; i <= rowCol; i++){
    for(var j= 0; j <= rowCol; j++){

      beginShape(TRIANGLES)
      switch(round(random(1,3))){
        case 1:
        fill(211, 63, 73)
        vertex(size*i, size*j)
        vertex(size*i, size+size*j)
        vertex(size+size*i, size+size*j)
          break
        case 2:
        fill(214, 190, 192)
        vertex(size+size*i, size*j)
        vertex(size*i, size*j)
        vertex(size+size*i, size+size*j)
          break
      }

      endShape()
    }
  }
}
