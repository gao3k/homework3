async function fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=3');
      const products = await response.json();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }
  
  function createProductCard(product) {
    return `
      <div class="product-card">
        <div class="product-image">
          <img src="${backpack.png}" alt="${product.title}">
        </div>
        <div class="product-info">
          <h2 class="product-title">${product.title}</h2>
          <p class="product-description">${product.description}</p>
          <div class="product-footer">
            <span class="product-price">$${product.price}</span>
            <button class="add-to-cart">კალათაში დამატება</button>
          </div>
        </div>
      </div>
    `;
  }
  
  async function initializeApp() {
    const loadingElement = document.getElementById('loading');
    const productsContainer = document.getElementById('products');
  
    try {
      const products = await fetchProducts();
      loadingElement.style.display = 'none';
      
      if (products.length === 0) {
        productsContainer.innerHTML = '<p>No products found.</p>';
        return;
      }
  
      const productCards = products.map(product => createProductCard(product)).join('');
      productsContainer.innerHTML = productCards;
  
      // Add click event listeners to all "Add to Cart" buttons
      document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
          // Here you can add cart functionality
          alert('პროდუქტი დაემატა კალათაში!');
        });
      });
  
    } catch (error) {
      loadingElement.style.display = 'none';
      productsContainer.innerHTML = '<p>Error loading products. Please try again later.</p>';
    }
  }
  
  // Initialize the app when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initializeApp);