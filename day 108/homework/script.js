//1) შემოდის n და n ზომის მასივი. თქვენი ამოცანაა თითოეული ელემენტისთვის დაბეჭდოთ რამდენჯერ მეორდება იგი მასივში.
//  მაგ( 6 3 1 2 1 2 1) პასუხია 1,3,2,3,2,3
function printFrequencies(arr) {
    let frequency = {};
    arr.forEach(item => {
        if (item in frequency) {
            frequency[item] += 1;
        } else {
            frequency[item] = 1;
        }
    });

    let result = arr.map(item => frequency[item]);
    console.log(result.join(","));
}

// მაგალითი გამოყენება
let arr1 = [3, 1, 2, 1, 2, 1];
printFrequencies(arr1);

//2) შემოდის n და n ზომის მასივი. დაბეჭდეთ მისი ელემენტები კლებადობით.
function printDescending(arr) {
    let sortedArr = arr.slice().sort((a, b) => b - a);
    console.log(sortedArr.join(" "));
}

// მაგალითი გამოყენება
let arr2 = [3, 1, 2, 1, 2, 1];
printDescending(arr2);

