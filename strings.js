// strings

// String interpolation - injecting of values into a string
// only works when using back ticks
const firstName = 'John';
const lastName = 'Doe';

let fullName = `${firstName} ${lastName}, of age ${100 - 76} ${new Date()}`;

console.log(fullName);

// String concatenation - joining strings together using (+)
const newFullName =
	firstName + ` ` + lastName + ' ' + (100 - 77) + ' ' + new Date();

console.log(newFullName);
