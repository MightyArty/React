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
    arr.sort();
    var most = 1, res = arr[0];
    var current = 1;
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
