// Rejecting Promise

function task3() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Task 3 failed"), 2000);
  });
}

task3().catch(err => console.log(err));
//6) Resolve after random delay (1–5s)

function task1() {
  const delay = Math.floor(Math.random() * 5000) + 1000;
  return new Promise(resolve => {
    setTimeout(() => resolve("Task 1 complete"), delay);
  });
}

task1().then(console.log);
//7) Chain .then delays

function firstTask() {
  const delay = Math.floor(Math.random() * 3000) + 1000;
  return new Promise(resolve => {
    setTimeout(() => resolve("First"), delay);
  });
}

firstTask()
  .then(msg => {
    console.log(msg);
    const delay = Math.floor(Math.random() * 3000) + 1000;
    return new Promise(resolve => setTimeout(() => resolve("Second"), delay));
  })
  .then(console.log);
//8) Reject with random delay

function task3Fail() {
  const delay = Math.floor(Math.random() * 4000) + 1000;
  return new Promise((_, reject) => {
    setTimeout(() => reject("Task 3 failed"), delay);
  });
}

task3Fail().catch(console.log);
//9) Resolve with different message based on random

function taskRandom() {
  const delay = Math.floor(Math.random() * 5000) + 1000;
  const randomNum = Math.random();
  return new Promise(resolve => {
    setTimeout(() => {
      if (randomNum > 0.5) resolve("Task 1 complete");
      else resolve("Task 1 was quick");
    }, delay);
  });
}

taskRandom().then(console.log);
//10) Reject if random < 0.3

function taskCheck() {
  const delay = Math.floor(Math.random() * 4000) + 1000;
  const randomNum = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNum < 0.3) reject("Task 3 failed");
      else resolve("Task 3 complete");
    }, delay);
  });
}

taskCheck()
  .then(console.log)
  .catch(console.error);