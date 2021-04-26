const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
  getBackgroundImg();
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(730,200,250,10);
  ball= new polygon(100,100,40,40)

  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  // Next Level one
  b1 = new Block(640,175,30,40);
  b2 = new Block(670,175,30,40);
  b3 = new Block(700,175,30,40);
  b4 = new Block(730,175,30,40);
  b5 = new Block(760,175,30,40);
  b6 = new Block(790,175,30,40);
  b7 = new Block(820,175,30,40);

  // NL 2
  b8 = new Block(670,135,30,40);
  b9 = new Block(700,135,30,40);
  b10 = new Block(730,135,30,40);
  b11 = new Block(760,135,30,40);
  b12 = new Block(790,135,30,40);

  //NL 3
  b13 = new Block(700,95,30,40);
  b14 = new Block(730,95,30,40);
  b15 = new Block(760,95,30,40);

  //NL 4
  b16 = new Block(730,55,30,40);
  
  slingShot1 =new SlingShot(ball.body,{x: 100, y: 200})

}
function draw() {
  if(backgroundImg)
  background(backgroundImg);
  //background(rgb(246,192,43)); 
 
  textSize(20);
  fill("yellow");
  noStoke();
  text("SCORE:"+score,750,40);

  ground.display();
  stand1.display();
  stand2.display();
  ball.display();
  
  strokeWeight(2);
  stroke(15);
  fill("blue");
  block1.display();
  block1.score();
  block2.score();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  
  fill("green");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block13.score();
  block14.score();
  block15.score();

  fill("grey");
  block16.display();

  //2nd lane
  strokeWeight(2);
  stroke(15);
  fill(rgb(255,0,56))
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();

  fill("lightblue")
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();

  fill("yellow")
  b13.display();
  b14.display();
  b15.display();
  b13.score();
  b14.score();
  b15.score();

  fill("lightpink")
  b16.display();

  slingShot1.display();
  textSize(29);
  fill("Purple")
  stroke("white")
  text("Tower Seige 2",25,45)
  textSize(20)
  fill("white")
  stroke("black")
  text("Press SPACE button for 2nd chance!!",250,390);
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot1.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot1.attach(ball.body)
  }
}

async function GetTime(){
  var response = await fetch("");
  var responceJSON = await responceJSON.json();
  console.log(responceJSON);
}

async function getBackgroundImg(){
  var response = await fetch("");
  var responceJSON = await response.json();

  var datetime=responceJSON.datetime;
  var hour = datetime.slice(11/13);

  if(hour>=6 && hour<= 19){
    bg= "sprites/download.jpeg";
  }
  else {
    bg = background(rgb(246,192,43));
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}