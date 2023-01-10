


function preload (){
  boat = loadImage ('boat.png');
  map = loadImage ('map.png');
  lizard = loadImage ('lizard.png');
  lily = loadImage ('lily.png');
  fish = loadImage ('fish.png');
  palm = loadImage ('palm.png');
  cent = loadIamge ('cent.png')
}
  function setup() {
    createCanvas(windowWidth, windowWidth);

  }


function draw() {
  fill ('yellow');
  strokeWeight (1);


 var num = 6 ;

  var sideLen = windowWidth/num; // x length

  translate (-150, -150); // gives design a bleed effect


  for ( var y = 0; y < 2 * windowWidth; y = y + sideLen) {

    for ( var x = 0; x < 2 * windowWidth; x = x + sideLen) {//row across x



    pics = [boat,map, lizard,lily,fish,palm];
    image (pics [int (random (0,6
                             )], x,y);


    }

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  }

  }

}
function windowResized (){ // resizes and refreshes design with browser
resizeCanvas (windowWidth, windowHeight);




}
