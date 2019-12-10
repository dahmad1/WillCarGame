var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 0,
  obstacles : [],
  time : new Date(),
  transitionLevel : false,
  distanceGoal : 40000,
  obsType : "car"
};

var ART = {
  lines : [],
  linespeed : 0,
  MAX_LINESPEED : 16
};

var CAR = {
  initialized : false,
  latest : {
    x : 0,
    y : 0
  }
};
