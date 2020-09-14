const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var particle;
var rain=[];

var maxDrops=500;

var man;

var ground;

function setup() {
  var canvas =  createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;

 
  man = new Umbrella(200,500);
 
  for(var i=0; i<maxDrops; i++){
      rain.push(new Drop (random(0,400),random(0,400)));
  }

}



function draw() {
  background(0);  

  Engine.update(engine);


  man.display();

  
  for(var i=0; i<maxDrops; i++){
    rain[i].display(); 
   }

   
}



