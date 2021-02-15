/*
    function to validate 2 string is angram
*/
function validAnagram(string1, string2){

    // Validate if 2 strings have the same length
    if(string1.length != string2.length){
        return false;
    }
    // Do something
    let objFreaquencyOfString1 = {};
    let objFreaquencyOfString2 = {};

    // Loop through string1 and store the freaquency of entries
    for (const char of string1) {
        objFreaquencyOfString1[char] = (objFreaquencyOfString1[char] || 0) + 1;
    }

    // Loop through string1 and store the freaquency of entries
    for (const char of string2) {
        objFreaquencyOfString2[char] = (objFreaquencyOfString2[char] || 0) + 1;
    }

    // Loop through string2
    for (const char of string2) {
        if(objFreaquencyOfString2[char] != objFreaquencyOfString1[char]){
            return false;
        }        
    }
    return true;
}

if(validAnagram('anagram', 'nagaram')){
    console.log('anagram');
}
else{
    console.log('not anagram');
}