let time1, time2;

function setup() {
  createCanvas(500, 500);
  background("#028F55");
  frameRate(60);
  time1 = random(0, 1000);
  time2 = random(0, 1000);
}

function draw() {
  let x = width * noise(time1);
  let y = height * noise(time2);

  fill(x * 255);
  ellipse(x, y, 20, 20);

  time1 += 0.01;
  time2 += 0.01;
}
