// ----------- 1. Empty array ---------------
// arr1 & arr2 = the same, different syntax.
let arr1_: number[] = [];

// interface Array<T> - generic type.
let arr2_: Array<string> = [];

// ----------- 2. Empty array - with `new` keyword ------------
// the `new` keyword - will allow us to add size.
// arr3 & arr4 = the same, different syntax.
let arr3_: number[] = new Array<number>(5);
let arr4_: Array<number> = new Array<number>(5);

console.log(arr1_, arr2_); // [] []
console.log(arr3_); // [ <5 empty items> ]
console.log(arr4_); // [ <5 empty items> ]

// ----------- 3. Array with initialized values ------------
let arr5_: number[] = [1, 2, 3];
let arr6_: Array<string> = ["A", "B", "C"];
let arr7_: number[] = new Array<number>(1, 2, 3, 4);
let arr8_: Array<number> = new Array<number>(5, 6, 7, 8);

console.log(arr6_); // [ 'A', 'B', 'C' ]
console.log(arr6_[2]); // C
console.log(arr6_.length); // 3
console.table(arr6_);
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
