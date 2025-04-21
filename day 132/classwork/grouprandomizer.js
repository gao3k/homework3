// groupRandomizer.js
function createGroups(arr, groupSize) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  const result = [];
  for (let i = 0; i < shuffled.length; i += groupSize) {
    result.push(shuffled.slice(i, i + groupSize));
  }
  return result;
}

const people = ["Ana", "Nika", "Luka", "Saba", "Mariam", "Dato", "Lizi", "Giorgi"];
console.log(createGroups(people, 3));
