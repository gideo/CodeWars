// 7kyu - Running Out of Space 

// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].

function spacey(a){
  for(let i = 1; i < a.length; i++)
    a[i] = a[i-1] + a[i];
  return a;
}