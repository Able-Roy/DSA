function collectStrings(obj, tempArray = []) {
  // add whatever parameters you deem necessary - good luck!
  // itrate through obj
  for (let key in obj) {
    console.log("key =  ", key);
    if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
      console.log("********itration************");
      tempArray = collectStrings(obj[key], tempArray);
    } else if (typeof obj[key] == "string") {
        tempArray.push(obj[key]);
    } 
  }
  return tempArray;
}
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
