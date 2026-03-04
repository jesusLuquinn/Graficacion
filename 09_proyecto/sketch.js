let estrellas = [];
let particulas = [];
let animando = true;

function setup(){
  createCanvas(600,400);
  
  // Crear estrellas
  for(let i=0; i<80; i++){
    estrellas.push({
      x: random(width),
      y: random(height),
      t: random(1,3)
    });
  }
  
  // Crear partículas flotantes
  for(let i=0; i<10; i++){
    particulas.push(createVector(random(width), random(height)));
  }
}

function draw(){
  background(15,15,40); // azul oscuro noche
  
  dibujarEstrellas();
  dibujarLuna();
  moverParticulas();
}

function dibujarEstrellas(){
  noStroke();
  fill(255);
  for(let e of estrellas){
    circle(e.x, e.y, e.t);
  }
}

function dibujarLuna(){
  push();
  translate(width-100,100);
  rotate(frameCount * 0.01);
  
  fill(240,240,200);
  stroke(200);
  strokeWeight(2);
  circle(0,0,80);
  
  pop();
}

function moverParticulas(){
  for(let p of particulas){
    
    let mouse = createVector(mouseX, mouseY);
    let direccion = p5.Vector.sub(p, mouse);
    let d = direccion.mag();
    
    if(d < 80){
      direccion.normalize();
      direccion.mult(2);
      p.add(direccion);
    }
    
    // movimiento suave
    p.x += sin(frameCount * 0.02 + p.x) * 0.5;
    p.y += cos(frameCount * 0.02 + p.y) * 0.5;
    
    // cambio de color si mouse está cerca
    if(d < 80){
      fill(255,100,100);
    } else {
      fill(100,200,255);
    }
    
    noStroke();
    circle(p.x, p.y, 15);
  }
}

function mousePressed(){
  if(animando){
    noLoop();
    animando = false;
  } else {
    loop();
    animando = true;
  }
}