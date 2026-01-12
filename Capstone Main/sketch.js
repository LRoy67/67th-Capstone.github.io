// Capstone Project
// Logan and Troy
// December 1, 2025
let character;
let monster;
let gold = 10
let arrowcase = 0;
let xshift;
let mapload;
let movment= 10
let fightnum = 0
let charselect = 0
let gamer = true

function setup() {
  createCanvas(543, 540);
  character = new Knight();
  // character = new Archer();
  // character = new Wizard();
  // character = new Assassin();

  // monster = new Zombie();
  // monster = new Skeleton();
  monster = new Ghost();
  // monster = new Boss();

  mapload = new MapFiller();
  angleMode(DEGREES)
  game()
}

function draw(){
  if(gamer == false){
    starts()
  }
  else{
  game()
  }
}

function starts(){
  fill("rgb(226, 215, 53)")
  rect(width*0.1,height/4,width*0.8,height/2)
}

function game() {
  background(150);
  mapload.display()
  monster.display();
  character.display();
  mainGUI()
  if (keyIsDown(87)) {
    moveup()
  }
  if (keyIsDown(65)) {
    moveleft()
  }
  if (keyIsDown(83)) {
    movedown()
  }
  if (keyIsDown(68)) {
    moveright()
  }
}
function mainGUI(){
//  healthUI(character);
 moneyGUI()
 mapGUI()
}

function healthUI(player){
  push()
  translate(player.x,player.y)
  fill(190,10,10)
  rect(player.healthbarst,player.healthbarup,80,10)
  fill(10,190,10)
  let healthval = map(player.health,0,player.maxhealth,0,80);
  rect(player.healthbarst,player.healthbarup,healthval,10)
  pop();
}

function moneyGUI(){
  fill("rgba(137, 81, 41,1)")
  rect(0,height - 40,100,40)
  fill("rgba(238, 203, 5, 0.99)");
  circle(20,height-20,25)
  circle(20,height-20,20)
  fill(137, 81, 41)
  circle(20,height-20,5)
  fill("rgba(238, 203, 5, 0.99)");
  textSize(20)
  text(gold,40,height-12)
}

function mapGUI(){
  let mapsize = 140
  fill(0)
  rect(width- mapsize,height - mapsize,mapsize,mapsize)
  push()
  translate(width- mapsize -1,height - mapsize-1)
  scale(0.26)
  let numload = mapload.mapnum +1
  switch(numload){
    case 0:
      mapload.mapStart()
      break
    case 1:
      mapload.mapfill2()
      break
    case 2:
      mapload.mapfill3()
      break
    case 3:
      mapload.mapend()
      break
    case 4:
      mapload.mapend()
      break
  
  }
  pop()
}

function moveup() {
  if (character.y >= 20) {
    character.y -= character.speed * 4
    if(mapload.mapnum < 3){
    if(character.y < 20){
      mapload.mapnum ++
      character.y = height- 70
    }
  }
  }
}
function moveleft() {
  if (character.x >= 20) {
    character.x -= character.speed * 4
  }
}
function moveright() {
  if (character.x <= width - 70) {
    character.x += character.speed * 4
  }
}
function movedown() {
  if (character.y <= height - 70) {
    character.y += character.speed * 4
    if(mapload.mapnum >= 1){
    if(character.y > height - 70){
      mapload.mapnum --
      character.y = 20
    }
  }
  }
 
}

function fight(){
  
}

// start of characters We should move to diffrent file once done fully 
class Knight { //character 1
  constructor() {
    this.x = width / 2;
    this.y = height / 2
    this.silver = color("#9fa1a0")
    this.health = 110
    this.maxhealth = this.health
    this.healthbarup = -50
    this.sheildhealth = 20
    this.healthbarst = -20
    this.speed = 0.8
    this.damage = 19
  }
  display() {
    this.body();
    this.hat()
    this.sward()
    this.sheild()
  }
  body() {
    fill(150, 150, 150);
    rect(this.x, this.y + height / 34, 40, 50);
    fill(255, 204, 153);
    circle(this.x + 20, this.y + 6, 56);
    // fill(0)
    // point(this.x+20,this.y+5)
  }
  hat() {
    push()
    strokeWeight(0)
    fill(this.silver)
    translate(this.x + 20, this.y + 10)
    triangle(0, 0,
      -10, -31,
      10, -31)
    fill(255, 204, 153)
    push()
    strokeWeight(0)
    fill(this.silver)
    circle(13, -10, 30)
    fill(this.silver)
    circle(0, -23, 25)
    circle(13, -18, 22)
    circle(-13, -18, 22)
    circle(0, -14, 40)
    fill(255, 204, 153)
    circle(13, -3, 22)
    fill(this.silver)
    circle(-13, -10, 30)
    fill(255, 204, 153)
    circle(-13, -3, 21)
    fill(this.silver)
    arc(0, 6, 53, 35, -10, 190, PIE, 2)
    push()
    strokeWeight(1)
    // line(0,6,5,12)
    // line(0,6,-5,12)
    for (let i = 2; i < 20; i += 4) {
      line(i, 7, i + 6, 15)
      line(-i, 7, -i - 6, 15)
    }
    pop()
    fill(250) //eyes
    ellipse(13, -3, 10, 8)
    ellipse(-13, -3, 10, 8)
    fill("#7d5d04b0")
    circle(13, -3, 5)
    circle(-13, -3, 5)
    fill(0)
    circle(13, -3, 3)
    circle(-13, -3, 3)

    pop()
    pop()
  }

