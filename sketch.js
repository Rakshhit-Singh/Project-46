var black, dark, light, orange, red, pink, teal;
var blacki, darki, lighti, orangei, redi, pinki, teali;

var player;
var cafiteria;

var button, button1, button2, button3, submit, download; 

var task1i;

var task1;

var blue, bluei;

var randNo, randNo1, randNo2, randNo3, randNo4;
var data;
var hi;

var gameState=0;

var stage=1;

var task3i;
var task4, task4i;
var increase, decrease;

var rand1, rand2, rand3, rand4;

var yellow, yellowi;
function preload(){

    blacki=loadImage("Black.png");
    darki=loadImage("darkim.png");
    lighti=loadImage("light_green.png");
    orangei=loadImage("orange.png");
    redi=loadImage("red.png");
    pinki=loadImage("pink.png");
    teali=loadImage("teal.png");

    cafeteria=loadImage("Cafeteria.jpg")

    task1i=loadImage("Task 1.jpg")

    bluei=loadImage("blue.jpg")
    greeni=loadImage("green.jpg")

    task3i=loadImage("Task 3.png");
    task4i=loadImage("Task 4.png");

    yellowi=loadImage("yellow.jpg");
}


function setup(){
createCanvas(displayWidth, displayHeight)

button = createButton("Task 1");
button.position(displayWidth/2-35, displayHeight/2);

button1 = createButton("Task 2");
button1.position(displayWidth/2-35, 50);

button2 = createButton("Task 3");
button2.position(35, displayHeight/2);

button3 = createButton("Task 4");
button3.position(displayWidth-75, displayHeight/2);

submit = createButton("Submit");
submit.position(500,300);
submit.hide();

increase = createButton("Increase");
increase.position(displayWidth/2-250, displayHeight/2-200);
increase.hide();

decrease = createButton("Decrease");
decrease.position(displayWidth/2-250, displayHeight/2+250);
decrease.hide();

increase1 = createButton("Increase");
increase1.position(displayWidth/2-250, displayHeight/2-200);
increase1.hide();

decrease1 = createButton("Decrease");
decrease1.position(displayWidth/2-250, displayHeight/2+250);
decrease1.hide();

download = createButton("DOWNLOAD");
download.position(displayWidth/2, displayHeight/2);
download.hide();

blue=createSprite(displayWidth/2, displayHeight/2);
blue.addImage(bluei);
blue.scale=5;
blue.visible=false;

yellow=createSprite(displayWidth/2, displayHeight/2);
yellow.addImage(yellowi);
yellow.scale=5;
yellow.visible=false;

green=createSprite(displayWidth/2, displayHeight/2);
green.addImage(greeni);
green.scale=5;
green.visible=false;

player= createSprite(displayWidth/2, displayHeight/2)
player.visible=false

black= createSprite(displayWidth/2-175, displayHeight/2+30)
black.addImage(blacki);
black.scale=0.1;


dark= createSprite(displayWidth/2+165, displayHeight/2-85)
dark.addImage(darki);
dark.scale=0.18

light= createSprite(displayWidth/2+60, displayHeight/2-135)
light.addImage(lighti);
light.scale=0.1;

orange= createSprite(displayWidth/2-70, displayHeight/2+85)
orange.addImage(orangei);
orange.scale=0.34;

red= createSprite(displayWidth/2+175, displayHeight/2+30)
red.addImage(redi);
red.scale=0.15;

pink= createSprite(displayWidth/2-175, displayHeight/2-75)
pink.addImage(pinki);
pink.scale=0.1;

teal= createSprite(displayWidth/2-75, displayHeight/2-140)
teal.addImage(teali);
teal.scale=0.175;

task1=createSprite(width/2,height/2);
task1.addImage(task1i);
task1.visible=false;
task1.scale=2;

task3=createSprite(width/2,height/2);
task3.addImage(task3i);
task3.visible=false;
task3.scale=1;

task4=createSprite(width/2,height/2);
task4.addImage(task4i);
task4.visible=false;
task4.scale=1;

randNo=Math.round(random(1, 100000000))
randNo1=Math.round(random(1, 50))
randNo2=Math.round(random(1, 50))

randNo3=Math.round(random(1, 50))
randNo4=Math.round(random(1, 50))

rand1=randNo1;
rand2=randNo2;

rand3=randNo3;
rand4=randNo4;

}

function draw(){
background(cafeteria)

choosePlayer();

Task2();
Task3();
Task4();

if(keyIsDown(UP_ARROW)){
    player.y=player.y-5;

}

if(keyIsDown(DOWN_ARROW)){
    
player.y=player.y+5
}

if(keyIsDown(RIGHT_ARROW)){
    player.x=player.x+5

}

if(keyIsDown(LEFT_ARROW)){
    
player.x=player.x-5
}

drawSprites();
    
}

