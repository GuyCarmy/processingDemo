let paratrooperX = 50, paratrooperY = 20, paratrooperW = 20, paratrooperH = 20;
let boatX = 10, boatY = 700, boatW = 80, boatH = 10;
let speed = 3;
let score = 0;
let msg = 'score: '+score;
let board;

function setup() {
  createCanvas(800,800);
  board = createGraphics(400, 400);
}

function draw() {
  background(100);  
  ellipse(paratrooperX, paratrooperY, paratrooperW, paratrooperH);
  rect(boatX, boatY, boatW, boatH);
  msg = 'score: '+score;
  text(msg, 30, 30);
  paratrooper();
  boat();
  checkCatch();
  board.background(51);
  //board.noFill();
  //image(board, 150, 75);
  grid(board, 150, 75);
  lightIdx(board, 150, 75);
  let startX = 150;
  let startY = 75;
  let p;
  if(mouseX > startX && mouseX < startX+board.width &&
    mouseY > startY && mouseY < startY+board.height){
      p = rect((startX + mouseX) - (startX+(mouseX%50)),
        (startY + mouseY) - (mouseY+(mouseY%50)),
        (startX + mouseX) - ((startX+(mouseX%50))+50,
        (startY + mouseY) - ((mouseY+(mouseY%50))+50)));
      p.fill(255);
    }
  
  
}

function grid(board, startX, startY){
  for(let i=0; i<board.width+1; i+=50){
    line(i + startX, startY, i + startX, startY + board.height);
    line(startX, startY + i, startX + board.width, startY + i);
  }
}
let overBox = false;
let locked = false;
function lightIdx(board, startX, startY){
  if (
    mouseX > startX &&
    mouseX < startX + board.width &&
    mouseY > startY &&
    mouseY < startY + board.height
  ) {
    overBox = true;
    if (!locked) {
      stroke(255);
      fill(244, 122, 158);
    }
    else{
      overBox = false;
      stroke(156, 39, 176);
      fill(244, 122, 158);
    }
  } 

  // Draw the box
  rect((startX + mouseX) - (startX+(mouseX%50)),
        (startY + mouseY) - (mouseY+(mouseY%50)),
        (startX + mouseX) - ((startX+(mouseX%50))+50,
        (startY + mouseY) - ((mouseY+(mouseY%50))+50)));
}

function paratrooper(){
  if(paratrooperY<height-paratrooperH){
    paratrooperY+=speed-0.5;
  } else{
    dropParatrooper();
  }
}

function dropParatrooper(){
  paratrooperY=10;
  paratrooperX=random(5,width-paratrooperW);
}

function moveBoatLeft(){
  if(boatX>0){
    boatX-=speed;
  }
}

function moveBoatRight(){
  if(boatX<width-boatW){
    boatX+=speed;
  }
}

function boat(){
  if(keyIsDown(LEFT_ARROW)){
    moveBoatLeft();
  }else if(keyIsDown(RIGHT_ARROW)){
    moveBoatRight();
  }
}

function checkCatch(){
  if(paratrooperX >= boatX && 
    paratrooperX+paratrooperW <= boatX+boatW &&
    paratrooperY+paratrooperH >= boatY &&
    paratrooperY+paratrooperH <= boatY+boatH ){
      score++;
      dropParatrooper();
    }
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    // moveBoatLeft();
  } else if (keyCode === RIGHT_ARROW) {
    // moveBoatRight();
  }
}
