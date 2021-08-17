const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var superMan;
var sup;
var str;
var roof;
var mon;
var monsterSp;
var car;
var car1;
var logo;
var icon;

function preload() {
  bg = loadImage("images/bg.jpg");
  carImg = loadImage("images/car.png");
  carImg1 = loadImage("images/car1.png");
  superManAni = loadAnimation("images/superMan/1.png", "images/superMan/2.png", "images/superMan/3.png", "images/superMan/4.png", "images/superMan/5.png");
  superManRun = loadAnimation("images/superMan/run/1.png", "images/superMan/run/2.png", "images/superMan/run/3.png", "images/superMan/run/4.png", "images/superMan/run/5.png", "images/superMan/run/6.png", "images/superMan/run/7.png", "images/superMan/run/8.png");
  superManfly = loadAnimation("images/superMan/fly/1.png", "images/superMan/fly/2.png");
  monsterIdle = loadAnimation("images/monster/idle/1.png", "images/monster/idle/2.png", "images/monster/idle/3.png", "images/monster/idle/4.png");
  title = loadImage("images/title.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  logo = createSprite(width / 2, height / 2, 1, 1);
  logo.scale = 0.3;

  car = createSprite(-300, height - 100, 1, 1);
  car.addImage(carImg);
  car.scale = 1;
  car.velocityX = 15;

  car1 = createSprite(-300, height - 50, 1, 1);
  car1.addImage(carImg1);
  car1.scale = 1;
  car1.velocityX = 20;

  superMan = createSprite(width / 2 - 150, height / 2 - 115, 1, 1);
  superMan.addAnimation("running", superManAni);
  superMan.scale = 1.2;


  monsterSp = createSprite(width / 2 + 390, height / 2 - 155, 1, 1);
  monsterSp.addAnimation("wait", monsterIdle);
  monsterSp.scale = 1.7;

  roof = new Ground(width / 2 + 390, height / 2 - 85, width / 2 - 640, 10);
  sup = new Sup(width / 2 + 80, height / 2 - 115, 60);
  str = new Rope(sup.body, { x: width / 2 + 300, y: 50 });
  mon = new Monster(width / 2 + 390, height / 2 - 90, 20, 80);

}

function draw() {
  background(bg);
  Engine.update(engine);

  if (monsterSp.x > width) {
    logo.addImage(title);
  }
  ifstatement();
  fly(sup);
  drawSprites();

  roof.display();
  sup.display();
  str.display();
  mon.display();

  noStroke();
  textSize(15)
  fill(255);
  text("PRESS 'RIGHT ARROW' FOR STARING THE GAME", 0, height);
}