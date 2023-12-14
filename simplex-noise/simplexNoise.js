let increment = 0.01;
let zoff = 0.0;
let zincrement = 0.05;
let noise;
const seed = Date.now();

function setup() {
  createCanvas(600, 600);
  background(0);
  noLoop();
  noStroke();
  noise = openSimplexNoise(seed);
}

function draw() {
  loadPixels();

  let xoff = 0.0;

  for (let x = 0; x < width; x++) {
    xoff += increment;
    let yoff = 0.0;

    for (let y = 0; y < height; y++) {
      yoff += increment;
      let bright = noise.noise3D(xoff, yoff, zoff);

      let stop = false;
      let i = -0.8;
      let t = color(0);

      while (i < 1 && !stop) {
        let step = random(0.05, 0.15);

        if (bright < i) {
          t = color(0);
          stop = true;
        } else {
          if (bright < i + step) {
            t = color(235, 0, 20);
            stop = true;
          } else {
            i += 0.2;
          }
        }
      }
      set(x, y, t);
    }
  }
  updatePixels();

  zoff += zincrement;
}
