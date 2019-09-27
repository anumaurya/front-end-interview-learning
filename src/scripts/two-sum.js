/**
 * get pairs that sum up to a value
 * @param {*} arr 
 * @param {*} sumVal 
 */

function getPairs(arr, sumVal) {
    let diffObj = {};
    let returnArr = [];
    arr.forEach((value, index) => {

        let diff = sumVal - value;

        if (diffObj[diff.toString()] !== undefined) {
            console.log('found a pair!');
            returnArr.push([value, diff]);
        } else {
            diffObj[value.toString()] = true;
        }

    });
    return returnArr;
}

console.log('getPairs', getPairs([4, 1, 3, 9, 6], 10));

/**
 * Two sum
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1]
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let diffObj = {};
    let returnArr = [];

    for (let index = 0; index < nums.length; index++){
        const value = nums[index];
        let diff = target - value;
        const diffObjIndex = diffObj[diff.toString()];
        if (diffObjIndex !== undefined) {
            console.log('found two sum!');
            returnArr.push(diffObjIndex, index);
            return returnArr;

        } else {
            diffObj[value.toString()] = index;
        }

    }
    return returnArr;
};

console.log('twoSum 9', twoSum([2, 7, 11, 15], 9));
console.log('twoSum 8', twoSum([4, 2, 6, 15], 8));