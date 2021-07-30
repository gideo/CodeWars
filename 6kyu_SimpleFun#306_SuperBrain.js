// 6kyu - Simple Fun #306: Super Brain

// Task
// Your friend Jackson was invited to a TV program called "Super Brain". In this program, contestant need to play a memory game. At the beginning, the moderator tells all contestants a sequence of numbers [A1, A2, ..., An]. Next, the moderator will do some operations on the sequence, including the following:

// - "ADD x y n": All elements in the subsequence [Ax,..., Ay] increase by n. 

// For sequence = [1, 2, 3, 4, 5], After operation "ADD 2 4 1", 
// sequence will became to [1, 3, 4, 5, 5](2,3,4 --> 3,4,5)

// - "REVERSE x y"：The subsequence [Ax,...,Ay] are arranged in reverse order.

// For sequence = [1, 2, 3, 4, 5], After operation "REVERSE 2 4", 
// sequence will became to [1, 4, 3, 2, 5](2,3,4 --> 4,3,2)

// - "REVOLVE x y n": Shift the subsequence [Ax,...,Ay] to the left n times.

// In each shift operation, the first element will move to the end of subsquence, others will move to the left 1 position.

// For sequence = [1, 2, 3, 4, 5], After operation "REVOLVE 2 4 1", 
// sequence will became to [1, 3, 4, 2, 5](2,3,4 --> 3,4,2)

// - "INSERT x n": Insert n before Ax

// For sequence = [1, 23, 3, 4, 5], After operation "INSERT 2 4" (insert 4 before the 2nd element), 
// sequence will became to [1, 4, 23, 3, 4, 5]

// - "DELETE x": Delete Ax

// For sequence = [1, 23, 3, 4, 5], After operation "DELETE 2" (delete the 2nd element), 
// sequence will became to [1, 3, 4, 5]

// - "MIN x y": Query the minimum value in subsequence [Ax,..., Ay]

// For sequence = [1, 2, 3, 4, 5], After operation "MIN 2 4", 
// the output should be 2(2 is minimum value of subsquenece [2,3,4])

// Note: all x,y above are 1-based and inclusive and x ≤ y.
// The query operation "MIN x y" is always the last operation. Each contestant should answer the correct number at this time.

// Each participant has only one opportunity to call for help from the outside audience. Jackson needs your help badly ;-)

// Your task is to watch the TV program, then write a program to calculate the results for each operation, so that you can give Jackson the right answer when Jackson call for help.

// Input/Output
// [input] integer array sequence

// An integer array.

// 3 ≤ sequence.length ≤ 1000

// 1 ≤ sequence[i] ≤ 100

// [input] string array operations

// Some operations of moderator.

// 1 ≤ operations ≤ 100

// MIN x y always be the last one.

// [output] an integer

// The correct answer of MIN x y.

// Example
// For sequence = [1,2,3,4,5], operations=["MIN 2 4"], the output should be 2.

// The min value of subsequence [2,3,4] is 2.

// For sequence = [1,2,3,4,5], operations=["ADD 2 4 1","MIN 2 4"], the output should be 3.

// After operation "ADD 2 4 1", sequence became to [1,3,4,5,5]

// The min value of subsequence [3,4,5] is 3.

function superBrain(sequence, operations) {
  for (let operation of operations) {
    let arr = operation.split(' '), op = arr[0], start = arr[1]-1, stop = arr[2]-0, n = arr[3]-0;
    switch (op) {
    case 'ADD':
        for (let i = start; i < stop; i++) sequence[i] -= -n;
        break;
    case 'MIN':
        return sequence.slice(start, stop).reduce( (a,b) => a < b ? a : b);
    case 'REVOLVE':
        n = n % (stop-start);
        sequence = sequence.slice(0, start).concat(sequence.slice(start+n, stop), sequence.slice(start, start+n), sequence.slice(stop));
        break;
    case 'REVERSE':
        var sub = sequence.slice(start, stop);
        sub.reverse();
        sequence = sequence.slice(0, start).concat(sub, sequence.slice(stop));
        break;
    case 'INSERT':
        sequence = sequence.slice(0, start).concat([stop], sequence.slice(start));
        break;
    case 'DELETE':
        sequence = sequence.slice(0, start).concat(sequence.slice(start+1));
        break;
    }
  }
}