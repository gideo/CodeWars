// 5kyu - Dynamic Programming #1: Shortest Path in a Weighted DAG 

// TL;DR
// Given a number of vertices N and a list of weighted directed edges in a directed acyclic graph (each edge is written as [start, end, weight] where from < to), compute the weight of the shortest path from vertex 0 to vertex N - 1. If there is no such path, return -1.

// Background
// A weighted DAG is a directed acyclic graph where each edge has a weight associated with it:

// 1 5 3 1 5

// A B C D

// In this example, the shortest path from A to D is given by A -> B -> D, which has a total weight of 4.

// Finding shortest distances in DAGs is made easier by the fact that the nodes can be linearized: they can be given an order A1, A2, ..., An such that edges only point forward (that is, there are no edges from Aj to Ai when j > i). In the example above, the two possible linear orderings are A, B, C, D and A, C, B, D.

// 1 1

// 5

// 5 3

// A B C D

// Your Task
// Given a number N (indicating a graph with vertices 0, 1, ..., N-1) and a list of weighted edges [start, end, weight] for a DAG, where start < end for each edge, find the weight (a.k.a. length) of the shortest path from node 0 to node N-1.

// For example, if the input is

// N = 4
// edgeList = [
//   [0, 1, 1], [0, 2, 5], [0, 3, 5], [1, 3, 3], [2, 3, 1]
// ]
// then we have the graph depicted above (with 0 = A, 1 = B, etc.) and the answer is 4.

// If there is no path from node 0 to node N-1, return -1.

// Notes and Warnings
// Precondition: N will always be greater than 1, and edge weights will always be positive integers. There may be multiple edges going between two nodes.

// Warning: You will probably need to use a dynamic programming solution if you want your solution to run fast enough not to time out--that's the whole point of this kata!

// However, a well-written general shortest-path algorithm such as Dijkstra's Algorithm may also be fast enough to past the soak tests. (The reason is that the dividing line between linear and linearithmic time is hard to define and depends on a variety of external factors, so the kata's tests err on the safe side.)

function shortest(n, edgeList) {
  let g = {};
  for (let a of edgeList) {
    let i = a[0], j = a[1], w = a[2];
    if (!g[i]) g[i] = [];
    g[i].push([j, w]);
  }
  
  let arr = Array(n).fill(1 / 0);
  arr[0] = 0;
  
  let nodes = new Set([0]);
  while (nodes.size > 0) {
    let next = new Set();
    for (const i of nodes) {
      let d = arr[i];
      for (let p of g[i] || []) {
        let j = p[0], w = p[1];
        arr[j] = Math.min(arr[j], d + w);
        next.add(j);
      }
    }
    nodes = next;
  }
  return arr[n - 1] < Infinity ? arr[n - 1] : -1;
}