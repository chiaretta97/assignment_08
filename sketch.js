var myImg;
var myImg2;
s = 0;
amount=0;

function preload() {
 myImg = loadImage('./assets/trash.png')
 myImg2 = loadImage('./assets/paper.png')
}

function setup() {
 createCanvas(500, 500);
 frameRate(20)
 setShakeThreshold(10)
}

function draw() {

 scale(s / 500);
 if (windowWidth > windowHeight) {
  s = height;
 } else {
  s = width;
 }

 image(myImg, 0, 0, 500, 500);
 imW = 200;
 imH = 200;

 var cadeX = map(rotationX, -180, 180, 0, 500);
 var cadeY = map(rotationY, -90, 90, 0, 500);
 rectMode(CENTER);
 //fill('#FFFFCC ')
 textFont('Dancing Script')
 textSize(30);

 text('Rotate the phone', 300, 140)

 push()
 if (cadeX < 80 || cadeY < 150) {

  imW = 60;
  imH = 60;
     
     fill(0)
     rect(400,130,200,35)
     fill(255)
     text('Now shake it!', 300, 140)   
     
      for (var i = 0; i < amount; i++) {
     
     
  var X = random() * width;
  var Y = random() * height;     

  image(myImg2, X, Y, imW, imH)
      }
 }


 image(myImg2, cadeY, cadeX, imW, imH)
 pop()
}

function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
}

function deviceShaken() {
    amount++;
}