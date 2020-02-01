const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower1;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;



  tower1 = new Tower1(700,190,90,210);
  tower2 = new Tower1(880,200,80,200);
 tower3 = new Tower1(800,200,80,300);
 tower4 = new Tower1(660,200,20,350);
 tower5 = new Tower1(940,200,20,350);
 tri = new Cone(800,200,3,50);
  //tower2 = new Tower1(600,320,20,100);
  Gr = new Ground(600,380,1200,20);
}

function draw(){
  background("brown");

  Engine.update(engine);
  tower1.display();
  tower2.display();
  tower3.display();
  tower4.display();
  tower5.display();
 
  tri.display();
Gr.display();
}
