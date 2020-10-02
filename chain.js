class Chain{
    constructor(bodyA ,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10 ,
            stiffness:0.4

        }
this.chain=Constraint.create(options);
World.add(world ,this.chain);
    }
    display(){
var pA=this.chain.bodyA.position;
var pB=this.chain.bodyB.position;
strokeWeight(9);
line (pA.x ,pA.y ,pB.x ,pB.y);
}
}