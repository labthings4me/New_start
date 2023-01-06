function setup() { //runs once
 createCanvas (720,720); //creates a canvas 720px x 720 px
 background (255,255,0);

}

function draw() { //runs in a loop
fill (255,0,0); //fils colour
strokeWeight (8); //assigns stroke weight
translate (60,60); //creates a new origin point
  quad (0,0,
        300,0,
        300,300,
         0,300);


}
