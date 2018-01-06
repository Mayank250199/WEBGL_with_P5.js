let angle = 0;
let anime;

function preload() {
  anime = loadImage('anime/1.jpg')
}

function setup() {
  createCanvas(1000, 700, WEBGL);
}

function draw() {
  background(0);
  ambientLight(255);
  directionalLight(255,255,255,0,0,1);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);
  normalMaterial();
  texture(anime);
  box(250);
//ambientMaterial(255);
//fill(255);
//texture(kitten);
translate(-50,-50);
  beginShape();
  vertex(0,0,0,0,0);
  vertex(100,0,0,1,0);
  vertex(100,100,0,1,1);
  vertex(0,100,0,0,1);

  endShape(CLOSE);
  angle += 0.01;
}
