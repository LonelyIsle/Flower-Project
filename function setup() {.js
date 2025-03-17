function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    translate(width / 2, height / 2);
    let petals = 6;
    for (let i = 0; i < petals; i++) {
      push();
      rotate(TWO_PI * i / petals);
      fill(255, 0, 100);
      ellipse(30, 0, 50, 80);
      pop();
    }
  }