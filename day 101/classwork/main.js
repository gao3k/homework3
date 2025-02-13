import './style.css'

const app = document.querySelector('#app')

async function fetchProduct(id = 1) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    
    if (response.status === 404) {
      app.innerHTML = `
        <div class="error-container">
          <div class="error-content">
            <h1>404</h1>
            <img src="https://www.weebly.com/images/404.png" alt="404 Error" class="error-image">
            <p>Product not found</p>
          </div>
        </div>
      `
      return
    }
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const product = await response.json()
    
    app.innerHTML = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <div class="product-info">
          <h2>${product.title}</h2>
          <p class="price">$${product.price}</p>
          <p class="description">${product.description}</p>
          <p class="category">Category: ${product.category}</p>
          <div class="rating">
            Rating: ${product.rating.rate}/5 (${product.rating.count} reviews)
          </div>
        </div>
      </div>
    `
  } catch (error) {
    if (!error.message.includes('404')) {
      console.error('Error fetching product:', error)
    }
  }
}

fetchProduct(1) // You can change this number to test different products or error cases