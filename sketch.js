var circleSize = 40;
var spacing = 5;
var color1 = "#F0EBE2"
var color2 = "#CFB29C"
var color3 = "#4F3B3D"
var color4 = "#675859"
var color5 = "#AFA6A2"
// #AFA6A2 #675859 #4F3B3D #CFB29C #F0EBE2
function setup() {
  var canvas=createCanvas(windowWidth, windowHeight);
  canvas.parent(sketch)
}

function draw() {
  noStroke()
  background(color1);
  fill(color2);
  for(var i = 0; i < width/circleSize; i++){
    ellipse((circleSize+spacing)*i, height - circleSize*1 - circleSize, circleSize, circleSize);
  }
  fill(color3);
  for(var i = -1; i < width/circleSize; i++){
    ellipse(((circleSize+spacing)/2)+(circleSize+spacing)*i, height - circleSize*2 - circleSize, circleSize, circleSize);
  }
  fill(color4);
  for(var i = 0; i < width/circleSize; i++){
    ellipse((circleSize+spacing)*i, height - circleSize*3 - circleSize, circleSize, circleSize);
  }
  fill(color5);
  for(var i = -1; i < width/circleSize; i++){
    ellipse(((circleSize+spacing)/2)+(circleSize+spacing)*i, height - circleSize*4 - circleSize, circleSize, circleSize);
  }
//  ellipse((circleSize+spacing)*1, height - circleSize*1, circleSize, circleSize);
  // ellipse((circleSize+spacing)*2, height - circleSize*1, circleSize, circleSize);
  // ellipse((circleSize+spacing)*3, height - circleSize*1, circleSize, circleSize);
}