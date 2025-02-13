// Array utility functions
export const unique = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flatten(item) : item), []);
export const groupBy = (arr, key) => arr.reduce((group, item) => {
  (group[item[key]] = group[item[key]] || []).push(item);
  return group;
}, {});
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));