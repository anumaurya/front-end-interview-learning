/**
 * Frequency Counter Pattern
 * 
 * Problem: 
 * Write a function called same that takes 2 arraus
 * return true when every value in the first array has a corresponding squared in the secound
 * Frequency must be the same
 * 
 * same([1, 2, 3], [4, 1, 9]) // true
 * same([1, 2, 3], [1, 9]) // false
 * same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)
 * 
 */

function same(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }

    // let frequencyCounter1 = {};
    // arr1.forEach((a) => {
    //     let freqVal = frequencyCounter1[a];
    //     frequencyCounter1[a] = freqVal ? freqVal + 1 : 1;
    // });


    let frequencyCounter2 = {};
    arr2.forEach((a) => {
        let freqVal = frequencyCounter2[a];
        frequencyCounter2[a] = freqVal ? freqVal + 1 : 1;
    });

    // console.log(frequencyCounter1, frequencyCounter2);

    // for (let key in frequencyCounter1){
    //     let squared = (key * key);

    //     if (frequencyCounter1[key] !== frequencyCounter2[squared]){
    //         return false;
    //     }
    // }

    for (let val of arr1) { // n times but uses only 1 look up frequency object and 1 less loop!
        let squared = (val * val);
        if (!frequencyCounter2[squared]) {
            return false;
        } else {
            frequencyCounter2[squared] = frequencyCounter2[squared] - 1;
        }
    }

    return true;
}

console.log('Frequency Counter Pattern - same');
console.log(same([1, 2, 3], [4, 1, 9])); //true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])); // false

/**
 * Multiple Pointers Pattern
 * 
 * sumZero which accepts a sorted array of integers
 * Find the first pair where the sum is 0
 * 
 * sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
 * sumZero([-2, 0, 1, 3]) // undefined
 * sumZero([1, 2, 3]) // undefined
 * 
 * 
 */

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum < 0) { // too far left/negative
            left++;
        } else if (sum > 0) { // too far right/positive
            right--;
        }
    }
}

console.log('Multiple pointers - sumZero');
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
console.log(sumZero([-3, -1, 0, 1, 2])); //[-1, 1]
console.log(sumZero([-3, -1, 0, 1, 2, 3, 5])); // [-3, 3]

/**
 * CountUniqueValues - two pointers net to each other
 * 
 * Accepts a sorted array and counts the unique calues in the array
 * 
 * countUniqueValues([1, 1, 1, 1, 1, 2]); //2
 * countUniqueValues([1, 2, 3, 4, 4, 4, 6, 12, 12, 13]); //7
 * countUniqueValues([]); //0
 * countUniqueValues([-2, -1, -1, 0, 1]) //4
 *  
 */

 function countUniqueValues(arr){
    
    if (arr.length === 0){
        return 0;
    }

    let i = 0;
    
    for (let j = 1; j <arr.length; j++){
        if (arr[i] !== arr[j]){
            // i
            // [1, 1, 2, 3, 4, 5, 6, 6, 7]
            //         j

            //     i
            // [1, 1, 2, 3, 4, 5, 6, 6, 7]
            //         j
            // 
            i++;
            arr[i] = arr[j]
            //     i
            // [1, 2, 2, 3, 4, 5, 6, 6, 7]
            //         j


        }
    }
    return i + 1;

 }


console.log('Multiple pointers - countUniqueValues');
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 6, 12, 12, 13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4

/**
 * Sliding Window
 * 
 * maxSubarraySum
 * Takes in array and number - finds the max sum of n consecutive elements in the array
 */

 function maxSubarraySum(arr, n){
    if (arr.length < num) {
        return null;
    }
    
    let maxSum = 0;
    let tempSum = 0;
    
    for (let i = 0; i<n; i++){
        maxSum += arr[i];
    }
    // -------
    // [2, 6, 9, 2, 1, 8];

    // -------
    // [2, 6, 9, 2, 1, 8];
    //      ------
    // prevSum -2 + 2

    tempSum = maxSum;

    for (let i = n; i<arr.length; i++){

        tempSum = tempSum - arr[i-n] + arr[i];

        maxSum = Math.sum(maxSum, tempSum);
    }
    return maxSum
 };

/** 
 * Divide and Conquer
 * 
 * Binary Search
 * Find a middle point and check if the item looking for is greater or less. then split again.
 * Only works on sorted array!
 */