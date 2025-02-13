function countOddDigits(number) {
    let count = 0;
    while (number > 0) {
        let digit = number % 10;
        if (digit % 2 !== 0) {
            count += 1;
        }
        number = Math.floor(number / 10);
    }
    return count;
}

// შესავალი და გამოსავალი
let number = parseInt(prompt("შეიტანე მთელი რიცხვი: "), 10);
let oddCount = countOddDigits(number);
console.log(`რიცხვი შედგება ${oddCount} კენტი ციფრისგან`);
