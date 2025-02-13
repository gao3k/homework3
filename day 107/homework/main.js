import './style.css';
// Named imports
import { add, subtract } from './src/math.js';
// Default import
import multiply from './src/math.js';
// Default import with renamed import
import customGreet from './src/greetings.js';
// Named import with renamed import
import { sayHello as greetPerson } from './src/greetings.js';
// Named import
import { formatNumber } from './src/utils.js';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>JavaScript Import/Export Demo</h1>
    
    <div class="demo-section">
      <h2>Math Operations</h2>
      <p>5 + 3 = ${add(5, 3)}</p>
      <p>10 - 4 = ${subtract(10, 4)}</p>
      <p>6 × 7 = ${multiply(6, 7)}</p>
    </div>

    <div class="demo-section">
      <h2>Greetings</h2>
      <p>${customGreet()}</p>
      <p>${greetPerson('John')}</p>
    </div>

    <div class="demo-section">
      <h2>Utilities</h2>
      <p>Formatted number: ${formatNumber(123.45678)}</p>
    </div>
  </div>
`;