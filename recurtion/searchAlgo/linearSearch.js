function linearSearch(intArray, num){
  // add whatever parameters you deem necessary - good luck!
  for(let i=0; i< intArray.length; i++){
      if(num === intArray[i])return i;
  }
  return -1
}