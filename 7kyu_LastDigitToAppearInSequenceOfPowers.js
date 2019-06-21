// 7kyu - Last Digit to Appear in Sequence of Powers

// Looking at consecutive powers of 2, starting with 2^1:

// 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, ...

// Note that out of all the digits 0-9, the last one ever to appear is 7. It only shows up for the first time in the number 32768 (= 2^15).

// So let us define LAST DIGIT TO APPEAR as the last digit to be written down when writing down all the powers of n, starting with n^1.

// Your task
// You'll be given a positive integer 1 =< n <= 10000, and must return the last digit to appear, as an integer.

// If for any reason there are digits which never appear in the sequence of powers, return None/nil.

// Please note: The Last digit to appear can be in the same number as the penultimate one. For example for n = 8, the last digit to appear is 7, although 3 appears slightly before it, in the same number: 8, 64, 512, 4096, 32768, ...

def LDTA(n):
    x,s = n,set(str(n))
    for _ in range(30):
        x *= n
        for d in str(x):
            s.add(d)
            if len(s)==10: return int(d)