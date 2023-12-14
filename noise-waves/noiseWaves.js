let stepX, stepY;
let numLines = 255;
let minHeight, maxHeight;
let lineWidth = 1;

function setup() {
  createCanvas(600, 600);
  frameRate(1);
  strokeWeight(0.6);
  stepX = 0.003;
  stepY = 0.01;
  minHeight = height * 0.25;
  maxHeight = height * 0.75;
}

function draw() {
  background(255, 0, 0);

  for (let i = 0; i <= numLines; i++) {
    stroke(255 - i, 0, 0);

    for (let j = 0; j < width - lineWidth; j += lineWidth) {
      let x1 = j;
      let x2 = j + lineWidth;
      let y1 = map(noise(x1 * stepX, stepY), 0, 1, minHeight, maxHeight);
      let y2 = map(noise(x2 * stepX, stepY), 0, 1, minHeight, maxHeight);
      line(x1, y1, x2, y2);
    }

    stepY += 0.01;
  }
}
