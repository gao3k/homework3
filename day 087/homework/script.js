//1
let countries = new Map();
countries.set("Georgia", "Tbilisi");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");

// დაბეჭდე ყველა წყვილი
countries.forEach((capital, country) => {
    console.log(`${country}: ${capital}`);
});

//2
let cities = new Map();
cities.set("Tbilisi", "Georgia");
cities.set("Paris", "France");
cities.set("Tokyo", "Japan");

let keyToCheck = "Tbilisi";
let exists = cities.has(keyToCheck);

console.log(`Does key "${keyToCheck}" exist in the Map?`, exists);

//3
let students = new Map();
students.set("Alice", 85);
students.set("Bob", 92);
students.set("Charlie", 78);

let studentName = "Bob";
let studentScore = students.get(studentName);

console.log(`${studentName}'s score is:`, studentScore);

//4
let keys = students.keys();

for (let key of keys) {
    console.log(key);
}

//5
students.delete("Alice");

students.forEach((score, name) => {
    console.log(`${name}: ${score}`);
});

//6
let products = new Map();
products.set("Apple", 1.2);
products.set("Banana", 0.8);
products.set("Cherry", 2.5);

console.log("Map size:", products.size);

//7
products.set("Apple", 1.5);

products.forEach((price, product) => {
    console.log(`${product}: ${price}`);
});

//8
let isEmpty = products.size === 0;
console.log("Is the Map empty?", isEmpty);

//9
let productObj = {
    name: "Laptop",
    price: 1500
};

let productMap = new Map(Object.entries(productObj));
productMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

//10
products.clear();

isEmpty = products.size === 0;
console.log("Is the Map empty after clear()?", isEmpty);
