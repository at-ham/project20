var car,wall,speed,weight;
var deformation = 0;
function setup() {
  createCanvas(1600,400);
speed=random(55,90);
weight=random(400,1500);
car=createSprite(50,200,50,50);
wall=createSprite(1470,200,30,height/2);

  
  
  car.velocityX=speed;
  car.shapeColor=color("green");
  
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if (wall.x-car.x< (wall.width/2+car.width/2)){
    deformation=0.5*weight*speed*speed/22500;
  car.velocityX=0;
  if (deformation <100){
    car.shapeColor=color("green");
  }
   if(deformation >100 && deformation<180){
    car.shapeColor=color("yellow");
  }
   if (deformation >180){
  car.shapeColor=color("red");
  
  }
}



}