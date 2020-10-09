var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1,rect2,rect3;
var rect1sprite,rect2sprite,rect3sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	rect1sprite =createSprite(width/2,640,20,100);
	rect1sprite.shapeColor="red";
	rect2sprite =createSprite(width/2,300,20,100)
	rect2sprite.shapeColor="red";
	rect3sprite =createSprite(width/2,300,200,20);
	rect3sprite.shapeColor="red";

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true ,restitution:0});
	World.add(world, packageBody);
	
   rect1 =new Box(width/2-50,648,20,100);

   rect2 =new Box(410,648,200,20);

   rect3 =new Box(500,648,20,100);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  rect1sprite.x =rect1.body.position.x
  rect1sprite.y =rect1.body.position.y+15
  rect2sprite.x =rect3.body.position.x
  rect2sprite.y =rect3.body.position.y+15
  rect3sprite.x =rect2.body.position.x
  rect3sprite.y =rect2.body.position.y+15

  rect1.display();
  rect2.display();
  rect3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
  }
}



