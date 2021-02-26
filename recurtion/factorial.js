//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
/*
    function to find factorial
*/
function factorial(fact) {
    // sanitising input
    if (fact <= 0) return 0;
    // base condition 
    if (fact == 1) return 1
    
    return fact * factorial(fact - 1);
}

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(4));
// console.log(factorial(7));