
/*
    function to capitalise the first letter of the word
*/
function capitalizeFirst(strArray, tempArray = []) {
  console.log("strArray = " + strArray + " tempArray = " + tempArray);
    if (strArray.length === 0) {
        return tempArray;
    }
     tempArray.push(strArray[0].charAt(0).toUpperCase() + strArray[0].slice(1));
    return capitalizeFirst(strArray.slice(1), tempArray);
}
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
// console.log(capitalizeFirst(["car", "taco", "banana"]));
console.log(capitalizeFirst(["car", "taco", "banana", "test"]));