class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    get info() {
      return `${this.name} is a ${this.species}`;
    }
  }
  class Mammal extends Animal {
    constructor(name, species, furColor) {
      super(name, species);
      this.furColor = furColor;
    }
  
    get info() {
      return `${super.info()} with ${this.furColor} fur`;
    }
  }
  class Dog extends Mammal {
    constructor(name, breed, furColor) {
      super(name, 'Dog', furColor);
      this.breed = breed;
    }
  
    get info() {
      return `${this.name} is a ${this.breed} dog with ${this.furColor} fur`;
    }
  }
  const myDog = new Dog("Buddy", "Golden Retriever", "golden");
  console.log(myDog.info); // Buddy is a Golden Retriever dog with golden fur
      