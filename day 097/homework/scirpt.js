// Helper function to create a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to get random delay between min and max seconds
const getRandomDelay = (min, max) => Math.floor(Math.random() * (max - min + 1) + min) * 1000;

// 1. Simple Promise with 2-second delay
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task 1 complete");
  }, 2000);
});

promise1.then(result => console.log('1:', result));

// 2. Immediately rejecting Promise
const promise2 = Promise.reject("Task 2 failed");
promise2.catch(error => console.log('2:', error));

// 3. Promise chain with number manipulation
const promise3 = Promise.resolve(5);
promise3
  .then(num => num * 2)
  .then(doubled => console.log('3:', doubled));

// 4. Sequential delays
const sequentialDelays = async () => {
  await delay(2000);
  console.log('4: First');
  await delay(1000);
  console.log('4: Second');
};
sequentialDelays();

// 5. Delayed rejection
const delayedRejection = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Task 3 failed");
    }, 2000);
  });
};
delayedRejection().catch(error => console.log('5:', error));

// 6. Random delay resolution
const randomDelayTask = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 complete");
    }, getRandomDelay(1, 5));
  });
};
randomDelayTask().then(result => console.log('6:', result));

// 7. Sequential random delays
const sequentialRandomDelays = async () => {
  await delay(getRandomDelay(1, 3));
  console.log('7: First');
  await delay(getRandomDelay(1, 3));
  console.log('7: Second');
};
sequentialRandomDelays();

// 8. Random delay rejection
const randomDelayRejection = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Task 3 failed");
    }, getRandomDelay(1, 4));
  });
};
randomDelayRejection().catch(error => console.log('8:', error));

// 9. Conditional random delay resolution
const conditionalRandomDelay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const random = Math.random();
      resolve(random > 0.5 ? "Task 1 complete" : "Task 1 was quick");
    }, getRandomDelay(1, 5));
  });
};
conditionalRandomDelay().then(result => console.log('9:', result));

// 10. Random delay with conditional rejection
const randomDelayConditionalRejection = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.3) {
        reject("Task 3 failed");
      } else {
        resolve("Task 3 complete");
      }
    }, getRandomDelay(1, 4));
  });
};
randomDelayConditionalRejection()
  .then(result => console.log('10:', result))
  .catch(error => console.log('10:', error));