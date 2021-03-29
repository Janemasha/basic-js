module.exports = class DepthCalculator {
  constructor(arr) {
    this.arr = arr;
  }
  calculateDepth(arr = this.arr) {
    let depth = 1;
    let m = 0;
    for (let e of arr) {
        if (Array.isArray(e)) {
          m = Math.max(this.calculateDepth(e), m );
        }
    }
    return depth + m;
  }
};