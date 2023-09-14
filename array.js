/**
 * Data structures
 *
 * Allows us to represents other forms of data
 * like lists(arrays) and collections(objects)
 */

// 1. Arrays - list of values enclosed using square brackets []
// Those values can be of any data type

// creating an array

// 1. Array constructor
const fruits = new Array('orange', 'apple');

fruits;

// 2. Using square bracket
const scores = [12, 34, 43, 87];

scores;

console.log(typeof scores);

// Index - position of an element/value in an array
// The index always starts at 0

// Accessing values - use square bracket notation
console.log(scores[4]);

// Getting array length
console.log(scores.length);

// Updating values
let age = 20;

age;

age = 21;

age;

scores[0] = 45;

scores;

// Delete values

// Array Methods -  allow us to manipulate our arrays
const colors = ['red', 'green'];
//* Add elements
// 1. push() - add one or more elements at the end of an array
colors.push('blue', 'violet');

colors;

// 2. unshift() - adds one or more elements at the beginning of an array
colors.unshift('yellow', 'purple');

colors;

//* Remove elements
// 1. pop() - removes the element at the end of an array

const deleted = colors.pop();

deleted;

colors;

// 2. shift() - removes the element at the beginning of an array

colors.shift();

colors;

/**
 * 3. slice() - nondestructive (does not mutate the original array)
 * Can make copy of original array
 * Delete elements in an array
 */

//1. Using the slice method without any arguments will make a copy of the orginal array
const copyOfColors = colors.slice();

colors;

copyOfColors;

// spread operator (makes a copy too)
// Most common way as compared to using .slice()
const secondCopy = [...colors];

secondCopy.push('yellow', 'black');

secondCopy;

// 2. Deleting values
const deletedColors = secondCopy.slice(1, 5);

console.log(deletedColors);

//* Update elements
/**
 * 1. splice() - destructive (mutates orginal array)
 *
 * Delete existing elements
 * Add new elements
 * Update elements
 */
const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Friday'];

days;

// 1. Deleting
const erasedDays = days.splice(-2, 2);

days;

erasedDays;

const monday = days.splice(0, 1);

monday;

days;

// 2. Adding new elements(one or more)
// Second argument should always be 0
days.splice(0, 0, 'Sun', 'Mon');

days;

days.splice(5, 0, 'Fri', 'Sat');

days;

// 3. Updating values
// Second argument should be 1
days.splice(0, 2, 'Sunday', 'Monday');
days.splice(2, 1, 'Tuesday');
days.splice(-2, 1, 'Friday');

days;
