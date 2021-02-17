/*
    function to check freaquency of digits is same or not
*/
function sameFrequency(num1, num2){
    
    if(!(countDigits(num1) == countDigits(num2))){
        return false;
    }
    // Object to store freaquency
    let objLookup = {};
    
    // Split the number into individual digits and store the frequency in lookup
    while(num1 > 0){
        console.log('num1' + num1);
        let digit = Math.floor((num1 % 10));
        console.log('num1 digits ' + digit);
        objLookup[digit] = (objLookup[digit] || 0) + 1;
        console.table(objLookup);
        num1 = Math.floor((num1 / 10));
    }

    console.table(objLookup);

    // Split the number into individual digits and store the frequency in lookup
    while(num2 > 0){
        let digit = Math.floor(num2 % 10);

        console.log('num2 digits ' + digit);
        num2 = Math.floor(num2 / 10);
        if(!objLookup[digit]){
            return false;
        }
        else{
            objLookup[digit] --;
        }
    }
    return true;
  }

/*
    function to count digits in a number
*/
 function countDigits(n){
    let count = 0;
    if(n >= 1) count ++;
    while(n = Math.round((n / 10)) > 0){
        count ++;
    }
    return count;
 }
  
  console.log(sameFrequency(182, 281));