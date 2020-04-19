background(0);
size(1000, 1000);
float r, g, b;
color color_1 = color(105, 76, 155);
color color_2 = color(229, 112, 48);
PImage img = loadImage("castle_A.jpg");
img.resize(width, height);
int dimension = img.width * img.height;
for (int i=0; i<dimension; i++) {
  if (red(img.pixels[i])-30>blue(img.pixels[i])) {
    r = map(red(img.pixels[i]), 0, 255, 0, red(color_1));
    g = map(red(img.pixels[i]), 0, 255, 0, green(color_1));
    b = map(red(img.pixels[i]), 0, 255, 0, blue(color_1));
    img.pixels[i]=color(r, g, b);
  } else {
    r = map(blue(img.pixels[i]), 0, 255, 0, red(color_2));
    g = map(blue(img.pixels[i]), 0, 255, 0, green(color_2));
    b = map(blue(img.pixels[i]), 0, 255, 0, blue(color_2));
    img.pixels[i]=color(r, g, b);
  }
}
img.updatePixels();
image(img, 0, 0);
//saveFrame("cstl.tiff");
//Violet
//#694c9b
//Orange
//#e57030
