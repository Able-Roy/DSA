/*
    function to validate 2 string is angram
*/
function validAnagram(string1, string2){

    // Validate if 2 strings have the same length
    if(string1.length != string2.length){
        return false;
    }
    // Do something
    let objLookup= {};

    // Loop through string1 and store the freaquency of entries
    for (const char of string1) {
        objLookup[char] = (objLookup[char] || 0) + 1;
    }

    // Loop through string1 and store the freaquency of entries
    for (const char of string2) {
        if(!objLookup[char]){
            return false;
        }
        else{
            objLookup[char]--;
        }
    }
    return true;
}

if(validAnagram('anaram', 'nagaram')){
    console.log('anagram');
}
else{
    console.log('not anagram');
}