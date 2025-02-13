let objectsArray = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// "for...of" ციკლის გამოყენება
for (let obj of objectsArray) {
    // "for...in" ციკლის გამოყენება თითოეული ობექტისთვის
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
    console.log('---');
}
//name: Alice
//age: 25
//---
//name: Bob
//age: 30
//---
//name: Charlie
//age: 35
//---




