module.exports = function transform(arr) {
  let newArr = [];
  if (arr.length < 2) {
    return newArr;
  } else {
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] == '--discard-next' && i < arr.length - 1 && arr[i+2] !='--discard-prev') {
      i ++;
    }
    else if (arr[i] == '--discard-prev' && newArr.length > 0) {
        newArr.pop();
    }
    else if (arr[i] == '--double-prev' && newArr.length > 0 && arr[i-2] !='--discard-next') {
      newArr.push(newArr[newArr.length - 1])
    }
    else if (arr[i] == '--double-next' && i < arr.length - 1) {
        newArr.push(arr[i+1])
      } else {
      if (arr[i] != '--discard-prev' && arr[i] != '--double-next' && arr[i] != '--double-prev' && arr[i] != '--discard-next') {
        newArr.push(arr[i]);
      }
    }
  }
}
  return newArr;
};
