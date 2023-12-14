class Link {
  constructor(a, b) {
    this.nodes = [a, b];
  }

  getNodes() {
    return this.nodes;
  }
}

class Star {
  constructor(id, position, size) {
    this.id = id;
    this.position = position;
    this.size = size;
    this.connectedStars = [];
  }

  getPosition() {
    return this.position;
  }

  getConnections() {
    return this.connectedStars;
  }

  addConnection(otherStar) {
    this.connectedStars.push(otherStar);
    otherStar.connectedStars.push(this);
  }

  getSize() {
    return this.size;
  }

  getId() {
    return this.id;
  }
}

let stars = [];
let numStars, minSize, maxSize, minSpace, ring;

function setup() {
  createCanvas(500, 500);
  fill("#00AAFF");
  strokeWeight(2);
  numStars = floor(random(4, 8));
  minSize = 20;
  maxSize = 40;
  minSpace = 60;
  ring = 35;
  frameRate(1);
}

function draw() {
  background("#222E50");
  stars = [];
  numStars = floor(random(4, 8));

  for (let i = 0; i < numStars; i++) {
    let overlapping = true;
    let newStar;

    while (overlapping) {
      let x = floor(random(maxSize, width - maxSize));
      let y = floor(random(maxSize, height - maxSize));

      overlapping = false;
      for (let existingStar of stars) {
        let distance = dist(
          existingStar.getPosition().x,
          existingStar.getPosition().y,
          x,
          y
        );
        if (distance < minSpace + existingStar.getSize()) {
          overlapping = true;
          break;
        }
      }

      if (!overlapping) {
        newStar = new Star(
          i,
          createVector(x, y),
          floor(random(minSize, maxSize))
        );
        stars.push(newStar);
      }
    }
  }

  // Connect each star to the closest star
  for (let i = 0; i < stars.length; i++) {
    let currentStar = stars[i];
    let minDist = Infinity;
    let closestStar;

    for (let j = 0; j < stars.length; j++) {
      if (i !== j) {
        let otherStar = stars[j];
        let distance = dist(
          currentStar.getPosition().x,
          currentStar.getPosition().y,
          otherStar.getPosition().x,
          otherStar.getPosition().y
        );

        if (
          distance < minDist &&
          !currentStar.getConnections().includes(otherStar)
        ) {
          minDist = distance;
          closestStar = otherStar;
        }
      }
    }

    if (closestStar) {
      currentStar.addConnection(closestStar);
      closestStar.addConnection(currentStar);
    }
  }

  drawConnections();
  drawStars();
}

function drawConnections() {
  stroke("#00AAFF");
  for (let s of stars) {
    for (let connectedStar of s.getConnections()) {
      line(
        s.getPosition().x,
        s.getPosition().y,
        connectedStar.getPosition().x,
        connectedStar.getPosition().y
      );
    }
  }
}

function drawStars() {
  noStroke();
  for (let s of stars) {
    ellipse(s.getPosition().x, s.getPosition().y, s.getSize(), s.getSize());

    if (random(1) > 0.7) {
      noFill();
      stroke("#9CEAEF");
      ellipse(
        s.getPosition().x,
        s.getPosition().y,
        s.getSize() + ring,
        s.getSize() + ring
      );
      fill("#00AAFF");
      stroke("#00AAFF");
    }
  }
}
