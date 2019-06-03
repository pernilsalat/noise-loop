const inc = 0.05;
const scale = 10;
let cols, rows;

let zoff = 0;

let fr;

const particles = [];
const maxParticles = 3000;
let flowField;

const color = [0, 0, 0];

function setup() {
  createCanvas(800, 600);
  cols = floor(width / scale);
  rows = floor(height / scale);
  fr = createP('');

  flowField = Array(cols * rows);

  for (let i = 0; i < maxParticles; i++) {
    particles[i] = Particle();
  }
  background(255);
}


function draw() {
  stroke(0, 5);
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      const index = x + y * cols;
      const angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      flowField[index] = p5.Vector.fromAngle(angle).setMag(1);
      xoff += inc;
    }
    yoff += inc;

    zoff += 0.00003;
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].update(flowField);
    particles[i].show();
  }

  fr.html(floor(frameRate()));
}
