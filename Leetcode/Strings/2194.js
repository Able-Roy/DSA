    /**
     * @param {string} s
     * @return {string[]}
     */
    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }
    var cellsInRange = function(s) {
        let seperatedString = s.split(':');
        let first = seperatedString[0];
        let second = seperatedString[1];
        let n = Math.max(parseInt((first.split(''))[1]), parseInt((second.split(''))[1]));
        console.log('n', n)
        let excelArray = [];
        let letter = first[0];
        do{
            for(i=first[1]; i<= n ; i++){
                excelArray.push(`${letter}${i}`)
            }
            letter = nextChar(letter);
        }while(letter != nextChar((second.split(''))[0]))
        return excelArray
    };

    // console.log(cellsInRange("K1:L2"))
    console.log(cellsInRange("A1:F1"))