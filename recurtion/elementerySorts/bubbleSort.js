function bubbleSort(intArray) {
    let length = intArray.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
                  console.log(intArray, intArray[j], intArray[j + 1]);

        if (intArray[j] > intArray[j + 1]) {
          temp = intArray[j];
          intArray[j] = intArray[j + 1];
          intArray[j + 1] = temp;
        }
        }
        length --;
        console.log('1 pass completed');
    }
    return intArray;
}
console.log(bubbleSort([1, 3, 2, 6, 5]));