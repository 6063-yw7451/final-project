// Serial variable
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
// 键盘事件处理，用于切换全屏
function keyPressed() {
  if (key == "a" || key == "A") {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
// 当窗口大小变化时的处理函数，重新生成变量
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function readSerial() {
  let line = mSerial.readUntil("\n");
  line = trim(line);
  if (!line) return;
  console.log(line);
  if (line.charAt(0) == "{") {
    let data = JSON.parse(line);
    parseData(data);
  }

  readyForSerialData = true;
}
let RR = 0;
let GG = 0;
let BB = 0;
let counter=0;
function parseData(data) {
  // get values from data
  RR = data.R.value;
  GG = data.G.value;
  BB = data.B.value;

  
  if(millis()-counter>1000){
    counter=millis();
    // 生成音符
  let noteFrequency = map(RR + GG + BB, 0, 765, 100, 1000); // 将颜色值映射到音频频率
  
    objects.push(new serialCircle(RR,GG,BB,noteFrequency));
  }
}
function mousePressed(){
    objects.push(new serialCircle(random(255),random(255),random(255)));
  
}
function connectToSerial() {
  if (!mSerial.opened()) {
    mSerial.open(9600);
    serialButton.hide();
    readyForSerialData = true;
  }
   // 初始化音频库
   userStartAudio();
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
 
}

function draw() {
  background(220, 220, 120);
    // update serial: request new data
    if (mSerial.opened() && readyForSerialData) {
      readyForSerialData = false;
      mSerial.clear();
      mSerial.write(0xab);
    }
  if (mSerial.availableBytes() > 0) {
    readSerial();
  }

  for (let i = 0; i < objects.length; i++) {
    objects[i].display();
    if (objects[i].isHovered(mouseX, mouseY)) {
      objects[i].playNote();
    }
  }
}

class serialCircle {
  constructor(r, g, b,freq) {
    this.x = random(width);
    this.y = random(height / 4, (height * 4) / 4);

    this.h1 = random(height / 16, height / 8);
    this.h2 = random(height / 16, height / 8);
    this.h3 = random(height / 16, height / 8);

    this.w1 = this.h1;
    this.w2 = this.h2;
    this.w3 = this.h3;

    this.rand1 = random(0.5, 0.2);
    this.rand2 = random(0.5, 0.2);
    this.rand3 = random(0.5, 0.2);
    this.r=r;
    this.g=g;
    this.b=g;
    
    
    this.freq = freq;
    this.osc = new p5.Oscillator();
    this.osc.setType('sine');
    this.osc.freq(this.freq);
    this.osc.amp(0);
    this.osc.start();
  }
  display() {
    this.w1 = this.h1 * cos(frameCount * this.rand1);
    this.w2 = this.h2 * cos(frameCount * this.rand2);
    this.w3 = this.h3 * cos(frameCount * this.rand3);
    stroke(200);
    strokeWeight(3);
    line(this.x, 0, this.x, this.y);
    noStroke();
    fill(this.r, this.g, this.b,50);
    ellipse(this.x, this.y, this.w1, this.h1);
    ellipse(this.x, this.y, this.w2, this.h2);
    ellipse(this.x, this.y, this.w3, this.h3);
  }
  
  isHovered(px, py) {
    let d = dist(px, py, this.x, this.y);
    return d < this.h1*2 / 2;
  }

  playNote() {
    this.osc.amp(0.5, 0.1);
    setTimeout(() => {
      this.osc.amp(0, 0.1);
    }, 200);
  }
}
