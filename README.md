### Array Method .filter

#### 1. Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

* The function should not modify the array. It should return the new array.

For instance:
```js
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)
```

#### 2. Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

* The function should only modify the array. It should not return anything.

For instance:
```js
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1]
``` 

### Array Method .reduce

#### 1. Let’s say we received an array of users in the form {id:..., name:..., age... }.

* Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

For example:
```js 
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
console.log(usersById)
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
``` 
* Such function is really handy when working with server data.

* In this task we assume that id is unique. There may be no two array items with the same id.

* Please use array .reduce method in the solution. 

# Map, Filter, Reduce

#### 1. Get total orders
* Return the total amount of orders. 

```javascript
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];
```

#### 2. Increment by 1
```javascript 
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
``` 
* Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.

#### 3. Filter Evens
* Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

* Examples:
```javascript
filterEvens([1,2,3,11,12,13]); //returns [2,12]
filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
```

#### 4. Filter Friends
* Given an array, create a function which filters array based on a search query.

* Examples

```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
```

#### 5. Sum Up
* Write a function called sum that uses the reduce method to sum up an array of numbers. 

* Examples:
```javascript
sum([1,2,3,4,5]); //returns 15
sum([6,7,7]); //returns 20
```

#### 6. Square Root
* Given an array of numbers, find the square root of each element in the array.
