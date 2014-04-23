var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function () {
  if (this.honeyPot === 0) {
    return "I ain't got no mo honey to give"
  } else {
    this.honeyPot--;
  }
}
