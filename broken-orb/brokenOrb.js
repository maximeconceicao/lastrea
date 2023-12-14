let radius;
let cellSize;
let increment, increment2;
let palette;

function setup() {
  createCanvas(700, 700);
  noLoop();
  strokeWeight(2);
  noStroke();
  radius = 300;
  cellSize = 10;
  increment = 0.35;
  increment2 = 0.07;
  palette = [0, 0, 100, 200];
}

function draw() {
  background(200);
  fill(0);
  let yoff = 0.0;
  let yoff2 = 0.0;
  for (let y = 0; y < height; y += cellSize) {
    let xoff = 0.0;
    let xoff2 = 0.0;
    yoff += increment;
    yoff2 += increment2;
    for (let x = 0; x < width; x += cellSize) {
      xoff += increment;
      xoff2 += increment2;
      let dist = sqrt(pow(x - width / 2, 2) + pow(y - height / 2, 2));
      if (dist <= radius) {
        let col = floor(map(noise(xoff, yoff), 0, 1, 5, 0));
        let col2 = floor(map(noise(xoff2, yoff2), 0, 1, 0, 4));
        fill(map(col, 0, 5, 0, 200));
        if (col2 != 2) {
          rect(x, y, cellSize, cellSize);
        }
      }
    }
  }
}