  sward() {
    push()
    translate(this.x + 45, this.y + 40)
    rotate(20)
    fill("#97572b")
    rect(0, 0, 5, 18)
    strokeWeight(1)
    for (let lines = 0; lines < 3; lines++) {
      line(0, lines * 6 + 3, 5, lines * 6 + 3);
    }
    fill("#caa906")
    strokeWeight(0)
    rect(-4, 0, 13, -4)
    fill("#c4c4c4")
    rect(-1, -4, 7, -29)

    triangle(
      -1.2, -32,
      6.2, -32,
      2.5, -43
    )
    strokeWeight(0.5)
    line(2.5, -4, 2.5, -32)
    strokeWeight(0)
    fill("#caa906")
    circle(2, 20, 6)
    pop()
  }

  sheild() {
    push()
    strokeWeight(0)
    translate(this.x - 20, this.y + 35)
    fill("#D4D7D9")
    triangle(-9, -5, 34, -5, 12, 34)
    triangle(-9, -4.9, 34, -4.9, 12, -34)
    fill("#855e42")
    triangle(-5, -5, 30, -5, 12, 30)
    triangle(-5, -4.9, 30, -4.9, 12, -30)
    push()
    strokeWeight(1)
    stroke("#0004ffd5")
    line(12, 28, 12, -28)
    line(15, 23, 15, -24)
    line(9, 23, 9, -24)
    line(18, 16, 18, -20)
    line(6, 16, 6, -20)
    line(21, 11, 21, -16)
    line(3, 10, 3, -16)
    line(24, 5, 24, -12)
    line(0, 4, 0, -11)
    line(27, -0.8, 27, -7.5)
    line(-3, -1.9, -3, -6.5)
    pop()
    fill("#caa906")
    circle(12, -5, 15)
    fill("#e10a0afc")
    circle(12, -5, 8)
    // stroke("#caa906")
    // strokeWeight(2)
    // point(0,0)

    pop()
  }

}
class Archer { //character 2
  constructor() {
    this.x = width / 2;
    this.y = height / 2
    this.arrowx = this.x + 14; this.arrowy = this.y + 38
    this.health = 70;
    this.maxhealth = this.health
    this.healthbarst = -40
    this.healthbarup = -65
    this.speed = 1.25;
    this.damage = 40
  }

