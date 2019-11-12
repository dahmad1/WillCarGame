/**
 *  handlecarAnimation moves the car based on its direction and
 *    keyboard control
 *
 */
function handleCarAnimation() {
  if (CONTROLS.car.forward) {
    CAR.y -=  CAR.speed;
  }
  if (CONTROLS.car.backward) {
    CAR.y +=  CAR.speed;
  }
  if (CONTROLS.car.right) {
    CAR.x += 4;
  }
  if (CONTROLS.car.left) {
    CAR.x -= 4;
  }

  // Check if asteroid is leaving the boundary, if so, switch sides
  if (CAR.x > GAME.canvas.width-50) {
    CAR.x = GAME.canvas.width-50;
  } else if (CAR.x < 0) {
    CAR.x = 0;
  }
  if (CAR.y > GAME.canvas.height-50) {
    CAR.y = GAME.canvas.height-50;
  } else if (CAR.y < 0) {
    CAR.y = 0;
  }
}

function renderRoad(context){
  context.fillStyle = "black";
  context.fillRect(0,0, GAME.canvas.width, GAME.canvas.height);
}
function renderRoadLines(context){
  context.lineWidth = 10;
  context.strokeStyle = "yellow";
  context.lineCap = "square";
  context.setLineDash([10,50]);
  context.beginPath();
  context.rect(10, 140, GAME.canvas.width, 0);
  context.stroke();
}


function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handleCarAnimation();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    renderRoad(context);
    renderRoadLines(context);
    renderCar(context);


  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
