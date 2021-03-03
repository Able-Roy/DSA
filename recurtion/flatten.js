/*
    function to flatten arrays
*/
function flatten(intArray) {
    let newArr = [];
    for (let i = 0; i < intArray.length; i++){
        if (Array.isArray(intArray[i])) {
            newArr = newArr.concat(flatten(intArray[i]));
        }
        else {
            newArr.push(intArray[i]);
        }
    }
    return newArr;
}
console.log(flatten([1, 2, 3, [4, 5]]));
// console.log();
// console.log();
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
