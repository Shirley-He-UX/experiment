var bubbles=[];
var imgs=[];
function preload(){
  for(var i=0;i<13;i++){
  imgs[i] = loadImage('images/'+i+'.png');
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function mousePressed(){
  var size=random(1,2);
  var r= floor(random(0,imgs.length));
  bubbles.push(new Bubble(mouseX,mouseY,imgs[r],size));
}

function draw() {
  background(255);
  for(var i=bubbles.length-1;i>=0;i--){
    bubbles[i].update();
    bubbles[i].display();
  }
}

function Bubble(x,y,img,size){
  this.x=x;
  this.y=y;
  this.img=img;
  this.size=size;
  
  this.display=function(){
    imageMode(CENTER);
    image(this.img,this.x,this.y,this.img.width/size,this.img.height/size);
  }
  
  this.update=function(){
    this.x+=random(-3,3);
    this.y+=random(-3,3);
  }
}










// var bubbles=[];

// function setup() {
//   createCanvas(600,400);
//   for(var i=0;i<6;i++){
//     bubbles.push(new Bubble(random(100,width),random(100,height)));
//   }
// }

// function draw() {
//   background(0);
//   for(var i=0;i<bubbles.length;i++){
//     bubbles[i].update();
//     bubbles[i].display();
//       for(var j=0;j<bubbles.length;j++){
//         if(i!=j&&bubbles[i].intersects(bubbles[j])){
//           bubbles[i].changeColor();
//           bubbles[j].changeColor();
//       }
//     }
//   }
  
//   // if(dist(b1.x,b1.y,b2.x,b2.y)<b1.r+b2.r){
//   //   b1.changeColor();
//   //   b2.changeColor();
//   // }
// }

// function Bubble(x,y){
//   this.x=x;
//   this.y=y;
//   this.r=36;
//   this.col=color(255);
//   this.changeColor=function(){
//     this.col=color(random(255),random(255),random(255));
//   }
  
//   this.intersects=function(other){
//     if(dist(this.x,this.y,other.x,other.y)<this.r+other.r){
//       return true;
//     }else{
//       return false;
//     }
//   }
//   this.display=function(){
//     stroke(255);
//     fill(this.col,100);
//     ellipse(this.x,this.y,this.r*2);
//   }
//   this.update=function(){
//     this.x+=random(-2,2);
//     this.y+=random(-2,2);
//   }
// }
