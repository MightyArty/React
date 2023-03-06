var arr1 = new Array(5);
var arr2 = new Array(5);
var arr3 = new Array(5);
var arr4 = new Array(5);
for (var i = 0; i < arr1.length; i++) {
    arr1[i] = i * i; // what would be the output?
}
arr2 = ["We", "Love", "Type", "Script", ":)"];
for (var i = 0; i < arr3.length; i++) {
    if (i % 2 == 0)
        arr3[i] = true;
    else
        arr3[i] = false;
    // What would be the output array?
}
for (var i = 0; i < arr4.length; i++) {
    if (i + 2 == 3)
        arr4[i] = "Good job";
    else if (i + 2 == 2)
        arr4[i] = 55;
    else
        arr4[i] = "Thank you for your time";
}
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