  display() {
    this.quilt()
    this.body();
    this.strap()
    this.arrowcall()
    this.bow();

  }
  body() {
    push()
    translate(this.x, this.y)
    fill(150, 150, 150);
    stroke(0)
    strokeWeight(1)
    fill(21, 101, 192);
    rect(- 19.5, 25, 40, 50)

    fill(255, 204, 153);
    circle(0, 5, 60);

    fill(0, 100, 0);
    triangle(
      - 28, - 15,   // right side
      0, - 50,  // middle
      28, - 15);// left side

    push()
    translate(- 15, - 22)
    rotate(45)
    fill(255, 0, 0)
    arc(0, 0, 30, 10, 30, 10, CHORD, 2);
    pop();

    fill(0, 100, 0);
    rect(- 30, - 20, 60, 10)
    pop()
  }
  bow() {
    push()
    translate(this.x + 35, this.y + 20)
    rotate(45)
    // creates the archer's bow
    fill(255);
    rect(5, - 6, 3, 65)
    fill(212, 175, 55);

    triangle(
      5, 10,   // right side
      - 7, - 15,  // middle
      18, 10);// left side

    triangle(
      5, 45,   // right side
      - 7, 70,  // middle
      18, 45);// left side

    fill(188, 198, 204);
    circle(10, 55, 10)
    circle(10, 0, 10)



    fill("#c78f6aff");
    rect(15, 10, 3, 35)
    pop()
  }
  quilt() {
    push()
    translate(this.x - 36, this.y + 35)
    rotate(-25)
    fill(0)
    push() //arrows
    strokeWeight(3)
    stroke(164, 116, 73)
    line(3, 0, 3, -10)
    strokeWeight(0)
    fill(128, 126, 120)
    triangle(-2, -8, 8, -8, 3, -15)
    strokeWeight(3)
    stroke(164, 116, 73)
    line(8, 0, 8, -10)
    strokeWeight(0)
    fill(128, 126, 120)
    triangle(2, -8, 13, -8, 8, -15)
    strokeWeight(3)
    stroke(164, 116, 73)
    line(12, 0, 12, -10)
    strokeWeight(0)
    fill(128, 126, 120)
    triangle(6, -8, 18, -8, 12, -15)
    pop()

    fill(98, 74, 46) //rectangle
    rect(0, 0, 15, 30)

    pop()
  }
  strap() {
    push()
    strokeWeight(0)
    translate(this.x - 22, this.y + 52)
    rotate(-28)
    fill(98, 74, 46)
    rect(0, 0, 48, 6)
    pop()
  }

  arrowcall() {

    switch (arrowcase) { //arrow in bow
      case 0:
        push()
        translate(this.x + 14, this.y + 38)
        rotate(-45)
        strokeWeight(0)
        rect(-4, -1, 8, 4)
        triangle(-4, 3,
          -1, 7,
          -1, 3
        )
        triangle(4, 3,
          1, 7,
          1, 3
        )
        strokeWeight(0.1)
        for (let i = -0.75; i < 3; i += 0.5) {
          line(-4, i, -1, i)
        }
        for (let i = -0.75; i < 3; i += 0.5) {
          line(1, i, 4, i)
        }
        xshift = -4;
        for (let i = 3.25; i < 7; i += 0.5) {
          line(xshift, i, -1, i)
          xshift += 0.4
        }
        xshift = 4;
        for (let i = 3.25; i < 7; i += 0.5) {
          line(1, i, xshift, i)
          xshift -= 0.4
        }
        strokeWeight(3)
        stroke(164, 116, 73)
        line(0, 0, 0, 30)
        strokeWeight(0)
        fill(128, 126, 120)
        triangle(-4, 25,
          4, 25,
          0, 35
        )
        pop()
        break
      case 1:
        this.normarrow()
        break
      case 2:
        this.firearrow()
        break
      case 3:
        this.icearrow()
        break
    }
  }


