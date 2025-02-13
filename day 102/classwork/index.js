// ფუნქცია 1: შეამოწმოს დავალება
function checkAssignment() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("შევამოწმოთ დავალება");
      }, 1000); // 1 წამი
    });
  }
  
  // ფუნქცია 2: დავალების შესრულება
  function completeAssignment() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("დავალება შესრულდა");
      }, 2000); // 2 წამი
    });
  }
  
  // ფუნქცია 3: საბოლოო შეფასება
  function evaluateAssignment() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
          resolve(`დავალება შესრულდა წარმატებულად და მივიღე ${Math.floor(random * 10)}
  