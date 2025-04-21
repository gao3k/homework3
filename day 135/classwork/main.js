import { renderProducts } from './product.js';
import { addToCart, renderCart } from './cart.js';

const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart');

renderProducts(productsContainer, (product) => {
  addToCart(product);
  renderCart(cartContainer);
});

renderCart(cartContainer);
