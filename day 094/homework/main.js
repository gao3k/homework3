import './style.css'
import { 
  greetWithDelay, 
  processWithDelay, 
  squareNumbersWithDelay,
  changeColorWithDelay,
  handleUserInput
} from './src/callbacks.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Callback Examples</h1>
    
    <div class="example-section">
      <h2>Basic Greeting</h2>
      <button id="greetBtn">მისალმება</button>
      <p id="greetResult"></p>
    </div>

    <div class="example-section">
      <h2>Process Simulation</h2>
      <button id="processBtn">პროცესის დაწყება</button>
      <p id="processResult"></p>
    </div>

    <div class="example-section">
      <h2>Array Manipulation</h2>
      <button id="arrayBtn">მასივის დამუშავება</button>
      <p id="arrayResult"></p>
    </div>

    <div class="example-section">
      <h2>Color Change</h2>
      <button id="colorBtn">ფერის შეცვლა</button>
      <p id="colorText">ეს ტექსტი შეიცვლის ფერს</p>
    </div>

    <div class="example-section">
      <h2>User Input</h2>
      <input type="text" id="nameInput" placeholder="შეიყვანეთ სახელი">
      <button id="submitBtn">გაგზავნა</button>
      <p id="userResult"></p>
    </div>
  </div>
`

// Basic Greeting
document.getElementById('greetBtn').addEventListener('click', () => {
  greetWithDelay('გიორგი', (message) => {
    document.getElementById('greetResult').textContent = message;
  });
});

// Process Simulation
document.getElementById('processBtn').addEventListener('click', () => {
  processWithDelay('მიმდინარეობს პროცესი...', (result) => {
    document.getElementById('processResult').textContent = result;
  });
});

// Array Manipulation
document.getElementById('arrayBtn').addEventListener('click', () => {
  const numbers = [1, 2, 3, 4, 5];
  squareNumbersWithDelay(numbers, (results) => {
    document.getElementById('arrayResult').textContent = 
      `შედეგი: ${results.join(', ')}`;
  });
});

// Color Change
document.getElementById('colorBtn').addEventListener('click', () => {
  changeColorWithDelay('#FF5733', (color) => {
    document.getElementById('colorText').style.color = color;
  });
});

// User Input
document.getElementById('submitBtn').addEventListener('click', () => {
  const name = document.getElementById('nameInput').value;
  if (name) {
    handleUserInput(name, (message) => {
      document.getElementById('userResult').textContent = message;
    });
  }
});