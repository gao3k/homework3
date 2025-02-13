import { capitalize, reverse, countVowels, isPalindrome } from './string.mjs';
import { sum, multiply, average, factorial } from './math.mjs';
import { getRandomInt, getRandomElement, generateRandomColor, shuffleArray } from './random.mjs';
import { Person, Calculator } from './class.mjs';
import { unique, flatten, groupBy, chunk } from './arr.mjs';

// Testing string utilities
console.log('\n--- String Utilities ---');
console.log('Capitalize:', capitalize('hello'));
console.log('Reverse:', reverse('hello'));
console.log('Count vowels:', countVowels('hello'));
console.log('Is palindrome:', isPalindrome('racecar'));

// Testing math utilities
console.log('\n--- Math Utilities ---');
console.log('Sum:', sum(1, 2, 3, 4, 5));
console.log('Multiply:', multiply(1, 2, 3, 4));
console.log('Average:', average(1, 2, 3, 4, 5));
console.log('Factorial of 5:', factorial(5));

// Testing random utilities
console.log('\n--- Random Utilities ---');
console.log('Random int (1-10):', getRandomInt(1, 10));
console.log('Random element:', getRandomElement([1, 2, 3, 4, 5]));
console.log('Random color:', generateRandomColor());
console.log('Shuffled array:', shuffleArray([1, 2, 3, 4, 5]));

// Testing classes
console.log('\n--- Classes ---');
const person = new Person('John', 30);
console.log('Person greeting:', person.greet());

const calc = new Calculator();
console.log('Calculator:', calc.add(5, 3), calc.multiply(4, 2));

// Testing array utilities
console.log('\n--- Array Utilities ---');
console.log('Unique:', unique([1, 2, 2, 3, 3, 4]));
console.log('Flatten:', flatten([1, [2, 3], [4, [5, 6]]]));
console.log('Chunk:', chunk([1, 2, 3, 4, 5], 2));

const users = [
  { id: 1, role: 'admin' },
  { id: 2, role: 'user' },
  { id: 3, role: 'admin' }
];
console.log('Group by role:', groupBy(users, 'role'));