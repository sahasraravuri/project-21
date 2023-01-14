
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball; 
var ground; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);
ball_options={
	isStatic:true,
	restitution:0.3,
	density:1.2,
	friction:0
}
ground_options={
	isStatic:true
}


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,400,800,20,ground_options);

	//Create the Bodies Here.
ball=Matter.Bodies.circle(400,350,20,ball_options)
World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
  ground.display();
 
}



