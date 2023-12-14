let n, rows, cols, size;
let xoff, yoff, ruins, redValue;
let red, purple, blue;

function setup() {
  createCanvas(600, 600);
  frameRate(1);

  n = 20;
  rows = height / n;
  cols = width / n;
  size = rows * cols;
  xoff = 0.09;
  yoff = 0.09;
  ruins = 0.08;
  redValue = 0.2;

  red = color("#E02040");
  blue = color("#275FE0");
  purple = color("#C00080");
}

function draw() {
  background(0);
  strokeCap(PROJECT);
  strokeWeight(4);

  calculateAverageNoise();

  for (let i = 0; i < size; i++) {
    let noiseValue = noise(xoff * (i % cols), yoff * floor(i / cols));

    if (noiseValue >= ave - ruins) {
      stroke(noiseValue > ave + redValue ? red : blue);

      let x1 = n * (i % cols);
      let y1 = n * floor(i / cols);
      let x2 = x1 + n;
      let y2 = y1 + n;

      if (random() < 0.5) {
        line(x1, y1, x2, y2);
      } else {
        line(x2, y1, x1, y2);
      }
    }
  }
}

function calculateAverageNoise() {
  let sum = 0.0;
  for (let i = 0; i < size; i++) {
    sum += noise(xoff * (i % cols), yoff * floor(i / cols));
  }
  ave = sum / size;
}
