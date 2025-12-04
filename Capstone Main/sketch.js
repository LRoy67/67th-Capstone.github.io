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
  //wizard();
  //staff();
  //assassin();
  knightguy.display();
  
  archer();
  bow();
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

function assassin(){
  // will create the assassin
  stroke(0)
  strokeWeight(1)
  fill(220, 20, 60);
  rect(width/2 - 19.5, height/2 + 25, 40, 50)
  
  fill(0);
  strokeWeight(0);
  arc(width/2, height/2, 55, 60, 30, 20, CHORD, 2);
  arc(width/2, height/2 + 6, 70, 60, 30, 20, CHORD, 2);

  fill(255, 204, 153);
  circle(width/2, height/2 + 5, 60);
  
  fill(255, 0, 0);
  arc(width/2, height/2 + 24, 50, 23, 40, 20, CHORD, 2);
  
  fill(0);
  arc(width/2, height/2 - 10, 60, 30, 30, 20, CHORD, 2);
  arc(width/2 - 26, height/2 + 10, 13, 32, 30, 20, CHORD, 2);
  arc(width/2 + 26, height/2 + 10, 13, 32, 30, 20, CHORD, 2);
  
  
  fill(0);
  rect(width/2 + 6, height/2 + 40, 15, 20);
  rect(width/2 - 20, height/2 + 40, 15, 20);

}

function archer(){
  fill(150,150,150);
  stroke(0)
  strokeWeight(1)
  fill(21, 101, 192);
  rect(width/2 - 19.5, height/2 + 25, 40, 50)
  
  fill(255, 204, 153);
  circle(width/2, height/2 + 5, 60);

  fill(0, 100, 0);
  triangle(
   width/2 - 28, height/2 - 15,   // right side
   width/2, height/2 - 50,  // middle
   width/2 + 28, height/2 - 15);// left side
  
  push()
  translate(width/2- 15, height/2 - 22)
  rotate(45)
  fill(255, 0 ,0)
  arc(0, 0, 30, 10, 30, 10, CHORD, 2);
  pop();

  fill(0, 100, 0);
  rect(width/2 - 30, height/2 - 20, 60, 10)
  
  }

  function bow(){
    // creates the archer's bow
    fill(212, 175, 55);

    triangle(
      width/2 + 5, height/2 + 10,   // right side
      width/2 - 7, height/2 - 15,  // middle
      width/2 + 18, height/2 + 10);// left side

    triangle(
      width/2 + 5, height/2 + 45,   // right side
      width/2 - 7, height/2 + 70,  // middle
      width/2 + 18, height/2 + 45);// left side
    
    fill(188, 198, 204);
    circle(width/2 + 10, height/2 + 55, 10)
    circle(width/2 + 10, height/2, 10)
    
    fill(255);
    rect(width/2 - 5, height/2 - 6, 3, 65)

    fill(0);
    rect(width/2 + 15, height/2 + 10, 3, 35)
  }







class Knight{
constructor(x,y){
this.x = x
this.y = y
this.silver = color("#9fa1a0")
}
display(){
this.body();
this.hat()
this.sward()
this.sheild()
}
body(){
fill(150,150,150);
rect(this.x,this.y + height/34,40,50);
fill(255, 204, 153);
circle(this.x+20, this.y+6,56);
// fill(0)
// point(this.x+20,this.y+5)
}
hat(){
  push()
  strokeWeight(0)
  fill(this.silver)
  translate(this.x + 20,this.y + 10)
  triangle(0,0,
    -10,-31,
    10,-31)
    fill(255, 204, 153)
    push()
    strokeWeight(0)
    fill(this.silver)
    circle(13,-10,30)
    fill(this.silver)
    circle(0,-23,25)
    circle(13,-18,22)
    circle(-13,-18,22)
    circle(0,-14,40)
    

    
    fill(255, 204, 153)
    circle(13,-3,22)
    fill(this.silver)
    circle( -13,-10,30)
    fill(255, 204, 153)
    circle(-13,-3,21)
    

    pop()
  pop()
}

sward(){
  push()
  translate(this.x +55,this.y + 40 )
  fill("#97572b")
  rect(0,0,5,18)
  strokeWeight(1)
  for(let lines = 0; lines < 3; lines ++){
    line(0,lines * 6 + 3,5, lines*6 + 3);
  }
  fill("#caa906")
  strokeWeight(0)
  rect(-4,0,13,-4)
  fill("#c4c4c4")
  rect(-1,-4,7,-29)
  
  triangle(
    -1,-32,
    6,-32,
    2.5,-43
  )
  strokeWeight(0.5)
  line(2.5,-4,2.5,-32)
  strokeWeight(0)
  fill("#caa906")
  circle(2.5,22,6)
  pop()
}

sheild(){
  push()
  strokeWeight(0)
  translate(this.x -55,this.y + 40)
  fill("#855e42")
  triangle(-5,-5,30,-5,15,30)
  triangle(-5,-5,30,-5,15,-15)
  // stroke("#caa906")
  // strokeWeight(2)
  // point(0,0)
  pop()
}

}
