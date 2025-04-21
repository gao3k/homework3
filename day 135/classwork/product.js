export const products = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Headphones", price: 200 },
    { id: 3, name: "Keyboard", price: 100 }
  ];
  
  export function getProductById(id) {
    return products.find(p => p.id === id);
  }
  
  export function renderProducts(container, addToCartCallback) {
    container.innerHTML = '';
    products.forEach(product => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
        <button>Add to Cart</button>
      `;
      div.querySelector('button').addEventListener('click', () => addToCartCallback(product));
      container.appendChild(div);
    });
  }
  