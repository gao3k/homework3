class StudentGrades {
    constructor() {
        this.grades = new Map();
    }

    addStudent(name, subjects) {
        this.grades.set(name, subjects);
    }

    updateGrade(name, subject, grade) {
        if (this.grades.has(name)) {
            let subjects = this.grades.get(name);
            subjects[subject] = grade;
            this.grades.set(name, subjects);
        }
    }

    getAverageGrade(name) {
        if (this.grades.has(name)) {
            let subjects = this.grades.get(name);
            let total = 0;
            let count = 0;
            for (let subject in subjects) {
                total += subjects[subject];
                count++;
            }
            return total / count;
        }
        return null;
    }

    getRanking() {
        let studentsArray = Array.from(this.grades.keys());
        studentsArray.sort((a, b) => this.getAverageGrade(b) - this.getAverageGrade(a));
        return studentsArray;
    }

    printGrades() {
        this.grades.forEach((subjects, name) => {
            console.log(`${name}: ${JSON.stringify(subjects)}`);
        });
    }
}

let studentSystem = new StudentGrades();
studentSystem.addStudent("Alice", {Math: 85, Physics: 90, Chemistry: 78});
studentSystem.addStudent("Bob", {Math: 92, Physics: 88, Chemistry: 91});
studentSystem.addStudent("Charlie", {Math: 78, Physics: 74, Chemistry: 80});

// ახალი ქულის დამატება
studentSystem.updateGrade("Alice", "Math", 95);

console.log("სტუდენტების ქულები:");
studentSystem.printGrades();

console.log("სტუდენტების საშუალო ქულები:");
console.log("Alice:", studentSystem.getAverageGrade("Alice"));
console.log("Bob:", studentSystem.getAverageGrade("Bob"));
console.log("Charlie:", studentSystem.getAverageGrade("Charlie"));

console.log("სტუდენტების რეიტინგი საშუალო ქულების მიხედვით:");
console.log(studentSystem.getRanking());
