// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
/*
    function to find the product of array
*/
function productOfArray(intArray) {
    // base condition
    if (intArray.length == 1) return intArray[0];

    return intArray[0] * productOfArray(intArray.slice(1));
}

console.log(productOfArray([1, 2, 3, 10]));