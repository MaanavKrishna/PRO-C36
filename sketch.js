//Create variables here
var dog, database, foodS, foodStock,dogimg,dogimg1,database,lastfed,milk,milkimg;
var count=0;
function preload()
{
  //load images here
  dogimg=loadImage("images/dogImg.png");
  dogimg1=loadImage("images/dogImg1.png");
  milkimg=loadImage("images/milk.png")
}

function setup() {
  database=firebase.database();
  update();
	createCanvas(1000, 650);
  dog=createSprite(600,325);
  dog.addImage(dogimg);
  dog.scale=0.3;
}


function draw() {  
  background(0,150,20);
  if(keyWentDown(UP_ARROW))
  {
    GiveStock(foodS);
    dog.addImage(dogimg);
    dog.scale=0.3;
  }
  if(keyWentDown(DOWN_ARROW))
  {
    DeleteStock(foodS);
    dog.addImage(dogimg1);
    dog.scale=0.3;
  }

  drawSprites();
  textSize(32);
  text("FoodStock="+foodStock,300,100);
  if(foodStock<0)
  {
    foodStock=0;
  }
  stock();
}

function update() {
  database.ref("Food").on("value",(data)=>{
    foodStock=data.val();
  })
}

function DeleteStock(){
  database.ref("/").update({Food:foodStock-1});
}

function GiveStock(){
  database.ref("/").update({Food:foodStock+1});
}

function stock(){
 if(foodStock>=0)
 {
  for (var i = 0; i < 11; i++) 
  {
    count=i+30;
    milk=createSprite(10,10,200+count,275);
    milk.addImage(milkimg);
    milk.scale=0.1;
  }  
  for (var i = 11; i < 21; i++) 
  {
    count=i+30;
    milk=createSprite(10,10,200+count,525);
    milk.addImage(milkimg);
    milk.scale=0.1;
  }  
 }
}
