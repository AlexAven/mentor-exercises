// Roman to Integer.
// https://leetcode.com/problems/roman-to-integer/description/

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 
// 12 is written as XII, which is simply X + II. 
// The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. 
// However, the numeral for four is not IIII. Instead, the number four is written as IV. 
// Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX. 
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

function fromRomanToNumeric(rNum) {
  rNum = rNum.toLowerCase().split('');
  let toNumbers = [];
  let variables = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };

  for (let i = 0; i < rNum.length; i++) {
    if (rNum[i] in variables) {
      rNum[i] = variables[rNum[i]];
    }
  };

  for (let i = 0; i < rNum.length; i++) {
    if (rNum[i] > rNum[i + 1]) {
      toNumbers = [...toNumbers, rNum[i]];
    } else if (rNum[i] === rNum[i + 1] && rNum[i + 1] === rNum[i + 2]) {
      toNumbers = [...toNumbers, rNum[i] + rNum[i + 1] + rNum[i + 2]];
      i += 2;
    } else if (rNum[i] === rNum[i + 1]) {
      toNumbers = [...toNumbers, rNum[i] + rNum[i + 1]];
      i++;
    } else if (rNum[i] < rNum[i + 1]) {
      toNumbers = [...toNumbers, rNum[i + 1] - rNum[i]];
      i++;
    }
  };
  toNumbers = toNumbers.reduce((acc, elem) => acc + elem, 0);
  return toNumbers;
};

// or

function fromRomanToNumeric2(romanNumber) {
  const numberEquivalent = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let resultInNumeric = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    if (numberEquivalent[romanNumber[i]] < numberEquivalent[romanNumber[i + 1]]) {
      resultInNumeric += numberEquivalent[romanNumber[i + 1]] - numberEquivalent[romanNumber[i]];
      i++;
    } else {
      resultInNumeric += numberEquivalent[romanNumber[i]];
    }
  };
  return resultInNumeric;
};