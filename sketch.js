const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;

var divisionHeight=300;

var particles = [];
var plinkos = [];
var divisions = [];


function setup() {
	createCanvas(480, 800);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,10);



for(var k = 0; k <=480; k = k + 80)
{
   divisions.push(new Divisions(k, height-divisionHeight/2, 5, divisionHeight));
} 

for (var j = 40; j <=width; j=j+50) 
{
	plinkos.push(new Plinko(j,75));
} 


for (var j = 15; j <=width-10; j=j+50) 
{
	plinkos.push(new Plinko(j,175));
} 


for (var j = 40; j <=width; j=j+50) 
{
	plinkos.push(new Plinko(j,275));
} 

for (var j = 15; j <=width-10; j=j+50) 
{
	plinkos.push(new Plinko(j,375));
} 

}
function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(0);

  for (var i = 1; i <=480; i=i+200) 
if(frameCount%90 === 0)
{ 
	particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
}


for (var j = 0; j < plinkos.length; j++) {
	plinkos[j].display();
} 

for (var i = 0; i < particles.length; i++) {
	particles[i].display();
} 

for (var k = 0; k < divisions.length; k++) {
	divisions[k].display();
} 

  ground.display()
}