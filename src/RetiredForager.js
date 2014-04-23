var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.color = 'grey';
  this.job = 'gamble';
  this.canFly = false;

};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forrage = function () {
  return "I am too old, let me play cards instead";
};

RetiredForagerBee.prototype.gamble = function (treasure) {
  this.treasureChest.push(treasure);
};



