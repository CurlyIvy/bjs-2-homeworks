function compareArrays(firstArr, secondArr) {
  let result = false;
  // validate args
  if(!Array.isArray(firstArr) || !Array.isArray(secondArr)) {
    return result;
  }
  if(firstArr.length !== secondArr.length) {
    return result;
  }
  // compare arrays
  result = firstArr.every((item, index) => { 
    if(index >= secondArr.length) {
      return false;
    }
    let result = false;
    if(item === secondArr[index]) {
      result = true;
    }
    return result;
  });
  return result; 
}

function advancedFilter(arr) {
  let resultArr = arr.filter((item) => {
    // positive numbers filter
    return item > 0;
  }).filter((item) => {
    // even three filter
    return item % 3 === 0;
  }).map((item) => {
    // multiply by number
    return item * 10;
  });
  return resultArr;
}
