float xoff, yoff;

void setup() {
  size(1000, 1000);
  frameRate(1);
  strokeWeight(0.6);
  xoff=0.003;
  yoff=0.01;
}

void draw() {
  background(0);

  for (int i=0; i<=255; i++) {
    stroke(i, 0, 0);
    for (int j=0; j<width-1; j++) {
      line(j, map(noise(j*xoff, yoff), 0, 1, height*0.25, height*0.75), j+1, map(noise((j+1)*xoff, yoff), 0, 1, height*0.25, height*0.75));
    }
    yoff+=0.01;
  }
}
