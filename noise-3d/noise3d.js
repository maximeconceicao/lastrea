let increment = 0.01;
let zoff = 0.0;
let zincrement = 0.02;
let n, s;

function setup() {
  createCanvas(600, 600);
  background(0);
  frameRate(30);
  noStroke();
  n = 100;
  s = width / n;
}

function draw() {
  background(0);
  let xoff = 0.0;

  for (let x = 0; x < n; x++) {
    xoff += increment;
    let yoff = 0.0;

    for (let y = 0; y < n; y++) {
      yoff += increment;
      let bright = noise(xoff, yoff, zoff);
      let colorScale = bright > 0.6 ? 1 : bright > 0.4 ? 0.75 : 0;

      let t = color(0, 150 * colorScale * bright, 255 * colorScale * bright);

      fill(t);
      rect(x * s, y * s, s - 1, s - 1);
    }
  }

  zoff += zincrement;
}
