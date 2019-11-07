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
  if (CAR.x > GAME.canvas.width) {
    CAR.x = 0;
  } else if (CAR.x < 0) {
    CAR.x = 600;
  } else if (CAR.y > GAME.canvas.height) {
    CAR.y = 0;
  } else if (CAR.y < 0) {
    CAR.y = 300;
  }
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
    renderCar(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
