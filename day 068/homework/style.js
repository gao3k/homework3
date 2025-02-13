//Lowercase გარდაქმნა:

const lowerText = text.toLowerCase();
//აქ სტრინგი გარდაქმნება მცირე ასოებში, რათა იზრუნოს რეგისტრის განსხვავებებზე
 //(მაგ., "A" და "a" ითვლება როგორც ერთი სიმბოლო).


//Duplicates მასივი:

const duplicates = [];
//duplicates მასივი ინახავს ყველა განსხვავებულ სიმბოლოს, რომლებიც მრავალჯერ არის წარმოდგენილი.

//გარეშე ციკლები:


for(let i = 0; i < text.length; i++){}
    let count = 0;
    for(let x = 0; x < text.length; x++){
        if(lowerText[i] === lowerText[x]) {
            count++;
        }
    }
//გარეთა ციკლი (i) შერჩევს თითოეულ სიმბოლოს, ხოლო შიდა ციკლი (x) ითვლის, 
//რამდენჯერ არის ის სიმბოლო წარმოდგენილი მთელ ტექსტში.


//Duplicates შემოწმება:


if(count > 1 && !duplicates.includes(lowerText[i])){
    duplicates.push(lowerText[i]);
}
//თუ count მეტია 1-ზე და სიმბოლო ჯერ არ არის duplicates მასივში, ის ემატება მასში.

//მაჩვენებელი მნიშვნელობა:


return duplicates.length;

//ფუნქცია აბრუნებს duplicates მასივის სიგრძეს, რაც გამოხატავს, რამდენი
 //განსხვავებული სიმბოლოა, რომელიც მრავალჯერ არის წარმოდგენილი.

//ალტერნატიული გადაწყვეტა:
//შემდეგი ალტერნატიული გადაწყვეტა იყენებს JavaScript-ის Map და Set კლასებს, რაც უფრო ეფექტურ და 
//კომპაქტურ კოდს გვაძლევს:

function duplicateCount(text) {
    const lowerText = text.toLowerCase();
    const charCount = new Map();

    // სიმბოლოს ვათვლით
    for (const char of lowerText) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // ვთვლით რამდენი სიმბოლოა მრავალჯერ წარმოდგენილი
    let duplicates = 0;
    for (const count of charCount.values()) {
        if (count > 1) {
            duplicates++;
        }
    }

    return duplicates;
}
