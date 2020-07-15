// 5kyu - Prime Fun #1

// When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

// Input
// An integer array nums that contains n*2 elements:

// [1,2,3,4,5,6]

// Output
// A 2D array that contains n elements. Each element is an subarray that contains two integers, and their sum must be a prime:

// [[1,2],[3,4],[5,6]]

// Note:
// You can assume that the length of nums always be an even number or 0(an empty array) and it always less than 20.
// All the integers are positive integers and less than or equals to 1000.
// You don't need to worry about the order of the output array. that is, There may be many kinds of combinations and sequences, you just need to return one of the effective combinations.
// If there is no possible solution, return []
// Examples
//  primeSumPair([1,2,3,4,5,6]) can returns: [[1,2],[3,4],[5,6]]
//                                        or: [[3,4],[5,6],[1,2]]
//                                        or: [[1,4],[5,6],[2,3]]
//                                        or ....
//  primeSumPair([11,22,33,44,55,66]) should return []
// tip: don;t mutate the input

function primes(n) {
    let sieve = Array(n + 1).fill(true);
    let m = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= m; i += 2) {
        if (sieve[i]) {
            let step = 2 * i;
            for (let j = i * i; j <= n; j += step)
                sieve[j] = false;
        }
    }
    let primes = [2];
    for (let i = 3; i <= n; i += 2)
        if (sieve[i]) 
            primes.push(i);
    return primes;
}

const PRIMES = new Set(primes(2000));

function primeSumPair(nums) {
    function search(nums, result = []) {
        const k = nums.length;
        if (k <= 1)
            return result;
        const a = nums[k - 1];
        for (let i = k - 2; i >= 0; i--) {
            const b = nums[i];
            if (PRIMES.has(a + b)) {
                result.push([a, b]);
                const r = search(nums.filter((_, j) => j !== i && j !== k - 1), result);
                if (r)
                    return r;
                result.pop();
            }
        }
    }
    const result = search(nums);
    return result ? result : [];
}