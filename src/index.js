import Product from './models/Product.js';
import ShoppingCart from './models/ShoppingCart.js';

// Create shopping cart instance
const cart = new ShoppingCart();

// Sample products
const products = [
    new Product(1, "Laptop", 999.99),
    new Product(2, "Mouse", 29.99),
    new Product(3, "Keyboard", 59.99),
    new Product(4, "Monitor", 299.99),
    new Product(5, "Headphones", 89.99)
];

// Initialize the page
function initializePage() {
    displayProducts();
    cart.displayCart();
}

// Display products in the products container
function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <div class="price">$${product.price}</div>
            <input type="number" min="1" value="1" class="quantity-input" id="quantity-${product.id}">
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Add item to cart
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = parseInt(document.getElementById(`quantity-${productId}`).value);
    
    if (product && quantity > 0) {
        cart.addItem(product, quantity);
        cart.displayCart();
    }
}

// Remove item from cart
window.removeFromCart = function(productId) {
    cart.removeItem(productId);
    cart.displayCart();
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initializePage);
