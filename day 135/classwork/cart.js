let cart = [];

export function addToCart(product) {
  cart.push(product);
}

export function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
}

export function getTotalPrice() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

export function renderCart(container) {
  container.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
      <span>${item.name} - $${item.price}</span>
      <button>Remove</button>
    `;
    div.querySelector('button').addEventListener('click', () => {
      removeFromCart(item.id);
      renderCart(container);
    });
    container.appendChild(div);
  });

  const total = document.createElement('p');
  total.textContent = `Total: $${getTotalPrice()}`;
  container.appendChild(total);
}
