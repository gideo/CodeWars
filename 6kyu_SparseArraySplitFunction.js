// 6kyu - Sparse Array Split Function

// Sparse arrays in JavaScript are useful for many things. Among others they can be used for splitting an array into subarrays. Your task here is to create an array method for splitting a sparse array to subarrays, each of which must not be a sparse array.

// It will act a bit similarly to the .split() method in strings. The new array method will return an array of subarrays, if the original array is a sparse array. Otherwise it will return the original array.
// For example: [1,2,,3,4].split() will return [[1,2],[3,4]], and [,,,,].split() will return []. Please note that nested sparse arrays should remain sparse: [,,[,,],[,,],,].split() should return [[[,,],[,,]]].

// Related kata:
// Sparse array this is?
// Sparse array implode function

Object.defineProperty(Array.prototype, "split", {
    value: function() {
        let arr = [], i = -1, a = [];
        for(const k in this) {
            if(k-i > 1 && a.length) arr.push(a), a = [];
            a.push(this[k]);
            i = k;
        }
        if(a.length == this.length) 
          return this;
        else if(a.length) arr.push(a) 
          return arr;
    }
})