module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor( (3600 * turns) / turnsSpeed);
  let obj = {
    "turns": turns,
    "seconds": seconds,
  }
  return obj
};
