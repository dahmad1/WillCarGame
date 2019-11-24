var obsOrangeCar = new Image(); obsOrangeCar.src="Images/spr_orange_car.png";
var obsMine = new Image(); obsMine.src="Images/spr_mine.png";

function Obstacle(type) {
  if(type=="car") {
    this.x=GAME.canvas.width;
    this.y=(Math.floor(Math.random()*2))*100+100;
    this.type=type;
  }
  else if(type=="mine") {
    this.x=GAME.canvas.width;
    this.y=(Math.floor(Math.random()*(GAME.canvas.height-100)))+50;
    this.type=type;
  }
}

function addObstacle(type) {
  GAME.obstacles.push(new Obstacle(type));
}

var obsTimer=100;
function animateObstacles() {
  if(obsTimer>0&&GAME.obstacles.length<2) {obsTimer--;}
  else if(obsTimer==0) {
    if(GAME.obsType=="car"){obsTimer=100+Math.floor(Math.random()*150);}
    else if(GAME.obsType=="mine"){obsTimer=50+Math.floor(Math.random()*75);}
    addObstacle(GAME.obsType);
  }

  for(var i = 0; i < GAME.obstacles.length; i++) {
    if(GAME.obstacles[i].type=="car") {
      GAME.obstacles[i].x+=3-ART.linespeed/3;
    }
    else if(GAME.obstacles[i].type=="mine") {
      GAME.obstacles[i].x-=ART.linespeed;
    }

    if(Math.abs(CAR.x-GAME.obstacles[i].x)>(1.5*GAME.canvas.width)) {
      GAME.obstacles.splice(i,1);
    }
  }
}


function renderObstacles(context) {
  context.fillStyle='green';
  for(var i = 0; i < GAME.obstacles.length; i++) {
    context.fillStyle='blue';
    if(GAME.obstacles[i].type=="car"){context.drawImage(obsOrangeCar, GAME.obstacles[i].x-22.5,GAME.obstacles[i].y-20,45,40);}
    else if(GAME.obstacles[i].type=="mine"){context.drawImage(obsMine, GAME.obstacles[i].x-20,GAME.obstacles[i].y-8, 40, 16);}
  }
}


function checkObstacleCollision() {
  for(var i = 0; i < GAME.obstacles.length; i++) {
    if(GAME.obstacles[i].type=="car") {
      if(GAME.obstacles[i].x-22.5<CAR.x+27.5
        &&GAME.obstacles[i].x+22.5>CAR.x-27.5
        &&GAME.obstacles[i].y-20<CAR.y+22.5
        &&GAME.obstacles[i].y+20>CAR.y-22.5) {
          CAR.collateralDamage+=10;
          setCollateralDamage();
          GAME.obstacles.splice(i,1);
          i--;
        }
    }
    else if(GAME.obstacles[i].type=="mine") {
      if(GAME.obstacles[i].x-17<CAR.x+27.5
        &&GAME.obstacles[i].x+17>CAR.x-27.5
        &&GAME.obstacles[i].y-8<CAR.y+22.5
        &&GAME.obstacles[i].y+8>CAR.y-22.5) {
          CAR.collateralDamage+=15;
          setCollateralDamage();
          GAME.obstacles.splice(i,1);
          i--;
        }
    }
  }
}
