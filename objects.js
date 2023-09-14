/**
 * Objects - collection of data consisting of key value pairs (properties),
 *  separated by comma
 */

// Syntax
const car = {
	color: 'white',
	model: 'Audi',
	// Nesting
	owner: {
		fullName: 'John Doe',
		address: 'Kinoo',
	},
	previousOwners: [
		'Jane',
		{
			fullName: 'Ironman',
			address: 'New york',
		},
	],
	yearOfManufactor: 2015,
};

// Accessing values
// 1. Dot notation(.)
console.log(car.owner.address);
console.log(car.previousOwners[1].address);

// 2. Square bracket notation ([])
console.log(car['owner']['address']);

// Adding properties
car.numberPlate = 'KCZ';

console.log(car);

// Updating
car.model = 'BMW';

console.log(car);

// Deleting
delete car.numberPlate;

console.log(car);

// Object methods
// 1. Object.keys() - returns an array of object keys
console.log(Object.keys(car));

// 2. Object.values() - returns an array of object values
console.log(Object.values(car));

// Make object copy using spread operator (...)
const carCopy = { ...car };

console.log(carCopy);

// Array looping using for loop - (repeating statements until a condition is met)
// syntax
const colors = ['red', 'green', 'blue'];

for (let i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

let count = 0;

while (count < colors.length) {
	console.log(colors[count]);
	count++;
}

// for of
for (const color of colors) {
	console.log(color);
}

// Object iteration
// for in
for (const key in car) {
	console.log(key);
	console.log(car[key]);
}
