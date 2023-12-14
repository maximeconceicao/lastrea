let xOffset1, yOffset1, xOffset2, yOffset2;

function setup() {
  createCanvas(600, 600, WEBGL);
  xOffset1 = 0.001;
  yOffset1 = 1000;
  xOffset2 = 10;
  yOffset2 = 100;
}

function draw() {
  background(0);
  strokeWeight(2);
  stroke(0, 255, 255);
  noFill();

  rectMode(CENTER);

  [xOffset1, yOffset1] = drawRotatedBox(xOffset1, yOffset1, 225);
  [xOffset2, yOffset2] = drawRotatedBox(xOffset2, yOffset2, 100);
}

function drawRotatedBox(xOffset, yOffset, boxSize) {
  rotateX(map(noise(xOffset), 0, 1, 0, 7));
  rotateY(map(noise(yOffset), 0, 1, 0, 7));
  xOffset += 0.005;
  yOffset += 0.0075;
  box(boxSize);

  return [xOffset, yOffset];
}
