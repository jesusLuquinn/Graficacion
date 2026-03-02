function setup(){
    createCanvas(600, 300);
}

function draw(){
    background(255);
    fill(0);
    rect(0,0,width,height/3);

    fill(255,0,0);
    rect(0,height/3,width,height/3);

    fill(240, 203, 17);
    rect(0, 2*height/3, width, height/3);

    fill(255,0,0);
    circle(width/2,height/6,80);

    fill(0,255,0);
    circle(width/2,height/2,80); 

    fill(0,0,255);
    circle(width/2,5*height/6,80); 

    noFill();
    circle(width/2,height/3,90);

    noFill();
    circle(width/2,2*height/3,90);







    
}