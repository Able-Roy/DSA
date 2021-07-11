/* 35. Search Insert Position.
    Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
    You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    // Edge case no input array
    if(nums.length < 1 || target === undefined) return false;
    
    // if the target element is less than the 0th index element
    if(target  < nums[0]){
        return 0;
    }
    // if the target element is larger than the last index element
    else if(target > nums[nums.length - 1]){
        return nums.length;
    }

    // Declaring the left,mid,right variables and initialise the values
    let left = 0;
    let mid = Math.floor(nums.length / 2);
    let right = nums.length - 1;

    // if element found in mid return the value
    if(nums[mid] == target)return mid;

    // binary search loop
    while(left != right){

        // Compute the mid
        mid = Math.floor(( left + right ) / 2);
        // If item found in the index   
        if(nums[mid] == target)
        {
            return mid;
        }
        // Search in the left portion of the computed middle
        else if(target < nums[mid]){
            right = mid;
        }

        // Search in the right  portion of the computed mid
        else if(target > nums[mid]){
            left = mid + 1;
        }
    }
    return left;
};
console.log(searchInsert([1,3,5,6], 5));
// console.log(searchInsert([1,3,5,6], 2));
// console.log(searchInsert([1,3], 2));