var bola;
var groundObj;
var leftSide;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  createCanvas(1600,700);

  engine = Engine.create();
	world = engine.world;

  var ball_options ={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }

  groundObj = new Ground(width/2,670,width,20);
  leftSide = new Ground(1100,600,20,120);
  rightSide = new Ground(1350,600,20,120);

  bola = Bodies.circle(200,100,20,ball_options);
World.add(world,bola);
Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
 

ellipse(bola.position.x,bola.position.y,20);
groundObj.show();
leftSide.show();
rightSide.show();

}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bola,bola.position,{x:85,y:-85});
  }

}


