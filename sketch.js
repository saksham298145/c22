const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var cannon1
var angle=180

function preload() {
 backgroundImage=loadImage("assets/background.gif")
 towerImage=loadImage("assets/tower.png")
 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var options={
    isStatic:true
  }
 ground=Bodies.rectangle(0,599,width*2,1,options) 
 World.add(world,ground)

 tower=Bodies.rectangle(160,350,160,310,options)
 World.add(world,tower)
 cannon1=new Cannon(180,110,130,100,angle)
}

function draw() {
  background(189);
 rect(ground.position.x,ground.position.y,width*2,1)
 image(backgroundImage,0,0,1200,600)
 push()
 imageMode(CENTER)
 image(towerImage,tower.position.x,tower.position.y,160,310)
 pop()
 
  Engine.update(engine);
  cannon1.display()
   
}
