var coin = new Image(); coin.src="Images/spr_coin.jpg";

function Coin(x,y,type) {
  this.x=x;
  this.y=y;
  this.type=type;
}

function Coin(type) {
  if(type=="goldCoin") {
    this.x=GAME.canvas.width;
    this.y=(Math.floor(Math.random()*2))*100+100;
    this.type=type;
  }
}
function addCoin(x,y,type) {
  GAME.coins.push(new Coin(x,y,type));
}

var coinTimer=100;

function animateCoins() {
  if(coinTimer>0&&GAME.coins.length<2) {
    coinTimer--;
  }
  else if(coinTimer==0) {
    // if(GAME.coinType=="goldCoin"){
      coinTimer=100+Math.floor(Math.random()*150);
    // }
    addCoin(GAME.coinType);
  }

  for(var i = 0; i < GAME.coins.length; i++) {
    if(GAME.coins[i].type=="goldCoin") {
      GAME.coins[i].x -= ART.linespeed/2;
    }
    if(Math.abs(CAR.x-GAME.coins[i].x)>(1.5*GAME.canvas.width)) {
      GAME.coins.splice(i,1);
    }
  }
}

// Coin position needs to stay with the linespeed and
// var num = 30
// function coinBounce (){
//   if (checkCoinCollision == true){
//     while (Coin.x < num){
//
//     }
//   }
// }



function renderCoins(context){
    context.fillStyle='green';
    for(var i = 0; i < GAME.coins.length; i++) {
      context.fillStyle='blue';
      if(GAME.coins[i].type=="goldCoin"){
        context.drawImage(coin, GAME.coins[i].x-22.5,GAME.coins[i].y-20,45,40);
    }
  }
}

function checkCoinCollision() {
    for(var i = 0; i < GAME.coins.length; i++) {
      if(GAME.coins[i].type=="goldCoin") {
        if(GAME.coins[i].x-22.5<CAR.x+27.5
          &&GAME.coins[i].x+22.5>CAR.x-27.5
          &&GAME.coins[i].y-20<CAR.y+22.5
          &&GAME.coins[i].y+20>CAR.y-22.5) {
            CAR.coinIncrease += 1;
            GAME.coins.splice(i,1);
            i--;
          }
        }
      }
    }
