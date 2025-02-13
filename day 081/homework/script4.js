function countLeftSymbols(n, symbols) {
    let symbolCounts = {};
    let result = [];
    
    for (let symbol of symbols) {
        if (symbol in symbolCounts) {
            result.push(symbolCounts[symbol]);
            symbolCounts[symbol] += 1;
        } else {
            result.push(0);
            symbolCounts[symbol] = 1;
        }
    }
    
    return result;
}

// შესავალი
let n = parseInt(prompt("შეიტანე სიმბოლოების რაოდენობა: "), 10);
let symbols = [];
for (let i = 0; i < n; i++) {
    symbols.push(prompt(`სიმბოლო ${i+1}: `));
}

// დამუშავება და გამოსავალი
let counts = countLeftSymbols(n, symbols);
for (let i = 0; i < n; i++) {
    console.log(`სიმბოლო ${symbols[i]}: ${counts[i]} მარცხნივ მყოფი`); }
