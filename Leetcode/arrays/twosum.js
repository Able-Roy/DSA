//1. Two Sum
//https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    // Add 1st element to windowsum
    let memo = new Map();

    // loop through array and store it in hash map.
    for(var i=0; i < nums.length; i++){
        
        // If value found in hash table
        if(memo.has(target - nums[i])){
           
           console.log(memo.get(target - nums[i]));
           
            // return the indexes
            return [memo.get(target - nums[i]), i];
        }
        
        // Add the array element   
        memo.set(nums[i], i);
    }
};