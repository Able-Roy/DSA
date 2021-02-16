function countUniqueValues(arrNumbers){
    // if arry length is 0 return0
    if(arrNumbers.length == 0){
        return 0;
    }
    else if(arrNumbers.length == 1){
        return 1;
    }

    let pointer1 = 0;
    let pointer2 = 1;
    // Loop through arrays
    while(pointer2 < arrNumbers.length){
        if(arrNumbers[pointer1] < arrNumbers[pointer2]){
            pointer1 ++;
            arrNumbers[pointer1] = arrNumbers[pointer2];
        }
        pointer2 ++;
    }
    return ++pointer1;
}


console.log(countUniqueValues([1,1,1, 2, 10]));
