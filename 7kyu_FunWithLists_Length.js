// 7kyu - Fun with Lists:Length

// mplement the method length, which accepts a linked list (head), and returns the length of the list.

// For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null and can hold any type of value.

// Good luck!

// This kata is part of fun with lists series:

// Fun with lists: length
// Fun with lists: indexOf
// Fun with lists: lastIndexOf
// Fun with lists: countIf
// Fun with lists: anyMatch + allMatch
// Fun with lists: filter
// Fun with lists: map
// Fun with lists: reduce

let length = (head) => (head === null) ? 0 : 1 + length(head.next);