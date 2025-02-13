//Task 1: Create a Basic Object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person);

//Task 2: Access Object Properties
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(car.make);  // Output: Toyota
console.log(car.model); // Output: Corolla
console.log(car.year);  // Output: 2020


//Task 3: Modify Object Properties
person.age = 35;
console.log(person.age); // Output: 35


//Task 4: Add New Property
person.hobby = "Reading";
console.log(person.hobby); // Output: Reading


//Task 5: Delete Property
delete person.city;
console.log(person.city); // Output: undefined


//Task 6: Object Method
let calculator = {
    a: 5,
    b: 10,
    add: function() {
        return this.a + this.b;
    }
};
console.log(calculator.add()); // Output: 15


//Task 7: Create Multiple Objects
let book1 = {
    title: "1984",
    author: "George Orwell",
    pages: 328
};

let book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281
};

let book3 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180
};

console.log(book1, book2, book3);


//Task 9: Constructor Function
function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {
        console.log(this.sound);
    };
}


//function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {
        console.log(this.sound);
    };
}


//function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {
        console.log(this.sound);
    };

//function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {
        console.log(this.sound);
    };

//Task 10: Create Objects with Constructor
let cat = new Animal("Cat", "Meow");
let dog = new Animal("Dog", "Woof");

cat.makeSound(); // Output: Meow
dog.makeSound(); // Output: Woof


//Task 11: Modify Object Using Constructor
Animal.prototype.changeName = function(newName) {
    this.name = newName;
};

cat.changeName("Kitty");
console.log(cat.name); // Output: Kitty
