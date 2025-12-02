// Capstone Project
// Logan Roy
// December 1, 2025
let knightguy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  knightguy = new Knight(width/3,height/2)
  angleMode(DEGREES)
}

function draw() {
  background(0);
  wizard();
  staff();
  knightguy.display();
  
  //archer();
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
  stroke(0)
  strokeWeight(1)
  fill(21, 101, 192);
  rect(width/2 - 19.5, height/2 + 25, 40, 50)
  
  fill(255, 204, 153);
  circle(width/2, height/2 + 5, 60);
  push();
  translate(width/2,height/2);
  rotate(-20);
  fill(120,40,200);
  ellipse(0, -15, 80, 30);
  fill(120,40,200);
  triangle(
      -20,   -10,   // right side
    0,  -80,  // middle
     20, -10);// left side
  strokeWeight(3);
  stroke(60);
  fill(0);
  rect(-18, -23, 36, 10);
  stroke(0);
  pop();
}

function staff(){
  // makes the wizards wand
  strokeWeight(1);
  stroke(0);
  fill(139, 99,	73);
  //rotate(45);
  rect(width/2, height/2 + 15, 5, 60);
  rect(width/2 - 8, height/2 + 20, 20, 4.5);

  fill(224, 17, 95);
  triangle(
    width/2 + 6.5, height/2 + 15, 
    width/2 + 2, height/2 + 5, 
    width/2 - 2, height/2 + 15);
  circle(width/2 + 2.5, height/2 + 20, 10)
}

// }








class Knight{
constructor(x,y){
this.x = x
this.y = y
this.silver = color
}
display(){
this.body();
this.hat()
}
body(){
fill(150,150,150);
rect(this.x,this.y + height/34,40,50);
fill(255, 204, 153);
circle(this.x+20, this.y+5,60);
// fill(0)
// point(this.x+20,this.y+5)
}
hat(){
  push()
  fill(225)
  translate(this.x + 20,this.y + 10)
  triangle(0,0,
    -10,-35,
    10,-35)
    fill(255, 204, 153)
    push()
    strokeWeight(0)
    circle(15,-5,19)
    circle(15,-5,19)
    pop()
  pop()
}

}

function archer(){
  fill(150,150,150);
  }