function setup(){
    createCanvas(400,400);
}

function draw() {
    background(240);
    let cx = width / 2;
    let cy = height / 2;
    let r = 150;

    // 1) Carátula
    stroke(0);
    strokeWeight(3);
    noFill();
    circle(cx, cy, r * 2);
    let ang = frameCount * 0.02;

    let x2 = cx + (r * 0.8) * cos(ang);
    let y2 = cy + (r * 0.8) * sin(ang);

    strokeWeight(5);
    line(cx, cy, x2, y2);

}
