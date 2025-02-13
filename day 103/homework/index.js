//1 kyu
function findNextSquare(sq) {
    const root = Math.sqrt(sq);
    if (Number.isInteger(root)) {
      const nextRoot = root + 1;
      return nextRoot * nextRoot; // Square of the next integer
    } else {
      return -1; // Not a perfect square
    }
  }
  
  // Examples
  console.log(findNextSquare(121)); // 144
  console.log(findNextSquare(625)); // 676
  console.log(findNextSquare(114)); // -1
  
  //2 kyu
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    def
  } solution(text, ending);
    function solution(str, ending) {
  return str.endsWith(ending);
}

// Examples
console.log(solution('abc', 'bc')); // true
console.log(solution('abc', 'd'));  // false
console.log(solution('samurai', 'ai')); // true
console.log(solution('sumo', 'omo')); // false
console.log(solution('abc', 'abcd')); // false
console.log(solution('abcabc', 'bc')); // true
console.log(solution('fails', 'ails')); // true
console.log(solution('this', 'fails')); // false

