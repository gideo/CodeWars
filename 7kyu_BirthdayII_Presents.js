// 7kyu - Birthday II - Presents 

// Your colleagues have been good enough(?) to buy you a birthday gift. Even though it is your birthday and not theirs, they have decided to play pass the parcel with it so that everyone has an even chance of winning. There are multiple presents, and you will receive one, but not all are nice... One even explodes and covers you in soil... strange office. To make up for this one present is a dog! Happy days! (do not buy dogs as presents, and if you do, never wrap them).

// Depending on the number of passes in the game (y), and the present you unwrap (x), return as follows:

// x == goodpresent --> return x with num of passes added to each charCode (turn to charCode, add y to each, turn back)

// x == crap || x == empty --> return string sorted alphabetically

// x == bang --> return string turned to char codes, each code reduced by number of passes and summed to a single figure

// x == badpresent --> return 'Take this back!'

// x == dog, return 'pass out from excitement y times' (where y is the value given for y).

function present(x, y) {
    switch (x) {
        case 'goodpresent': return x.split``.map(i => String.fromCharCode(i.charCodeAt()+y)).join``; 
        case 'crap': case 'empty': return x.split``.sort().join``;
        case 'bang': return x.split``.map(i => i.charCodeAt()-y).reduce((a, b) => a + b, 0);
        case 'badpresent': return 'Take this back!';
        case 'dog': return `pass out from excitement ${y} times`;
    }
}