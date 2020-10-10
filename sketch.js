const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand, polygon, slingshot, backgroundImg;
var b1, b2, b3, b4, b5;
var b6, b7, b8, b9;
var b10, b11, b12;
var b13, b14;
var b15;
var score = 0;
// var screen = "bg.png"

function preload() {
  getTime();
}


function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, height, 1200, 20);
  stand = new Ground(600, height - 100, 250, 10);
  polygon = new Polygon(150, 250, 25);
  slingshot = new SlingShot(polygon.body, { x: 150, y: 250 });

  // level 1 blocks
  var level1Y = height - 130;
  b1 = new Box(500, level1Y, 45, 50, "red.png");
  b2 = new Box(550, level1Y, 45, 50, "red.png");
  b3 = new Box(600, level1Y, 45, 50, "red.png");
  b4 = new Box(650, level1Y, 45, 50, "red.png");
  b5 = new Box(700, level1Y, 45, 50, "red.png");

  // level 2 blocks
  var level2Y = level1Y - 53;
  b6 = new Box(525, level2Y, 45, 50, "teal.png");
  b7 = new Box(575, level2Y, 45, 50, "teal.png");
  b8 = new Box(625, level2Y, 45, 50, "teal.png");
  b9 = new Box(675, level2Y, 45, 50, "teal.png");

  // level 3 blocks
  var level3Y = level2Y - 53;
  b10 = new Box(550, level3Y, 45, 50, "yellow.png");
  b11 = new Box(600, level3Y, 45, 50, "yellow.png");
  b12 = new Box(650, level3Y, 45, 50, "yellow.png");

  // level 4 blocks
  var level4Y = level3Y - 53;
  b13 = new Box(575, level4Y, 45, 50, "pink.png");
  b14 = new Box(625, level4Y, 45, 50, "pink.png");

  // level 5 blocks
  b15 = new Box(600, level4Y - 53, 45, 50, "blue.png");

  Engine.run(engine);
}

function draw() {
  if (backgroundImg) {
    background(backgroundImg);
  }
  drawSprites();

  text("SCORE: " + score, 20, 20);

  ground.display();
  stand.display();
  polygon.display();
  slingshot.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  b6.display();
  b7.display();
  b8.display();
  b9.display();

  b10.display();
  b11.display();
  b12.display();

  b13.display();
  b14.display();

  b15.display();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();

}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingshot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingshot.attach(polygon.body);
  }
}

async function getTime() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejson = await response.json();
  var time = responsejson.datetime;
  var hour = time.slice(11, 13);
  console.log("hour", hour);

  if (hour >= 6 && hour <= 15) {
    screen = "day_bg.jpg";
  }
  else {
    screen = "night_bg.png";
  }
  backgroundImg = loadImage(screen);
  console.log(backgroundImg);
}



