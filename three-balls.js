var ballX =0;
var ballXspeed = 33;

var ballX2 = 0;
var ballXspeed2 =10;

var ballX3 = 0;
var ballXspeed3 =8;


function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220,100);
  fill (220,0,0);
  
  ellipse(ballX, 200, 100); 
  ellipse(ballX2, 100, 20); 
  ellipse(ballX3, 300, 20); 
  
  
  ballX = ballX + ballXspeed;
  ballX2 = ballX2 + ballXspeed2;
  ballX3 = ballX3 + ballXspeed3;
  
  //bounce first ball 
  
  if (ballX > width) {
    ballXspeed = -ballXspeed;
  }
  if (ballX <0) {
    ballXspeed = -ballXspeed;
  }
  
   //bounce second ball 
  if (ballX2 > width) {
   ballXspeed2 = -ballXspeed2;
  }
  if (ballX2 <0) {
    ballXspeed2 = -ballXspeed2;
  }
  
  //bounce third ball 
  if (ballX3 > width) {
   ballXspeed3 = -ballXspeed3;
  }
  if (ballX3 <0) {
    ballXspeed3 = -ballXspeed3;
  }
  
  
}
    
