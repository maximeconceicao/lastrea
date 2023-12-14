let shapeCount,
  currentX,
  currentY,
  xMapped,
  yMapped,
  radius,
  increment,
  maxRadius,
  minRadius;

function setup() {
  createCanvas(600, 600);
  strokeWeight(0.1);
  noStroke();
  noFill();
  fill("#4d7fbd50");
  shapeCount = 3;
  maxNoise = 0.8;
  increment = 0;
  xMapped = 0;
  yMapped = 0;
  minRadius = 120;
  maxRadius = 185;
  frameRate(1);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  for (let i = 0; i < shapeCount; i++) {
    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += 0.01) {
      xMapped = map(cos(angle), -1, 1, 0, maxNoise);
      yMapped = map(sin(angle), -1, 1, 0, maxNoise);
      radius = map(
        noise(xMapped, yMapped + increment),
        0,
        1,
        minRadius,
        maxRadius
      );
      currentX = cos(angle) * radius;
      currentY = sin(angle) * radius;
      vertex(currentX, currentY);
    }
    endShape(CLOSE);
    increment += 100;
  }
}
