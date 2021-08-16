var sea;
var ship;
function preload(){
  seaImg = loadImage("sea.png")
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,100);
  sea.addImage(seaImg);
  sea.velocityX = -1
  ship = createSprite(150,200,);
  ship.addAnimation("moving ship",shipImg1);
  ship.scale=0.1;
  sea.scale=0.4;
  
}

function draw() {
  background(0);
  
  
  sea.velocityX = -1
  if(sea.x < 0){
    sea.x = sea.width/8
  }
  
  drawSprites();
 
}
