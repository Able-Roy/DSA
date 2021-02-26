/*
    function to find the power of a number through recurtion
*/
function power(num, frequency) {
    //sanitising input
    if (frequency <= 0) return 1;
    // Base condition
    if (frequency === 1) {
        return num;
    }
    return num * power(num, frequency - 1);
}

// console.log(power(2, 0));
// console.log(power(2, 2));
console.log(power(2, 4));