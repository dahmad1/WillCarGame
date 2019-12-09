/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  car : {
    up : false,
    down : false,
    right : false,
    left : false,
    brake: false,
    accelerate: false
  },
  fire : {
    active : false,
    lastFireTime : 0
  }

};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "a":
      CONTROLS.car.accelerate = true;
      break;
    case "ArrowUp":
      CONTROLS.car.up = true;
      break;
    case "ArrowDown":
      CONTROLS.car.down = true;
      break;
    case "ArrowLeft":
      CONTROLS.car.left = true;
      break;
    case "ArrowRight":
      CONTROLS.car.right = true;
      break;
    case "z":
      CONTROLS.fire.active = true;
      break;
    case " ":
      CONTROLS.car.brake = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "a":
      CONTROLS.car.accelerate = false;
      break;
    case "ArrowUp":
      CONTROLS.car.up = false;
      break;
    case "ArrowDown":
      CONTROLS.car.down = false;
      break;
    case "ArrowLeft":
      CONTROLS.car.left = false;
      break;
    case "ArrowRight":
      CONTROLS.car.right = false;
      break;
    case "z":
      CONTROLS.fire.active = false;
      break;
    case " ":
      CONTROLS.car.brake = false;
      break;
    default:
      break;
  }
});
