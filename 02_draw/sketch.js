let x =0;
let y = 0;
let velocidadx = 5;
let velocidad = 5;
function setup() {
    createCanvas(400, 300);
}
function draw() {
    background(220);
    
    circle(200, x, 50);
    x += velocidadx;
    if(x > height || x < 0){
        velocidadx = - velocidadx;
    }

    circle(y, 150, 50);
    y += velocidad;
    if(y > width || y < 0){
        velocidad = - velocidad;
    }
}