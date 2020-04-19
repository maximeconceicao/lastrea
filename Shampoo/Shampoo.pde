final int MAX_RECURSION=4;
final int N = 10;
float heightRect, widthRect;
color c1 = #3CABDB;

color[] palette = {#3CABDB, #167FFC, #595BD4, #FD3259};

void setup() {
  size(1000, 1000);
  noLoop();
  strokeWeight(3);
  stroke(255);
  heightRect = height/N;
  widthRect = width/N;
}

void draw() {
  background(255);

  for (int i=0; i<N; i++) {
    for (int j=0; j<N; j++) {
      if (random(1)>0.2) {
        drawFractal(i*widthRect, j*heightRect, 1);
      } else {
        if (random(1)>0.2) {
          fill(palette[floor(random(palette.length))]);
          rect(i*widthRect, j*heightRect, widthRect, heightRect);
        }
      }
    }
  }

  //saveFrame("test3/test_####.tiff");
}

void drawFractal(float x, float y, int level) {
  for (int i=0; i<2; i++) {
    for (int j=0; j<2; j++) {
      float newX = x+i*widthRect/pow(2, level);
      float newY = y+j*heightRect/pow(2, level);
      if (random(1)>0.4 && level<MAX_RECURSION) {
        drawFractal(newX, newY, level+1);
      } else {
        if (random(1)>0.3) {
          fill(palette[floor(random(palette.length))]);
          rect(newX, newY, widthRect/pow(2, level), heightRect/pow(2, level));
        }
      }
    }
  }
}
