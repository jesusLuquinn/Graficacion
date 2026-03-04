function setup(){
    createCanvas(400,400);
}

function draw(){
    noSmooth();
    stroke(random(255),random(255),random(255));
    strokeWeight(8);
    line(100,150,150,50);
    line(150,150,200,50);
    line(200,150,250,50);

    smooth();
    stroke(random(255),random(255),random(255));
    strokeWeight(8);
    line(100,350,150,230);
    line(150,350,200,230);
    line(200,350,250,230);

    noSmooth();
    fill(255);
    circle(100,200,10);

    smooth();
    fill(255);
    circle(300,200,10);



    noLoop();




}