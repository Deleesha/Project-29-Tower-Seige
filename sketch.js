const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var stand,box1,box2,box3,box4;
var box5,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22;
var box24,box25,slingshot,stand2;
var polygon,polygonimg,stand1;

function preload(){
	polygonimg=loadImage("polygon.png");
}

function setup() {
	
  
  createCanvas(1000,600);

	engine = Engine.create();
	world = engine.world;
	
  //Create the Bodies Here.
stand1=new Stand(390,550,250,20);
stand2=new Stand(730,300,250,20);

//level 1
box1=new Box(330,525,30,40);
box2=new Box(350,525,30,40);
box3=new Box(370,525,30,40);
box4=new Box(390,525,30,40);
box5=new Box(410,525,30,40);
box6=new Box(430,525,30,40);
box7=new Box(460,525,30,40);

box8=new Box(350,500,30,40);
box9=new Box(370,500,30,40);
box10=new Box(390,500,30,40);
box11=new Box(410,500,30,40);
box12=new Box(430,500,30,40);

box13=new Box(370,475,30,40);
box14=new Box(390,475,30,40);
box15=new Box(410,475,30,40);

box16=new Box(390,460,30,40);

//level2
box17=new Box(670,270,30,40);
box18=new Box(690,270,30,40);
box19=new Box(710,270,30,40);
box20=new Box(730,270,30,40);
box21=new Box(750,270,30,40);
box22=new Box(770,270,30,40);
box23=new Box(790,270,30,40);

box24=new Box(690,245,30,40);
box25=new Box(710,245,30,40);
box26=new Box(730,245,30,40);
box27=new Box(750,245,30,40);
box28=new Box(770,245,30,40);

box29=new Box(710,220,30,40);
box30=new Box(730,220,30,40);
box31=new Box(750,220,30,40);

box32=new Box(730,195,30,40);

ground=new Ground(100,337,2000,20);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot= new Slingshot(polygon,{x:100,y:450});

Engine.run(engine);

  
}

function draw() {
  
  rectMode(CENTER);

  background("grey");
  
  
  fill("white");
  textSize(20);
  text("Drag the hexagonal stone,and launch it towards the blocks",50,50);

  drawSprites();
 
  stand1.display();
  stand2.display();
  
  fill("turquoise")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();

  fill("pink");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  fill("yellow")
  box13.display();
  box14.display();
  box15.display();
  box29.display();
  box30.display();
  box31.display();

  fill("red")
  box16.display();
  box32.display();
 

  slingshot.display();
  ground.display();

fill("gold");
  imageMode(CENTER)
  image(polygonimg ,polygon.position.x,polygon.position.y,40,40);

}
function mouseDragged(){
	Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}