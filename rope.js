class Rope{
	constructor(bodyA,bodyB,pointA,pointB)

	{
		this.pointA = pointA
		this.pointB = pointB

		var options = {
			bodyA:bodyA,
			bodyB:bodyB,
			pointB:{x:this.pointA,y:this.pointB}
		}

		//create rope constraint here
		this.rope = Constraint.create(options)
		
	World.add(world,this.rope)

	}	

    //create display() here 
	display(){
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;

		strokeWeight(2);
		line(pointA.x,pointA.y,pointB.x,pointB.y);
	
	}
}
