from flask import Flask, render_template
from models import Animal, Mammal, Bird, Reptile

app = Flask(__name__)

@app.route('/')
def index():
    animals = [
        Mammal("Simba", "Lion", 5, "Savannah", 110),
        Bird("Eagle", "Eagle", 3, "Mountains", 200),
        Reptile("Nagini", "Cobra", 2, "Forest", True)
    ]
    return render_template('index.html', animals=animals)

if __name__ == '__main__':
    app.run(debug=True)
class Animal:
    def __init__(self, name, species, age, habitat):
        self.name = name
        self.species = species
        self.age = age
        self.habitat = habitat
    
    def describe(self):
        return f"{self.name} is a {self.species} aged {self.age} living in {self.habitat}."

class Mammal(Animal):
    def __init__(self, name, species, age, habitat, gestation_period):
        super().__init__(name, species, age, habitat)
        self.gestation_period = gestation_period

    def describe(self):
        base_description = super().describe()
        return f"{base_description} It has a gestation period of {self.gestation_period} days."

class Bird(Animal):
    def __init__(self, name, species, age, habitat, wingspan):
        super().__init__(name, species, age, habitat)
        self.wingspan = wingspan

    def describe(self):
        base_description = super().describe()
        return f"{base_description} It has a wingspan of {self.wingspan} cm."

class Reptile(Animal):
    def __init__(self, name, species, age, habitat, is_venomous):
        super().__init__(name, species, age, habitat)
        self.is_venomous = is_venomous

    def describe(self):
        base_description = super().describe()
        venomous_status = "venomous" if self.is_venomous else "non-venomous"
        return f"{base_description} It is {venomous_status}."
