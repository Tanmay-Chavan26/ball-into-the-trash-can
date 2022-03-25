
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world; 


var ball;

var trash ;

var trash, leftTrash, rightTrash ;

function preload()
{
	
}

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

	trash = new Trash (300, 390, 600, 20);
	rightTrash = new Trash(550,350,10,70);
	leftTrash = new Trash(400,350,10,70);


	//Create the Bodies Here.

	var ball_options={

		restitution:0.4,
		frictionAir:0,
		density: 1.2
	  
		}

		ball=Bodies.circle(100, 100, 20, ball_options);
		World.add(world, ball);
		

	Engine.run(engine);

		if (keyDown("right_arrow")){
		
			ball.hForce,
		ball.vForce



		}
	
  


}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);

  ellipse(ball.position.x, ball.position.y, 20, 20);

  trash.show();
  leftTrash.show();
  rightTrash.show();

  
 
 
  function hForce(){

	Matter.Body.applyForce(ball,{x:0, y:0},{x:0.10, y:0});
   
  }
  
  function vForce(){
  
  Matter.Body.applyForce(ball,{x:0 , y:0},{x:0 , y:-0.10});
  
  }



  




  drawSprites();
 
}