  normarrow() {

    push()
    translate(this.arrowx, this.arrowy)
    rotate(-90)
    strokeWeight(0)
    rect(-4, -1, 8, 4)
    triangle(-4, 3,
      -1, 7,
      -1, 3
    )
    triangle(4, 3,
      1, 7,
      1, 3
    )
    strokeWeight(0.1)
    for (let i = -0.75; i < 3; i += 0.5) {
      line(-4, i, -1, i)
    }
    for (let i = -0.75; i < 3; i += 0.5) {
      line(1, i, 4, i)
    }
    xshift = -4;
    for (let i = 3.25; i < 7; i += 0.5) {
      line(xshift, i, -1, i)
      xshift += 0.4
    }
    xshift = 4;
    for (let i = 3.25; i < 7; i += 0.5) {
      line(1, i, xshift, i)
      xshift -= 0.4
    }
    strokeWeight(3)
    stroke(164, 116, 73)
    line(0, 0, 0, 30)
    strokeWeight(0)
    fill(128, 126, 120)
    triangle(-4, 25,
      4, 25,
      0, 35
    )
    pop()

  }
  firearrow() {
    push()
    translate(this.arrowx, this.arrowy)
    rotate(-90)
    strokeWeight(0)
    rect(-4, -1, 8, 4)
    triangle(-4, 3,
      -1, 7,
      -1, 3
    )
    triangle(4, 3,
      1, 7,
      1, 3
    )
    strokeWeight(0.1)
    for (let i = -0.75; i < 3; i += 0.5) {
      line(-4, i, -1, i)
    }
    for (let i = -0.75; i < 3; i += 0.5) {
      line(1, i, 4, i)
    }
    xshift = -4;
    for (let i = 3.25; i < 7; i += 0.5) {
      line(xshift, i, -1, i)
      xshift += 0.4
    }
    xshift = 4;
    for (let i = 3.25; i < 7; i += 0.5) {
      line(1, i, xshift, i)
      xshift -= 0.4
    }
    strokeWeight(3)
    stroke(164, 116, 73)
    line(0, 0, 0, 30)
    strokeWeight(0)
    fill(225, 100, 50)
    push()
    triangle(5, 25, -5, 25, 0, 10)
    triangle(0, 25, 5, 25, 6, 13)
    triangle(0, 25, -5, 25, -6, 13)
    fill(225, 60, 10)
    triangle(5, 25, -5, 25, 0, 15)
    triangle(0, 25, 4, 25, 5.5, 16)
    triangle(0, 25, -4, 25, -5.5, 16)
    pop()
    fill(225, 10, 0)
    triangle(-5, 25,
      5, 25,
      0, 35)

    pop()

  }
  icearrow() {
    push()
    translate(this.arrowx, this.arrowy)
    rotate(-90)
    strokeWeight(0)
    rect(-4, -1, 8, 4)
    triangle(-4, 3,
      -1, 7,
      -1, 3
    )
    triangle(4, 3,
      1, 7,
      1, 3
    )
    strokeWeight(0.1)
    for (let i = -0.75; i < 3; i += 0.5) {
      line(-4, i, -1, i)
    }
    for (let i = -0.75; i < 3; i += 0.5) {
      line(1, i, 4, i)
    }
    xshift = -4;
    for (let i = 3.25; i < 7; i += 0.5) {
      line(xshift, i, -1, i)
      xshift += 0.4
    }
    xshift = 4;
    for (let i = 3.25; i < 7; i += 0.5) {
      line(1, i, xshift, i)
      xshift -= 0.4
    }
    strokeWeight(3)
    stroke(164, 116, 73)
    line(0, 0, 0, 30)
    strokeWeight(0)
    fill(128, 126, 120)
    fill(0, 200, 225)
    push()
    triangle(5, 25, -5, 25, 0, 10)
    triangle(0, 25, 5, 25, 6, 13)
    triangle(0, 25, -5, 25, -6, 13)
    fill(225, 225, 225)
    triangle(5, 25, -5, 25, 0, 15)
    triangle(0, 25, 4, 25, 5.5, 16)
    triangle(0, 25, -4, 25, -5.5, 16)
    pop()
    fill(0, 160, 225)
    triangle(-5, 25,
      5, 25,
      0, 35)
    pop()

  }
  // green arrow????
  //Rocket arrow???  
}
class Wizard { // character 3
  // will create the wizard character
  constructor() {
    this.x = width / 2;
    this.y = height / 2
    this.fireballx = this.x + 75; this.firebally = this.y + 10
    this.iceballx = this.x + 57; this.icebally = this.y + 10
    this.blastx = this.x + 60; this.blasty = this.y + 10;
    this.shotx = this.blastx; this.shoty = this.blasty;
    this.health = 90
    this.maxhealth = this.health
    this.healthbarst = -40
    this.healthbarup = -90
    this.damage = 30
    this.speed = 1
  }
  display() {
    this.robe()
    this.body()
    this.staff()
    // this.fireball()
    // this.icespell()
    // this.holyBlast()

  }
  body() {
    push()
    translate(this.x, this.y)
    stroke(0)
    strokeWeight(1)
    fill(21, 101, 192);
    rect(- 19.5, 25, 40, 50)

    fill(255, 204, 153);
    circle(0, 5, 60);
    rotate(-20);
    fill(120, 40, 200);
    ellipse(0, -15, 80, 30);
    fill(120, 40, 200);
    triangle(
      -20, -10,   // right side
      0, -80,  // middle
      20, -10);// left side
    strokeWeight(3);
    stroke(60);
    fill(0);
    rect(-18, -23, 36, 10);
    stroke(0);
    pop();
  }
  staff() {
    // makes the wizards wand
    push()
    translate(this.x + 40, this.y)
    rotate(20)
    strokeWeight(1);
    stroke(0);
    fill(139, 99, 73);
    rect(0, 15, 5, 60);
    rect(- 8, 20, 20, 4.5);

    fill(205, 127, 50);
    fill(137, 207, 240);
    circle(2.45, 25, 10)

    strokeWeight(0);
    fill(220);
    triangle(
      8, 15,
      2.5, 20,
      - 3, 15);

    rect(- 2.5, 9, 10, 7)
    triangle(
      8, 10,
      2.5, 5,
      - 3, 10);
    pop()
  }
  robe() {
    push()
    strokeWeight(1)
    translate(this.x, this.y)
    fill(21, 101, 192);
    arc(- 18, 65, 60, 20, 10, -15, PIE);
    circle(- 25, 25, 33);
    pop()
    // pretty pwease add to lil wiz
  }

