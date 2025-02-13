//1
function createStudentMap(students) {
    let studentMap = new Map();
    for (let student of students) {
        studentMap.set(student.name, student.score);
    }
    return studentMap;
}

// მაგალითი
let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "David", score: 91 },
    { name: "Eva", score: 88 }
];

let studentMap = createStudentMap(students);
studentMap.forEach((score, name) => {
    console.log(`${name}: ${score}`);
});


//2
function removeDuplicates(array) {
    return Array.from(new Set(array));
}

// მაგალითი
let numbers = [1, 2, 3, 1, 2, 4, 5];
let uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

//3
function increaseScores(studentMap) {
    let newStudentMap = new Map();
    studentMap.forEach((score, name) => {
        newStudentMap.set(name, score + 5);
    });
    return newStudentMap;
}

// მაგალითი
let updatedStudentMap = increaseScores(studentMap);
updatedStudentMap.forEach((score, name) => {
    console.log(`${name}: ${score}`);
});

