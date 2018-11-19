// 7kyu - Binary Pyramid 101
// Eg: if m=1 and n=4

//    1 //1
// + 10 //2
// + 11 //3
// +100 //4
// ----
//  122 // Binary(122) => "1111010"
// So BinaryPyramid ( 1 , 4 ) should return "1111010" Note: value returned should be in string format

function BinaryPyramid(m,n){
  let a = 0;
  for (; m <= n; m++)     
     a += parseInt(m.toString(2));  
  return a.toString(2);
}