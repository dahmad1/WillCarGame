function Coin(x,y,type) {
  this.x=x;
  this.y=y;
  this.type=type;
}

function addCoin(x,y,type) {
  GAME.coins.push(new Coin(x,y,type));
}

function animateCoins() {

}

function renderCoins(context){
  
}
