let posiciones = [];
function setup() {
 createCanvas(400, 400);
}
function draw() {
 background(240);

 //2.
 line(200,200,mouseX,mouseY);

 //3.
 fill(0,255,0);
 circle(200,200,60);
 let d = dist(mouseX, mouseY, 200, 200);
 if(d<30){
    fill(255,0,0);
    circle(200,200,60);
 }

 //4.
 
}
