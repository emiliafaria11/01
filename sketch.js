function setup() {
  createCanvas(1920,1080);
    frameRate(2);
  }
  function draw() { 
  background(0);
  fill (255,255,0);
    
  beginShape();
  for (let i = 0; i < 5; i++) {
  vertex (random(width), random(height)) 
  endShape(CLOSE);
  }
  }
  function mousePressed() { let fs = fullscreen();
  fullscreen(!fs); }
  