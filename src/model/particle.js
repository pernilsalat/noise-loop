function Particle() {
  const pos = createVector(random(width), random(height));
  const vel = createVector(0, 0);
  const acc = createVector(0, 0);
  const maxspeed = 2;

  const prevPos = pos.copy();

  function updatePrev() {
    prevPos.x = pos.x;
    prevPos.y = pos.y;
  }
  function applyForce(force) {
    acc.add(force);
  }
  function follow(vectors) {
    const x = floor(pos.x / scale);
    const y = floor(pos.y / scale);
    const index = x + y * cols;
    const force = vectors[index];
    applyForce(force);
  }
  function edges() {
    if (pos.x > width) {
      pos.x = 0;
      updatePrev();
    }
    if (pos.x < 0) {
      pos.x = width;
      updatePrev();
    }
    if (pos.y > height) {
      pos.y = 0;
      updatePrev();
    }
    if (pos.y < 0) {
      pos.y = height;
      updatePrev();
    }
  }

  return {
    update(flowField) {
      follow(flowField);
      vel.add(acc);
      vel.limit(maxspeed);
      pos.add(vel);
      acc.mult(0);
      edges();
    },
    show() {
      stroke(0, 5);
      strokeWeight(1);
      line(pos.x, pos.y, prevPos.x, prevPos.y);
      updatePrev();
    },
  };
}
