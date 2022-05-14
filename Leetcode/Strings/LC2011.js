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
console.log(finalValueAfterOperations(["--X","X++","X++"]))
console.log(finalValueAfterOperations(["++X","++X","X++"]))