let array = [];

// noinspection JSUnusedGlobalSymbols
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  // p = new Particle();
  array.push(new Particle());
}

// noinspection JSUnusedGlobalSymbols
function draw() {
  background(55, 100, 144)
  array.forEach(point => {
    point.draw();
    point.update();
  })
  // fill(0)
  if(mouseIsPressed){
    array.push(new Particle(mouseX, mouseY));
  }
}

class Particle {
  constructor(x, y) {

    // Position
    if(x === undefined && y === undefined){
      this.pos = createVector(random(width), random(height))
    } else {
      this.pos = createVector(x, y)
    }
    // Size
    this.size = 10;
    // Velocity
    this.vel = createVector(random(-2, 2), random(-2, 2))
  }

  update() {
    this.edges();
    this.pos.add(this.vel);
  }

  draw() {
    // No Border
    noStroke();
    fill('rgba(255, 255, 255, .5)');
    circle(this.pos.x, this.pos.y, this.size);
  }

  edges(){
    if (this.pos.y < 5 || this.pos.y > height - 5){
      this.vel.y = -this.vel.y;
    }
    if(this.pos.x < 5 || this.pos.x > width - 5){
      this.vel.x = -this.vel.x;
    }
  }
}