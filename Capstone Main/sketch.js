// Capstone Project
// Logan Roy
// December 1, 2025
let character;
let character2; //archer
let character3; // wizard
let character4; // assasin 

function setup() {
  createCanvas(windowWidth, windowHeight);
  character = new Knight(width/3,height/2)
  character2 = new Archer();
  character3 = new Wizard();
  character4 = new Assassin();
  angleMode(DEGREES)
}

function draw() {
  background(0);


  // character.display(); //knight
  // character2.display(); // archer
  character3.display(); // wizard
  // character4.display(); // assasin 
  
}

// constructor(){
//   x = width/2
//   y = height/2
//   health = 100
//   damage = 6 
// }

 
// start of characters
class Knight{ //character 1
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
      fill(250)
      circle(13,-3,10)
      circle(-13,-3,10)
      fill(0)
      circle(13,-3,3)
      circle(-13,-3,3)

      pop()
    pop()
  }

  sward(){
  push()
  translate(this.x +45,this.y + 40 )
  rotate(20)
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
    translate(this.x -20,this.y + 40)
    fill("#D4D7D9")
    triangle(-9,-5,34,-5,12,34)
    triangle(-9,-5,34,-5,12,-34)
    fill("#855e42")
    triangle(-5,-5,30,-5,12,30)
    triangle(-5,-5,30,-5,12,-30)
    fill("#caa906")
    circle(12,-5,15)
    fill(225,0,44)
    circle(12,-5,8)
    // stroke("#caa906")
    // strokeWeight(2)
    // point(0,0)
    
    pop()
  }

  }

  

  class Archer{ //character 2
    constructor(){
      this.x = 1
    }
  
    display(){
      this.body();
      this.bow();
    }
    body(){
      push()
      translate(width/2, height/2)
      fill(150,150,150);
      stroke(0)
      strokeWeight(1)
      fill(21, 101, 192);
      rect( - 19.5, 25, 40, 50)
      
      fill(255, 204, 153);
      circle(0, 5, 60);
  
      fill(0, 100, 0);
      triangle(
       - 28,  - 15,   // right side
      0,  - 50,  // middle
       28,  - 15);// left side
      
      push()
      translate(- 15,  - 22)
      rotate(45)
      fill(255, 0 ,0)
      arc(0, 0, 30, 10, 30, 10, CHORD, 2);
      pop();
  
      fill(0, 100, 0);
      rect( - 30,  - 20, 60, 10)
      pop()
    }
    bow(){
      push()
      translate(width/2, height/2)
      // creates the archer's bow
      fill(212, 175, 55);
  
      triangle(
         5,  10,   // right side
         - 7,  - 15,  // middle
          18,  10);// left side
  
      triangle(
         5,  45,   // right side
         - 7,  70,  // middle
         18,  45);// left side
      
      fill(188, 198, 204);
      circle( 10, 55, 10)
      circle( 10,0, 10)
      
      fill(255);
      rect( 5,  - 6, 3, 65)
  
      fill(0);
      rect( 15, 10, 3, 35)
      pop()
    }
  }


  
class Wizard{ // character 3
  // will create the wizard character
constructor(){
  this.size = 1
}
display(){
  // this.body()
  this.staff()
}
body(){
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
staff(){
    // makes the wizards wand
    push()
    translate(width/2, height/2)
    strokeWeight(1);
    stroke(0);
    fill(139, 99,	73);
    rect(0,  15, 5, 60);
    rect(- 8,  20, 20, 4.5);
  
    fill(205, 127, 50);
    fill(137, 207, 240);
    circle( 2.45,  25, 10)
  
    strokeWeight(0);
    fill(220);
    triangle(
       8,  15, 
       2.5,  20, 
       - 3,  15);
    
    rect( - 2.5, 10, 10, 5)
    triangle(
      8,  10, 
       2.5,  5, 
       - 3,  10);
      pop()
  }
  
  }



class Assassin{ // character 4 
  constructor(){
    this.size = 0
  }
  // will create the assassin
display(){
  this.body();
  // this.dagger();
}
  
  body(){
    push()
    translate(width/2, height/2)
    stroke(0)
    strokeWeight(1)
    fill(220, 20, 60);
    rect( - 19.5,  25, 40, 50)
    
    fill(0);
    strokeWeight(0);
    arc(0, 0, 55, 60, 30, 20, CHORD, 2);
    arc(0, 6, 70, 60, 30, 20, CHORD, 2);

    fill(255, 204, 153);
    circle(0,  5, 60);
    
    fill(255, 0, 0);
    arc(0,  24, 50, 23, 40, 20, CHORD, 2);
    
    fill(0);
    arc(0, - 10, 60, 30, 30, 20, CHORD, 2);
    arc( - 26,  10, 13, 32, 30, 20, CHORD, 2);
    arc( 26,  10, 13, 32, 30, 20, CHORD, 2);
    
    
    fill(0);
    rect( 6, 40, 15, 20);
    rect( - 20,  40, 15, 20);
    pop()
}
  dagger(){
    push()
    translate(width/2, height/2)
    pop()
  }
  }
// end of characters