/*
-----------------A-----------------
*/

let first: Array<number> = new Array<number>(5);

let second: Array<string> = new Array<string>(5);

let third: Array<boolean> = new Array<boolean>(5);

let fourth: Array<number | string> = new Array<number | string>(5);

for (let i = 0; i < first.length; i++) {
  first[i] = i * i; // what would be the output?
}

second = ["We", "Love", "Type", "Script", ":)"];

for (let i = 0; i < third.length; i++) {
  if (i % 2 == 0) third[i] = true;
  else third[i] = false;
  // What would be the output array?
}

for (let i = 0; i < fourth.length; i++) {
  if (i + 2 == 3) fourth[i] = "Good job";
  else if (i + 2 == 2) fourth[i] = 55;
  else fourth[i] = "Thank you for your time";
}

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

console.log("-------------------------------------\n");

/*
-----------------B-----------------
*/

// 4
function mostFrequent(arr: Array<number>): number {
  arr.sort();
  let most = 1,
    res = arr[0];
  let current = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) current++;
    else current = 1;
    if (current > most) {
      most = current;
      res = arr[i - 1];
    }
  }
  return res;
}

let arr = [40, 50, 30, 40, 50, 30, 30];
console.log(
  "The most frequent item in the given array is: " + mostFrequent(arr)
);

console.log("-------------------------------------\n");

// 5
function duplicateValues(input_arr: Array<number>): Array<number> {
  let output_arr = new Array<number>();
  for (let i = 0; i < input_arr.length; i++) {
    for (let j = i + 1; j < input_arr.length; j++) {
      if (input_arr[i] == input_arr[j]) output_arr.push(input_arr[j]);
    }
  }
  return output_arr;
}

let temp = [1, 2, 3, 4, 2, 7, 8, 8, 3];
console.log("The duplicated values is : {" + duplicateValues(temp) + "}");
