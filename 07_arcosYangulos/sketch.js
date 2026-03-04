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

    for(let i = 0; i < 12; i++){
    let angulo = i * TWO_PI / 12 - HALF_PI; 
        // -HALF_PI para que empiece arriba (como reloj real)

    let x1 = cx + r * 0.85 * cos(angulo);
    let y1 = cy + r * 0.85 * sin(angulo);

    let x2 = cx + r * cos(angulo);
    let y2 = cy + r * sin(angulo);

    strokeWeight(3);
    line(x1, y1, x2, y2);
}
    let ang = frameCount * 0.02;

    let x2 = cx + (r * 0.8) * cos(ang);
    let y2 = cy + (r * 0.8) * sin(ang);

    strokeWeight(5);
    line(cx, cy, x2, y2);

    let ang1 = frameCount * 0.01;

    let x2_2 = cx + (r * 0.4) * cos(ang1);
    let y2_2 = cy + (r * 0.4) * sin(ang1);

    strokeWeight(5);
    line(cx, cy, x2_2, y2_2);



}