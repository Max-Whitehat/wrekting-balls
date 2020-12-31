class Ball{
    constructor(x,y){

    var options ={
        isStatic : false,
        restitution : 0.3,
        friction : 1,
        density : 5
    }

    this.body=Bodies.circle(x,y,50,options)
    World.add(world,this.body)

    this.radius=50
    }

    display(){
        var pos = this.body.position
        ellipseMode(RADIUS)
        fill("black")
        ellipse(pos.x,pos.y,this.radius)


        
        

    }
}