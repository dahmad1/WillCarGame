/**
 *  handleShipAnimation moves the ship based on its direction and
 *    keyboard control
 *
 */
function handleShipAnimation() {
  if (CONTROLS.ship.forward) {
    var radians = (Math.PI / 180) * CAR.rotation,
        cos = Math.cos(radians),
        sin = Math.sin(radians);
    CAR.x += CAR.speed * sin;
    CAR.y +=  CAR.speed * cos;
  }
  if (CONTROLS.ship.backward) {
    var radians = (Math.PI / 180) * CAR.rotation,
        cos = Math.cos(radians),
        sin = Math.sin(radians);
    CAR.x -= CAR.speed * sin;
    CAR.y -=  CAR.speed * cos;
  }
  if (CONTROLS.ship.rotateClockwise) {
    CAR.rotation -= 4;
  }
  if (CONTROLS.ship.rotateCounterClockwise) {
    CAR.rotation += 4;
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

function RenderNewObject(context) {
  context.fillRect(NEW_OBJECT.x, NEW_OBJECT.y,50, 50);
}

function HandleNewObjectMovement() {
  NEW_OBJECT.x += 1;
  NEW_OBJECT.y += 0;
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handleShipAnimation();
    HandleNewObjectMovement();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    RenderCar(context);
    RenderNewObject(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
