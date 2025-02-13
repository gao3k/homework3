// Math utility functions
export const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
export const multiply = (...numbers) => numbers.reduce((acc, curr) => acc * curr, 1);
export const average = (...numbers) => sum(...numbers) / numbers.length;
export const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);