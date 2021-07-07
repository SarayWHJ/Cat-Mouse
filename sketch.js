
var cat;
var mouse;

var gImg;
var catImg1,mouseImg1,catImg2,mouseImg2;


function preload() {
    //load the images here

    gImg=loadImage("images/garden.png");
    catImg1=loadImage("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg1=loadImage("images/mouse4.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");


    catImg3=loadImage("images/cat4.png");
    mouseImg3=loadImage("images/mouse1.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat=createSprite(800,650,50,50);
    cat.addImage(catImg1);
    cat.scale=0.2;

    mouse=createSprite(100,670,50,50);
    mouse.addImage(mouseImg1);
    mouse.scale=0.15;


}

function draw() {

    background(gImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");
        cat.velocityX=-4;
    }

    if(mouse.isTouching(cat)){
        cat.addAnimation("catStops",catImg3);
        cat.changeAnimation("catStops");
        mouse.addAnimation("mouseHappy",mouseImg3);
        mouse.changeAnimation("mouseHappy");

        cat.velocityX=0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay=25;

  }


}
