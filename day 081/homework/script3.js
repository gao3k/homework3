function specialNumbersCount(n, numbers) {
    let count = 0;
    let specialNumbers = [];
    for (let number of numbers) {
        if ((number < 100 && (number % 3 === 0 && number % 6 !== 0)) || (number % 5 === 0 && number % 10 !== 0)) {
            count += 1;
            specialNumbers.push(number);
        }
    }
    return { count, specialNumbers };
}

// შესავალი
let n = parseInt(prompt("შეიტანე რიცხვების რაოდენობა: "), 10);
let numbers = [];
for (let i = 0; i < n; i++) {
    numbers.push(parseInt(prompt(`რიცხვი ${i+1}: `), 10));
}

// დამუშავება და გამოსავალი
let result = specialNumbersCount(n, numbers);
console.log(`${result.count} რიცხვი აკმაყოფილებს პირობებს: ${result.specialNumbers}`);
