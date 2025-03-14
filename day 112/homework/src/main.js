import './style.css'
import { StringHelper } from './src/utils/StringHelper.js'
import { MathHelper } from './src/utils/MathHelper.js'

// Example usage of helper classes
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Helper Classes Demo</h1>
    
    <div class="card">
      <h2>String Helper Examples:</h2>
      <p>Reverse "Hello": ${StringHelper.reverse("Hello")}</p>
      <p>Compare "Hello" and "Help": ${StringHelper.compareStrings("Hello", "Help")} matching characters</p>
      <p>Is "Hello_123" valid: ${StringHelper.isValidString("Hello_123")}</p>
      <p>Is "Hello@123" valid: ${StringHelper.isValidString("Hello@123")}</p>
    </div>

    <div class="card">
      <h2>Math Helper Examples:</h2>
      <p>PI: ${MathHelper.PI}</p>
      <p>E: ${MathHelper.E}</p>
      <p>Factorial of 5: ${MathHelper.factorial(5)}</p>
      <p>Ends with 5 or 0 (25): ${MathHelper.endsWithFiveOrZero(25)}</p>
      <p>Round to nearest 5 (23): ${MathHelper.roundToNearestFiveOrZero(23)}</p>
      <p>Round with precision (12.3456): ${MathHelper.roundWithPrecision(12.3456)}</p>
    </div>
  </div>
`