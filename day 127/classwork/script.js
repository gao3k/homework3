async function fetchProduct() {
    try {
      const res = await fetch("https://fakestoreapi.com/products/1");
      if (!res.ok) {
        if (res.status === 404) {
          document.body.innerHTML = '<h1>404: Product Not Found</h1>';
        } else {
          console.error("Error:", res.status);
        }
        return;
      }
      const product = await res.json();
      document.body.innerHTML = `
        <div class="product">
          <h2>${product.title}</h2>
          <img src="${product.image}" alt="product" width="200" />
          <p>${product.description}</p>
          <p><strong>$${product.price}</strong></p>
        </div>`;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  