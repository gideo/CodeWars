// 5kyu - Can you get the loop? 

// You are given a node that is the beginning of a linked list. This list always contains a tail and a loop. Your objective is to determine the length of the loop.

// For example in the following picture the tail's size is 3 and the loop size is 12:


// // Use the `getNext' method or 'next' property to get the following node.
// node.getNext()
// node.next
// Note: do NOT mutate the nodes!

// Thanks to shadchnev, I broke all of the methods from the Hash class.

// Don't miss dmitry's article in the discussion after you pass the Kata !! 

function loop_size(node){
  let nodes = [], n = node;
  
  while (nodes.indexOf(n) === -1) {
    nodes.push(n);
    n = n.getNext();
  }
  
  return nodes.length - nodes.indexOf(n);
}