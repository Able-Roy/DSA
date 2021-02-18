/*
    function to find the average pair
*/
function averagePair(arrNumbers, average) {
    // Validate input params
    if (arrNumbers.length < 1 && average != 0) {
      return false;
    }
  
    // If only 1 number and that num is == average passed
    if (arrNumbers.length == 1 && average === arrNumbers[0]) {
      return true;
    }
  
    // Define 2 pointers current and next
    let current = 0;
    let sum = 0;
    let computedAvg = 0;
  
    // Loop through array using multipple pointers
    for (let next = 1; next < arrNumbers.length; next++) {
      sum += arrNumbers[next];
      console.log("sum = " + sum);
      computedAvg = sum / (next + 1);
      console.log("computed average" + computedAvg);
      if (computedAvg == average) {
        return true;
      }
      if (computedAvg > average || next == arrNumbers.length) {
        sum = computedAvg = 0;
        current++;
        next = current + 1;
      }
    }
    return false;
  }
  
  console.log(averagePair([1, 2, 3], 2.5));
  