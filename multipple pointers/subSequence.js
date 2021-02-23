/*
    function to check subsequence
*/
function isSubsequence(str1, str2) {
    //Defining pointers and counters
    let start = 0;
    let end = str2.length - 1;
    let intIndexOfStr1 = 0;
    // Loop through each elements of str2
    while (start < end) {
        // Matching each char of str1 and str2
        if (str2[start] == str1[intIndexOfStr1]) {
            intIndexOfStr1++;
        }
        // Move start pointer
        else {
            start++;  
        }
        // If length and count are same return true
        if (str1.length - 1 == intIndexOfStr1) {
          return true;
        }
    }
    // if none of it match return false
    return false;
}
