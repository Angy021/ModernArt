 /* Angel Natseway
8?26?2024
Document programs in order to make them easier to follow, test and debug 2-AP-19  */





let xlocation = 150;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 0) ;//pink
  
  noStroke();
  
  
  
  
   fill (20, 157, 255); // blue
  rect(xlocation,200,100,100); 
  
  fill (95, 245, 158); // green
  rect(150,100,100,100); 
  
     fill (255, 173, 233); // pink
  rect(50,100,100,100); 
  
   fill (245, 255, 171); // yellow 
  rect(50,200,100,100);
  
  
  fill(255,200)
  ellipse (150,195,100,100)
  
  strokeWeight(5);
  stroke(255);
  line(400,50,0,50);
  
  noStroke();
  
  stroke(255)
  line(400,360,0,360)

  noStroke();
  
  
  //Mouse coordinate finder: 

fill(255); //mouse coordinate finder

text("("+mouseX+","+mouseY+")", mouseX, mouseY);
  
  
}
