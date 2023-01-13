function setup() { //runs once
 createCanvas (720,720); //creates a canvas 720px x 720 px
 background (255,10,255);

}

function draw() { //runs in a loop
fill (255,0,0); //fils colour
strokeWeight (8); //assigns stroke weight
translate (60,60); //creates a new origin point
  quad (0,0,
        300,0,
        300,300,
         0,300);
  quad (300,0,
        600,0,
        600,300,
         300,300); // add 300 in x direction
  quad (0,300,
        300,300,
        300,600,
         0,600);
  quad (300,300,
        600,300,
        600,600,
         300,600); // add 300 in y direction

}
