let rotX = 0;
let rotY = 0;
let mover = 0;
let colorFondo = 20;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(colorFondo);

  orbitControl();

  ambientLight(80);

  directionalLight(255, 255, 255, 1, 1, -1);

  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 0, 0, locX, locY, 200);


  push();
  rotateX(HALF_PI);
  translate(0, 0, 200);

  ambientMaterial(100, 100, 100);
  plane(1000, 1000);
  pop();

  push();

  translate(-250, 0, 0);

  rotateY(frameCount * 0.01);

  specularMaterial(0, 0, 255);

  sphere(80);

  pop();


  push();

  translate(0, mover, 0);

  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);

  normalMaterial();

  box(120);

  pop();


  push();

  translate(250, 0, 0);

  rotateZ(frameCount * 0.03);

  ambientMaterial(0, 255, 100);

  cone(70, 150);

  pop();


  push();

  translate(0, -200, 0);

  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);

  specularMaterial(255, 215, 0);

  torus(80, 25);

  pop();


  push();

  translate(0, 220, 0);

  rotateY(frameCount * 0.015);

  fill(255, 0, 255);

  cylinder(60, 120);

  pop();

  push();
  resetMatrix();

  fill(255);
  textSize(18);
  text("Controles:", 20, 30);
  text("← → mover cubo", 20, 55);
  text("Click cambia fondo", 20, 80);

  pop();
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    mover -= 20;
  }

  if (keyCode === RIGHT_ARROW) {
    mover += 20;
  }
}

function mousePressed() {

  colorFondo = random(0, 255);
}

// Ajustar pantalla
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}