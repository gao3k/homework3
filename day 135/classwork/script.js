console.time('Set');
let s = new Set();
for (let i = 0; i < 1_000_000; i++) {
  s.add(i);
}
console.timeEnd('Set');

console.time('Array Push');
let arr = [];
for (let i = 0; i < 1_000_000; i++) {
  arr.push(i);
}
console.timeEnd('Array Push');
