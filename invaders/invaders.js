let rows;
let gridSize, posX, posY;

function setup() {
  createCanvas(200, 200);
  frameRate(1);
  noStroke();
  rows = 4;
  gridSize = width / (rows * 2);
}

function draw() {
  background(0);
  fill(0, 0, 255);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows * 2; j++) {
      let shouldDraw =
        random(1) > 0.5 ||
        (i === 0 && j === 0) ||
        (i === 0 && j === rows * 2 - 1) ||
        (i === rows * 2 - 1 && j === 0) ||
        (i === rows * 2 - 1 && j === rows * 2 - 1);

      if (shouldDraw) {
        rect(i * gridSize, j * gridSize, gridSize, gridSize);
        rect((rows * 2 - 1 - i) * gridSize, j * gridSize, gridSize, gridSize);
      }
    }
  }

  posX = int(random(0, rows));
  posY = int(random(0, rows));
  fill(255, 0, 0);
  rect(posX * gridSize, posY * gridSize, gridSize, gridSize);
  rect((rows * 2 - 1 - posX) * gridSize, posY * gridSize, gridSize, gridSize);
}
