const Body = Matter.Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var radius = 25;
var gamestate = 0;
var distance = radius*2;
var middle1 = 400
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	bobObject1 = new Bob(middle1-distance*2,600,radius);
	bobObject2 = new Bob(middle1-distance,600,radius);
	bobObject3 = new Bob(middle1+distance*0,600,radius);
	bobObject4 = new Bob(middle1+distance*1,600,radius);
	bobObject5 = new Bob(middle1+distance*2,600,radius);
	
	Chain1 = new Chain(bobObject1.body,{x:middle1-distance*2,y:100})
	Chain2 = new Chain(bobObject2.body,{x:middle1-distance*1,y:100})
	Chain3 = new Chain(bobObject3.body,{x:middle1+distance*0,y:100})
	Chain4 = new Chain(bobObject4.body,{x:middle1+distance*1,y:100})
	Chain5 = new Chain(bobObject5.body,{x:middle1+distance*2,y:100})

	roof1 = new roof(400,100,500,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  if(keyDown("UP_ARROW")&&gamestate === 0){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-300,y:100})
gamestate = 1  
}
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  Chain1.display();
  Chain2.display();
  Chain3.display();
  Chain4.display();
  Chain5.display();
  roof1.display();  
  drawSprites();
 
}



