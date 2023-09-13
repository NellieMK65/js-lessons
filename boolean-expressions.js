/**
 * Boolean expressions
 *
 * Anything that evaluates to true/false
 */

console.log(Boolean(0));

// Comparision operators

/**
 * Strict equality operator (===)
 *
 * Compares values and data type
 */

console.log(23 === 23); //works
console.log(23 === '23'); //doesn`t work

/**
 * Strict inequality operator (!==)
 *
 * Checks if the values are not equal and data type
 */
console.log(23 !== 24); //works
console.log(23 !== '23'); //doesn`t work

/**
 * Loose equality (==) & inequality (!=) operator
 * compare the values
 */
console.log(23 == '23'); //works
console.log(23 != '23');

// Number operators
console.log(34 > 89);
console.log(23 < 34);
console.log(23 >= 25);

// Logical operators

// 1. NOT/bang (!) - returns the opposite
console.log(!false);
console.log(!true);

// 2. Double bang (!!)
console.log(!!'');

// 3. AND (&&)
console.log(23 < 34 && !!'sm');

// 4. OR (||) - double pipe
console.log(23 < 3 || 23 === 23);

// Ternary operator
const age = 25;

const canVote = age > 18 && 23 === '23' ? 2 + 3 + '5' : 'Cannot vote';

console.log(canVote);
