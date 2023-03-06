// Matrix - 2 dimentional array

// 1. empty matrix:
let mat1: number[][]; // undefined. 

// 2. Matrix with size: 
let mat2: string[][] = new Array<Array<string>>(10); // 10 = 10 rows

// 3. Matrix with initialized values: 
let fruits : string[][] = [['Apple', 'Almond', 'Watermelon'],['Banana', 'Orange']];

console.log(fruits); // [ [ 'Apple', 'Almond', 'Watermelon' ], [ 'Banana', 'Orange' ] ]
console.log(fruits[0]); // [ 'Apple', 'Almond', 'Watermelon' ]
console.log(fruits[0][2]); // Watermelon
console.log(fruits[1][0]); // Banana
console.table(fruits)
/*
Jagged array - מערך משונן
A matrix that it's rows have different lengths
┌─────────┬──────────┬──────────┬──────────────┐
│ (index) │    0     │    1     │      2       │
├─────────┼──────────┼──────────┼──────────────┤
│    0    │ 'Apple'  │ 'Almond' │ 'Watermelon' │
│    1    │ 'Banana' │ 'Orange' │              │
└─────────┴──────────┴──────────┴──────────────┘
*/

// 1. Empty matrix:
let matrix1: Array<Array<string>>;
let matrix2: Array<Array<string | boolean>>;

// 2. Give size (number of rows)
let matrix3: Array<Array<string>> = new Array<Array<string>>(5);
matrix3[0] = Array<string>(2);
matrix3[1] = Array<string>('A', 'B', 'C');

console.log(matrix3); // [ [ <2 empty items> ], [ 'A', 'B', 'C' ], <3 empty items> ]
console.log(matrix3[0]) // [ <2 empty items> ]
console.log(matrix3[1]) // [ 'A', 'B', 'C' ]
console.log(matrix3[1][1]) // B

console.table(matrix3);
/*
┌─────────┬─────┬─────┬─────┐
│ (index) │  0  │  1  │  2  │
├─────────┼─────┼─────┼─────┤
│    0    │     │     │     │
│    1    │ 'A' │ 'B' │ 'C' │
└─────────┴─────┴─────┴─────┘
*/




