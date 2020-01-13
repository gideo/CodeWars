// 6kyu - Christmas Mission: Distribute Gifts #7

// Task
// Christmas is coming soon. Santa Claus is ready for the gift, he will give the gifts to the children.

// Santa Claus is naughty, and he always distributes gifts according to the size of the children's sock.

// First he chose the largest sock and put in the smallest gift. Then he chose the smallest sock and put in the biggest gift. And so on.. Until no gifts, or every child got a gift. The last child is special, and he always gets the largest of the rest of the gift(If Santa Claus has a gift at this time).

// Can you calculate the final distribution?

// Inputs
// gifts: An integer array that represents the volume of each gift.

// socks: An integer array that represents the volume of each child's sock. It is guaranteed that there is no duplicate number.

// Output
// An integer array that represents each child's gift. According to the order of socks.
// Still not understand the task? Look at the following example ;-)

// Examples
// For gifts = [1,2,3] and socks = [1,2,3],the output should be [3,2,1]

// First,child-3 got a gift(1)
// Then,child-1 got a gift(3)
// Then,child-2 got a gift(2)
// For gifts = [1,2] and socks = [1,2,3],the output should be [2,0,1]

// First,child-3 got a gift(1)
// Then,child-1 got a gift(2)
// Then, no gift for child-2, so he got 0
// For gifts = [1,2,3,4] and socks = [1,2,3],the output should be [4,3,1]

// First,child-3 got a gift(1)
// Then,child-1 got a gift(4)
// Then,because child-2 is the last child, now two gifts was left(2 and 3)
// So, he got the largest gift(3)

function distribute(gifts,socks){
  let s = socks.map((c,i)=>[c,i,0]).sort((a,b)=>a[0]-b[0]),
      g = gifts.sort((a,b)=>1*b-1*a); 
  if (g.length >= s.length){
    let i = 0;
    for (let j = 0; 2*i < s.length - 1; i+=j,j=1-j)
      if (j){s[i][2]=g[i];}
      else{s[s.length-1-i][2] = g[g.length-1-i]}
    if (s.length%2)
      s[i][2]=g[i];
  } else {
    let i = 0;
    for (let j = 0; 2*i < g.length - 1; i+=j,j=1-j)
      if (j){s[i][2]=g[i];}
      else{s[s.length-1-i][2] = g[g.length-1-i]}
    if (g.length%2)
      s[i][2]=g[i];
  }
  return s.reduce((p,c)=>(p[c[1]]=c[2],p),[]);
}