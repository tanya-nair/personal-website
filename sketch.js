
var movingRect, gameObject1;

function setup() {
  createCanvas(1700,1000); 
  gameObject1 = createSprite(100, 100, 100, 100);
  gameObject1.shapeColor = "#f88379";
  movingRect = createSprite(800,400,100,100);
  movingRect.shapeColor = "#f88379";
  gameObject2 = createSprite(300, 100, 100, 100);
  gameObject2.shapeColor = "#f88379";
  gameObject3 = createSprite(500, 100, 100, 100);
  gameObject3.shapeColor = "#f88379";
  gameObject4 = createSprite(700, 100, 100, 100);
  gameObject4.shapeColor = "#f88379";
  
}


function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameObject3,movingRect) ) {

    movingRect.shapeColor = "#87ceeb";
    gameObject3.shapeColor = "#87ceeb";
  } else {
    movingRect.shapeColor = "#f88379";
    gameObject3.shapeColor = "#f88379";
  }
  drawSprites();
}
