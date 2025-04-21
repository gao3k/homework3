//1
function createStudentMap(students) {
    const studentMap = new Map();
    students.forEach(([name, score]) => {
      studentMap.set(name, score);
    });
    return studentMap;
  }
  
  // მაგალითი:
  const studentList = [["ანა", 85], ["გიორგი", 90], ["მარიამი", 78]];
  const map = createStudentMap(studentList);
  console.log(map); // Map(3) { 'ანა' => 85, 'გიორგი' => 90, 'მარიამი' => 78 }

  

//2
function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // მაგალითი:
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

  

//3
function increaseScores(studentMap) {
    const updatedMap = new Map();
    studentMap.forEach((score, name) => {
      updatedMap.set(name, score + 5);
    });
    return updatedMap;
  }
  
  // მაგალითი:
  const originalMap = new Map([["ანა", 85], ["გიორგი", 90], ["მარიამი", 78]]);
  const updated = increaseScores(originalMap);
  console.log(updated); // Map(3) { 'ანა' => 90, 'გიორგი' => 95, 'მარიამი' => 83 }
  