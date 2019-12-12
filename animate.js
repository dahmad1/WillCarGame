var introTimer = 75;

var accel = new Audio("./sounds/accel.mp3");
var nitro = new Audio("./sounds/nitro1.mp3");
var honk = new Audio("./sounds/honk.mp3");
var crash = new Audio("./sounds/crash.mp3");
var winTime = 180;

function timeout() {
  setTimeOut(function() {
    accel.play();
    timeout();
  }, 3000);
}

function playIntro(context) {
  CAR.speedX = 0;
  CAR.speedY = 0;
  context.fillStyle = 'grey';
  context.fillRect(0, 0, GAME.canvas.width, GAME.canvas.height);
  context.fillStyle = 'white';
  context.fillText("LEVEL " + (GAME.level + 1), 255, 50);
  context.fillText("WATCH OUT FOR", 180, 110);
  context.drawImage(obsOrangeCar, 180, 140, 90, 80);
  context.drawImage(obsMine, 350, 170, 80, 32);
  context.fillText("CARS", 182, 260);
  context.fillText("MINES", 345, 260);
  introTimer--;
  if (introTimer == 0) {
    GAME.level++;
    startTime = new Date();
    GAME.transitionLevel = false;
    CAR.x = 100;
    CAR.y = 100;
    CAR.distanceTraveled = 0;
    CAR.Damage = 0;
    CAR.speed = 0;
    ART.linespeed = 0;
    GAME.obstacles = [];
    winTime = 180;

  }
}

var startTime = new Date();
var timer = "",
  tempTime = new Date();

function displayTimer(context) {
  tempTime = new Date();
  timer = Math.floor((tempTime - startTime) / 100) / 10;
  context.fillStyle = 'white';
  if (timer % 1 != 0) {
    context.fillText(Math.floor(10 * (60 - timer)) / 10, 10, 30);
  } else {
    context.fillText(60 - timer + ".0", 10, 30);
  }
}

function displayProgress(context) {
  context.fillStyle = 'white';
  context.fillRect(GAME.canvas.width / 2 - 100, 10, 200 * (CAR.distanceTraveled / GAME.distanceGoal), 20);
  context.strokeStyle = 'black';
  context.strokeRect(GAME.canvas.width / 2 - 100, 10, 200, 20);

}

var mineTimer = 100;

function setLevelSections(context) {

  if (CAR.distanceTraveled > GAME.distanceGoal / 2) {
    GAME.obsType = "mine";
    if (mineTimer > 0) {
      context.fillStyle = 'black';
      context.fillText("WARNING: MINES", 190, 130);
      mineTimer--;
      if (GAME.obstacles.length > 0) {
        GAME.obstacles.pop();
      }
    }
  } else {
    GAME.obsType = "car";
  }


}


function checkLevelConditions(context) {
  if (CAR.distanceTraveled > GAME.distanceGoal) {
    if (winTime > 0) {
      winTime--;
      context.fillText("You win!", 240, 130);
    } else {
      winTime = 120;
      introTimer = 180;
      GAME.transitionLevel = true;
      return;
    }
  }
  if (CAR.Damage >= 50) {
    GAME.started = false;
    return;
  }
  if (timer >= 60) {
    GAME.started = false;
    return;
  }
}

var levelEndTimer = 100;

function runLevelEnd(context) {
  if (CAR.Damage < 50 && CAR.distanceTraveled >= GAME.distanceGoal) {
    context.fillStyle = 'white';
    context.font = "30px Arial";
    context.fillText("You Win!", 155, 200);
  } else if (CAR.distanceTraveled < GAME.distanceGoal && CAR.Damage < 50) {
    context.fillStyle = 'white';
    context.font = "30px Arial";
    context.fillText("Out of time...", 170, 130);
  } else {
    context.fillStyle = 'white';
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 155, 200);
  }
}


function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.font = "30px Arial";
  if (GAME.started) {
    if (GAME.transitionLevel) {
      playIntro(context);
    } else if (GAME.level == 0) {
      playIntro(context);
    } else if (GAME.level >= 1) {
      GAME.time = new Date() - startTime;
      // 1 - Reposition the objects
      handleCarAnimation();
      animateRoadLines();
      animateObstacles();
      animateCoins();
      checkObstacleCollision();
      checkCoinCollision();

      // 2 - Clear the CANVAS
      if (winTime == 180) {
        context.clearRect(0, 0, 600, 300);


      // 3 - Draw new items
      renderRoad(context);
      renderRoadLines(context);
      renderObstacles(context);
      renderCar(context);
      renderCoins(context);
      accel.play();


      displayCoins (context);
      displayTimer(context);
      displayDamage(context);
      setLevelSections(context);
      displayProgress(context);


        displayTimer(context);
        displayDamage(context);
        setLevelSections(context);
        displayProgress(context);
      }

      checkLevelConditions(context);
    }

  } else {
    runLevelEnd(context);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);