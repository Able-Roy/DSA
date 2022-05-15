/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let lookup = {};
    let stoneCount = 0;
    for(const element of stones) {
        lookup[element] = lookup[element] ? lookup[element] += 1: 1;
    }
    for(const element of jewels) {
        if(lookup[element]) stoneCount += lookup[element]
    }
    return stoneCount;
};

console.log(numJewelsInStones(jewels = "aA", stones = "aAAbbbb"))
console.log(numJewelsInStones(jewels = "z", stones = "ZZ"))