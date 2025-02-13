//1
function addMatrices(matrix1, matrix2) {
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        let row = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
    }
    return result;
}

// მაგალითი
let matrix1 = [[1, 3], [1, 4]];
let matrix2 = [[4, 1], [2, 2]];
console.log(addMatrices(matrix1, matrix2)); // [[5, 4], [5, 5]]


//2
function transposeMatrix(matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let row = [];
        for (let j = 0; j < matrix.length; j++) {
            row.push(matrix[j][i]);
        }
        result.push(row);
    }
    return result;
}

// მაგალითი
let matrix = [[1, 2, 3], [4, 5, 6]];
console.log(transposeMatrix(matrix)); // [[1, 4], [2, 5], [3, 6]]

//3
function sumDiagonals(matrix) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][matrix.length - i - 1];
    }
    return [primaryDiagonalSum, secondaryDiagonalSum];
}

// მაგალითი
let nxnMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(sumDiagonals(nxnMatrix)); // [15, 15]
