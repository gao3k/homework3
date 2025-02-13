function arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    let sortedArray1 = array1.slice().sort();
    let sortedArray2 = array2.slice().sort();

    return sortedArray1.every((value, index) => value === sortedArray2[index]);
}

// მაგალითი
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 4, 3, 2, 1];
let arr3 = [1, 2, 3, 4, 6];

console.log(arraysAreEqual(arr1, arr2)); // true
console.log(arraysAreEqual(arr1, arr3)); // false
