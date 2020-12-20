const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var engine, world;

var polygon1,polygon;

function preload(){
  polygon1 = loadImage('polygon.png');
}

function setup(){
  createCanvas(900,400); 
  engine = Engine.create();
  world = engine.world; 
  Engine.run(engine);

  polygon = Bodies.circle(130,225,20);
  World.add(world, polygon);

  slingshot = new SlingShot(this.polygon, {
    x: 100,
    y:200
   })

  // creating ground, sling, polygon;
  ground = new Ground();

  //level two 
  block8 = new Block(330,265,30,40); 
  block9 = new Block(360,265,30,40); 
  block10 = new Block(390,265,30,40); 
  block11 = new Block(420,265,30,40); 
  block12 = new Block(450,265,30,40); 
  //level three 
  block13 = new Block(360,225,30,40); 
  block14 = new Block(390,225,30,40); 
  block15 = new Block(420,225,30,40); 
  //top 
  block16 = new Block(390,185,30,40);

}

function draw(){
  background("pink");

  ground.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  imageMode(CENTER);
  image(polygon1, polygon.position.x, polygon.position.y, 40, 40);

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {
    x: mouseX,
    y:mouseY
  })
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}
