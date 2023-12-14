let colors = [];
let n = 10;
let blockSize;
let sizes = [];
const nbColors = 20;

function setup() {
  createCanvas(500, 500);
  background(0);
  noStroke();
  ellipseMode(CENTER);
  rectMode(CENTER);

  blockSize = height / n;
  sizes[0] = blockSize * 0.2;
  sizes[1] = blockSize * 0.4;
  sizes[2] = blockSize * 0.6;

  for (let i = 0; i < nbColors; i++) {
    const col = color(random(250), 0, random(250));
    colors.push(col);
  }

  for (let i = blockSize / 2; i < width; i += blockSize) {
    for (let j = blockSize / 2; j < height; j += blockSize) {
      let c = random(colors);
      fill(c);
      rect(i, j, blockSize, blockSize);

      c = random(colors);
      fill(c);

      let sizeIndex = int(random(3));

      if (random(1) > 0.5) {
        ellipse(i, j, sizes[sizeIndex], sizes[sizeIndex]);
      } else {
        rect(i, j, sizes[sizeIndex], sizes[sizeIndex]);
      }
    }
  }
}
