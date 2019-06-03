let SEED, m = 1500;

function setup() {
  createCanvas(700, 500);
  SEED = random(10, 1000);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(3);
  beginShape();
  for (let i = 0; i < m; i++) {
    const p = i / m;
    const x = p * width;
    const y = ;
  }
}
