let noiseMax, radiusMin, radiusMax;
let n;

function setup() {
  createCanvas(600, 600);
  stroke(255);
  fill(255, 0, 0);
  noLoop();

  noiseMax = 0;
  radiusMin = 100;
  radiusMax = 250;
  n = 70;
}

function draw() {
  background("#0073B1");
  translate(width / 2, height / 3);
  noiseMax = 0;

  for (let i = 0; i < n; i++) {
    stroke(255);

    for (let angle = 0; angle < TWO_PI; angle += 0.02) {
      let [xoff, yoff] = [
        map(cos(angle), -1, 1, 0, noiseMax),
        map(sin(angle), -1, 1, 0, noiseMax),
      ];
      let r = map(
        noise(xoff + frameCount * 0.01, yoff + frameCount * 0.01),
        0,
        1,
        radiusMin,
        radiusMax
      );
      let [x, y] = [r * cos(angle), r * sin(angle) + i * 2.5];

      ellipse(x, y, 1, 1);
    }

    noiseMax += 0.03;
  }
}
