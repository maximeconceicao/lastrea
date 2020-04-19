int n, cols, rows;
float w, h;
boolean [][] boxes;
void setup() {
  size(150, 150);
  noLoop();
  noFill();
  stroke(0, 0, 255);
  strokeWeight(10);

  n=5;
  w=(width/n)-1.5;
  h=(height/n)-1.5;
  cols=floor(width/w);
  rows=floor(height/h);
  boxes = new boolean[cols][rows];
}

void draw() {
  translate(3, 3);
  background(0);
  for (int y=0; y<rows; y++) {
    for (int x=0; x<cols; x++) {
      if (random(1)>0.5) {
        //rect(x*w, y*h, w, h);
        boxes[x][y] = true;
      } else {
        boxes[x][y]=false;
      }
    }
  }


  for (int y=0; y<rows; y++) {
    for (int x=0; x<cols; x++) {
      if (boxes[x][y]) {
        //LEFT
        if (x==0 || !boxes[x-1][y]) {
          line(x*w, y*h, x*w, (y+1)*h);
        }

        //RIGHT
        if (x==cols-1 || !boxes[x+1][y]) {
          line((x+1)*w, y*h, (x+1)*w, (y+1)*h);
        }

        //UP
        if (y==0 || !boxes[x][y-1]) {
          line(x*w, y*h, (x+1)*w, y*h);
        }

        //DOWN
        if (y==rows-1 || !boxes[x][y+1]) {
          line(x*w, (y+1)*h, (x+1)*w, (y+1)*h);
        } 
      }
    }
  }

  //saveFrame("blue_glyphs/blue_####.tiff");
}
