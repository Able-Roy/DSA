function binarySearch(arr, val) {
  // sanitisation input
    if (arr.length === 1 && arr[0] === val) return 0;
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.round((left + right) / 2); 
  while (left <= right) {
    console.log('left = ', left, 'right = ', right, 'mid = ', mid);
        if (arr[mid] === val) {
          return mid;  
        } 
        else if(arr[mid] < val){
            left = mid + 1;
            mid = Math.round((left + right) / 2); 
        }
        else {
            right = mid - 1;
            mid = Math.round((left + right) / 2); 
    }
      console.log("left = ", left, "right = ", right, "mid = ", mid);
        
    }
    if (arr[mid] === val) {
      return mid;
    } 
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 1));
