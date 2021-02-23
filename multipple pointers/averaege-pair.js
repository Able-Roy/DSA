function averagePair(arrNumbers, avg) {
  // set 2 pointers
    let start = 0;
    let end = arrNumbers.length - 1;

    let sum = 0;
    let computedAvg = 0;
    let counter = 0;
    // Loop through arrNumbers
    while (start < end) {
        // computed average
        computedAvg = ((arrNumbers[start] + arrNumbers[end]) / 2);
        if (computedAvg == avg) {
            return true;
        }
        else if (computedAvg > avg) {
            end--;
        }
        else {
            start++;
        }
    }
    return false;
}
