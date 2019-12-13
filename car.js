var redCar = new Image();
redCar.src = "Images/spr_red_car.png";
var blueCar = new Image();
blueCar.src = "Images/spr_blue_car.png";

function InitializeCar() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1, 1);
  CAR = {
    x: 100,
    y: 100,
    latest: {
      x: CAR.x,
      y: CAR.y,
    },
    scale: 8,
    initialized: true,
    //speedX: 0,
    //MAX_SPEED_X: 3,
    //speedY: 0,
    //MAX_SPEED_Y: 4,
    distanceTraveled: 0,
    Damage: 0,
    coinIncrease: 0,
    hp: 50
  }
}

function handleCarAnimation() {

  if (CONTROLS.car.up) {
    CAR.y -= 3;
  } else if (CONTROLS.car.down) {
    CAR.y += 3;
  }
  /*else {
    if (CAR.speedY > 0) {
      CAR.speedY -= 1;
    } else if (CAR.speedY < 0) {
      CAR.speedY += 1;
    }
  }*/

  //Accelerate - moves the road not the car
  if (CONTROLS.car.accelerate) {
    if (ART.linespeed < ART.MAX_LINESPEED) {
      ART.linespeed += 0.1;
    }
  } else {
    if (ART.linespeed > 0) {
      ART.linespeed -= 0.006;
    }
    if (ART.linespeed < 0) {
      ART.linespeed = 0;
    }
  }

  if (ART.linespeed > ART.MAX_LINESPEED) {
    ART.linespeed = ART.MAX_LINESPEED;
  }

  //Right, Left, Brake
  if (CONTROLS.car.right) {
    CAR.x += 3;
  } else if (CONTROLS.car.left) {
    CAR.x -= 3;
  } else if (CONTROLS.car.brake) {
    if (ART.linespeed > 0) {
      ART.linespeed -= 0.2;
    }
  }

  if (CAR.y <= 40 || CAR.y >= GAME.canvas.height - 40) {
    ART.linespeed -= .05;
  }


  if (CAR.y + 25 > GAME.canvas.height) {
    CAR.y = GAME.canvas.height - 25;
  } else if (CAR.y - 25 < 0) {
    CAR.y = 25
  }

  if (CAR.x > GAME.canvas.width - 75) {
    CAR.x = GAME.canvas.width - 75;
  } else if (CAR.x < 50) {
    CAR.x = 50;
  }

  CAR.distanceTraveled += ART.linespeed;
}


function renderCar(context) {
  context.drawImage(redCar, CAR.x - 27.5, CAR.y - 22.5, 55, 45);
}

function drawRotatedImage(context, image, x, y, width, height, angle) {
  context.save();
  context.translate(x, y);
  context.rotate(angle);
  context.drawImage(image, -width / 2, -height / 2, width, height);
  context.restore();
  //To make this function work for top left, change translate(x, y) to translate(x+width/2, y+height/2)
  //Then, make the drawImage(image, 0, 0, width, height);
}

function displayDamage(context) {
  context.fillStyle = 'white';
  context.fillText("Damage: " + CAR.Damage + "/" +CAR.hp, 10, GAME.canvas.height - 10);
}

function displayCoins (context){
  context.fillStyle='white';
  context.fillText("Coins: " + CAR.coinIncrease, 450, 30);
}


function setDamage() {
  CAR.MAX_SPEED_X = 0.9 * CAR.MAX_SPEED_X;
  CAR.MAX_SPEED_Y = 1.2 * CAR.MAX_SPEED_Y;
  ART.MAX_LINESPEED = 0.9 * ART.MAX_LINESPEED;
}
