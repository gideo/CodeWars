// This will probably be a little serie :)

// X-Shape

// You will get an odd Integer n (>= 3) and your task is to draw a X. Each line is 
// seperated with '\n'.

// Use the following characters:

// ■ □

// e.g.:


//                                      ■□□□■
//             ■□■                      □■□■□
//   x(3) =>   □■□              x(5)=>  □□■□□
//             ■□■                      □■□■□
//                                      ■□□□■


function x(n) {
    let arr = Array(n).fill().map(_ => "□".repeat(n).split(""))
    for(let i = 0; i < arr.length; i++) {
        [arr[i][i], arr[i][arr.length-1-i]] = ["■","■"];
    }
    return arr.map(a=>a.join("")).join("\n");
}