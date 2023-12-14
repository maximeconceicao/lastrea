class Shape {
  constructor(id, rows, cols, color) {
    this.id = id;
    this.rows = rows;
    this.cols = cols;
    this.color = color;
  }
}

class Cell {
  constructor(id, width, height) {
    this.id = id;
    this.shape = null;
  }

  setShape(shape) {
    this.shape = shape;
  }
}

let grid = [13, 12];
let square_1 = new Shape(1, 1, 1, "#7D4FFE");
let square_2 = new Shape(2, 2, 2, "#C49FFF");
let rectangle_1 = new Shape(3, 1, 2, "#FFD0E6");
let rectangle_2 = new Shape(4, 2, 3, "#FF9CB6");
let shapes = [square_1, square_2, rectangle_1, rectangle_2];
let cells = [];
let shift = 5;
let cellWidth, cellHeight;

function setup() {
  createCanvas(520, 530);
  background(230);
  noStroke();

  cellHeight = height / grid[0];
  cellWidth = width / grid[1];

  //INIT GRID CELLS
  for (let i = 0; i < grid[0]; i++) {
    cells.push([]);
    for (let j = 0; j < grid[1]; j++) {
      cells[i].push(new Cell(i * grid[0] + j, null));
    }
  }

  //LET'S GO
  for (let i = 0; i < grid[0]; i++) {
    for (let j = 0; j < grid[1]; j++) {
      if (!cells[i][j].shape) {
        let shuffledShapes = shuffle(shapes);
        let shapeFound = false;
        let index = 0;
        while (index < shuffledShapes.length && !shapeFound) {
          //RANDOMIZE ORIENTATION
          let currentShape = shuffledShapes[index];
          let randomDirection = shuffle([currentShape.rows, currentShape.cols]);
          currentShape.rows = randomDirection[0];
          currentShape.cols = randomDirection[1];

          //IF SHAPE FITS IN THAT THIS GRID POSITION
          if (
            i + currentShape.rows - 1 < grid[0] &&
            j + currentShape.cols - 1 < grid[1]
          ) {
            shapeFound = true;
            for (let k = 0; k < currentShape.rows; k++) {
              for (let l = 0; l < currentShape.cols; l++) {
                if (cells[i + k][j + l].shape) {
                  shapeFound = false;
                }
              }
            }
            if (shapeFound) {
              for (let k = 0; k < currentShape.rows; k++) {
                for (let l = 0; l < currentShape.cols; l++) {
                  cells[i + k][j + l].setShape(shuffledShapes[index]);
                }
              }
            }
          }
          index++;
        }
      }
    }
  }
  //DRAW RESULT
  for (let i = 0; i < grid[0]; i++) {
    for (let j = 0; j < grid[1]; j++) {
      if (cells[i][j].shape) fill(cells[i][j].shape.color);
      else fill("#000000");
      rect(
        j * cellWidth + shift / 2,
        i * cellHeight + shift / 2,
        cellWidth - shift,
        cellHeight - shift
      );
    }
  }
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
