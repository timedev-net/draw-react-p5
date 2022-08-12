function setup() {
  createCanvas(1224, 600);
  // size(800,600)
  stroke(255)
  background(255,0,0)
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}