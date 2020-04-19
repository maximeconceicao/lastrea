int cols, rows, h;
int size;
float zoff, chaos;

void setup() {
  size(1000, 1000, P3D);
  stroke(200, 0, 0);
  //noFill();
  fill(125, 0, 0);

  size=25;
  cols = width/size;
  rows = height/size;
  zoff= 0;
  h=245;
  chaos = 0.15;
}

void draw() {
  background(0);
  pointLight(200, 200, 200, 35, 40, 36);
  translate(width/2, height/2, -600);
  rotateX(PI/3);
  rotateZ(zoff*0.25);
  

  pushMatrix();
  translate(-size/2, 0, -40);
  box(width-(size-4), height+size/8, -125);
  popMatrix();

  pushMatrix();
  translate(-size/4, 0, 500);
  lights();
  sphere(80);
  popMatrix();

  translate(-width/2, -height/2);

  for (int y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP);
    for (int x = 0; x < cols; x++) {
      fill(map(noise(x*chaos, y*chaos, zoff), 0, 1, 0, 200), 0, map(noise(x*chaos, y*chaos, zoff), 0, 1, 200, 0));
      stroke(map(noise(x*chaos, y*chaos, zoff), 0, 1, 50, 250), 0, map(noise(x*chaos, y*chaos, zoff), 0, 1, 250, 50));
      vertex(x*size, y*size, map(noise(x*chaos, y*chaos, zoff), 0, 1, 0, h));
      vertex(x*size, (y+1)*size, map(noise(x*chaos, (y+1)*chaos, zoff), 0, 1, 0, h));
    }
    endShape();
  }

  for (int x = 0; x<cols-1; x++) {
    beginShape(QUADS);
    stroke(map(noise(x*chaos, 0*chaos, zoff), 0, 1, 50, 250), 0, map(noise(x*chaos, 0*chaos, zoff), 0, 1, 250, 50));
    vertex(x*size, 0, -80);
    vertex(x*size, 0, map(noise(x*chaos, 0, zoff), 0, 1, 0, h));
    vertex((x+1)*size, 0, map(noise((x+1)*chaos, 0, zoff), 0, 1, 0, h));
    vertex((x+1)*size, 0, -80);
    endShape();

    beginShape(QUADS);
    stroke(map(noise(x*chaos, rows*chaos, zoff), 0, 1, 50, 250), 0, map(noise(x*chaos, rows*chaos, zoff), 0, 1, 250, 50));
    vertex(x*size, (rows)*size, -80);
    vertex(x*size, (rows)*size, map(noise(x*chaos, (rows)*chaos, zoff), 0, 1, 0, h));
    vertex((x+1)*size, (rows)*size, map(noise((x+1)*chaos, (rows)*chaos, zoff), 0, 1, 0, h));
    vertex((x+1)*size, (rows)*size, -80);
    endShape();
  }

  for (int y = 0; y<rows; y++) {
    beginShape(QUADS);
    stroke(map(noise(0*chaos, 0*chaos, zoff), 0, 1, 50, 250), 0, map(noise(0*chaos, 0*chaos, zoff), 0, 1, 250, 50));
    vertex(0*size, y*size, -80);
    vertex(0*size, y*size, map(noise(0*chaos, y*chaos, zoff), 0, 1, 0, h));
    vertex(0*size, (y+1)*size, map(noise(0*chaos, (y+1)*chaos, zoff), 0, 1, 0, h));
    vertex(0*size, (y+1)*size, -80);
    endShape();

    beginShape(QUADS);
    stroke(map(noise((cols-1)*chaos, cols*chaos, zoff), 0, 1, 50, 250), 0, map(noise((cols-1)*chaos, cols*chaos, zoff), 0, 1, 250, 50));
    vertex((cols-1)*size, y*size, -80);
    vertex((cols-1)*size, y*size, map(noise((cols-1)*chaos, y*chaos, zoff), 0, 1, 0, h));
    vertex((cols-1)*size, (y+1)*size, map(noise((cols-1)*chaos, (y+1)*chaos, zoff), 0, 1, 0, h));
    vertex((cols-1)*size, (y+1)*size, -80);
    endShape();
  }

  zoff+=0.009;

  // saveFrame("render/render_####.png");
} 
