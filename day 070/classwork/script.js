//1)
const numbers = [1, 2, 3, 4, 5];

// 1. დაბეჭდვა ყველა ელემენტის
numbers.forEach(num => {
  console.log(num);
});

// 2. ელემენტების ჯამი
let sum = 0;
numbers.forEach(num => {
  sum += num;
});
console.log("Sum:", sum);

// 3. ელემენტების მართვა
const doubled = [];
numbers.forEach(num => {
  doubled.push(num * 2);
});
console.log("Doubled:", doubled);

//კლონის ფუნქცია
function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  }
  
  // გამოსცადოთ
  customForEach(numbers, num => console.log(num));
  

  
  //2)
  const numbers = [1, 2, 3, 4, 5];

// 1. ელემენტების გაორმაგება
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// 2. სტრინგების გაწვდვა
const words = ["hello", "world"];
const uppercased = words.map(word => word.toUpperCase());
console.log("Uppercased:", uppercased);

// 3. ობიექტების მოდიფიკაცია
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
const names = users.map(user => user.name);
console.log("Names:", names);

//კლონის ფუნქცია
function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
  
  // გამოსცადოთ
  const doubledCustom = customMap(numbers, num => num * 2);
  console.log("Doubled with customMap:", doubledCustom);
  

//3)
const numbers = [1, 2, 3, 4, 5];

// 1. მხოლოდ კენტების გამოყვანა
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);

// 2. მხოლოდ ზემოთ 3-ს მეტი
const aboveThree = numbers.filter(num => num > 3);
console.log("Above Three:", aboveThree);

// 3. სტრინგების ფილტრაცია
const words = ["apple", "banana", "cherry", "date"];
const filteredWords = words.filter(word => word.length > 5);
console.log("Filtered Words:", filteredWords);


//კლონის ფუნქცია
function customFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  // გამოსცადოთ
  const oddNumbersCustom = customFilter(numbers, num => num % 2 !== 0);
  console.log("Odd Numbers with customFilter:", oddNumbersCustom);

  
  //მე-4 დავალება ამ სამივე კოდში პირდაპირ გავაკეთე ახსნილია 3-მივე კოდი.
