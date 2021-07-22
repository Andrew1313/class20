function setup() {
  createCanvas(800,400);
  moving=createSprite(600,200,100,100) 
  fixed=createSprite(250,200,100,100);
   moving.shapeColor="green"; 
   fixed.shapeColor="green";
}

function draw() {
  background("black");
  moving.x=mouseX
  moving.y=mouseY
  if (moving.x-fixed.x<moving.width/2+fixed.width/2
    && fixed.x-moving.x<fixed.width/2+moving.width/2
    && moving.y-fixed.y<moving.height/2+fixed.height/2
    && fixed.y-moving.y<fixed.height/2+moving.height/2){
moving.shapeColor="cyan"
fixed.shapeColor="cyan"
  }
  else{
    moving.shapeColor="green"; 
    fixed.shapeColor="green"; 
  }  
  drawSprites();
}