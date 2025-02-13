const productContainer = document.getElementById('productContainer');
const errorContainer = document.getElementById('errorContainer');
const productImage = document.getElementById('productImage');
const productTitle = document.getElementById('productTitle');
const productDescription = document.getElementById('productDescription');
const productPrice = document.getElementById('productPrice');

async function fetchProduct(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    
    // Handle 404 error specifically
    if (response.status === 404) {
      showError();
      return;
    }
    
    // Handle other HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Check if response is empty
    const text = await response.text();
    if (!text) {
      throw new Error('Empty response received');
    }
    
    // Try to parse the JSON
    let product;
    try {
      product = JSON.parse(text);
    } catch (e) {
      throw new Error('Invalid JSON response');
    }
    
    // Validate that we received a product object
    if (!product || typeof product !== 'object') {
      throw new Error('Invalid product data received');
    }
    
    showProduct(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    
    if (error.message.includes('404')) {
      showError();
    } else {
      // For other errors, just log to console as requested
      console.error('An unexpected error occurred:', error);
      showError(); // Show error UI for any failed request
    }
  }
}

function showProduct(product) {
  productImage.src = product.image;
  productTitle.textContent = product.title;
  productDescription.textContent = product.description;
  productPrice.textContent = `$${product.price}`;
  
  errorContainer.classList.add('hidden');
  productContainer.classList.remove('hidden');
}

function showError() {
  productContainer.classList.add('hidden');
  errorContainer.classList.remove('hidden');
}

// Let's test with a valid product ID instead
fetchProduct(1);