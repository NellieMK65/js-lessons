/**
 * Sequence
 *
 * Selection - we  can shoose to run certain codes and not others
 * Repition - we can choose to do something until a condition is met
 */

// 1. Selection using if statement
const age = 18;

if (age > 18) {
	console.log('Can vote');
} else {
	console.log('Cannot vote');
}

console.log('Program still running');

// users - students, tms, pod leads
const user = 'teacher';
const userType = 'pod';

if (user === 'student') {
	if (userType === 'tm') {
		console.log('Student/TM logged in');
	} else {
		console.log('Student logged in');
	}
} else if (user === 'tm') {
	console.log('TM logged in');
} else if (user === 'pod') {
	console.log('Pod lead logged in');
} else if (user === 'student' && userType === 'tm') {
	console.log('Student/TM logged in');
} else {
	console.log('User not found');
}

// 2. Selection using switch statement
switch (user) {
	case 'student':
		userType === 'tm'
			? console.log('Student/TM')
			: console.log('Student logged in');
		break;
	case 'tm':
		console.log('TM logged in');
		break;
	case 'pod':
		console.log('Pod lead logged in');
		break;
	default:
		console.log('User not found');
		break;
}

// 3. Repition using while loop
// syntax

// Infinity loop
// Can be terminated using ctrl(cmd) + c
// while (true) {
// 	console.log('Executing this block of code');
// }

// Natural terminating

let count = 6;

while (count < 5) {
	console.log(`Count ${count}`);
	count = count + 1;
}

console.log(count);

// 4. Repition using do/while
// will always run atleast once

let countTwo = 0;

do {
	console.log(`Count: ${countTwo}`);
	countTwo++;
} while (countTwo < 5);

console.log(countTwo);
