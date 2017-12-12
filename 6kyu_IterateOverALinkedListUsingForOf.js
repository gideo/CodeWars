// 6 kyu - Iterate over a Linked List using "for...of"

// Given an incomplete class representing a linked list of Node objects, LList, extend 

// LList by implementing a means of iterating over this list using a for...of loop 

// (for...from in Coffeescript).

// Nodes of the linked list are represented as objects with a value and next property. 

// Yield the value property in the loop.

// The Node and LList classes are shown below:

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   push(node) {
//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//   }
// }
// Usage Example

// let lList = new LList();
// lList.push(new Node(37));
// lList.push(new Node(65));
// lList.push(new Node(4));

// let arr = [];
// for (let value of lList) {
//   arr.push(value);
// }
// console.log(arr); // [37, 65, 4]

LList.prototype[Symbol.iterator] = function*() {
  let c = this.head;
  while (c) {
    yield c.value;
    c = c.next;
  }
}