  fireball() {
    push()
    translate(this.fireballx, this.firebally)
    strokeWeight(0)
    fill(225, 180, 0)
    circle(-3, 0, 35)
    triangle(-12, 15, -17, 0, -24, 12)
    triangle(-12, -15, -17, 0, -24, -12)
    triangle(-12, 15, -17, -13, -32, 0)
    fill(200, 120, 0)
    circle(0, 0, 30)
    triangle(0, 13, -5, 0, -12, 13)
    triangle(0, -13, -5, 0, -13, -13)
    triangle(0, 13, -5, -13, -26, 0)
    fill(140, 0, 0)
    circle(0, 0, 25)
    triangle(0, 11, -4, 0, -8, 12)
    triangle(0, -11, -4, 0, -8, -12)
    triangle(0, 11, -4, -8, -18, 0)

  }

  icespell() {
    push()
    strokeWeight(0)
    translate(this.iceballx, this.icebally)
    fill(0, 200, 225)
    circle(-3, 0, 35)
    triangle(-12, 15, -17, 0, -24, 12)
    triangle(-12, -15, -17, 0, -24, -12)
    triangle(-12, 15, -17, -13, -32, 0)
    fill(225, 225, 225)
    circle(0, 0, 30)
    triangle(0, 13, -5, 0, -12, 13)
    triangle(0, -13, -5, 0, -12, -13)
    triangle(0, 13, -5, -13, -24, 0)

    pop()

  }
  holyBlast() {
    push()
    translate(this.blastx, this.blasty)
    // spell for wiz
    strokeWeight(2);
    fill(255, 253, 126)
    circle(0, 0, 50)
    strokeWeight(2);
    circle(0, 0, 10);
    strokeWeight(1);

    push();
    noFill();
    for (let i = 0; i < 360; i += 360 / 20) {
      rotate(i);
      rect(0, 0, 18, 18);
    }
    pop();
    pop()
    fill(255, 253, 126)
    push()
    translate(this.shotx, this.shoty)
    rect(0, -6.5, 35, 13);
    pop()

  }

}
class Assassin { // character 4 
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.health = 70;
    this.maxhealth = this.health
    this.healthbarst = -40
    this.healthbarup = -50
    this.speed = 1.5;
    this.damage = 20;
  }
  // will create the assassin
  display() {
    this.body();
    this.dagger();
  }

  body() {
    push()
    translate(this.x, this.y)
    stroke(0)
    strokeWeight(1)
    fill(0);
    rect(- 20, 25, 40, 50)

    fill(200);
    triangle(-20, 75, 20, 75, 0, 50);

    fill(0);
    strokeWeight(0);
    arc(0, 0, 55, 60, 30, 20, CHORD, 2);
    arc(0, 6, 75, 62, 30, 20, CHORD, 2);

    fill(255, 204, 153);
    circle(0, 5, 60);

    strokeWeight(1)
    fill(89)
    arc(0, 15, 35, 5, 40, 20, CHORD, 2);
    fill(134)
    arc(0, 17, 40, 5, 40, 20, CHORD, 2);
    fill(89)
    arc(0, 20, 45, 5, 40, 20, CHORD, 2);
    fill(134)
    arc(0, 23, 50, 5, 40, 20, CHORD, 2);
    fill(89)
    arc(0, 26, 50, 5, 40, 20, CHORD, 2);
    fill(134)
    arc(0, 29, 45, 5, 40, 20, CHORD, 2);
    fill(89)
    arc(0, 33, 35, 5, 40, 20, CHORD, 2);


    strokeWeight(0);
    fill(0);
    arc(0, -9, 60, 35, 30, 20, CHORD, 2);
    arc(0, -15, 45, 30, 30, 20, CHORD, 2);
    pop()
  }
  dagger() {
    push()
    translate(this.x + 23, this.y + 47)
    rotate(40)
    fill("#97572b")
    rect(0, 0, 5, 12)
    strokeWeight(1)
    for (let lines = 0; lines < 3; lines++) {
      line(0, lines * 4 + 2, 5, lines * 4 + 2);
    }
    fill("#caa906")
    strokeWeight(0)
    rect(-2, 0, 11, -4)
    fill("#c4c4c4")
    rect(-1, -4, 7, -15)

    triangle(
      -1, -19,
      6, -19,
      2.5, -27
    )
    strokeWeight(0.5)
    line(2.5, -4, 2.5, -19)

    pop()
  }
}
// end of characters



