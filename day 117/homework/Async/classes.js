//1 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let john = new Person("John", 30);
john.greet();

//2
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    showBrand() {
        console.log(`This car is a ${this.brand}`);
    }
}

let myCar = new Car("Tesla");
myCar.showBrand();

//3
class User {
    constructor(username) {
        this._username = username;
    }
    get username() {
        return this._username.toUpperCase();
    }
    set username(newName) {
        this._username = newName;
    }
}

let user = new User("johnDoe");
console.log(user.username);
user.username = "JaneDoe";
console.log(user.username);


//4
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}

let myDog = new Dog("Buddy");
myDog.speak();


//5
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtils.add(5, 10));
