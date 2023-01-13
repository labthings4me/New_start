let img;

function preload (){
  img = loadImage ('pastelsneaker.gif');
}


function setup() {
  createCanvas(windowWidth, windowWidth);
  fill (230,2245,226);
  noStroke ();

}

function draw() {
  
  var num = 4
  var sideLen = windowWidth/num;
  
  
  for (var y = 0; y < windowWidth; y = y+sideLen)
  for (var x = 0; x < windowWidth; x = x+sideLen) {
    
    
  quad (x, y,
    x+sideLen, y,
    x +sideLen, y+sideLen,
    x, y+sideLen);
    
    image (img, x, y);
  }
  
}
  


  
  
