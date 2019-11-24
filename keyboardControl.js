/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  car : {
    forward : false,
    back : false,
    right : false,
    left : false,
    brake: false,
    nitro : false
  },
  fire : {
    active : false,
    lastFireTime : 0
  }

};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.car.forward = true;
      break;
    case "ArrowDown":
      CONTROLS.car.backward = true;
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
    case "ArrowUp":
      CONTROLS.car.forward = false;
      break;
    case "ArrowDown":
      CONTROLS.car.backward = false;
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
