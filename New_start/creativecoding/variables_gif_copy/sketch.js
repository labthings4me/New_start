// create a program that can customise the number of sqaures in a grid
let gif;
function preload () {
  gif = loadImage( 'assets/smallselfieportrait.gif');

}
function setup() { //runs once
 createCanvas (windowWidth,windowWidth); //creates a canvas 720px x 720 px
 background (255,255,0);

}

function draw() { //runs in a loop
//fill ('lavender'); //fils colour
//strokeWeight (1); //assigns stroke weight
var num = 4; ///  number of squares in my array
var sideLen = windowWidth/num; // this is our side length

//translate (-150,-150); //this will give your design a bleed effect

for (var y = 0; y < windowWidth ; y = y + sideLen){ //loop creates a row in the y  direction
for (var x = 0; x < windowWidth ; x = x + sideLen){ //loop creates a row in the x direction

  image (gif,x,y,windowWidth/num,windowWidth/num,); //img loadImage
}
}


}
//function windowResize{}{
  //resizeCanvas (windowWidth, windowWidth) //this resizes and refreshes your design with
