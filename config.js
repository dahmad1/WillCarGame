var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 0,
  obstacles : [],
  coins : [],
  time : new Date(),
  transitionLevel : false,
  distanceGoal : 20000,
  obsType : "car",
  coinType : "goldCoin"
};

var ART = {
  lines : [],
  linespeed : 0,
  MAX_LINESPEED : 300
}

var CAR = {
  initialized : false,
  latest : {
    x : 0,
    y : 0
  }
};
