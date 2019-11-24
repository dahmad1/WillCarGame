var redCar = new Image(); redCar.src="Images/spr_red_car.png";

function InitializeCar(){
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  CAR = {
    x : 100,
    y : 100,
    latest : {
        x : CAR.x,
        y : CAR.y,
    },
    scale : 8,
    speed : 3,
    initialized : true,
    speedX : 0,
    MAX_SPEED_X : 3,
    speedY : 0,
    MAX_SPEED_Y : 2,
    distanceTraveled : 0,
    collateralDamage : 0
  }
}

function handleCarAnimation() {

  if (CONTROLS.car.forward) {
    if (CONTROLS.fire.active) {
      CAR.y -= 10;
    }else
    {
      if(CAR.speedY>-CAR.MAX_SPEED_Y) {CAR.speedY -=  0.05;}
    }
  }
  else if (CONTROLS.car.backward) {
    if (CONTROLS.fire.active) {
      CAR.y += 10;
    }else
    {
      if(CAR.speedY<CAR.MAX_SPEED_Y){CAR.speedY +=  0.05;}
    }
  }
  else {
    if(CAR.speedY>0) {CAR.speedY-=0.025;}
    else if(CAR.speedY<0) {CAR.speedY+=0.025;}
    if(Math.abs(CAR.speedY)<0.1) {CAR.speedY=0;}
  }


  if (CONTROLS.car.right) {
    if (CONTROLS.fire.active) {
      CAR.x += 10;
    }else
    {
      if(CAR.speedX<CAR.MAX_SPEED_X){CAR.speedX +=  0.05;}
      if(ART.linespeed<ART.MAX_LINESPEED){ART.linespeed +=  0.05;}
    }
  }
  else if (CONTROLS.car.left) {
    if (CONTROLS.fire.active) {
      CAR.x -= 10;
    }else
    {
      if(CAR.speedX>-CAR.MAX_SPEED_X){CAR.speedX -=  0.2;}
      if(ART.linespeed>0){ART.linespeed -=  0.01;}

    }
  }
  else if (CONTROLS.car.brake){
    if(CAR.speedX>0) {CAR.speedX-=0.1;}
    else if(CAR.speedX<0) {CAR.speedX+=0.1;}

    if(ART.linespeed>0) {
      ART.linespeed-=.1;

    }
  }
  else {
    if(CAR.speedX>0) {CAR.speedX-=0.05;}
    else if(CAR.speedX<0) {CAR.speedX+=0.05;}
    if(ART.linespeed>0) {ART.linespeed-=.01;}
  }

  if(CAR.y<=40||CAR.y>=GAME.canvas.height-40) {
    CAR.speedX-=.1;
    ART.linespeed-=.1;
  }

  if(ART.linespeed<0){ART.linespeed=0;}
  if(ART.linespeed>ART.MAX_LINESPEED){ART.linespeed=ART.MAX_LINESPEED;}

  CAR.x +=  CAR.speedX;
  CAR.y +=  CAR.speedY;
  CAR.distanceTraveled+=ART.linespeed;

  if(CAR.y+25>GAME.canvas.height) {CAR.y=GAME.canvas.height-25;}
  else if(CAR.y-25<0) {CAR.y=25}

  if (CAR.x > GAME.canvas.width-125) {
    CAR.x = GAME.canvas.width-125;
  } else if (CAR.x < 50) {
    CAR.x = 50;
  }
}


function renderCar(context) {
    context.drawImage(redCar, CAR.x-27.5, CAR.y-22.5, 55, 45);
}

function displayCollateralDamage(context) {
  context.fillStyle='white';
  context.fillText("Collateral Damage: " +CAR.collateralDamage+"/50", 10, GAME.canvas.height-10);
}

function setCollateralDamage() {
  CAR.MAX_SPEED_X=0.9*CAR.MAX_SPEED_X;
  CAR.MAX_SPEED_Y=1.2*CAR.MAX_SPEED_Y;
  ART.MAX_LINESPEED=0.9*ART.MAX_LINESPEED;
}
