// Capstone Project
// Logan Roy
// December 1, 2025


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  wizard();
  kight();
}
// class Wizard{
// constructor(){
//   x = width/2
//   y = height/2
//   health = 100
//   damage = 6 
// }

 

function wizard(){
  // will create the wizard character
  fill(21, 101, 192);
  rect(width/2 - 19.5, height/2 + 25, 40, 50)
  
  fill(255, 204, 153);
  circle(width/2, height/2 + 5, 60);

  fill(220);
  arc(width/2, height/2, 15, 30, -1, 2);
  arc(width/2, height/2, 15, 30, 1, 1);
  //triangle()
}
// }

function kight(){
fill(150,150,150);
}