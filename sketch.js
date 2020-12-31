const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var engine, ball, body

function setup(){
  createCanvas(800,500)
  engine = Engine.create()
  world = engine.world
  
  ground1 = new Ground(400,480,800,20)
  box1 = new Box(600,450)
  box2 = new Box(600,400)
  box3 = new Box(600,350)
  box4 = new Box(600,300)
  box5 = new Box(600,250)
  box6 = new Box(600,200)
  box7 = new Box(600,150)
  box8 = new Box(600,100)

  box9 = new Box(650,450)
  box10 = new Box(650,400)
  box11 = new Box(650,350)
  box12 = new Box(650,300)
  box13 = new Box(650,250)
  box14 = new Box(650,200)
  box15 = new Box(650,150)
  box16 = new Box(650,100)

  box17 = new Box(550,450)
  box18 = new Box(550,400)
  box19 = new Box(550,350)
  box20 = new Box(550,300)
  box21 = new Box(550,250)
  box22 = new Box(550,200)
  box23 = new Box(550,150)
  box24 = new Box(550,100)

  ball = new Ball(300,100)
  rope = new Rope(ball.body,{x:300,y:50})

}




function draw(){
  background("blue")
  Engine.update(engine)


  
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();

  ball.display();
  rope.display();


}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}