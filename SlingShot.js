class SlingShot{
    //create a constraint betwwen a body and a point
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    //make the bird fly by setting it free from the constrained(bid should not attached to the constraint)
    //nul  = nothing
    fly(){
        this.sling.bodyA = null;
    } 
    display(){
        //display when bodyA is not null(till the time the position of bodyA is available)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}