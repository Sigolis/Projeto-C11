let ship;
let seaImg;

function preload() {
  let shipAnimation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImg = loadImage("sea.png");
  ship = createSprite(475, 200);
  ship.addAnimation("ship", shipAnimation);
}

function setup() {
  createCanvas(2000, 1000);
}

function draw() {
  if (ship.position.y < seaImg.height) {
    background(seaImg);
  } else {
    background("lightblue");
  }
  ship.position.y += sin(millis() * 0.001) * 2;
  drawSprites();
}

