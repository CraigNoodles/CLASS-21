var movingRect, fixedRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup(){
  createCanvas(1200,800);

  movingRect = createSprite(100,100,50,80);
  movingRect.shapeColor = "orange";
  movingRect.debug = true;

  fixedRect = createSprite(700,400,90,40);
  fixedRect.shapeColor = "orange";
  fixedRect.debug = true;

  gameObject1 = createSprite(50,100,40,80);
  gameObject1.velocityX = 4;
  gameObject2 = createSprite(450,100,40,80);
  gameObject2.velocityX = -5;
  gameObject3 = createSprite(500,100,40,80);
  gameObject4 = createSprite(650,100,40,80);
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";
}

function draw(){
  background(0);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,gameObject4)){
    movingRect.shapeColor = "brown";
    gameObject4.shapeColor = "yellow"
  }

  else{
    movingRect.shapeColor = "orange";
    gameObject4.shapeColor = "green";
  }

  bounce(gameObject1,gameObject2);

  drawSprites();
}

