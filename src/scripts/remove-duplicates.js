/**
 * Remove Duplicates from Sorted Array
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * Example 1:
 * Given nums = [1,1,2],
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
 * It doesn't matter what you leave beyond the returned length.
 */


 /**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let numberObj = {};

    for (let i = nums.length-1; i>=0; i--){
        const value = nums[i];
        if (numberObj[value] === undefined){
            numberObj[value] = i;
        } else {
            // it is dupl, slice it
            nums.splice(i, 1);
        }
    }
    console.log(nums);
    return nums.length;
    
};

console.log('removeDuplicates', removeDuplicates([0,0,1,1,1,2,2,3,3,4]))