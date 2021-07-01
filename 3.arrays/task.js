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
  result = firstArr.every((item, index) => item === secondArr[index]);
  return result; 
}

function advancedFilter(arr) {
  let resultArr = arr.filter((item) => 
    // positive numbers filter
    item > 0
  ).filter((item) => 
    // even three filter
    item % 3 === 0
  ).map((item) => 
    // multiply by number
    item * 10
  );
  return resultArr;
}
