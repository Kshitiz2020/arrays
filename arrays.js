// Task 1
// Create an array called "names" and set it's items to be
// David, Ann, Leia, Mathew and Mark.
// Print the array.
let names = ["David", "Ann", "Leia", "Mathew", "Mark"];
console.log(names);

// Task 2
// Print the second item of the array from the task 1.
console.log(names[1]);
// Task 3
// Print the length of the array.
console.log(names.length);
// Task 4
// Print the last item of the array
console.log(names[names.length - 1]);
// Task 5
// Add Peter as the last item to the array and print the whole array
names.Push("peter");
console.log(names);

// Task 6
// Print the array with spaces, not commas

console.log(names.join(" "));
// Task 7
// Replace Mathew in the array with Lisa and Abraham
const abc = names.splice(3, 1, "lisa", "Abraham");
console.log(names);

// Task 8
// Sort the array in the alphabetical order and print it
console.log(names.sort());

// Task 9
// Create an array called numbers and fill it with values 1, 7, 45, 32, 27, 86.
// Sort the numbers from largest to smallest. Print them.
let numbers = [1, 7, 45, 32, 27, 86];
let number = numbers.sort(function (a, b) {
  return a - b;
});
console.log(number.reverse());
// Task 10

// Randomize the numbers array.
number.sort((a, b) => 0.5 - Math.random());

// Task 11
// Find the largest and smallest value from the numbers array using sort() function.
// Print those values.
let numbers = [1, 7, 45, 32, 27, 86];
let number = numbers.sort(function (a, b) {
  return a - b;
});
let smallest = number[0];
let largest = number[number.length - 1];
console.log(smallest);
console.log(largest);
