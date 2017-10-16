// 7kyu - Heron's Formula

// Write function heron which calculates the area of a triangle with sides a, b, and c.

// Heron's formula: sqrt (s * (s - a) * (s - b) * (s - c)), where s = (a + b + c) / 2

function heron(a, b, c) {
    let x = (a + b + c) / 2;
    return Math.sqrt(x * (x - a) * (x - b) * (x - c)); 
}