const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backg1;
var ground;

var gameState = "Chapter1";

var player;
var forestNight;
var painting;
var Forest1;
var Desert1;
var Desert2;
var Desert3;
var ruins;
var Plains1;
var Plains2;
var Plains3;
var CrystalCave1;
var CrystalCave2;
var CrystalCave3;
var MagmaCavern1;
var MagmaCavern2;
var DiamondForest1;
var DreamForest1;
var EclipseStanding;
var Fruit1;
var zoneMode;
var Graveyard;
var IvyStanding;
var Lampfruit;
var LavaCave1;
var LavaCave2;
var lushtree;
var oldSword;
var fossilTooth;

var object1;

var skill1;
var skill2;
var skill3;
var skill4;
var skill5;
var fire;
var ice;
var fireSkill;
var flag = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;
var flag5 = false;

function preload(){
  backg1 = loadImage("Photos/back1.jpg");
  forestNight = loadImage("Photos/backNight.JPG");
  painting = loadImage("Photos/prophet'sPaint.png");
  fireSkill = loadImage("Photos/FireButton.PNG")
  Forest1 = loadImage("Photos/SecretForest1.PNG");
  Desert1 = loadImage("Photos/Desert1.PNG");
  Desert2 = loadImage("Photos/Desert2.PNG");
  Desert3 = loadImage("Photos/Desert3.PNG");
  ruins = loadImage("Photos/Ruins1.PNG"); 
  Plains1 = loadImage("Photos/Plains1.PNG");
  Plains2 = loadImage("Photos/Plains2.PNG");
  Plains3 = loadImage("Photos/Plains3.PNG");
  CrystalCave1 = loadImage("Photos/CrystalCave1.PNG");
  CrystalCave2 = loadImage("Photos/CrystalCave2.PNG");
  CrystalCave3 = loadImage("Photos/CrystalCave3.PNG");
  DiamondForest1 = loadImage("Photos/DiamondForest.PNG");
  DreamForest1 = loadImage("Photos/DreamForest1.PNG");
  EclipseStanding = loadImage("Photos/EclipseStanding.PNG");
  Fruit1= loadImage("Photos/Fruit1.PNG");
  Graveyard = loadImage("Photos/Graveyard2.PNG");
  IvyStanding = loadImage("Photos/IvyStanding.PNG");
  Lampfruit = loadImage("Photos/Lampfruit.PNG");
  LavaCave1 = loadImage("Photos/LavaCave1.PNG");
  LavaCave2 = loadImage("Photos/LavaCave2.PNG");
  lushtree = loadImage("Photos/LushfruitTreeT1.PNG");
  oldSword= loadImage("Photos/oldSword.PNG");
  fossilTooth = loadImage("Photos/Tooth.PNG");
}

function setup() {
 createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,500,2000,30);
  player = new PC1(50,440,60,100);

  fire = new ShootFire(player.body.position.x + 20,player.body.position.y,50,50);
  ice = new ShootIce(player.body.position.x + 20,player.body.position.y,50,50);

  skill1 = createButton("Fire");
  //skill1.position(800,450);
  skill1.mousePressed(()=>{
    flag = true;
   });

  skill2 = createButton("Frost");
  skill2.mousePressed(()=>{
    flag2 = true;
   });

  skill3 = createButton("Cloak of deception");
  skill3.mousePressed(()=>{
    flag3 = true;
  })

  skill4 = createButton("Lunar Frenzy");
  skill4.mousePressed(()=>{
    flag4 = true;
  })

  skill5 = createButton("Hover");
  skill5.mousePressed(()=>{
    flag5 = true;
  })


  object1 = new Object1(450,30,40,45);

  zoneMode = 0
}

/*function keyPressed(){
  if(keyCode === 32 && player === new PC1){
    player = new PC2(player.x,player.y,20,50);
    console.log("Two");
 }

 if(keyCode === 32 && player === new PC2){
  player = new PC1(player.x,player.y,20,50);
}
}*/


function draw() {  
  console.log(player.body.position.x);

  background(Forest1);
  Engine.update(engine);

  if(player.body.position.x >= 1000){
    gameState = "Chapt1 pt2";
  }

  if(gameState === "Chapt1 pt2"){
    background(CrystalCave1);
    Matter.Body.setPosition(player.body,{x:50,y:440});
  }
  
  ground.display();
  player.display();

  if(flag === true){
    fire.display();
  }

  if(flag2 === true){
    ice.display();
  }

  if(flag3 === true){
    player.body.render.visible = false;
  }


  /*
  if(){

  }
  */ 

  if(keyIsDown(LEFT_ARROW)){
    Matter.Body.applyForce(player.body, {x:player.body.position.x, y: player.body.position.y}, {x:-3, y:0});
  }

  if(keyIsDown(RIGHT_ARROW)){
    Matter.Body.applyForce(player.body, {x:player.body.position.x, y: player.body.position.y}, {x:3, y:0});
  }

  if(keyIsDown(UP_ARROW)){
    Matter.Body.applyForce(player.body, {x:player.body.position.x, y: player.body.position.y}, {x:0, y:-4});
  }

  if(Matter.Detector.canCollide(player.body,object1.body)){
    text("A strange, yet beautiful, luminecent plant that lights the way in the darkness and illuminates the unknown, those who eat its fruit are said to be able to glow like the moon", 200,200);
    console.log("Hi")
  }

  object1.display();
}

