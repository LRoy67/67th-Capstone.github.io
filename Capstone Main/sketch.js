// Capstone Project
// Logan Roy
// December 1, 2025


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  wizard();
}


function wizard(){
  // will create the wizard character
  fill(21, 101, 192);
  rect(width/2 - 19.5, height/2 + 25, 40, 50)
  
  fill(255, 204, 153);
  circle(width/2, height/2 + 5, 60);

  fill(220);
  arc(width/2, height/2, 60, 30, -1, 3);
}