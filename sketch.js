const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	bob_options = {
		restitution : 0.95
	}

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(300,500,15,bob_options);
	World.add(world,bob1);

	bob2 = Bodies.circle(320,500,15,bob_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(340,500,15,bob_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(360,500,15,bob_options);
	World.add(world,bob4);

	bob5 = Bodies.circle(380,500,15,bob_options);
	World.add(world,bob5);

	rope1 = new Rope(bob1,roof,-80,0);
	rope2 = new Rope(bob2,roof,-100,-20);
	rope3 = new Rope(bob3,roof,-120,-40);
	rope4 = new Rope(bob4,roof,-140,20);
	rope5 = new Rope(bob5,roof,-160,40);

	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //create ellipse shape for multiple bobs here
	ellipse(bob1.position.x,bob2.position.y,40,40);
	ellipse(bob2.position.x,bob2.position.y,40,40);
	ellipse(bob3.position.x,bob3.position.y,40,40);
	ellipse(bob4.position.x,bob4.position.y,40,40);
	ellipse(bob5.position.x,bob5.position.y,40,40);

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
}

	//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
	function keyPressed(){
		if(keyCode === UP_ARROW){
	  Body.applyForce(bob1,{x:0,y:0},{x:0.05,y:-0.05})
		}
}
