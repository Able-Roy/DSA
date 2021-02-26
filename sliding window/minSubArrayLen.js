/*
    function to find the minimum subarray length
*/
function minSubArrayLen(intArrNum, sum) {
    //Sanitizing params
    if (sum <= 0 || intArrNum.length <= 0) return 0;

    // Defining window parameter and sum
    let intWindowStart = 0;
    let intWindowEnd = 0;
    let intWindowSum = 0;
    let length = Infinity;

    // Loop Through intArrNum and find the min window size
    while (intWindowStart < intArrNum.length) {
        // if window sum < sum increment end
        if (intWindowSum < sum && intWindowEnd < intArrNum.length) {
            console.log('d1');
            intWindowSum += intArrNum[intWindowEnd];
            console.log("intWindowSum = " + intWindowSum);
            console.log("intWindowStart = " + intWindowStart);
            console.log("intWindowEnd = " + intWindowEnd);
            intWindowEnd ++;
        } 
        // window sum is computed, then we need to find out the minimum window
        else if (intWindowSum >= sum) {
            console.log("d2");
            intWindowSum -= intArrNum[intWindowStart];
            length = Math.min(length, intWindowEnd - intWindowStart);
            console.log('length in loop' + length);
            console.log("intWindowSum = " + intWindowSum);
            console.log("intWindowStart = " + intWindowStart);
            console.log("intWindowEnd = " + intWindowEnd);
            intWindowStart++;
        }
        else{
            break;
        }
    }
    console.log('length = ' + length);
    return length === Infinity ? 0 : length;
}
// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));