function selectionSort(intArray) {
  let length = intArray.length;
  let temp = 0;
    for (let i = 0; i < length; i++) {
      let min = intArray[i];
    for (var j = i + 1; j < length; j++) {
      console.log(intArray, intArray[j], min);

      if (min > intArray[j]) {
        temp = j;
        min = intArray[j];
      }
    }
    intArray[temp] = intArray[i];
    intArray[i] = min;
    console.log("1 pass completed", intArray);
  }
  return intArray;
}
console.log(selectionSort([1, 3, 2, 6, 5]));
