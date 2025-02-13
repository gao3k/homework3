//1)
 //1.
 const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
    console.log(num);
  });

//2.
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(num => {
  sum += num;
});
console.log("Sum:", sum);

//3.
const students = ["Alice", "Bob", "Charlie"];
students.forEach(name => {
  console.log(`Student: ${name}`);
});


//4.
const integers = [1, 2, 3, 4, 5];
const doubled = [];
integers.forEach(num => {
  doubled.push(num * 2);
});
console.log("Doubled Values:", doubled);


//5.
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log("Squared Values:", squares);


//6.
const strings = ["apple", "banana", "cherry"];
const lengths = strings.map(str => str.length);
console.log("Lengths:", lengths);


//7.
const lowercaseStrings = ["hello", "world"];
const uppercased = lowercaseStrings.map(str => str.toUpperCase());
console.log("Uppercase:", uppercased);


//8.
const integers = [1, 2, 3, 4, 5, 6];
const evenNumbers = integers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);


//9.
const names = ["Alice", "Bob", "Charlotte", "David"];
const longNames = names.filter(name => name.length > 5);
console.log("Long Names:", longNames);


//10.
const numbers = [-3, -2, -1, 0, 1, 2, 3];
const positiveNumbers = numbers.filter(num => num > 0);
console.log("Positive Numbers:", positiveNumbers);


//2)
//კლონის ფუნქციები
function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  }
//-
  function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
//-
function customFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }
//-
function customReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
  }

  

  
