const adviceText = document.getElementById('advice-text')
const adviceNumber = document.getElementById('advice-number')
const generateButton = document.getElementById('generate-button')

async function getAdvice() {
  try {
    // Add loading state
    generateButton.classList.add('loading')
    
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    
    // Update the DOM with new advice
    adviceNumber.textContent = data.slip.id
    adviceText.textContent = `"${data.slip.advice}"`
  } catch (error) {
    console.error('Error fetching advice:', error)
    adviceText.textContent = 'Failed to fetch advice. Please try again.'
  } finally {
    // Remove loading state
    generateButton.classList.remove('loading')
  }
}

// Generate new advice when button is clicked
generateButton.addEventListener('click', getAdvice)

// Get initial advice when page loads
getAdvice()