const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var background, backgroundImg;
var snow;
var snowArray = []

function preload(){
   backgroundImg = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  background = createSprite(400, 200, 50, 50);
  background.addAnimation("bg", backgroundImg);

  
}

function draw() {
  

  if (frameCount%60===0) {
    snow = new Snow(random(10,width-10),random(10,50));
    snowArray.push(snow);
  }

  for (var k = 0; k < snowArray.length; k++) {
    
    snowArray[k].display();
    
  }
   
  
  
}