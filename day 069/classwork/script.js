//3
const person = { name: "Luka", age: 30 };

for (const key in person) {
    console.log(key + ": " + person[key]); // Outputs: name: Luka, age: 30
}


const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
    console.log(fruit); // Outputs: apple, banana, cherry
}


//4// ჩვეულებრივი ფუნქცია
function add(a, b) {
    return a + b;
}

// arrow ფუნქცია
const addArrow = (a, b) => a + b;

// მაგალითი
console.log(add(2, 3)); // 5
console.log(addArrow(2, 3)); // 5

//5)
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // Outputs: 3, 3, 3
    }, 1000);
}

console.log(x); // Outputs: undefined
var x = 5;
console.log(x); // Outputs: 5
