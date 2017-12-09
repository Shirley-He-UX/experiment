var flowers = [];

function setup(){
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  background(25);
  fill(255,255,255,10);
  frameRate(6);
}
function draw(){
    flower(random(width),random(height),random(width/4),random(20),color(random(200,255),random(100,200),random(100,200)),random(3));
}
function flower(x,y,r,num,c,s){
  translate(x,y);
  strokeWeight(s);
  stroke(c);
  for(var i=0;i<num;i++){
    ellipse(r/2*cos(i*360/num),r/2*sin(i*360/num),r);
  }
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}






// var ball={
//   x:200,
//   y:200,
//   xspeed:4,
//   yspeed:-3,
//   r:24
// }

// function setup() {
//   createCanvas(500,500);
// }

// function draw() {
//   background(0);
//   stroke(255);
//   noFill();
//   strokeWeight(4);
//   display();
//   move();
//   bounce();

// }

// function bounce(){
//       if(ball.x>width-ball.r ||ball.x<ball.r){
//       ball.xspeed *=-1;
//     }
//     if(ball.y>height-ball.r ||ball.y<ball.r){
//       ball.yspeed *=-1;
//     }
//   }
// function display(){
//       ellipse(ball.x,ball.y,ball.r);
//   }
// function move(){
//     ball.x+=ball.xspeed;
//     ball.y+=ball.yspeed;
//   }