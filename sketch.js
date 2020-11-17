var ghost,ghosti;
var tow,towi;
var windo,windoi;
var SERVE = 0;
var PLAY = 1;
var END = 2;
var gameState
var terr,terri;
var obg;
var invisibleG;
var g,gwin;
var up,r,l;
var score;
var height;
var coin;
var coini;
var cg;
var side1,side2;
var sideg;
var sound;
function preload(){
  ghosti = loadImage("ghost-standing.png");
  towi = loadImage("tower.png");
  windoi = loadImage("door.png");
  terri = loadImage("climber.png");
  coini = loadImage("coin_gold.png")
sound = loadSound("bag-of-coins-D-www.fesliyanstudios.com.mp3")
}

function setup(){
  createCanvas(700,700);
  
  
  sideg = new Group();
  edges = createEdgeSprites();
 obg = new Group();
  g = new Group();
  gwin = new Group();
  tow = createSprite(350,350,10,10);
  tow.addAnimation("tower",towi);
  tow.scale = 1.2;
  //tow.velocityY = 2;
  cg = new Group();
  ghost = createSprite(350,350,10,10);
  ghost.addAnimation("ghost",ghosti);
  ghost.scale=0.5;
  
  newArray = [0,1,2,3];
  
 // up = createSprite(600,600,50,50);
  //r = createSprite(650,650,50,50);
  //l = createSprite(550,650,50,50);
  score = 0;
  gameState = SERVE;
  
  
}




function draw(){
  
  background("black");
  
  //up.visible = false;
  
  //textSize(20)
  //fill("white")
  //text("Fly",up.x-12,up.y-30);
  
//  textSize(20)
  //fill("white")
  //text("Left",l.x-17,l.y-30);
  
//  textSize(20)
 // fill("white")
  //text("Right",r.x-19,r.y-30);
  
  if(gameState===SERVE){
    
    textSize(50)
    fill("white")
    text("Ghost Runner!",180,50)
    text("Press Space to Play",120,350);
    textSize(25)
    text("Use Up Arrow to fly, Left arrow & Right Arrow to go right or left.",4,200);
    
    text("You can stand on terraces but, don't touch them from below!",20,500);
    
    text("Click anywhere on the screen to play in mobile",90,400);
    text("Collect coins to score Points!",180,560);
    
    
    
    
    tow.visible = false;
    ghost.visible = false;
    
  }
  
  
  
  
  if(gameState===SERVE && keyDown("space") || gameState===SERVE && touches.length>0){
    
    gameState=PLAY;
    touches = [];
    
    
  }
  
  
  
  
  
  if (gameState===END && touches.length>0){
    
    touches = [];
    gameState = SERVE;
    
  }
  
  
  
  
  if (gameState===PLAY){
  
   tow.visible = true;
   
    ghost.visible = true;
    
   // ghost.collide(edges[4]);
    ghost.collide(edges[2]);
  
    
  //tow = createSprite(350,350,10,10);
 // tow.addAnimation("tower",towi);
  //tow.scale = 1.2;
  //tow.velocityY = 2;
  
  //ghost = createSprite(350,350,10,10);
 // ghost.addAnimation("ghost",ghosti);
  //ghost.scale=0.5;
  
    
    
    //coin();
    
    tow.velocityY = (4+score/2);
  
 


  if(tow.y>=700){
    
    tow.y = 350;
    tow.height = tow.height/2;
  
  }
  
  
if(ghost.isTouching(cg)){

score = score+1;
cg.destroyEach();
sound.play();

}


  ghost.velocityY = ghost.velocityY+1
  
  if(keyDown("UP_ARROW") ){
    
    ghost.velocityY = -5 ;
    //touches = [];
  }
  
  ghost.velocityX =  0;
  
  if(keyDown("LEFT_ARROW")){
    
    ghost.velocityX = -5 ;
    
  }
  
  if(keyDown("RIGHT_ARROW")){
    
    ghost.velocityX  = 5 ;
    
  }
  
 // ghost.depth = terr.depth;
 // ghost.depth = obg.depthEach;
  //ghost.depth = ghost.depth+1;
  
  
  spawnob();
  
  
  console.log(frameCount);
  
  
  
  ghost.collide(g);
  //ghost.debug = true;
  ghost.setCollider("rectangle",-25,25,150,245)
 
  }
  
  
  if(ghost.isTouching(obg)){
    
    gameState=END
    
    
  }
  
  console.log(gameState)
  
  //ghost.debug = true;
  
  if(gameState===END){
    //background("black")
    ghost.destroy();
    obg.destroyEach();
    g.destroyEach();
    tow.destroy();
    gwin.destroyEach();
    cg.destroyEach();
    
    textSize(100);
    fill("white")
    text("Game Over!!",70,350);
    textSize(50)
    text("Press Ctrl+R to Play Again",50,450)
    
  }
  
    
  if(ghost.y>700){
    
    gameState=END;
    
  }

//ghost.debug = true;


  ghost.collide(sideg);
  
  drawSprites();

  fill("white");
  textSize(25)
  text("Score:"+score,10,30);
}






function spawnob(){
  
  if(frameCount%239===0){
    
  windo = createSprite(200,-50,10,10)
  windo.addAnimation("win",windoi);
  gwin.add(windo);
  windo.velocityY = (4+score/2);
     ghost.depth = windo.depth;
  ghost.depth = ghost.depth+10;
  windo.x = Math.round(random(200,500));
    
    invisibleG = createSprite(200,-50,50,10);
    invisibleG.x = windo.x;
    
    coin = createSprite(200,-50,10,10)
    coin.velocityY = (4+score/2);
    coin.scale = 0.5
    coin.addImage("coin",coini);
    invisibleG.debug = true;
    cg.add(coin);
    terr = createSprite(200,-50,10,10);
    terr.addAnimation("terr",terri);
    terr.velocityY  =  (4+score/2);
    terr.y = windo.y+50;
    terr.x = windo.x;
    //  terr.debug = true;
    
    coin.x = terr.x;
    coin.y = terr.y-30;
    coin.lifetime = 200;
    obg.add(terr);
    

   

//side1 = createSprite(200,200,5,30)
//side2 = createSprite(200,200,5,30)
//side1.y = terr.y;
//side2.y = terr.y;
//side1.x = terr.x-55;
//side2.x = terr.x+55;



//sideg.add(side1);
//sideg.add(side2);
//side1.velocityY = 4;
//side2.velocityY = 4;
//
    ghost.depth = terr.depth;
    ghost.depth = ghost.depth+1000;
    
    invisibleG.y = terr.y-8;
    //invisibleG.width = terr.y;
    invisibleG.visible = false;
    invisibleG.velocityY = (4+score/2);
    
    g.add(invisibleG);
    
    terr.lifetime = 200
    
    windo.lifetime = 200;
    
   //terr.debug = true;
    invisibleG.lifetime = 200;
  }
  
}

