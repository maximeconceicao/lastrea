let x, y, n;
let radius;

function setup() {
  createCanvas(600, 600);
  frameRate(1);
  strokeWeight(0.5);
  x = width / 2;
  y = height / 2;
  radius = width / 2;
  n = width;
}

function draw() {
  background(0);

  for (let i = 0; i < n; i++) {
    let angle1 = random(TWO_PI);
    let angle2 = random(TWO_PI);

    let x1 = x + cos(angle1) * radius;
    let y1 = y + sin(angle1) * radius;

    let x2 = x + cos(angle2) * radius;
    let y2 = y + sin(angle2) * radius;

    let lerpColorValue = map(i, 0, n, 0, 1);
    let lerpedColor = lerpColor(
      color(0, 0, 0),
      color(0, 255, 255),
      lerpColorValue
    );

    stroke(lerpedColor);
    line(x1, y1, x2, y2);
  }
}
