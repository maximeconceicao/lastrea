let n, cols, rows;
let w, h;
let boxes;

function setup() {
  createCanvas(150, 150);
  frameRate(1);
  noFill();
  stroke(0, 0, 255);
  strokeWeight(10);

  initializeGrid();
}

function draw() {
  translate(3, 3);
  background(0);

  generateRandomBoxes();

  drawLines();
}

function initializeGrid() {
  n = 5;
  w = width / n - 1.5;
  h = height / n - 1.5;
  cols = floor(width / w);
  rows = floor(height / h);
  boxes = Array.from({ length: cols }, () => Array(rows).fill(false));
}

function generateRandomBoxes() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      boxes[x][y] = random(1) > 0.5;
    }
  }
}

function drawLines() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (boxes[x][y]) {
        drawCellLines(x, y);
      }
    }
  }
}

function drawCellLines(x, y) {
  // LEFT
  if (x === 0 || !boxes[x - 1][y]) {
    line(x * w, y * h, x * w, (y + 1) * h);
  }

  // RIGHT
  if (x === cols - 1 || !boxes[x + 1][y]) {
    line((x + 1) * w, y * h, (x + 1) * w, (y + 1) * h);
  }

  // UP
  if (y === 0 || !boxes[x][y - 1]) {
    line(x * w, y * h, (x + 1) * w, y * h);
  }

  // DOWN
  if (y === rows - 1 || !boxes[x][y + 1]) {
    line(x * w, (y + 1) * h, (x + 1) * w, (y + 1) * h);
  }
}
