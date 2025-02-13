// Map ობიექტის შექმნა და 5 წყვილის დამატება
let bestStudents = new Map();
bestStudents.set("Group A", "Alice");
bestStudents.set("Group B", "Bob");
bestStudents.set("Group C", "Charlie");
bestStudents.set("Group D", "David");
bestStudents.set("Group E", "Eva");

// მაპის ზომის ბეჭდვა
console.log("Map-ის ზომა:", bestStudents.size);

// ჯგუფების საუკეთესო მოსწავლეების ბეჭდვა
bestStudents.forEach((student, group) => {
    console.log(`${group} საუკეთესო მოსწავლე: ${student}`);
});
