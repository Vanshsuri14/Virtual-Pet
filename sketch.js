//Create variables here

var dog,happyDog,database,foodS;
var foodStock

function preload(){
  //load images here
  dog = loadImage('Dog.png');
  happyDog = loadImage('dogImg1.png');
}

function setup() {
  createCanvas(500,500);
  dog1 = createSprite(250,250,30,60);
  dog1.addImage(dog);
  dog1.scale = 0.2;

  database = firebase.database();
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
  
}


function draw() { 
  background(46,139,87);
  
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog1.addImage(happyDog);

  }else{
    dog1.addImage(dog);
  }

  drawSprites();
  textSize(24);
  text("Food Remaining : "+foodS,150,150);
  fill(255,255,255);
  
  //add styles here

}

function readStock(data){
  foodS = data.val();

}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
  x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })

}



