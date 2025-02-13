let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    occupation: 'Engineer',
    isMarried: false,

    getFullName: function() {
       return this.firstName + ' ' + this.lastName;
    },

    haveBirthday: function() {
        this.age += 1;
        console.log('Happy Birthday, ' + this.firstName + '! You are now ' + this.age + ' years old.');
    }
};

person.age = 31;
person.email = 'john.doe@example.com'; 
delete person.isMarried;

console.log('Person Object:', person);

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

console.log('Full Name:', person.getFullName());
person.haveBirthday();
