function InitializeCar(){
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  CAR = {
    x : 300,
    y : 300,
    latest : {
        x : CAR.x,
        y : CAR.y,
    },
    scale : 8,
    speed : 3,

  }

  function RenderCar(context) {
  if (!CAR.initialized) {
    return;
  }
  context.moveTo(CAR.x,CAR.y);
  CAR.latest.x = CAR.x;
  CAR.latest.y = CAR.y;
  context.beginPath();
  context.fillRect(CAR.x, CAR.y, 50, 50);
  context.stroke();

}
}
