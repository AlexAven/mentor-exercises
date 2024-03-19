// Palindrome Linked List
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.


// function isPalindrome(head) {
//   return head.join('') === head.reverse().join('');
// };


function isPalindrome(head) {
  head.next && isPalindrome(head.next);

};


function isPalindrome(head, prev) {
  if (!head) {
    tail = prev;
    return null;
  }

  let list = 
  isPalindrome(head.next, head);
  let reverseList = head.next = prev || null;

  return tail;
};