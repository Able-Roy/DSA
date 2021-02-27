
/*
  function to check recursive
*/
function someRecursive(intArray, callBack) {
  console.table(intArray);
  if (intArray.length <= 1) return callBack(intArray[0]);
  return callBack(intArray[0]) || someRecursive(intArray.slice(1, intArray.length), callBack);
}
console.log(someRecursive([1, 3, 5], (val) => val % 2 == 0));
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false