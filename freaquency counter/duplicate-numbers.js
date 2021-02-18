/*
    function to check is there duplicate number
*/
function areThereDuplicates(...args) {
    // Lookup object
    let lookup = {};

    // Loop through args
    for (const iterator of args) {
        // mark the freaquency of args
        lookup[iterator] = (lookup[iterator] || 0 ) + 1;
        if(lookup[iterator] > 1){
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates('a', 'b' , 'c', 'd'));