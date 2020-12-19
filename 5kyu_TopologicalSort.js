// 5kyu - Topological Sort 

// The DAG
// A Directed Acyclic Graph (often called a DAG for short) is a data structure which can be visualized as a group of nodes and edges which connect them. Each edge has a direction (thus 'directed') which signifies a relationship between the two nodes it connects. An edge in a DAG is like an arrow which points from one node to another. 'Acyclic' means that there can be no cycles (loops) in the graph. This means that you can never return to a node you start with just by following directed edges around the graph. Here is a good example of a DAG (from Wikipedia):


// Order is Important
// A common use of a DAG is to represent dependencies. For example think of a university course which has certain pre-requisites and is also itself a pre-requisite for other courses. This can be easily represented in a DAG by using inbound edges from pre-requisite courses and outbound edges to courses for which this class fullfills requirements.

// When working with such a data structure a common goal is to determine in which order the nodes could be visited to satisfy all the dependencies. In our course example this would tell you the order in which you would need to take the courses to satisfy all of the pre-requisites. This ordering is known as a 'Topological Sort'.

// It is interesting to note that unlike other sorts you may have worked with there might be many valid topological sorts for a given graph. For example, in the graph shown above the following are all valid Topological Sorts:

// 7, 5, 3, 11, 8, 2, 9, 10
// 3, 5, 7, 8, 11, 2, 9, 10
// 5, 7, 3, 8, 11, 10, 9, 2
// Note: There is no requirement that a DAG be connected. That is to say - there may be islands of nodes in the graph with no edges connecting them to the rest of the graph. This just means that those nodes have no dependencies on anything else and nothing depends on them. They can therefore appear anywhere in the Topological Sort.

// For more information on Topological Sorting, see the Wikipedia entry: Topological Sorting.

// Goal
// Your goal in this Kata is to complete the function topoSort(nodes) which will return a valid topological sort for a given DAG, unless you can spot a cycle in the input nodes. In that case, you need to throw an error with a specific message (see below).

// The input can ba rather big, with up to hundreds of nodes, that can be linked to hundreds of other nodes, so watch out for performances.

// The DAG is provided to you as a collection of Node objects. A Node is defined as follows:

// function Node(id, i, o) {
//   this.id = id;
//   this.in = i;
//   this.out = o;
// }
// id is a unique identifier for each node. It can be either numbers or string and there are no assumptions that can be done about the values.
// in is an array containing references to all the Nodes in the graph which point to this Node.
// out is an array containing references to all the Nodes which this Node points to.
// If a Node has no inbound edges in will be an empty array. If a Node has no outbound edges out will be an empty array.
// Node instances are frozen: you cannot modify them.
// Returned Value
// The return value of topoSort(nodes) should be an array of all Nodes from the input in Topological Sort order.

// Error Condition
// In addition to returning a correct Topological Sort the topoSort function must also catch a particular error condition: a cycle in the graph. If topoSort discovers a cycle in the graph it must throw an error. A string will work too, but in any case, the message has to be the following string:

// // cycle found
// throw new Error("Graph has a cycle")

function topoSort(nodes) {
  let entrant = nodes.reduce((o,i)=>(o[i.id]=i.in.length,o),{}),
      out = [], q = nodes.filter(i=>!entrant[i.id]);
  for(let i of q){
    out.push(i);
    i.out.forEach(x=>{
      entrant[x.id]--;
      if(!entrant[x.id]) q.push(x);
    });
  }
  if(out.length!=nodes.length) throw "Graph has a cycle";
  return out;
}