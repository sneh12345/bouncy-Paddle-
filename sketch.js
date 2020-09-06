var ball,img,paddle,ballImage,paddleImage,rand;
var score = 0;
function preload() {
  ballImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
   ball = createSprite(200,200,200,200);
   ball.addImage("ballImage", ballImage);
   paddle = createSprite(365,201,200,200);
  paddle.addImage("paddleImage",paddleImage);
  ball.velocityX = 9;
 ball.velocityY = 0;
  

}

function draw() {
  background(205,153,0);
   text("Score = "+score, 250,50);
  if(ball.isTouching(paddle)){
 score = score+1;

 
 
 }
  
  
  
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  paddle.collide(edges);

  
  
  
  
  
  

  
  
  if(keyDown(UP_ARROW)) {
     paddle.velocityY = -6;
  }
  
  if(keyDown(DOWN_ARROW)) {
    paddle.velocityY = 6;
  }
 
  
  if(ball.x >400){
   text("You lose.",200,200); 
  }
  
  randomVelocity();
  drawSprites();
  
}

function randomVelocity(){
 
ball.velocityY = random (-8,8);
  




}

