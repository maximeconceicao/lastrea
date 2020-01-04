int n, rows, cols, size;
float xoff, yoff, ruins, redValue, sum, ave ;
color red, purple, blue;

void setup() {
  size(1000, 1000);
  noLoop();

  n = 20;
  rows = height/n;
  cols = width/n;
  size = rows*cols;
  xoff=0.09;
  yoff=0.09;
  ruins = 0.08;
  redValue = 0.2;

  red = #E02040;
  blue = #275FE0;
  purple = #C00080;
}

void draw() {

  background(0);

  strokeCap(PROJECT);
  strokeWeight(5);

  sum = 0.0;
  for (int i=0; i<size; i++) {
    sum+=noise(xoff*(i%cols), yoff*(i/cols));
  }

  ave = sum/size;

  for (int i=0; i<size; i++) {
    if (noise(xoff*(i%cols), yoff*(i/cols))>=ave-ruins) {
      if (noise(xoff*(i%cols), yoff*(i/cols))>ave+redValue) {
        stroke(red);
      } else {
        stroke(blue);
      }
      if (random(1)<0.5) {
        line(n*(i%cols), n*(i/cols), n*(i%cols)+n, n*(i/cols)+n);
      } else {
        line(n*(i%cols)+n, n*(i/cols), n*(i%cols), n*(i/cols)+n);
      }
    }
  }
}
