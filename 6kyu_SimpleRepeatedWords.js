// 6kyu - Simple Repeated Words

// In this Kata, you will count the number of times the first string occurs in the second.

// solve("zaz","zazapulz") = 4 because they are ZAZapulz, ZAzapulZ, ZazApulZ, zaZApulZ

function solve(a, b) {
    if (!a.length) return 1;
    let c = a[0], count = 0;
    
    for (let i = 0; i < b.length; i++) {
      if (b[i] === c)
        count += solve(a.slice(1), b.slice(i + 1));
    }
    
    return count;
}