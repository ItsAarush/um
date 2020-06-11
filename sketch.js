var ball;
var line;
var line2;
var line3;
function setup() {
  createCanvas(800, 700);
  ball=createSprite(250,150,10,10);
  ball.velocityX=0
  ball.velocityY=4
  var options={
    isStatic:true
  }
  line=createSprite(300,540,10,70)
  line2=createSprite(200,540,10,70)
  line3=createSprite(250,570,90,10)
  var options={
    isStatic:true
  }
}


function draw() {
  background(0);
  ball.display();
  line.display();
  line2.display();
  line3.display();
  drawSprites();
}



