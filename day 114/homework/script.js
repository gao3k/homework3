//1
class Car {
    startEngine() {
        console.log("Engine started");
    }
    
    stopEngine() {
        console.log("Engine stopped");
    }
}

// კლასის გამოყენება
const myCar = new Car();
console.log(myCar);


//2
class Animals {
    constructor(animalSounds) {
        this.animalSounds = animalSounds;
    }
    
    makeSound() {
        for (const [animal, sound] of Object.entries(this.animalSounds)) {
            console.log(`${animal} makes ${sound} sound`);
        }
    }
}

// კლასის გამოყენება
const animalSounds = {
    "Dog": "Bark",
    "Cat": "Meow",
    "Cow": "Moo",
    "Sheep": "Baa",
    "Lion": "Roar"
};

const myAnimals = new Animals(animalSounds);
myAnimals.makeSound();
