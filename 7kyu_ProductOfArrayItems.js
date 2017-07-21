// 7kyu - Product of Array Items

// Calculate the product of all elements in an array.

// In C#, if the array is null, you should throw ArgumentNullException and if the 
// array is empty, you should throw InvalidOperationException.

// In JavaScript, if the array is null or is empty, the function should return null.

// As a challenge, try writing your method in just one line of code. It's possible to 
// have only 36 characters within your method.

function product(values) {
  return (values && values.length) ? values.reduce((a,b) => a * b) : null;
}