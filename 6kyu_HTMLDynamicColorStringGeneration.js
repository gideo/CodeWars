// 6kyu - HTML Dynamic Color String Generation

// Generate a valid randomly generated rgb color string. Assume all of them have 6 digits always.

// Valid Output
// #ffffff
// #25a403
// #000001
// Non-Valid Output
// #fff
// #aaa
// #zzzzz
// cafebabe
// #a567567676576756A7

let generateColor = () => '#' + Math.random().toString(16).substr(-6);