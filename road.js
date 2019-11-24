function InitializeRoad() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  var xLine=0;
  while(xLine<GAME.canvas.width) {
    addLine(xLine, GAME.canvas.height/2-6);
    xLine+=85;
  }
}

function RoadLine(x,y) {
  this.x=x;
  this.y=y;
}

function addLine(x,y) {
  ART.lines.push(new RoadLine(x,y));
}

function renderRoad(context){
  context.fillStyle="rgb(19, 156, 19)";
  context.fillRect(0,0,GAME.canvas.width,GAME.canvas.height);
  context.fillStyle = "rgb(91, 92, 91)";
  context.fillRect(0,40, GAME.canvas.width, GAME.canvas.height-80);
}

function animateRoadLines() {
  for(var i = 0; i < ART.lines.length; i++) {
    ART.lines[i].x-=ART.linespeed;
  }
}

function renderRoadLines(context) {
  context.fillStyle='yellow';
  for(var i = 0; i < ART.lines.length; i++) {
    context.fillRect(ART.lines[i].x, ART.lines[i].y,40, 12);
    if(ART.lines[i].x+40<0) {
      ART.lines.splice(i,1);
      i--;
      addLine(ART.lines[ART.lines.length-1].x+85,GAME.canvas.height/2-6);
    }
  }
}
