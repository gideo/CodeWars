// 7kyu - Presents

//  Little Petya very much likes gifts. Recently he has received a new laptop as a New Year gift from his mother. He immediately decided to give it to somebody else as what can be more pleasant than giving somebody gifts. And on this occasion he organized a New Year party at his place and invited n his friends there.

//  If there's one thing Petya likes more that receiving gifts, that's watching others giving gifts to somebody else. Thus, he safely hid the laptop until the next New Year and made up his mind to watch his friends exchanging gifts while he does not participate in the process. He numbered all his friends with integers from 1 to N. Petya remembered that a friend number i gave a gift to a friend number pi. He also remembered that each of his friends received exactly one gift.

//  Now Petya wants to know for each friend i the number of a friend who has given him a gift.

// Input:
//  Input contains array with N integers: the i-th number is pi — the number of a friend who gave a gift to friend number i. It is guaranteed that each friend received exactly one gift. It is possible that some friends do not share Petya's ideas of giving gifts to somebody else. Those friends gave the gifts to themselves.

// Output:
//  Return array witn N integers: the i-th number should equal the number of the friend who gave a gift to friend number i.

// Examples:

// ([2,3,4,1])  =>  [4,1,2,3]
// ([1,3,2])    =>  [1,3,2]
// ([1,2])      =>  [1,2]
// The first example:
// The friend 1 gave gift to the friend 2 (a[0]=2) - this means that in output array number 1 at the place 2 : [?, 1, ?, ?].
// The friend 2 gave gift to the friend 3 (a[1]=3) - this means that in output array number 2 at the place 3 : [?, 1, 2, ?].
// The friend 3 gave gift to the friend 4 (a[2]=4) - this means that in output array number 3 at the place 4 : [?, 1, 2, 3].
// The friend 4 gave gift to the friend 1 (a[3]=1) - this means that in output array number 4 at the place 1 : [4, 1, 2, 3].

// (c)KADR

function presents(a){
  let arr = [];
    for(let i = 0; i < a.length; i++)
        arr[a[i] - 1] = i + 1;
    return arr;
}