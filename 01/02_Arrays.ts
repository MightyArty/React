// ----------- 1. Empty array ---------------
// arr1 & arr2 = the same, different syntax.
let arr1: number[] = [];

// interface Array<T> - generic type.
let arr2: Array<string> = [];

// ----------- 2. Empty array - with `new` keyword ------------
// the `new` keyword - will allow us to add size.
// arr3 & arr4 = the same, different syntax.
let arr3: number[] = new Array<number>(5);
let arr4: Array<number> = new Array<number>(5);

console.log(arr1, arr2); // [] []
console.log(arr3); // [ <5 empty items> ]
console.log(arr4); // [ <5 empty items> ]

// ----------- 3. Array with initialized values ------------
let arr5: number[] = [1, 2, 3];
let arr6: Array<string> = ["A", "B", "C"];
let arr7: number[] = new Array<number>(1, 2, 3, 4);
let arr8: Array<number> = new Array<number>(5, 6, 7, 8);

console.log(arr6); // [ 'A', 'B', 'C' ]
console.log(arr6[2]); // C
console.log(arr6.length); // 3
console.table(arr6);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  'A'   │
│    1    │  'B'   │
│    2    │  'C'   │
└─────────┴────────┘
*/

// tsc _ts file_
// node _js file_
