class Sling {
    constructor(bodyA,pointB){

    var options = {
    bodyA : bodyA,
    pointB : pointB,
    stiffness : 0.04,
    length : 10,

    }

    this.body = Constraint.create(options);
    World.add(world,this.body);

    }
    fly(){
    this.body.bodyA = null;
    }
    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.body.pointB;
            stroke("green");
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}