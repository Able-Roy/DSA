function capitalizedWords(arrString) {
    console.log('arrString', arrString)
    // let newArray = [];
  // add whatever parameters you deem necessary - good luck!
    if (arrString.length === 1) return [arrString[0].toUpperCase()];
    let newArray = capitalizedWords(arrString.slice(0, arrString.length - 1));
    newArray.push(arrString[arrString.length - 1].toUpperCase());
    console.log(newArray);
    return newArray;

}
// console.log(capitalizedWords(['test']));
console.log(capitalizedWords(["i", "am", "learning", "recursion"]));
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
