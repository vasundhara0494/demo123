var fixedRect, movingRect;
function setup(){
  createCanvas(800,400);
  fixedRect = createSprite(400,200,80,50);
  movingRect = createSprite(600,200,50,80);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw(){
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x-fixedRect.x)

  if(movingRect.x-fixedRect.x <= movingRect.width/2 + 
    fixedRect.width/2 &&
    fixedRect.x-movingRect.x <= movingRect.width/2 + 
    fixedRect.width/2 
    ){
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red"
    }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}



