var bg_img
var bombimg,jumpimg,runimg,ninjaimg,energyimg,boomimg
var bg

var a = 0;
var b;

var scrollSpeed = 3;


function preload(){
bg_img=loadImage("Wakanda.png")
bombimg=loadImage("bomb.png")
boomimg=loadImage("boom.png")
ninjaimg=loadImage("star.png")
energyimg=loadImage("power.png")
runimg=loadAnimation("fast3.png","fast4.png")
jumpimg=loadAnimation("jump.png","fight.png")
}

function setup(){
  createCanvas(1100,600)
  b = width;

 /*bg=createSprite(550,300)
 bg.addImage(bg_img)
 bg.velocityX=-3*/
 
 hero=createSprite(100,500,10,10)
 hero.addAnimation("run",runimg)


 
}

function draw(){
 background(0)

image(bg_img, a, 0, width, height);
image(bg_img, b, 0, width, height);

  a -= scrollSpeed;
  b -= scrollSpeed;

  if (a < -width){
    a = width;
  }
  if (b < -width){
    b = width;
  }
 drawSprites()
}