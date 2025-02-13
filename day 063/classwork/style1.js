function manualFilter(predicate, array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

 //Example usage:
const isEven = num => num % 2 === 0;
const numbers = [1, 2, 3, 4, 5, 6];
const filteredNumbers = manualFilter(isEven, numbers);

console.log(filteredNumbers); // Output: [2, 4, 6]


//Math.sqrt
console.log(Math.sqrt(4));    // 2
console.log(Math.sqrt(16));   // 4
console.log(Math.sqrt(25));   // 5
console.log(Math.sqrt(49));   // 7
console.log(Math.sqrt(64));   // 8

//Math.ceil
console.log(Math.ceil(4.1));  // 5
console.log(Math.ceil(7.6));  // 8
console.log(Math.ceil(0.4));  // 1
console.log(Math.ceil(-2.3)); // -2
console.log(Math.ceil(9.9));  // 10

//Math.floor
console.log(Math.floor(4.9));  // 4
console.log(Math.floor(7.1));  // 7
console.log(Math.floor(0.6));  // 0
console.log(Math.floor(-2.3)); // -3
console.log(Math.floor(9.9));  // 9

//Math.trunc
console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(7.1));  // 7
console.log(Math.trunc(0.6));  // 0
console.log(Math.trunc(-2.3)); // -2
console.log(Math.trunc(9.9));  // 9

//Math.pow]
console.log(Math.pow(2, 3));   // 8
console.log(Math.pow(4, 2));   // 16
console.log(Math.pow(5, 3));   // 125
console.log(Math.pow(7, 2));   // 49
console.log(Math.pow(10, 3));  // 1000

//Math.abs
console.log(Math.abs(-4.7));   // 4.7
console.log(Math.abs(3));      // 3
console.log(Math.abs(-0.5));   // 0.5
console.log(Math.abs(-10));    // 10
console.log(Math.abs(7.8));    // 7.8

//Math.min 
console.log(Math.min(4, 7, 1));    // 1
console.log(Math.min(10, 5, 8));   // 5
console.log(Math.min(-3, -7, 2));  // -7
console.log(Math.min(0, 3, -2));   // -2
console.log(Math.min(9, 4, 6));    // 4

//Math.max
console.log(Math.max(4, 7, 1));    // 7
console.log(Math.max(10, 5, 8));   // 10
console.log(Math.max(-3, -7, 2));  // 2
console.log(Math.max(0, 3, -2));   // 3
console.log(Math.max(9, 4, 6));    // 9




const intervalId = setInterval(() => {
    const now = new Date();
    const currentMinute = now.getMinutes();
    
    console.log(`Current time: ${now.toLocaleTimeString()}`);
    
    if (currentMinute === 35) {
        clearInterval(intervalId);
        console.log("Interval cleared because the current minute is 35.");
    }
}, 1000);


const now = new Date();

console.log("Year: " + now.getFullYear());          // year
console.log("Month: " + (now.getMonth() + 1));      // month (starts with 0, so we add 1 )
console.log("Date: " + now.getDate());              // date
console.log("Day: " + now.getDay());                // day of the week (0 to 6, whenever thers 0 its Sunday)
console.log("Hours: " + now.getHours());            // hours
console.log("Minutes: " + now.getMinutes());        // minutes
console.log("Seconds: " + now.getSeconds());        // seconds
console.log("Milliseconds: " + now.getMilliseconds()); // milliseconds



// first_Date ობიექტი
let date1 = new Date("2022-04-25");

// second_Date ობიექტი
let date2 = new Date("december 15, 2016 11:13:00");

// დროის კუთვნილებების გამოტანა
console.log("Date 1:");
console.log("Year: " + date1.getFullYear());
console.log("Month: " + (date1.getMonth() + 1)); // თვეები 0-დან იწყება
console.log("Date: " + date1.getDate());

console.log("Date 2:");
console.log("Year: " + date2.getFullYear());
console.log("Month: " + (date2.getMonth() + 1)); // თვეები 0-დან იწყება
console.log("Date: " + date2.getDate());
console.log("Hours: " + date2.getHours());
console.log("Minutes: " + date2.getMinutes());
console.log("Seconds: " + date2.getSeconds());