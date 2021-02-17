/*
    Function to find largest sum of n consecutive numbers
*/
function maxSubArray(arrNumbers, number){

    // Return null for edge case
    if(arrNumbers.length < number || arrNumbers.length ===0 || number === 0){
        return null;
    }
    let sum = 0;
    // loop through arrays to find the sum of n numbers
    for(let i=0; i < number; i++){
        // Compute the sum
        sum += arrNumbers[i];
        console.log(sum);

    }
    console.log(sum);
    // Copy sum to temp sum
    let tempSum = sum;

    // loop through array using sliding window pattern
    for(let i=number; i < arrNumbers.length; i++){
        // subtract from begening and add to the last
        tempSum = tempSum - arrNumbers[i - number] + arrNumbers[i];
        sum = Math.max(tempSum, sum);
    }
    return sum;
}

console.log(maxSubArray([1,2,1,3,1,4], 3));