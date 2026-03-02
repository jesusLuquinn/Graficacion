function setup(){
    createCanvas(600,400);
}

function draw(){
    background(37, 144, 232);

    //base
    fill(232, 157, 37);
    square(230,250,150);

    //techo
    fill(161, 232, 37);
    triangle(210,250,400,250,305,150);

    //puerta
    fill(133, 83, 20);
    rect(285,320, 40,80);

    //Pomo de puerta
    fill(102, 88, 73);
    circle(293,357,7);

    //Sol
    fill(244, 255, 10);
    circle(100,80,100);

    //Ventanas
    fill(226, 227, 200);
    square(245,265,36);

    fill(226, 227, 200);
    square(328,265,36);

    line(263,265,263,301);
    line(245,283,281,283);

    line(263+83,265,263+83,301);
    line(245+83,283,364,283);

    fill(72, 150, 89);
    rect(100,370,6,30);

    fill(34, 77, 46);
    circle(103,350,40);


}