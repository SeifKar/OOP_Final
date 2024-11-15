import ShoppingCartItem from './ShoppingCartItem.js';

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    removeItem(productId) {
        const index = this.items.findIndex(item => item.product.id === productId);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    displayCart() {
        const cartContainer = document.getElementById('cart-items');
        const totalElement = document.getElementById('cart-total');
        
        cartContainer.innerHTML = '';
        
        if (this.items.length === 0) {
            cartContainer.innerHTML = '<p>Cart is empty</p>';
            totalElement.textContent = '$0.00';
            return;
        }

        let totalCart = 0;
        
        this.items.forEach(item => {
            const totalPrice = item.getTotalPrice();
            totalCart += totalPrice;

            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <span>${item.product.name}</span>
                <span>Quantity: ${item.quantity}</span>
                <span>Price: $${item.product.price}</span>
                <span>Total: $${totalPrice.toFixed(2)}</span>
                <button onclick="removeFromCart(${item.product.id})">Remove</button>
            `;
            
            cartContainer.appendChild(itemElement);
        });
        
        totalElement.textContent = `$${totalCart.toFixed(2)}`;
    }
}

export default ShoppingCart;
