function nestedEvenSum(obj, sum = 0) {
    console.log('sum = ', sum);
  // add whatever parameters you deem necessary - good luck!
  // itrate through obj
    for (key in obj) {
        console.log('key =  ', key);
        if (typeof obj[key] == 'object') {
            console.log('********itration************');
          sum = nestedEvenSum(obj[key], sum);
        } else if (typeof obj[key] == 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
            console.log('computed sum', sum);
        }
    }
    return sum;
}
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

// console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10