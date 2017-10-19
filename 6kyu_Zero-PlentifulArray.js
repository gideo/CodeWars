// 6kyu - Zero-plentiful Array

// An array is called zero-plentiful if it contains at least one 0 and 
// every sequence of 0s is of length at least 4. Your task is to return 
// the number of zero sequences if the given array is zero-plentiful else 0.

function zeroPlentiful(arr){
  let zeros = 0, seq = 0;
  for(let i = 0; i <= arr.length; i++) {
    if(arr[i] === 0) seq++;
    else {
      if(seq !== 0 && seq < 4) { return 0; }
      if(seq > 3) { zeros++; }
      seq = 0;
    }
  }
  return zeros;
}