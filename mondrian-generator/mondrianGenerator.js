let minSpace, maxSpace;
let shift;
let x = [];
let y = [];

function setup() {
  createCanvas(250, 250);
  frameRate(1);
  stroke(255);
  strokeWeight(4);
  minSpace = 10;
  maxSpace = 165;
  shift = 1.5;
}

function draw() {
  background(0);
  x = [shift];
  y = [shift];

  let step = 0;
  while (step < width - minSpace) {
    step += random(minSpace, maxSpace);
    if (step < width - minSpace) {
      x.push(step);
    }
  }

  step = 0;
  while (step < height - minSpace) {
    step += random(minSpace, maxSpace);
    if (step < width - minSpace) {
      y.push(step);
    }
  }

  x.push(width - shift);
  y.push(height - shift);

  for (let i = 0; i < x.length; i++) {
    line(x[i], 0, x[i], width);
  }

  for (let i = 0; i < y.length; i++) {
    line(0, y[i], height, y[i]);
  }

  for (let i = 0; i < 2; i++) {
    let x1 = floor(random(x.length - 1));
    let y1 = floor(random(y.length - 1));

    let x2 = floor(random(x1 + 1, x.length - 1));
    let y2 = floor(random(y1 + 1, y.length - 1));

    if (i === 0) {
      fill(225, 0, 0);
    } else {
      fill(0, 0, 225);
    }
    rect(x[x1], y[y1], x[x2] - x[x1], y[y2] - y[y1]);
  }
}
