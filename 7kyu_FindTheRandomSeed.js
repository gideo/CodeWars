// 7kyu - Find the Random Seed

// You get an input list of 10 random integers between 0 and 100 (0 <= x < 100).

// Your task is to return the integer used to initialize the random number generator 
// (the "seed") (0 <= n < 10000)

// Examples

// input: [17, 72, 97, 8, 32, 15, 63, 97, 57, 60]
// expected: 1

// input: [99, 56, 14, 0, 11, 74, 4, 85, 88, 10]
// expected: 1234

import random

def find_random_seed(A):
    for n in range(10000):
        random.seed(n)
        if [random.randint(0, 100) for _ in range(10)] == A:
            return n