function Task3(){

  button2.mousePressed(()=>{

    yellow.visible=true;
    task4.visible=true;
  
    button.hide();  
    button1.hide();
    button2.hide();
    button3.hide();
  
    increase.show();
    decrease.show();
  
    hi2 = createElement("h1");
    hi2.html(rand1)
    hi2.position(width/2-225,height/2)
  
    hi3 = createElement("h1");
    hi3.html(rand2)
    hi3.position(width/2+225,height/2)
  
    });

  increase.mousePressed(()=>{
   
    rand1=rand1+1
    hi2.html(rand1)

  });

  decrease.mousePressed(()=>{
    rand1=rand1-1
    hi2.html(rand1)

    
  });

  if(rand1===rand2){
    yellow.visible=false;
    button.show();  
    button1.show();
    button2.show();
    button3.show();

    task4.visible=false;
    increase.hide();
    decrease.hide();

    hi2.hide();
    hi3.hide();

  
  }

}

function Task4(){

  button3.mousePressed(()=>{

    blue.visible=true;
    task3.visible=true;
  
    button.hide();  
    button1.hide();
    button2.hide();
    button3.hide();
  
    increase1.show();
    decrease1.show();
  
    hi4 = createElement("h1");
    hi4.html(rand3)
    hi4.position(width/2-225,height/2)
  
    hi5 = createElement("h1");
    hi5.html(rand4)
    hi5.position(width/2+225,height/2)
  
    });

  increase1.mousePressed(()=>{
   
    rand3=rand3+1
    hi4.html(rand3)

  });

  decrease1.mousePressed(()=>{
    rand3=rand3-1
    hi4.html(rand3)

    
  });

  if(rand3===rand4){
    blue.visible=false;
    button.show();  
    button1.show();
    button2.show();
    button3.show();

    task3.visible=false;
    increase1.hide();
    decrease1.hide();

    hi4.hide();
    hi5.hide();

 
  }

}

function Task2(){

  button1.mousePressed(()=>{
    submit.show();
  hi = createElement("h2");
  hi.html(randNo)
  hi.position(width/2-100,height/2)
  
    
  blue.visible=true;
  
    var input=createInput("Type the number")
     input.position(300,300)
     data=input.value()
     button.hide();
     button1.hide();
     button2.hide();
     button3.hide();
     
     button4.mousePressed(()=>{
      
     console.log(data);
     if(data===randNo){
      button.show();
      button1.show();
      button2.show();
      button3.show();
      submit.hide();
    
      blue.visible=false;
    
       
          }
   });
      });
}


function choosePlayer(){
  if(mousePressedOver(dark)){

      player.addImage(darki)
      player.visible=true
      player.scale=0.18
  
      dark.visible=false
      black.visible=false
      light.visible=false
      pink.visible=false
      teal.visible=false
      orange.visible=false
      red.visible=false
    }
  
    else if (mousePressedOver(light)){
      player.addImage(lighti)
  
      player.scale=0.1;
      player.visible=true
      light.visible=false
  
      black.visible=false
      dark.visible=false
      pink.visible=false
      teal.visible=false
      orange.visible=false
      red.visible=false
    }
  
    else if (mousePressedOver(orange)){
      player.addImage(orangei)
      player.scale=0.34;
  
      orange.visible=false
      player.visible=true
      black.visible=false
      light.visible=false
      pink.visible=false
      teal.visible=false
      dark.visible=false
      red.visible=false
    }
  
    else if(mousePressedOver(black)){
      player.addImage(blacki)
  
      player.scale=0.1;
      
      black.visible=false
      player.visible=true
      dark.visible=false
      light.visible=false
      pink.visible=false
      teal.visible=false
      orange.visible=false
      red.visible=false
    }
  
    else if(mousePressedOver(pink)){
      player.addImage(pinki)
  
      player.scale=0.1;
  
      pink.visible=false
      player.visible=true
      black.visible=false
      light.visible=false
      dark.visible=false
      teal.visible=false
      orange.visible=false
      red.visible=false
    }
  
    else if(mousePressedOver(teal)){
      player.addImage(teali)
  
      player.scale=0.2;
  
      teal.visible=false
      player.visible=true
      black.visible=false
      light.visible=false
      pink.visible=false
      dark.visible=false
      orange.visible=false
      red.visible=false
    }
  
    else if(mousePressedOver(red)){
      player.addImage(redi)
  
      player.scale=0.15;
  
      red.visible=false
      player.visible=true
      black.visible=false
      light.visible=false
      pink.visible=false
      dark.visible=false
      orange.visible=false
      teal.visible=false
    }

}