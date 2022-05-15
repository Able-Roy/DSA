/**
 * @param {string[]} sentences
 * @return {number}
**/
var mostWordsFound = function(sentences) {
    let largest = sentences[0].split(' ').length;
    sentences.forEach((item) => {
        let length = item.split(' ').length;
        if(length > largest) largest = length
    } )
    return largest;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))