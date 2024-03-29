// Given an integer x, return true if x is a palindrome, and false otherwise.
// https://leetcode.com/problems/palindrome-number/description/

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

function isPalindrome(num) {
  num = num.toString();
  return num === num.split('').reverse().join('');
};

//or 

function isPalindrome2(num) {
  const originalNum = num;
  let reversedNum = 0;

  if (num >= 0) {
    while (num !== 0) {
      reversedNum = reversedNum * 10 + num % 10;
      num = Math.floor(num / 10);
    };
  } else {
    return false;
  };
  return originalNum === reversedNum;
};