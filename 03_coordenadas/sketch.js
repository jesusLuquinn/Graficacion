function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(240);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);

  circle(width/2, height/2, 15);
  circle(0, 0, 20);
  circle(width, 0, 20);
  circle(0, height, 20);
  circle(width, height, 20);

  line(100, 100, 500, 100);
  line(100, 100, 100, 300);
  line(100, 300, 500, 300);
  line(500, 300, 500, 100);

  circle(width/4,height/4,15);
  circle(3*width/4,height/4,15);
  circle(width/4,3*height/4,15);
  circle(3*width/4,3*height/4,15);

  line(0,0,width,height);




}