#1) 7kyu
function multiples(s1, s2) {}
  let a = s1.reduce((a, b) => a + b, 0);
  let b = s2.reduce((a, b) => a + b, 0);
  return a === b

  #2) 7kyu

  function cubeOdd(arr) {
  if (!arr.every(Number.isInteger)) return undefined;
  return arr.map(x => x ** 3).filter(x => x % 2).reduce((a, b) => a + b, 0);
}