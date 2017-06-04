// 6kyu - Range Function

// Create range generator function that will take up to 3 parameters - start value, 
// step and stop value. This function should return an iterable object with numbers. 
// For simplicity, assume all parameters to be positive numbers.

// Examples:

// range(5) --> 1,2,3,4,5
// range(3, 7) --> 3,4,5,6,7
// range(2, 3, 15) --> 2,5,8,11,14

function range() {
    let args = [].slice.call(arguments)
    if(args.length <= 2)
        return args.length === 1 ? 
          Array.apply(null, Array(args[0])).map((_,i) => i+1) : 
          Array.apply(null, Array(args[1]-args[0]+1)).map((_,i) => i+args[0]); 
    let temp = [];
    for(let i = args[0]; i <= args[2]; i+= args[1]){
        temp.push(i)
    }
    return temp;
}