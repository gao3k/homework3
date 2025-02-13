function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // ელემენტების ადგილების გადანაცვლება
    }
    return arr;
}

// გამოყენების მაგალითი
let students = ["Student 1", "Student 2", "Student 3", "Student 4", "Student 5", "Student 6", "Student 7", "Student 8", "Student 9", "Student 10", "Student 11", "Student 12", "Student 13", "Student 14", "Student 15", "Student 16"];
let shuffledStudents = shuffleArray(students);
console.log(shuffledStudents);
function groupStudents(students, numGroups) {
    let shuffledStudents = shuffleArray(students); // შემთხვევითი გადახვევა
    let groups = Array.from({ length: numGroups }, () => []);
    
    for (let i = 0; i < shuffledStudents.length; i++) {
        groups[i % numGroups].push(shuffledStudents[i]);
    }
    
    return groups;
}

// გამოყენების მაგალითი
let groupedStudents = groupStudents(students, 3);
groupedStudents.forEach((group, idx) => {
    console.log(`Group ${idx + 1}: ${group}`);
});
