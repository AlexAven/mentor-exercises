// Palindrome Linked List
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.


function isPalindrome(head) {
  return head.join('') === head.reverse().join('');
};