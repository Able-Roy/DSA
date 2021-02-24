/*
    function to find the max sub array 
*/
function maxSubarraySum(intArray, len) {
  // If length of array is less than the passed number return null
  if (intArray.length < len) return null;
  let sum = 0;
  // Computing the window sum
  for (let i = 0; i < len; i++) {
    sum += intArray[i];
  }
  //set window start
  let intWindowStart = len;
  let windowSum = sum;
  // Iterate through int array
  while (intWindowStart < intArray.length) {
    windowSum += intArray[intWindowStart] - intArray[intWindowStart - len];
    sum = Math.max(sum, windowSum);
    intWindowStart++;
  }
  return sum;
}
