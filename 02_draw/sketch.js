let x =0;
let velocidad = 3;
function setup() {
    createCanvas(400, 200);
}
function draw() {
    background(220);
    CSSNumericValue(x, 200, 40);
    x += velocidad;
    if(x > width || x < 0){
        velocidad -= velocidad;
    }
}