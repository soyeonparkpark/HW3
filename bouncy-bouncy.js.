var ballY =100;
var ballX =100;

var ballYspeed = 3;
var ballXspeed =10;


var ballX2 = 0;
var ballXspeed2 =10;




function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(400,100);
  fill(0,200,200);
  noStroke ();
  ellipse(ballY,ballX, 100, 100); 
  ellipse(ballX2, 100, 100); 

  
  
  ballY = ballY + ballYspeed;
  ballX = ballX + ballXspeed;
  
  ballX2 = ballX2 + ballXspeed2;

  
  //bounce first ball 
  
  if (ballY > height) {
    ballYspeed = -ballYspeed;
  }

  if (ballY =100) {
    ballYspeed = -ballYspeed;
  }
  
  if (ballX > width) {
    ballXspeed = -ballXspeed;
  }

  if (ballX <10) {
    ballXspeed = -ballXspeed;
  }
  //bounce second ball 
  if (ballX2 > width) {
   ballXspeed2 = -ballXspeed2;
  }
  if (ballX2 <0) {
    ballXspeed2 = -ballXspeed2;
  }
  
   
}
    
