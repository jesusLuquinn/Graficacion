let posiciones = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  line(200,200,mouseX,mouseY);

  fill(0,255,0);
  circle(200,200,60);

  let d = dist(mouseX, mouseY, 200, 200);
  if(d < 30){
    fill(255,0,0);
    circle(200,200,60);
  }

  // Dibujar todos los círculos guardados
  fill(255,0,0);
  for(let i = 0; i < posiciones.length; i++){
    circle(posiciones[i].x, posiciones[i].y, posiciones[i].t);
  }
}

function mousePressed(){
  posiciones.push({
    x: mouseX,
    y: mouseY,
    t: random(15)
  });
}