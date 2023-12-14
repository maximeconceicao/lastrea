let img;
let saturationThreshold = 2;

function setup() {
  createCanvas(600, 600);
  background(0);
  loadImage("gradient.jpg", (loadedImg) => {
    loadedImg.resize(width, height);
    img = loadedImg;
    applyImageSorting();
  });
}

function draw() {
  // Nothing to draw here
}

function applyImageSorting() {
  for (let column = 0; column < width; column++) {
    let columnArray = getColumnPixels(column);
    columnArray = sortPixelsBySaturation(columnArray);
    updateColumnPixels(column, columnArray);
  }

  image(img, 0, 0);
}

function getColumnPixels(index) {
  let columnPixels = [];
  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    let pixel = img.get(index, rowIndex);
    columnPixels.push(pixel);
  }
  return columnPixels;
}

function sortPixelsBySaturation(pixels) {
  return pixels
    .filter((pixel) => getPixelSaturation(pixel) > saturationThreshold)
    .sort((a, b) => getPixelSaturation(a) - getPixelSaturation(b));
}

function updateColumnPixels(index, columnPixels) {
  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    img.set(index, rowIndex, columnPixels[rowIndex]);
  }
  img.updatePixels();
}

function getPixelSaturation(pixel) {
  return saturation(color(pixel[0], pixel[1], pixel[2], pixel[3]));
}
