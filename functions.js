// Functions - piece of code that allows reusablity by calling the function
// Can accept one or more parameters separated by commas

// Syntax
function functionName() {
	// function logic/code
}

console.log('Good morning Adan, have a nice day');
console.log('Good morning Adan, have a nice day');
console.log('Good morning Adan, have a nice day');

// Parameters - placeholder/variables defined in the function parentheses
// Arguments - values passed into a function

const time = 'day';

function greetings(name, times) {
	// local scope
	console.log(`Good morning ${name}, have a nice ${time}`);
}

// Calling/invoking the function
greetings('Adan', 'day');
greetings('John', 'week');
greetings('Jane', 'month');

function sum(numOne, numTwo) {
	// our logic
	console.log('I am here');
	return numOne + numTwo; // return keyword stops execution of a function
}

console.log(23 + 87);

console.log(sum(23, 89));
console.log(sum(89, 986));

const sumOfTwoNumbers = sum(23, 897);

console.log(sumOfTwoNumbers);

const otherSum = sum(78, 76);

console.log(otherSum);
