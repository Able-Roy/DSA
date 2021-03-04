function stringifyNumbers(obj) {
    let newObj = {};
  // add whatever parameters you deem necessary - good luck!
  // itrate through obj
  for (let key in obj) {
    console.log("key =  ", key);
    if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
      console.log("********itration************");
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] == "number") {
      newObj[key] = obj[key].toString();
      }
    else {
        newObj[key] = obj[key];
      }
  }
  return newObj;
}
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
console.log(stringifyNumbers(obj));
