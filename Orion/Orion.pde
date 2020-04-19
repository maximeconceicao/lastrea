final float MIN_WEIGHT = 1;
final float MAX_WEIGHT = 8;
final float MIN_INC = 20;
final float MAX_INC = 30;
PImage bg;

void setup() {
  size(1000, 1000);
  noLoop();
  stroke(255);
  strokeCap(PROJECT);
  noFill();
  bg=loadImage("bckgrd.jpg");
  bg.resize(width, height);
}

void draw() {
  background(bg);
  float i = MIN_INC;
  while (i<max(width, height)*1.5) {
    strokeWeight(random(MIN_WEIGHT, MAX_WEIGHT));
    float start = random(TWO_PI);
    arc(width/2, height/2, i, i, start, start+random(PI/4, TWO_PI));
    i+=random(MIN_INC, MAX_INC);
  }
  //saveFrame("rndr/constellation_####.tiff");
}
