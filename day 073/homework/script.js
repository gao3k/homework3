class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    get info() {
      return `${this.name} is a ${this.species}`;
    }
  
    static classify() {
      return "Animal";
    }
  }
  
  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    get info() {
      return `${this.make} ${this.model}`;
    }
  
    static classify() {
      return "Vehicle";
    }
  }
  class Human {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    static classify() {
      return "Human";
    }
  }
  class Dog extends Animal {
    constructor(name, breed) {
      super(name, "Dog");
      this.breed = breed;
    }
  
    get info() {
      return `${this.name} is a ${this.breed} dog`;
    }
  }
  class Truck extends Car {
    constructor(make, model, payloadCapacity) {
      super(make, model);
      this.payloadCapacity = payloadCapacity;
    }
  
    get info() {
      return `${this.make} ${this.model} with a payload capacity of ${this.payloadCapacity} kg`;
    }
  }
  class Doctor extends Human {
    constructor(firstName, lastName, specialty) {
      super(firstName, lastName);
      this.specialty = specialty;
    }
  
    get info() {
      return `Dr. ${this.fullName}, a specialist in ${this.specialty}`;
    }
  }
  const myDog = new Dog("Buddy", "Golden Retriever");
  console.log(myDog.info); // Buddy is a Golden Retriever dog
  
  const myTruck = new Truck("Ford", "F-150", 1300);
  console.log(myTruck.info); // Ford F-150 with a payload capacity of 1300 kg
  
  const myDoctor = new Doctor("Jane", "Smith", "Cardiology");
  console.log(myDoctor.info); // Dr. Jane Smith, a specialist in Cardiology
  