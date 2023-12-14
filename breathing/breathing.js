let position, planet;
let bubble, halo, edge;
let inhale, stop, exhale, repeat, time, c;
let bubbleSize, planetSize, bubbleGrowth, haloSize, haloGrowth, haloColor;

function setup() {
  createCanvas(600, 600);
  position = createVector(width / 2, height * 0.8);
  planet = createVector(width / 2, height / 2);
  bubble = 100;
  halo = 125;
  c = 125;
  edge = 0.3;

  time = frameCount % 1140;
  inhale = time;
  stop = inhale + 60 * 4;
  exhale = stop + 60 * 7;
  repeat = exhale + 60 * 8;

  haloColor = 180;

  bubbleSize = height * 0.15;
  bubbleGrowth = height * 0.08;
  haloSize = height * 0.175;
  haloGrowth = height * 0.07;
  planetSize = height * 0.02;
}

function draw() {
  background("#eae8e7");
  time = frameCount % 1140;
  planet.x =
    position.x + (halo / 1.5) * cos(map(time, 0, 1140, (5 * PI) / 2, PI / 2));
  planet.y =
    position.y +
    (halo / 1.5) * sin(map(time, 0, 1140, (7 * PI) / 2, (3 * PI) / 2));

  stroke(c);
  strokeWeight(3);
  noFill();
  ellipse(position.x, position.y, halo, halo);

  noStroke();
  fill("#62bfed");
  ellipse(position.x, position.y, bubble, bubble);

  fill("#4EFFEF");
  ellipse(planet.x, planet.y, planetSize, planetSize);

  if (time < stop) {
    if (time <= inhale + 60) {
      c = int(
        haloColor +
          (255 - haloColor) * sin(map(time, inhale, inhale + 60, PI / 2, PI))
      );
    }
    position.y =
      height / 2 +
      height * edge * sin(map(time, inhale, stop, PI / 2, (3 * PI) / 2));
    bubble =
      bubbleSize +
      bubbleGrowth * sin(map(time, inhale, stop, (3 * PI) / 2, PI / 2));
    halo =
      haloSize +
      haloGrowth * sin(map(time, inhale, stop, (3 * PI) / 2, PI / 2));
  } else {
    if (time <= stop + 60) {
      c = int(
        haloColor +
          (255 - haloColor) * sin(map(time, stop, stop + 60, PI / 2, PI))
      );
    } else {
      if (time >= exhale && time <= repeat) {
        if (time <= exhale + 60) {
          c = int(
            haloColor +
              (255 - haloColor) *
                sin(map(time, exhale, exhale + 60, PI / 2, PI))
          );
        }
        position.y =
          height / 2 +
          height * edge * sin(map(time, exhale, repeat, (3 * PI) / 2, PI / 2));
        bubble =
          bubbleSize +
          bubbleGrowth * sin(map(time, exhale, repeat, PI / 2, (3 * PI) / 2));
        halo =
          haloSize +
          haloGrowth * sin(map(time, exhale, repeat, PI / 2, (3 * PI) / 2));
      }
    }
  }
}
