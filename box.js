class Box{
    constructor(x,y){

    var options ={
        isStatic : false,
        restitution : 0.3,
        friction : 1
    }

    this.body=Bodies.rectangle(x,y,50,50,options)
    World.add(world,this.body)

    this.width=50
    this.height=50
    }

    display(){
        var pos = this.body.position
        var ang = this.body.angle

        push();
        translate(pos.x,pos.y)
        rotate(ang)
        rectMode(CENTER)
        fill("white")
        stroke("green")
        strokeWeight(3)
        rect(0,0,this.width,this.height)


        pop();
        

    }
}