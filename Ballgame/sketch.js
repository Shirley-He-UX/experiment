let bubbles=[];
var level=2;
function setup() {
  createCanvas(600,400);
    for(let i=0;i<10;i++){
         bubbles.push(new Bubble(random(100,width),random(100, height),random(10,50),level*2));
    }
}

function mousePressed(){
   for(let i=0;i<bubbles.length;i++){
        if(bubbles[i].clicked(mouseX,mouseY)){
            bubbles.splice(i,1);
        }  
   }
}

function draw() {
  background(0);
  for(let i=0;i<bubbles.length;i++){
     if(bubbles[i].clicked(mouseX,mouseY)){
            bubbles[i].changeColor(255);
        } else{ bubbles[i].changeColor(0);}
    bubbles[i].move();
    bubbles[i].show();  
    
  }
    if(bubbles.length==0){
        noStroke();
        fill(255);
        textAlign(CENTER);
        textSize(40);
        text("YOU WIN",300,200);
        textSize(10);
        text("Press Any Key to start",300,230);
        textSize(28);
        text("LEVEL:"+level,300,270);
        if(keyIsPressed){
            level++;
            for(let i=0;i<10;i++){
            bubbles.push(new Bubble(random(100,width),random(100, height),random(10,50),level*2));
            }
        }
    }
}


class Bubble{
  constructor(x,y,r,s){
    this.x=x;
    this.y=y;
    this.r=r;
    this.brightness=0;
    this.speed=s;
    
  }
  move(){
    this.x+=random(-this.speed,this.speed);
    this.y-=random(-this.speed,this.speed);
  }
  show(){
    stroke(255);
      strokeWeight(4);
    fill(this.brightness,100);
    
    ellipse(this.x,this.y,this.r*2);
  }
    changeColor(bright){
        this.brightness=bright;
    }
  clicked(px,py){
        if(dist(px,py,this.x,this.y)<this.r){
           return true;    
        }else{return false;}
    }
}








//let bubbles=[];
//function setup() {
//  createCanvas(600,400);
//for(let i=0;i<10;i++){
//     bubbles.push(new Bubble(random(width),random(height),random(10,50)));
//}
//}
//
//function draw() {
//  background(0);
//  for(let i=0;i<bubbles.length;i++){
//    if(bubbles[i].clicked(mouseX,mouseY)){
//        bubbles[i].changeColor();
//    }
//    bubbles[i].move();
//    bubbles[i].show();   
//  }
//}
////function mousePressed(){
////     for(let i=0;i<bubbles.length;i++){         
////      bubbles[i].clicked(mouseX,mouseY);        
////  }
////}
//
//class Bubble{
//  constructor(x,y,r){
//    this.x=x;
//    this.y=y;
//    this.r=r;
//      this.brightness=0;
//    
//  }
//  move(){
//    this.x+=random(-5,5);
//    this.y-=random(-5,5);
//  }
//  show(){
//    stroke(255);
//      strokeWeight(4);
//    fill(this.brightness,100);
//    
//    ellipse(this.x,this.y,this.r*2);
//  }
//    changeColor(){
//        this.brightness=255;
//    }
//  clicked(px,py){
//        if(dist(px,py,this.x,this.y)<this.r){
//           return true;    
//        }else{return false;}
////        if(dist(px,py,this.x,this.y)<this.r){
////            this.brightness=255;
////            console.log("hey you");
////        }else{
////            this.brightness=0;
////        }
//    }
//}


//let bubbles=[];
//function setup() {
//  createCanvas(600,400);
//for(let i=0;i<10;i++){
//     bubbles.push(new Bubble(random(width),random(height),random(10,50)));
//}
//}
//
//function draw() {
//  background(0);
//  for(let i=0;i<bubbles.length;i++){
//    bubbles[i].move();
//    bubbles[i].show();
//    //bubbles[i].clicked(mouseX,mouseY);
//  }
//}
//function mousePressed(){
//     for(let i=0;i<bubbles.length;i++){         
//      bubbles[i].clicked(mouseX,mouseY);        
//  }
//}
//
//class Bubble{
//  constructor(x,y,r){
//    this.x=x;
//    this.y=y;
//    this.r=r;
//      this.brightness=0;
//    
//  }
//  move(){
//    this.x+=random(-5,5);
//    this.y-=random(-5,5);
//  }
//  show(){
//    stroke(255);
//      strokeWeight(4);
//    fill(this.brightness,100);
//    
//    ellipse(this.x,this.y,this.r*2);
//  }
//    clicked(px,py){
//        if(dist(px,py,this.x,this.y)<this.r){
//            bubbles.pop();
//            //bubbles.shift();
//        }
////        if(dist(px,py,this.x,this.y)<this.r){
////            this.brightness=255;
////            console.log("hey you");
////        }else{
////            this.brightness=0;
////        }
//    }
//}




//let bubbles=[];
//function setup() {
//  createCanvas(600,400);
//}
//
//function draw() {
//  background(0);
//  for(let i=0;i<bubbles.length;i++){
//    bubbles[i].move();
//    bubbles[i].show();
//  }
//}
//
////function mousePressed(){
////    let r =random(10,50);
////    
////    bubbles.push(new Bubble(mouseX,mouseY,r));
////}
//function mouseDragged(){
//    bubbles.push(new Bubble(mouseX,mouseY,random(10,50)));
//}
//function mousePressed(){
//     for(let i=0;i<bubbles.length;i++){
//    bubbles[i].clicked();
//  }
//}
//
//class Bubble{
//  constructor(x,y,r){
//    this.x=x;
//    this.y=y;
//    this.r=r;
//    
//  }
//  move(){
//    this.x+=random(-5,5);
//    this.y-=random(-5,5);
//  }
//  show(){
//    stroke(255);
//      strokeWeight(4);
//    noFill();
//    
//    ellipse(this.x,this.y,this.r*2);
//  }
//    clicked(){
//        if(dist(mouseX,mouseY,this.x,this.y)<this.r){
//    console.log("hey you");
//    }
//    }
//}



//var words=["Love","Peace","Hope","Fine"];
//var bcolors=["#FFFFC1","#FFD2A5","#FFA8B8","#D988BC"];
//var tcolors=["#34374C","#2C2E3E","#61111","#305973"];
//var index = 0;
//
//function setup(){
//    createCanvas(500,500);
//}
//function draw(){
//    background(bcolors[index]);
//    textSize(23);
//    textAlign(CENTER);
//    fill(tcolors[index]);
//    text(words[index],width/2,height/2); 
//}
//function mousePressed(){
//    index++;
//    if(index==words.length){
//        index=0;
//    }
//}