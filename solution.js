"use strict";

//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//1
console.log(`******Array Method .filter*******`);

console.log(`*******01*******`);
function filterRange(arr, a, b) {
  //write your code here

  let newArr = arr.filter((el) => el >= a && el <= b);
  return newArr;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//2

console.log(`*******02*******`);
function filterRangeInPlace(arr, a, b) {
  //write your code here
  return arr.filter((item) => {
    if (item < a || item > b) {
      return false;
    }
    return true;
  });
}

let array = [5, 3, 8, 1];

array = filterRangeInPlace(array, 1, 4); // removed the numbers except from 1 to 4

console.log(array); // [3, 1]

console.log(`******Array Method .reduce*******`);
console.log(`*******01*******`);
//Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
//1

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(array) {
  //write your code here

  return array.reduce(function (obj, value) {
    obj[value.id] = value;
    return obj;
  }, {});
}

let usersById = groupById(users);
console.log(usersById);
/*output: 
   { john: { id: 'john', name: 'John Smith', age: 20 },
  ann: { id: 'ann', name: 'Ann Smith', age: 24 },
  pete: { id: 'pete', name: 'Pete Peterson', age: 31 } } */

console.log(`***** Map, Filter, Reduce*******`);
/* 
#### 1. Get total orders
* Return the total amount of orders. 

```javascript
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];
``` */
console.log(`*******01*******`);
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

let total = orders.reduce((acc, el) => acc + el.amount, 0);
console.log(total);

/* 
#### 2. Increment by 1
```javascript 
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
``` 
* Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements. */
console.log(`*******02*******`);

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
function incrementEl(arr) {
  let newArr = arr.map((el) => el + 1);
  return newArr;
}

let returnedArr = incrementEl(arrayOfNumbers);
console.log(`Original array`, arrayOfNumbers);
console.log(`Modified array`, returnedArr);

/* 
#### 3. Filter Evens
* Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

* Examples:
```javascript
filterEvens([1,2,3,11,12,13]); //returns [2,12]
filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6] */
console.log(`*******03*******`);
function filterEvens(arr) {
  let evenNumArr = arr.filter((el) => el % 2 === 0);
  console.log(evenNumArr);
}
filterEvens([1, 2, 3, 11, 12, 13]);
filterEvens([22, 2, 31, 110, 6, 13]);
/* 
#### 4. Filter Friends
* Given an array, create a function which filters array based on a search query.

* Examples

```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"]; */

console.log(`*******04*******`);
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
function filterItems(arr, str) {
  return arr.filter((el) => el.includes(str));
}
console.log(filterItems(friends, "ka"));
console.log(filterItems(friends, "e"));

/* 
#### 5. Sum Up
* Write a function called sum that uses the reduce method to sum up an array of numbers. 

* Examples:
```javascript
sum([1,2,3,4,5]); //returns 15
sum([6,7,7]); //returns 20 */

console.log(`*******05*******`);

function sum(arr) {
  return arr.reduce((acc, el) => acc + el, 0);
}
console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));

/* 
#### 6. Square Root
* Given an array of numbers, find the square root of each element in the array. */

console.log(`*******06*******`);
const myArray = [9, 16, 25, 36, 49, 64];
let sqrtArr = myArray.map((el) => Math.sqrt(el));
console.log(sqrtArr);
