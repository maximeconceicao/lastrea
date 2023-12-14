const MIN_WEIGHT = 1;
const MAX_WEIGHT = 8;
const MIN_INC = 20;
const MAX_INC = 30;
let bg;

function setup() {
  createCanvas(600, 600);
  frameRate(1);
  stroke(255);
  strokeCap(PROJECT);
  noFill();
}

function draw() {
  background(0);
  drawRandomArcs();
}

function drawRandomArcs() {
  let i = MIN_INC;
  while (i < max(width, height) * 1.5) {
    drawRandomArc(i);
    i += random(MIN_INC, MAX_INC);
  }
}

function drawRandomArc(diameter) {
  strokeWeight(random(MIN_WEIGHT, MAX_WEIGHT));
  let start = random(TWO_PI);
  let end = start + random(PI / 4, TWO_PI);
  arc(width / 2, height / 2, diameter, diameter, start, end);
}
