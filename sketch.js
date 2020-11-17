//hour, minute, second
var hr, mnt, sec;
var hour_angle, min_angle, sec_angle;
var arr = [1, 2, 3, 4, 5, 9, 7, 8, 9, 10, 11, 12];

function drawLines(){
    push();
    rotate(45);
    var degree = 6;
    for(var i =1;i<=60;i++){
        rotate(degree+0.01);
        if(i%5==0){
            strokeWeight(3);
        }
        else{
            strokeWeight(1);
        }
        line(-width/6,-height/6,-width/6-2,-height/6-2);
    }

    pop();
}

//draw clock numbers
function drawNumber() {
    push();
    rotate(90);
    var degree = 30;
    for (var i = 0; i < arr.length; i++) {
        rotate(degree);
        textSize(20);
        fill(255);
        textAlign(CENTER,CENTER);
        text(String(arr[i]),0,-width/4-9);
    }
    pop();
}

//parameters : get degrees (for seconds) 
function runSeconds(sec_angle) {
  push();
  rotate(int(sec_angle));
  fill(color(41, 173, 255));
  stroke(color(41, 173, 255));
  rect(8, -1, 65, 1.3, 20);
  pop();
}

//parameters : get degrees (for minutes)
function runMinutes(min_angle) {
  push();
  rotate(min_angle);
  noFill();
  stroke(color(41, 173, 255));
  rect(8, -1, 52, 2.5, 20);
  pop();
}

//parameters : get degrees (for hours)
function runHours(hour_angle) {
  push();
  rotate(hour_angle);
  fill(color(41, 173, 255));
  stroke(color(41, 173, 255));
  rect(8, -1, 44, 2, 20);
  pop();
}

function setup() {
  createCanvas(340, 340);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  //set middle of the screen as origin
  translate(width / 2, height / 2);
  //initially it was rotated 90 degrees
  rotate(-90);

  //ellipse(clock) set up
  noFill();
  noStroke();
  circle(0, 0, width / 2);

  //middle circle
  stroke("white");
  fill(color(41, 173, 255));
  circle(0, 0, 8);

  //get second, minute, hour
  sec = second();
  mnt = minute();
  hr = hour();

  //transform their values into degrees
  sec_angle = Math.floor(map(sec, 0, 60, 0, 360));
  min_angle = int(map(mnt, 0, 60, 0, 360)) + map(sec,0,60,0,6);
  hour_angle = int(map(hr%12, 0, 24, 0, 360)) + map(mnt,0,60,0,30);
  drawNumber();
  drawLines();
  runSeconds(sec_angle);
  runMinutes(min_angle);
  runHours(hour_angle);
}
