var ground1,ground2;
var player1,player2;
var player_idle;
var player_walking;
var player_gaveup;
var player_friends;
function preload(){
  player_gaveup=loadAnimation("stickmen/gaveup1.jpg","stickmen/gaveup2.jpg");
 player_idle=loadAnimation("stickmen/walking3.jpg");
 player_friend=loadAnimation("stickmen/1image.jpg","stickmen/2images.jpg","stickmen/3images.jpg","stickmen/4images.jpg");
 player_walking=loadAnimation("stickmen/walking1.jpg","stickmen/walking2.jpg","stickmen/walking3.jpg","stickmen/walking4.jpg","stickmen/walking5.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  ground1=createSprite(displayWidth/2,500,displayWidth,10)
  ground2=createSprite(displayWidth/2,800,displayWidth,10)
  player1=createSprite(50,500);
  player1.addAnimation("idle",player_idle);
  player1.addAnimation("walk",player_walking);
  lonelines=createButton("lonelines");
  player1.addAnimation("gaveup",player_gaveup);
  lonelines.position(800,60);
}

function draw() {
  background(255,255,255); 
if(keyWentDown(RIGHT_ARROW)){
  player1.changeAnimation("walk",player_walking);
  player1.velocityX=2

}
player1.collide(ground1);
lonelines.mousePressed(()=>{
  var friends=createSprite(displayWidth,460,50,10);
  friends.addAnimation("1",player_friend);
  friends.velocityX=-2;
  if(player1.isTouching(friends)){
    console.log(hello);
    friends.destroy();
    player1.changeAnimation("gaveup",player_gaveup);
  }
})
  drawSprites();
  

}