// monsters start here
class Zombie { // Monster 1 
  constructor() {
    this.x = width / 3;
    this.y = height / 3;
  }
  // will create the zombie
  display() {
    this.body();
  }

  body() {
    push()
    translate(this.x, this.y)
    stroke(0)
    strokeWeight(1)

    fill(151, 87, 43)
    rect(-20, 20, 40, 50);

    fill(80, 190, 20)
    triangle(-20, 70, 20, 70, 0, 50,)

    strokeWeight(1);
    fill(80, 190, 20)
    circle(0, 0, 60)

    fill(80, 0, 20)
    ellipse(0, -20, 40, 20)

    fill(235, 20, 147)
    ellipse(0, -20, 25, 20)

    fill(80, 0, 20)
    ellipse(0, 15, 40, 20)

    strokeWeight(0);
    fill(80, 190, 20)
    ellipse(0, 10, 50, 20)

    fill(255)
    ellipse(-10, 0, 17, 10)

    fill(255)
    circle(10, 0, 13)
    pop();
  }
}

class Skeleton{ // Monster 2
  constructor() {
    this.x = width / 3;
    this.y = height / 3;
  }
  // will create the skeleton
  display() {
    this.body();
    this.bone();
  }

  body() {
    push()
    translate(this.x, this.y)
    stroke(0)
    strokeWeight(1)

    fill(255)
    rect(-20, 20, 40, 50);

    strokeWeight(1);
    fill(255)
    ellipse(0, 6, 37, 50)

    fill(255)
    ellipse(0, 0, 55, 45)

    strokeWeight(0);
    fill(255)
    ellipse(0, 6, 40, 40)

    fill(0)
    ellipse(-10, -5, 17, 10)

    fill(0)
    ellipse(10, -5, 17, 10)

    fill(255, 0, 0)
      ellipse(-10, -5, 5, 9)

    fill(255, 0, 0)
    ellipse(10, -5, 5, 9)
    
  pop()
  }
  bone(){
    push()
    translate(this.x, this.y)
    stroke(0);
    strokeWeight(1);
    fill(0)
    rect(0, 0, 7, 30);
    strokeWeight(1);
    fill(255, 0, 0);
    ellipse(-10, -5, 5, 9);
    strokeWeight(1);
    fill(0, 0, 255);
    circle(8, 0, 10);
    circle(-1, 0, 10);
    fill(0);
    triangle(0, 30, 3.5, 40, 7, 30);
    pop();
  }
}

class Ghost{ // Monster 3
  constructor() {
    this.x = width / 3;
    this.y = height / 3;
  }
  // will create the ghost
  display() {
    this.body();
  }

  body() {
    push()
    translate(this.x, this.y)
    stroke(0)
    strokeWeight(1)

    fill(255)
    circle(0, 20, 40)
    rect(-20, 20, 40, 60);
    strokeWeight(0)
    rect(-19.5, 19.5, 39, 1);

    fill(0);
    ellipse(-7, 20, 10, 15)
    ellipse(7, 20, 10, 15)

      push();
      fill(0)
      for(let p = 10; p >- 50; p -= 10){
      triangle(p, 80, p*2, 80, p+p/2, 70)
      }
      pop()
  pop()
  }
}

class Boss { // Monster 1 
  constructor() {
    this.x = width / 3;
    this.y = height / 3;
  }
  // will create the zombie
  display() {
    this.body();
  }

