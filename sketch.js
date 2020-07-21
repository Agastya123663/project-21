var wall,thickness;
var bullet , weight , speed;


function setup() {
  createCanvas(1300,400);
  
  thickness = random(22,83);

   wall = createSprite(1250,200,thickness,height/2);

   speed = random(50,150);
   weight = random(30,52);

   bullet = createSprite(50,200, 30, 10);
  bullet.velocityX = speed
  bullet.weight = weight;

  
}

function draw() {
  background(0); 
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
     if(damage > 10){
     wall.shapeColor = "green";
     }
     if(damage<10){
     wall.shapeColor = "red";
     }
    }


  drawSprites();
}

function hasCollided(bullet,wall){
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge){
return true;
}
return false;
}
