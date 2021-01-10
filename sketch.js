var fixedRect, movingRect;
var tom,ram,mouse,shyam;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(300,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  tom = createSprite(400,300,50,50);
  ram  = createSprite(700,500,40,70);
 mouse = createSprite(500,350,80,30);
 shyam = createSprite(800,700,80,30);

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
if(collision(movingRect,tom)){
  movingRect.shapeColor = "red";
  tom.shapeColor = "red";
} 
else{
  movingRect.shapeColor = "green";
  tom.shapeColor = "green";
}
if(collision(movingRect,tom)){
  movingRect.shapeColor = "red";
  tom.shapeColor = "red";
} 
else{
  movingRect.shapeColor = "green";
  tom.shapeColor = "green";
}if(collision(movingRect,mouse)){
  movingRect.shapeColor = "red";
  mouse.shapeColor = "red";
} 
else{
  movingRect.shapeColor = "green";
  mouse.shapeColor = "green";
}
  drawSprites();
}

