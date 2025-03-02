//1
//ა)
function rowAverage(matrix) {
    matrix.forEach((row) => {
        const avg = row.reduce((sum, num) => sum + num, 0) / row.length;
        console.log(`Row average: ${avg}`);
    });
}

// მონაცემების შეყვანა
let matrix = [];
for (let i = 0; i < 7; i++) {
    matrix.push(prompt(`Enter row ${i + 1}:`).split(" ").map(Number));
}

rowAverage(matrix);


//ბ)
function columnAverage(matrix) {
    for (let j = 0; j < matrix[0].length; j++) {
        const colSum = matrix.reduce((sum, row) => sum + row[j], 0);
        const avg = colSum / matrix.length;
        console.log(`Column ${j + 1} average: ${avg}`);
    }
}

columnAverage(matrix);



//2
function processMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j % 2 === 0) {  // ლუწინდექსიანი სვეტი
                matrix[i][j] /= 2;
            } else {  // კენტინდექსიანი სვეტი
                matrix[i][j] %= 13;
            }
        }
    }

    matrix.forEach(row => {
        console.log(row.join(" "));
    });
}

// მონაცემების შეყვანა
matrix = [];
for (let i = 0; i < 7; i++) {
    matrix.push(prompt(`Enter row ${i + 1}:`).split(" ").map(Number));
}

processMatrix(matrix);

//3
function swapFirstLast(matrix) {
    [matrix[0], matrix[matrix.length - 1]] = [matrix[matrix.length - 1], matrix[0]];
    matrix.forEach(row => {
        console.log(row.join(" "));
    });
}

// მონაცემების შეყვანა
matrix = [];
for (let i = 0; i < 5; i++) {
    matrix.push(prompt(`Enter row ${i + 1}:`).split(""));
}

swapFirstLast(matrix);


//4
function swapRows(matrix) {
    [matrix[1], matrix[4]] = [matrix[4], matrix[1]];
    matrix.forEach(row => {
        console.log(row.join(" "));
    });
}

// მონაცემების შეყვანა
matrix = [];
for (let i = 0; i < 6; i++) {
    matrix.push(prompt(`Enter row ${i + 1}:`).split(" ").map(Number));
}

swapRows(matrix);


//5
function findMaxCoordinate(matrix) {
    let max_value = -Infinity;
    let max_coords = [0, 0];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > max_value) {
                max_value = matrix[i][j];
                max_coords = [i, j];
            }
        }
    }
    return max_coords;
}

// მონაცემების შეყვანა
const n = Number(prompt("Enter number of rows:"));
const m = Number(prompt("Enter number of columns:"));
matrix = [];

for (let i = 0; i < n; i++) {
    matrix.push(prompt(`Enter row ${i + 1}:`).split(" ").map(Number));
}

const max_coords = findMaxCoordinate(matrix);
console.log(`Max element coordinates: Row ${max_coords[0] + 1}, Column ${max_coords[1] + 1}`);
