let angulo = 0;
let radio  = 0;
let hue    = 0;
let puntos = [];
let velocidad = 2;
let corriendo = true;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 0, 10);
  textSize(12);
}

function draw() {
  if (!corriendo) return;

  background(0, 0, 10, 8);

  let cx = width  / 2;
  let cy = height / 2;

  angulo += 0.05 * velocidad;
  radio   = 180 * sin(frameCount * 0.008) + 20;
  hue     = (frameCount * velocidad) % 360;

  let x = cx + cos(angulo)           * radio;
  let y = cy + sin(angulo)           * radio;
  let x2 = cx + cos(angulo + PI)     * (radio * 0.6);
  let y2 = cy + sin(angulo + PI)     * (radio * 0.6);
  let x3 = cx + cos(angulo + HALF_PI)* (radio * 0.4);
  let y3 = cy + sin(angulo + HALF_PI)* (radio * 0.4);

  puntos.push({ x, y, h: hue });
  if (puntos.length > 200) puntos.shift();

  for (let i = 1; i < puntos.length; i++) {
    let alfa = map(i, 0, puntos.length, 0, 90);
    let peso = map(i, 0, puntos.length, 0.5, 3);
    stroke(puntos[i].h, 80, 100, alfa);
    strokeWeight(peso);
    line(puntos[i-1].x, puntos[i-1].y, puntos[i].x, puntos[i].y);
  }

  noStroke();
  fill(hue, 60, 100, 40);
  ellipse(x, y, 30, 30);
  fill(hue, 80, 100, 80);
  ellipse(x, y, 16, 16);
  fill(0, 0, 100, 95);
  ellipse(x, y, 6, 6);

  fill((hue + 120) % 360, 80, 100, 70);
  ellipse(x2, y2, 10, 10);
  fill((hue + 240) % 360, 80, 100, 70);
  ellipse(x3, y3, 8, 8);

  let pulso = sin(frameCount * 0.05) * 10;
  fill(hue, 50, 100, 30);
  ellipse(cx, cy, 40 + pulso, 40 + pulso);
  fill(0, 0, 100, 60);
  ellipse(cx, cy, 8, 8);

  fill(0, 0, 80, 80);
  noStroke();
  text('SPACE: pausar  |  R: reset  |  ↑↓: velocidad (' + velocidad.toFixed(1) + 'x)', 10, height - 10);
}

function keyPressed() {
  if (key === ' ') {
    corriendo = !corriendo;
  }
  if (key === 'r' || key === 'R') {
    angulo = 0;
    radio  = 0;
    hue    = 0;
    puntos = [];
    background(0, 0, 10);
  }
  if (keyCode === UP_ARROW) {
    velocidad = min(velocidad + 0.5, 5);
  }
  if (keyCode === DOWN_ARROW) {
    velocidad = max(velocidad - 0.5, 0.5);
  }
}

function mousePressed() {
  for (let i = 0; i < 30; i++) {
    let ang = (i / 30) * TWO_PI;
    let r   = random(20, 80);
    puntos.push({
      x: mouseX + cos(ang) * r,
      y: mouseY + sin(ang) * r,
      h: random(360)
    });
  }
}