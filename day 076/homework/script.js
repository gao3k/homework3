function commonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

// გამოყენების მაგალითი
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const common = commonElements(array1, array2);
console.log(common); // [4, 5]
