var mouse,mouseCheese,mouseDance,mouseCollide;
var cat,catSit;catWalk,catCollide;
var bg,bgImg;





function preload() {
    
  mouseCheese = loadImage("images/mouse1.png");

  mouseDance = loadAnimation("images/mouse2.png","images/mouse3.png");

  mouseCollide = loadImage("images/mouse4.png",);


  catSit = loadImage("images/cat1.png");

  catWalk = loadAnimation("images/cat2.png","images/cat3.png");

  catCollide = loadImage("images/cat4.png");


    bgImg = loadImage("images/garden.png");

}

function setup(){

    createCanvas(1000,800);

    bg = createSprite(200,200,20,20);

    bg.addImage("bg",bgImg);

    bg.scale = 1.7;

    mouse = createSprite(120,700,20,20);

    mouse.addAnimation("mouse1",mouseCheese);



    mouse.addAnimation("mouse4",mouseCollide);

    mouse.addAnimation("mouse2,mouse3",mouseDance);

    mouse.scale = 0.15;


    cat = createSprite(880,700,20,20);

    cat.addAnimation("cat1",catSit);



    cat.addAnimation("cat4",catCollide);

    cat.addAnimation("cat2,cat3",catWalk);

    cat.setCollider("rectangle",20,20,2000,2000);


    cat.scale = 0.2;



}

function draw() {

    background(0);
 
    if(cat.x - mouse.x <= (cat.width/2 - mouse.width/2))
    {

        mouse.changeAnimation("mouse4",mouseCollide);

        cat.velocityX = 0;

        cat.x = 200;

        cat.changeAnimation("cat4",catCollide);

    }

    keyPressed();

    drawSprites();

    //text(mouseX+','+mouseY,580,100);
}


function keyPressed(){

  if(keyDown("left")) {

    cat.velocityX = -3;

    cat.changeAnimation("cat2,cat3",catWalk);

    mouse.changeAnimation("mouse2,mouse3",mouseDance);

    


  }


}