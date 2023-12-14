let shift, gradient, space, size;

function setup() {
  createCanvas(600, 600);
  frameRate(1);
  noStroke();

  shift = 0.005;
  gradient = 0.004;
  space = 0.02;
  size = space / 2;
}

function draw() {
  background(0);
  translate(width * shift, height * shift);

  for (let i = 0; i < width; i += width * space) {
    for (let j = 0; j < height; j += height * space) {
      let red, blue;

      if (random(1) > 0.5) {
        blue = 255 - random(j / (height * gradient), 255);
        fill(0, 0, blue);
      } else {
        red = 255 - random(j / (height * gradient), 255);
        fill(red, 0, 0);
      }

      rect(i, j, width * size, height * size);
    }
  }
}
