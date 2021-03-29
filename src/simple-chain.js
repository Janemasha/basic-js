const chainMaker = {
  getLength() {
    if (this.val == "") {
      return 0;
    } else {
      let arr = this.val.split("~~")
      return arr.length;
    }
  },
  addLink(value) {
    value = String(value);
    if (this.val == null) {
      this.val = `( ${value} )`;
    } else {
      let arr = this.val.split("~~");
      arr.push(`( ${value} )`);
      this.val = arr.join("~~");
    }
    return this;
  },
  removeLink(position) {
    if (this.val != null) {
    let arr = this.val.split("~~");
    if (position > 0 && position < arr.length && isFinite(position)) {
    if (this.val != "") {
      arr.splice(position - 1, 1);
      this.val = arr.join("~~");
    }} else {
      this.val = null;
    }
    return this;
  }},
  reverseChain() {
    if (this.val != null && this.val != undefined) {
    let arr = this.val.split("~~");
    arr = arr.reverse();
    this.val = arr.join("~~");
    return this;
  }
  },
  finishChain() {
    let srt = this.val;
    this.val = null;
    return srt;
  }
};

module.exports = chainMaker;
