class Rope{
    constructor(bodyA,pointB){
        var option={
            length : 300,
            stiffness : 0.1,
            bodyA : bodyA,
            pointB : pointB
         }
         this.rope= Matter.Constraint.create(option)
         World.add(world,this.rope)
    
    }
    display(){
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,
             this.rope.pointB.x,this.rope.pointB.y)
    }
}