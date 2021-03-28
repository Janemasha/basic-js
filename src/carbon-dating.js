const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;
module.exports = function dateSample(sampleActivity) {
  if (isFinite(sampleActivity) && Number(sampleActivity) > 0 && Number(sampleActivity) <= MODERN_ACTIVITY && sampleActivity.length != 0 && typeof(sampleActivity) == 'string') {
    let n = Math.log(MODERN_ACTIVITY / Number(sampleActivity));
    let k = 0.693 / 5730;
    let time = Math.ceil(n / k);
    return time;
  } else {
    return false;
  }
};
