const chainMaker = {
  val: "",
  getLength() {
    if (this.val == "") {
      return 0;
    } else {
      let arr = this.val.split("~~")
      return arr.length;
    }
  },
  addLink(value) {
    if (this.val == "") {
      this.val = `( ${value} )`;
    } else {
      let arr = this.val.split("~~");
      arr.push(`( ${value} )`);
      this.val = arr.join("~~");
    }
    return this;
  },
  removeLink(position) {
    if (position > 0 && position < this.val.length && Number.isInteger(position)) {
    if (this.val != "") {
      let arr = this.val.split("~~");
      arr.splice(position - 1, 1);
      this.val = arr.join("~~");
    }}
    return this;
  },
  reverseChain() {
    let arr = this.val.split("~~");
    arr = arr.reverse();
    this.val = arr.join("~~");
    return this;
  },
  finishChain() {
    return this.val;
  }
};

module.exports = chainMaker;
