             generateButton.classList.remove('loading')
            }
        }

// Generate new advice when button is clicked
generateButton.addEventListener('click', getAdvice)

// Get initial advice when page loads
getAdvice()