  body() {
    push()
    translate(this.x, this.y)
    stroke(0)
    strokeWeight(1)

    fill(130, 70, 51)
    rect(-30, 20, 60, 80);


      push()
      translate(-30, 25)
      fill(246,215,176)
      for(let i = 3; i < 70; i+=10){
        rect(0, 0+i, 60, 10)
      }
      rotate(45);
      rect(10, 0, 75, 10)
      pop();



    strokeWeight(1);
    fill(130, 70, 51)
    circle(0, 0, 80)


    fill(0)
    rect(-20, -20, 40, 7)
    fill(255, 0, 0)
    circle(11, -16.5, 7)
    fill(255, 0, 0)
    circle(-11, -16.5, 7)

      
          push();
          fill(246,215,176)
          arc(-16, -7, 5, 37, 30, 2, CHORD)
          ellipse(0, -37, 25, 5)
          arc(0, -34.5, 39, 5, 5, 2, CHORD)
          arc(0, -31.5, 48, 5, 5, 2, CHORD)
          arc(-3, -28, 50, 5, 5, 2, CHORD)
          arc(0, -25, 62, 5, 5, 2, CHORD)
          arc(0, -22, 65, 5, 5, 2, CHORD)
          arc(0, -12, 77, 5, 5, 2, CHORD)
          arc(0, -9, 77, 5, 5, 2, CHORD)
          arc(0, -6, 77, 5, 5, 2, CHORD)
          arc(0, -3, 77, 5, 5, 2, CHORD)


          arc(-24.5, -18, 20, 4, 5, 2, CHORD)
          arc(-24.5, -16, 20, 4, 5, 2, CHORD)
          arc(25, -18, 20, 4, 5, 2, CHORD)
          arc(25, -16, 20, 4, 5, 2, CHORD)
          arc(0, -17, 15, 5, 5, 2, CHORD)

        

          arc(0, 6, 77, 5, 5, 2, CHORD)
          arc(0, 9, 77, 5, 5, 2, CHORD)
          arc(0, 12, 77, 5, 5, 2, CHORD)
          arc(0, 16, 75, 5, 5, 2, CHORD)
          arc(0, 19, 72, 5, 5, 2, CHORD)
          arc(0, 22, 65, 5, 5, 2, CHORD)
          arc(-9, 25, 43, 5, 5, 2, CHORD)
          arc(0, 28, 55, 5, 5, 2, CHORD)
          arc(3, 31.5, 40, 5, 5, 2, CHORD)
          arc(0, 34.5, 39, 5, 5, 2, CHORD)
          ellipse(0, 37, 25, 5)
          
          rotate(45);
          arc(0, 10, 78, 4, 30, 2, CHORD)
          rotate(90);
          arc(0, 9, 78, 4, 30, 2, CHORD)
          rotate(120);
          arc(0, 10, 78, 4, 30, 2, CHORD)
          rotate(270);
          arc(0, 0, 78, 4, 30, 2, CHORD)
          pop();

    pop();
  }
}

// end of monsters

// start of locations
class MapFiller {
  constructor() {
    this.treex = width / 2
    this.treey = height / 2
    this.bushx = width / 2
    this.bushy = height / 2
    this.mapnum = 0
    this.combater = false
    this.combats = 0
  }

  display() {
    if(this.combater == false){
      switch(this.mapnum){
        case 0:
          this.mapStart()
          break
        case 1:
          this.mapfill2()
          break
        case 2:
          this.mapfill3()
          break
        case 3:
          this.mapend()
          break
    }
  }
  else{
    if(this.combats == 0){
      this.combat1()
    }
    else if(this.combats == 2){
      this.bossmap()
    }
  }
  }
  tree() {
    // your power is... greeeeeeeeeeeeeeeeeeeeen
    // and makes a tree
    push()
    translate(this.treex, this.treey)
    strokeWeight(0);
    fill(164, 116, 73);
    rect(- 10 + 2.5, 25, 15, 70)
    fill(0, 185, 0)
    let leafs = 7
    let rotation = 360 / leafs
    for (let n = 0; n < leafs; n++) {
      push()
      rotate(rotation * n)
      circle(0, 25, 35)
      pop()
    }

    //main tree
    fill(0, 185, 0)
    circle(0, 0, 60);
    pop()
  }

  mapStart() {
    fill(17, 154, 50)
    rect(0,0,width,height)
    fill(180, 150, 80);
    rect(width * 0.7, height * 0.4, width * 0.2, height * 0.3)
    triangle(width * 0.7, height * 0.4, width * 0.8, height * 0.4 + height * 0.15, width * 0.7, height * 0.698);
    triangle(width * 0.9, height * 0.4, width * 0.8, height * 0.4 + height * 0.15, width * 0.9, height * 0.698);
    this.bush()
  }




  bush() {
    // makes a bush
    push()
    translate(this.bushx, this.bushy)
    fill(0, 255, 0)
    strokeWeight(0);
    circle(- 120, +20, 40);
    circle(- 180, +20, 40);
    circle(- 170, 0, 40);
    circle(- 150, 0, 40);
    circle(- 130, 0, 40);
    rect(- 180, 0, 60, 40);

    fill(255, 0, 0)
    for (let y = 14; y < 31; y += 15) {
      for (let i = -187; i < -100; i += 15) {
        circle(i, y, 10);
      }
    }
    pop()
  }


