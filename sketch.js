var path
var Runner

function preload(){
pathImage=loadImage("path.png");

RunnerImage=loadImage("Runner-1.png","Runner-2.png")

}

function setup(){
createCanvas(800,800);

path=createSprite(200,500);
path.addImage("path",pathImage);
path.y= path.height/5;
path.velocityY=4;
path.scale=1.2;

Runner=createSprite(200,500)
Runner.addImage("Runner",RunnerImage);
Runner.scale=0.1;

invisibleboundary=createSprite(400,400,20,800);
invisibleboundary.visible=false;
invisibleboundary2=createSprite(10,50,25,1500);
invisibleboundary2.visible=false;


}

function draw(){

  if(path.y>700){
    path.y=height/2;
  }

  if(keyDown(RIGHT_ARROW)){

    Runner.x=Runner.x+8;
    }
    if(keyDown(LEFT_ARROW)){
    
    Runner.x=Runner.x-8;
    }

   Runner.collide(invisibleboundary);
   Runner.collide(invisibleboundary2);


    

drawSprites();
}