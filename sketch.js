
var bg, backgroundImg;
var iron
function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImg = loadImage("images/iron.png")
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  bg.velocityY=13;
  iron = createSprite(550,300);
  iron.addImage(ironImg);
  iron.scale=0.2;

}

function draw() {
  if (bg.y > 750){
    bg.y=10;
  }
  if(keyDown("up")){
    iron.velocityY=-10;
  }
  if(keyDown("left")){
    iron.x = iron.x -5;
  }
  if(keyDown("right")){
    iron.x = iron.x +5;
  }
  iron.velocityY = iron.velocityY+0.5;

    drawSprites();

}
