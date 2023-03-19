/*
-----------------A-----------------
*/
var first = new Array(5);
var second = new Array(5);
var third = new Array(5);
var fourth = new Array(5);
for (var i = 0; i < first.length; i++) {
    first[i] = i * i; // what would be the output?
}
second = ["We", "Love", "Type", "Script", ":)"];
for (var i = 0; i < third.length; i++) {
    if (i % 2 == 0)
        third[i] = true;
    else
        third[i] = false;
    // What would be the output array?
}
for (var i = 0; i < fourth.length; i++) {
    if (i + 2 == 3)
        fourth[i] = "Good job";
    else if (i + 2 == 2)
        fourth[i] = 55;
    else
        fourth[i] = "Thank you for your time";
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
function mostFrequent(arr) { 
    arr.sort(); // [1,2,5,6,10,11,11,11]
    var most = 1, res = arr[0];
    var current = 1; //2
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i - 1])
            current++;
        else
            current = 1;
        if (current > most) {
            most = current;
            res = arr[i - 1];
        }
    }
    return res;
}
var arr = [40, 50, 30, 40, 50, 30, 30];
console.log("The most frequent item in the given array is: " + mostFrequent(arr));
console.log("-------------------------------------\n");
// 5
function duplicateValues(input_arr) {
    var output_arr = new Array();
    for (var i = 0; i < input_arr.length; i++) {
        for (var j = i + 1; j < input_arr.length; j++) {
            if (input_arr[i] == input_arr[j])
                output_arr.push(input_arr[j]);
        }
    }
    return output_arr;
}
var temp = [1, 2, 3, 4, 2, 7, 8, 8, 3];
console.log("The duplicated values is : {" + duplicateValues(temp) + "}");
console.log("-------------------------------------\n");
// 6
function isPrime(n) {
    if (n < 2)
        return false;
    for (var i = 2; i < n; i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}
console.log(isPrime(11)); //true
console.log(isPrime(13)); //true
console.log(isPrime(7)); //true
console.log(isPrime(6)); //false
console.log(isPrime(9)); //false
console.log("-------------------------------------\n");
//8
function stringPalindrome(s) {
    if (s.length <= 1)
        return true;
    for (var i = 0; i < s.length / 2; i++) {
        if (s.charAt(i) != s.charAt(s.length - i - 1))
            return false;
    }
    return true;
}
var s = "abcdcba";
var s1 = "abccccccdad";
console.log(stringPalindrome(s)); //true
console.log(stringPalindrome(s1)); //false
console.log("-------------------------------------\n");
/*
-----------------C-----------------
*/
//9
function maxSubArray(arr) {
    var max_so_far = Number.MIN_VALUE;
    var max_ending = 0;
    var start = 0, end = 0;
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        max_ending = max_ending + arr[i];
        if (max_so_far < max_ending) {
            max_so_far = max_ending;
            start = temp;
            end = i;
        }
        if (max_ending < 0) {
            max_ending = 0;
            temp = i + 1;
        }
    }
    console.log("Maximum contiguous sum is " + max_so_far);
    console.log("Starting at index " + start);
    console.log("Ending at index " + end);
}
var b = [-2, -3, 4, -1, -2, 1, 5, -3];
maxSubArray(b);
