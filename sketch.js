// serial variables
let mSerial;
let readyForSerialData;
let serialButton;
let sendSuccess;

// project variables
let gridSize = 20;
let player;
let maze;
let currentAngle = 0;
let objects = [];

function readSerial() {
  let line = mSerial.readUntil("\n");
  console.log(line)
  trim(line);
  if (!line) return;

  if (line.charAt(0) == "{") {
    let data = JSON.parse(line);
    parseData(data);
  }

  readyForSerialData = true;
}
let RR = 0;
let GG = 0;
let BB = 0;
function parseData(data) {
  // get values from data
  RR = data.R.value;
  GG = data.G.value;
  BB = data.G.value;

  
}
function connectToSerial() {
  if (!mSerial.opened()) {
    mSerial.open(9600);
    serialButton.hide();
    readyForSerialData = true;
  }
}

function setup() {
  randomSeed(1010);
  createCanvas(windowHeight, windowHeight);
  mSerial = createSerial();

  serialButton = createButton("Connect To Serial");
  serialButton.position(width / 2, height / 2);
  serialButton.mousePressed(connectToSerial);

  readyForSerialData = false;
  sendSuccess = false;
  for (let i = 0; i < 5; i++) {
    objects.push(new serialCircle());
  }
}

function draw() {
  if (mSerial.availableBytes() > 0) {
    readSerial();
  }
  background(220, 220, 120);
  for (let i = 0; i < objects.length; i++) {
    objects[i].display(RR,GG,BB);
  }
}

class serialCircle {
  constructor() {
    this.x = random(width);
    this.y = random(height / 4, (height * 3) / 4);

    this.h1 = random(height / 16, height / 8);
    this.h2 = random(height / 16, height / 8);
    this.h3 = random(height / 16, height / 8);

    this.w1 = this.h1;
    this.w2 = this.h2;
    this.w3 = this.h3;

    this.rand1 = random(0.5, 0.2);
    this.rand2 = random(0.5, 0.2);
    this.rand3 = random(0.5, 0.2);
  }
  display(r, g, b) {
    this.w1 = this.h1 * cos(frameCount * this.rand1);
    this.w2 = this.h2 * cos(frameCount * this.rand2);
    this.w3 = this.h3 * cos(frameCount * this.rand3);
    stroke(200);
    strokeWeight(3);
    line(this.x, 0, this.x, this.y);
    noStroke();
    fill(r, g, b,50);
    ellipse(this.x, this.y, this.w1, this.h1);
    ellipse(this.x, this.y, this.w2, this.h2);
    ellipse(this.x, this.y, this.w3, this.h3);
  }
}

