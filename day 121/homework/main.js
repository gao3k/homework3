//1) Basic Callback — Greeting with Delay
javascript
Copy
Edit
function greet(name, callback) {
  setTimeout(() => {
    console.log(`გამარჯობა, ${name}!`);
    if (callback) callback();
  }, 2000);
}
//2) Callback with Time Delay — Simulate Process
javascript
Copy
Edit
function simulateProcess(message, callback) {
  setTimeout(() => {
    console.log(message);
    callback("პროცესი დასრულდა");
  }, 2000);
}

// მაგალითი
simulateProcess("მიმდინარეობს დამუშავება...", (res) => console.log(res));
//3) Callback for Array Manipulation with Delay
javascript
Copy
Edit
function processArray(arr, callback) {
  setTimeout(() => {
    const result = arr.map(num => num * num);
    callback(result);
  }, 2000);
}

// მაგალითი
processArray([1, 2, 3], (res) => console.log(res)); // [1, 4, 9]
//4) Color Change Example with DOM
javascript
Copy
Edit
function changeColor(color, callback) {
  setTimeout(() => {
    const element = document.getElementById("text");
    if (callback) callback(element, color);
  }, 2000);
}

// გამოყენება
changeColor("red", (el, color) => {
  el.style.color = color;
});
//5) Interactive Callback with User Input
javascript
Copy
Edit
function askName() {
  const name = prompt("შეიყვანე შენი სახელი:");
  setTimeout(() => {
    alert(`გილოცავ ${name}, შენ დაგვეხმარე!`);
  }, 3000);
}

// გამოყენება
askName();