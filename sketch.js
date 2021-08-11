var gkImg;
var question;
var math
function preload(){
gkImg=loadImage("quizziz.png");
}
function setup(){
  createCanvas(displayWidth,displayHeight)
math=createSprite(displayWidth/2-250,displayHeight/2-150)

hello=createSprite(displayWidth/2+250,displayHeight/2-150)


}
function draw(){
if(mousePressedOver(math)){
  easy1=createSprite(displayWidth/2,displayHeight/2-100)
  math.destroy()
 
 // medium1=createSprite(displayWidth/2,displayHeight/2-50)
 // hard1=createSprite(displayWidth/2,displayHeight/2);
}
if(mousePressedOver(hello)){
  math.visible=false
}

drawSprites();

}
/*function gkQuiz(){
 background(gkImg);
  easy=createButton('Easy')
easy.position(displayWidth/2,displayHeight/2-100);
easy.size(120,50);
easy.mouseClicked(gkEasy);
medium=createButton('Medium')
medium.position(displayWidth/2,displayHeight/2-50);
medium.size(120,50)
hard=createButton('Hard');
hard.position(displayWidth/2,displayHeight/2);
hard.size(120,50);
}
function gkEasy(){
 
  question=createButton( "Q1. The natural setellite of the Earth is-?" )
question.position(displayWidth/4,displayHeight/4)
math.size(0,0)
gk.size(0,0);
asy.size(0,0);
medium.size(0,0);
hard.size(0,0);
 option1=createButton("A:32")

  option1.position(displayWidth/4,displayHeight/4+40);
  option2  =createButton("B:34")
option2.position(displayWidth/4+50,displayHeight/4+40);
option3=createButton("C:28");
option3.position(displayWidth/4+100,displayHeight/4+40);
  question=createButton("Q2. How many teeth does an adult have?")

question=createButton("Q3. The capital of United States Of America is?")
  question=createButton("the smallest country in the world is?")
question=createButton("how much percentage of Nitrogen consist in Earth's atmosphere?")
}

/*function gkMedium(){
  question.html("National Flower of India is?")
  this.question.html("Which of thes is not a lumnious object?")
  this.question.html("how many planets are there in our Solar System now?")
  this.question.html("which is the largest Country in the world?");
  this.question.html("which country's flag doesn't have red, white, or blue color?")
 
}
function gkHard(){
  this.question.html("which of these is not a vegetable?");
  this.question.html("which is the biggest city in the world?");
  this.question.html("the most expensive Toy company in world is?")
  this.question.html("Where is Yellow River?");
  this.question.html("which of these is not a Space Station?");
}*/
function hide(){
  gkQuiz.hide();
}