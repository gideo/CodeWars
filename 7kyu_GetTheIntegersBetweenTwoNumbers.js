// 7kyu - Get the integers between two numbers

// Build a function that can get all the integers between two given numbers.

// Example:

// (2,9)

// Should give you this output back:

// [ 3, 4, 5, 6, 7, 8 ]

function range(startNum, endNum)	{  
	let arr = [];
	 for (let i = startNum +1; i < endNum; i++)
	   arr.push(i)
	 return arr;
};  