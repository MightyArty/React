# Class Work

```
pop() - Removes the last element of the array and return that element
push() - Adds new elements to the array and returns the new array length
sort() - Sorts all the elements of the array
concat() - Joins two arrays and returns the combined result
indexOf() - Returns the index of the first match of a value in the array (-1 if not found)
copyWithin() - Copies a sequence of elements within the array
fill() - Fills the array with a static value from the provided start index to the end index
shift() - Removes and returns the first element of the array
splice() - Adds or removes elements from the array
unshift() - Adds one or more elements to the beginning of the array
includes() - Checks whether the array contains a certain element
join() - Joins all elements of the array into a string
lastIndexOf() - Returns the last index of an element in the array
slice() - Extracts a section of the array and returns the new array
toString() - Returns a string representation of the array
toLocaleString() - Returns a localized string representing the array
```

### A

1. Create 4 arrays. Each one will be from a diffrent type(number, string, boolean, number + string).
   - Create all the arrays using generic method. (`Array<type>`)
2. Add 5 values to each array.
3. use 5 functions from the functions list above - and implement them on the arrays you created.

### B

4. Write a TypeScript program to find the most frequent item of an array.
5. Write a TypeScript program to find duplicate values in array.
6. Write a TypeScript program that will check if number is prime or not.
7. Write a function that will check if a number is palindrome or not.
8. Write a function that will check if a string is palindrome or not.

### C (~~HARD~~)

9. Write a TypeScript program that will find the largest contiguous subarray
   for example: arr = [-2,-3,4,-1,-2,1,5,-3]
   maximum contiguous subarray of arr is -> 4+(-1)+(-2)+1+5=7

### D (If left time)

10. Create a class `Country` with the following:

- countryName
- capital of the Country
- population
- area
- mainReligion

> To each method add property enscapsulation

- toString() - will print all the data about the specific country
- peoplePerArea() - will calculate how many people live in 2km radius
- OurHoliday() - will return the holiday name (any) according to the mainReligion.

> Finally

- Create an array of 5 countries with full details
- Print all the details with the toString() method
