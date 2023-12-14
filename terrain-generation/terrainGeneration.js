let columns, rows, heightValue;
let unitSize;
let zOffset, chaos;

function setup() {
  createCanvas(600, 600, WEBGL);
  stroke(200, 0, 0);
  fill(125, 0, 0);

  unitSize = 20;
  columns = width / unitSize;
  rows = height / unitSize;
  zOffset = 0;
  heightValue = 245;
  chaos = 0.15;
}

function draw() {
  background(0);
  pointLight(200, 200, 200, 35, 40, 36);
  translate(0, 0, -600);
  rotateX(PI / 3);
  rotateZ(zOffset * 0.25);

  push();
  translate(-unitSize / 2, 0, -40);
  box(width - (unitSize - 4), height + unitSize / 8, -125);
  pop();

  push();
  translate(-unitSize / 4, 0, 400);
  lights();
  sphere(80);
  pop();

  translate(-width / 2, -height / 2);

  for (let y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < columns; x++) {
      fill(
        map(noise(x * chaos, y * chaos, zOffset), 0, 1, 0, 200),
        0,
        map(noise(x * chaos, y * chaos, zOffset), 0, 1, 200, 0)
      );
      stroke(
        map(noise(x * chaos, y * chaos, zOffset), 0, 1, 50, 250),
        0,
        map(noise(x * chaos, y * chaos, zOffset), 0, 1, 250, 50)
      );
      vertex(
        x * unitSize,
        y * unitSize,
        map(noise(x * chaos, y * chaos, zOffset), 0, 1, 0, heightValue)
      );
      vertex(
        x * unitSize,
        (y + 1) * unitSize,
        map(noise(x * chaos, (y + 1) * chaos, zOffset), 0, 1, 0, heightValue)
      );
    }
    endShape();
  }

  for (let x = 0; x < columns - 1; x++) {
    beginShape(QUADS);
    stroke(
      map(noise(x * chaos, 0 * chaos, zOffset), 0, 1, 50, 250),
      0,
      map(noise(x * chaos, 0 * chaos, zOffset), 0, 1, 250, 50)
    );
    vertex(x * unitSize, 0, -80);
    vertex(
      x * unitSize,
      0,
      map(noise(x * chaos, 0, zOffset), 0, 1, 0, heightValue)
    );
    vertex(
      (x + 1) * unitSize,
      0,
      map(noise((x + 1) * chaos, 0, zOffset), 0, 1, 0, heightValue)
    );
    vertex((x + 1) * unitSize, 0, -80);
    endShape();

    beginShape(QUADS);
    stroke(
      map(noise(x * chaos, rows * chaos, zOffset), 0, 1, 50, 250),
      0,
      map(noise(x * chaos, rows * chaos, zOffset), 0, 1, 250, 50)
    );
    vertex((x + 1) * unitSize, (rows - 1) * unitSize, -80);
    vertex(
      (x + 1) * unitSize,
      (rows - 1) * unitSize,
      map(
        noise((x + 1) * chaos, (rows - 1) * chaos, zOffset),
        0,
        1,
        0,
        heightValue
      )
    );
    vertex(
      (x + 1) * unitSize,
      rows * unitSize,
      map(noise((x + 1) * chaos, rows * chaos, zOffset), 0, 1, 0, heightValue)
    );
    vertex((x + 1) * unitSize, rows * unitSize, -80);
    endShape();
  }

  for (let y = 0; y < rows; y++) {
    beginShape(QUADS);
    stroke(
      map(noise(0 * chaos, 0 * chaos, zOffset), 0, 1, 50, 250),
      0,
      map(noise(0 * chaos, 0 * chaos, zOffset), 0, 1, 250, 50)
    );
    vertex(0 * unitSize, y * unitSize, -80);
    vertex(
      0 * unitSize,
      y * unitSize,
      map(noise(0 * chaos, y * chaos, zOffset), 0, 1, heightValue)
    );
    vertex(
      0 * unitSize,
      (y + 1) * unitSize,
      map(noise(0 * chaos, (y + 1) * chaos, zOffset), 0, 1, 0, heightValue)
    );
    vertex(0 * unitSize, (y + 1) * unitSize, -80);
    endShape();

    beginShape(QUADS);
    stroke(
      map(
        noise((columns - 1) * chaos, columns * chaos, zOffset),
        0,
        1,
        50,
        250
      ),
      0,
      map(noise((columns - 1) * chaos, columns * chaos, zOffset), 0, 1, 250, 50)
    );
    vertex((columns - 1) * unitSize, y * unitSize, -80);
    vertex(
      (columns - 1) * unitSize,
      y * unitSize,
      map(
        noise((columns - 1) * chaos, y * chaos, zOffset),
        0,
        1,
        0,
        heightValue
      )
    );
    vertex(
      (columns - 1) * unitSize,
      (y + 1) * unitSize,
      map(
        noise((columns - 1) * chaos, (y + 1) * chaos, zOffset),
        0,
        1,
        0,
        heightValue
      )
    );
    vertex((columns - 1) * unitSize, (y + 1) * unitSize, -80);
    endShape();
  }

  zOffset += 0.009;
}
