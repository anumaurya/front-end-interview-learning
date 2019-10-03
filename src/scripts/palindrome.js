function palindromeCheck(inputString) {
    const str = inputString.toLowerCase();
    // find the middle index (starting from 0)
    let middleIndex = Math.floor(str.length / 2);
    let isPalindrome = true;
    for (let i = 0; i < middleIndex; i++) {
        //console.log(i);
        if (str[i] !== str[(str.length - 1) - i]) {
            isPalindrome = false;
            break;
        }
    };
    return isPalindrome;
}

console.log('palindromeCheck', palindromeCheck('racecar'));

/**
 * Palindrome Number
 * Determine whether an integer is a palindrome. 
 * An integer is a palindrome when it reads the same backward as forward.
 * 
 * Example 1:
 * Input: 121
 * Output: true
 * 
 * Example 2:
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. 
 * Therefore it is not a palindrome.
 * 
 * Example 3:
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeNumber = function(x) {
    // All negative aren't
    if (x < 0){
        return false;
    } 
    // All ending with 0 arent
    if (x % 10 === 0 && x !== 0){
        return false;
    }
    return palindromeCheck(x + '');
};

console.log('palindromeCheck', isPalindromeNumber(121));


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromePhrase = function(s) {
    // strip spaces
    let string = s.replace(/[^A-Z0-9]/ig, '');
    return palindromeCheck(string);
};

console.log('isPalindromePhrase', isPalindromePhrase('A man, a plan, a canal: Panama'));

