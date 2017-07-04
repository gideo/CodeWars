// 7kyu - Sum of Odd Cubed Numbers

// Find the sum of the odd numbers within an array, after cubing the initial integers. 
// This function will return undefined (NULL in PHP) if any of the values aren't numbers.

// Note: There are ONLY integers in the JAVA version of this Kata.

function cubeOdd(arr) {
    for(let i = 0; i < arr.length; i++)
      if(typeof arr[i] !== "number")
        return undefined;
    return arr.filter(b => Math.abs(b%2) === 1).map(a => Math.pow(a, 3)).reduce((c,d) => c+d, 0);
}