  mapfill2() {
    fill(180, 145, 104)
    rect(0,0,width,height)
    push()
    strokeWeight(0)
    fill(212, 190, 144)

    rect(0, 0, width / 8, height)
    rect(width, 0, -width / 8, height)
    push()
    translate(width / 8 - 9, height / 2)
    rotate(10)
    rect(0, 0, 10, 70)
    rotate(-300)
    pop()
    push()
    translate(width / 6 - 90, height / 2 +90)
    rotate(-41)
    rect(0, 0, 90, 100)
    pop()
    push()
    translate(width / 8 - 70, height - 21)
    rotate(-155)
  
    pop()
    push()
    translate(width / 8 * 7, height / 4)
    rotate(25)
    rect(0, 0, 400, 140)
    pop()
    pop()

  }
  mapfill3() {
    push()
    strokeWeight(0)
    fill(17, 154, 50)
    rect(0,0,width,height)
    fill(212, 190, 144)
    triangle(0, height, 0, height * 0.6, width * 0.2, height)
    triangle(width, height, width, height * 0.6, width * 0.8, height)
    let transparant;
    for (let i = height; i > height * 0.7; i--) {
      transparant = map(i, height, height * 0.7, 400, 6)
      fill(212, 190, 144, transparant)
      rect(0, i, width, 1)
    }
    this.treex = width / 10
    this.treey = height / 8
    this.tree()
    this.treex = width * 0.79
    this.treey = height * 0.3
    this.tree()
    pop()
  }

  mapend() {
    push()
    strokeWeight(0)
    fill(17, 154, 50)
    rect(0,0,width,height)
    fill(180, 150, 80)
    rect(width / 15, height / 10, width / 6, height / 3)
    strokeWeight(1)
    for (let i = height / 10; i < height / 10 + height / 3; i += 6) {
      line(width / 15, i, width / 15 + width / 6, i)
    }
    pop()
  }

  combat1(){
    push()
    background("#1F1C40")
    fill("#9B6048")
    strokeWeight(1);
    for(let x = 0;x<width;x+=70){
    triangle(x -25,height*0.27,x+100,height*0.27,x+2,height*0.12)
    }
    fill("#935B44")
    rect(0,height/4,width)
    
    pop()
  }
    
  bossmap(){
    push()
    background("#1F1C40")
  
    fill("#935B44")
    rect(0,0,width)
    fill("#B97356")
    strokeWeight(1);
    circle(width/2,height/2,250)
    push()
    translate(width/2,height/2)
    fill("#533427")
    for(let r = 0; r <360;r+=30){
    rotate(30)
    triangle(-20,250*0.47,20,250*0.47,0,250*0.16)
    }
    for(let r = 0; r <360;r+=30){
      rotate(360/4)
      triangle(-width*0.47,height*0.47,-width*0.47,height*0.25,-width*0.25,height*0.47)
      triangle(-90,height*0.47,90,height*0.47,0,height*0.30)
      }
    //Add skeleton head in center
    pop()
    
    
    push()
    translate(width/2-10, height/2)
    rotate(45)
    fill("#533427")
    rect(0, 0, 5, 18)
    strokeWeight(1)
    for (let lines = 0; lines < 3; lines++) {
      line(0, lines * 6 + 3, 5, lines * 6 + 3);
    }
    fill("#533427")
    strokeWeight(0)
    rect(-4, 0, 13, -4)
    fill("#533427")
    rect(-1, -4, 7, -29)
  
    triangle(
      -1.2, -32,
      6.2, -32,
      2.5, -43
    )
    strokeWeight(0.5)
    line(2.5, -4, 2.5, -32)
    strokeWeight(0)
    fill("#533427")
    circle(2.3, 20, 6)
    pop()
  
    pop()
    push()
    translate(width/2+10, height/2+5)
    rotate(-45)
    fill("#533427")
    rect(0, 0, 5, 18)
    strokeWeight(1)
    for (let lines = 0; lines < 3; lines++) {
      line(0, lines * 6 + 3, 5, lines * 6 + 3);
    }
    fill("#533427")
    strokeWeight(0)
    rect(-4, 0, 13, -4)
    fill("#533427")
    rect(-1, -4, 7, -29)
  
    triangle(
      -1.2, -32,
      6.2, -32,
      2.5, -43
    )
    strokeWeight(0.5)
    line(2.5, -4, 2.5, -32)
    strokeWeight(0)
    fill("#533427")
    circle(2.3, 20, 6)
    pop()
   
    }
  }
// end of locations