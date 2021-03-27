module.exports = function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!'
  } else {
    if (typeof(date.getTime()) != "number") {
    return 'THROWN';
  }
    if (date instanceof Date) {
    Date.prototype.isValid = function () {
      return this.getTime() === this.getTime();
      };  
        if (date.isValid()) {
    if (date.getMonth() == 0) {
    return 'winter';
    }
    if (date.getMonth() == 1) {
    return 'winter';
    }
    if (date.getMonth() == 2) {
    return 'spring';
    }
    if (date.getMonth() == 3) {
    return 'spring';
    }
    if (date.getMonth() == 4) {
    return 'spring';
    }
    if (date.getMonth() == 5) {
    return 'summer';
    }
    if (date.getMonth() == 6) {
    return 'summer';
    }
    if (date.getMonth() == 7) {
    return 'summer';
    }
    if (date.getMonth() == 8) {
    return 'autumn';
    }
    if (date.getMonth() == 9) {
    return 'autumn';
    }
    if (date.getMonth() == 10) {
    return 'autumn';
    }
    if (date.getMonth() == 11) {
    return 'winter';
   }
  } else {
          return 'THROWN'
        }
} 
}
}
