const MAX_RECURSION = 4;
const N = 10;
let heightRect, widthRect;
const palette = ["#3CABDB", "#167FFC", "#595BD4", "#FD3259"];

function setup() {
  createCanvas(600, 600);
  frameRate(1);
  strokeWeight(3);
  stroke(255);
  heightRect = height / N;
  widthRect = width / N;
}

function draw() {
  background(255);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (random(1) > 0.2) {
        drawFractal(i * widthRect, j * heightRect, 1);
      } else if (random(1) > 0.2) {
        fill(random(palette));
        rect(i * widthRect, j * heightRect, widthRect, heightRect);
      }
    }
  }
}

function drawFractal(x, y, level) {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      const newX = x + (i * widthRect) / pow(2, level);
      const newY = y + (j * heightRect) / pow(2, level);
      if (random(1) > 0.4 && level < MAX_RECURSION) {
        drawFractal(newX, newY, level + 1);
      } else if (random(1) > 0.3) {
        fill(random(palette));
        rect(newX, newY, widthRect / pow(2, level), heightRect / pow(2, level));
      }
    }
  }
}
