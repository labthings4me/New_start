function setup() { //runs once
 createCanvas (720,720); //creates a canvas 720px x 720 px
 background (255,255,0);

}

function draw() { //runs in a loop
fill (255,0,0); //fils colour
strokeWeight (1); //assigns stroke weight
for (var y = 0; y < 720 ; y = y + 360){ //loop creates a row in the y  direction
for (var x = 0; x < 720 ; x = x + 360){ //loop creates a row in the x direction

  quad (x,y,
        x+360,y,
        x+360,y+360,
         x,y+360);
}
}


}
