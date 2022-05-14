/**
 * @param {string[]} operations
 * @return {number}
*/ 
var finalValueAfterOperations = function(operations) {
    let x = 0;
    const opertaionHandler = (op) => {
        console.log('Start', x)
        switch(op){
            case '++X':
            case 'X++':
                x+=1;
                break;
            case '--X':
            case 'X--':
                x-=1;
            break;
            default:
                break;
            
        }
        console.log('before exit', x)
    };
    operations.forEach(opertaionHandler);
    return x;
};

//const finalValueAfterOperations = (operations) => operations.reduce((acc, curr) => curr[1] === "+" ? ++acc : --acc, 0)
//https://leetcode.com/problems/final-value-of-variable-after-performing-operations/discuss/1520355/Javascript-One-line-Solution-Time%3A81-or-Mem%3A92-w-documentation