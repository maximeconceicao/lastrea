import processing.pdf.*;
float noiseMax;
int n;

void setup() {
  size(1000, 1000, PDF, "end.pdf");
  stroke(255);
  fill(255, 0, 0);
  noLoop();

  noiseMax= 0;
  n = 80;
}

void draw() {
  background(#0073B1);
  translate(width/2, height/2);
  noiseMax= 0;
  for (int i=0; i<n; i++) {

    stroke(255);
    for (float angle = 0; angle < TWO_PI; angle+=0.02) {
      float xoff = map(cos(angle), -1, 1, 0, noiseMax);
      float yoff = map(sin(angle), -1, 1, 0, noiseMax);
      float r = map(noise(xoff+frameRate, yoff+frameRate), 0, 1, 200, 400);
      float x = r*cos(angle);
      float y = r*sin(angle)+i*2.5;
      
      ellipse(x, y, 1, 1);
    }
    noiseMax+=0.03;
  }
  exit();

}
