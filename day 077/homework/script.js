//1
function printPositions(rows, cols) {
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            console.log(`row: ${i}, col: ${j}`);
        }
    }
}

// მაგალითი
printPositions(2, 2);
// შედეგი:
// row: 1, col: 1
// row: 1, col: 2
// row: 2, col: 1
// row: 2, col: 2

//2
function multiplicationTable() {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        let row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}

// გამოყენების მაგალითი
let table = multiplicationTable();
console.log(table);

//3
function printGreaterPairs(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j > i) {
                console.log(`(${i}, ${j})`);
            }
        }
    }
}

// გამოყენების მაგალითი
printGreaterPairs(3);
// შედეგი:
// (1, 2)
// (1, 3)
// (2, 3)
