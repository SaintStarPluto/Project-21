//to create the bullet and wall
var wall, thickness;

//to create the propties of speed, weight, and thickness
var bullet, speed, weight;


function setup() {
  //to create the area used to build stuff
  createCanvas(1600,400);
  
  //to create a visible bullet and give it a white color
  bullet=createSprite(50,200,70,20);
  bullet.shapeColor = "white";
  
  //to create a visible wall and give it a dark grey color
  wall=createSprite(1200,200,thickness, height/2);
  wall.shapeColor = (80,80,80);
  
  //to create a random speed, weight, and thickness
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  
}

function draw() {
  //to make the background black
  background(0);

  //to give the bullet a random speed
  bullet.velocityX = speed;
  
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight *speed *speed/(thickness *thickness *thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }

 

  //to make all the sprites visible
  drawSprites();
}

