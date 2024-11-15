// Product class to store product properties
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// ShoppingCartItem class to store product and quantity
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate total price for this item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// ShoppingCart class to manage cart items
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Get total number of items in cart
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Add item to cart
    addItem(product, quantity) {
        // Check if product already exists in cart
        const existingItem = this.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Remove item from cart
    removeItem(productId) {
        const index = this.items.findIndex(item => item.product.id === productId);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    // Display cart items
    displayCart() {
        console.log('Shopping Cart Contents:');
        console.log('----------------------');
        
        if (this.items.length === 0) {
            console.log('Cart is empty');
            return;
        }

        let totalCart = 0;
        this.items.forEach(item => {
            const totalPrice = item.getTotalPrice();
            console.log(`${item.product.name} - Quantity: ${item.quantity} - Price: $${item.product.price} - Total: $${totalPrice}`);
            totalCart += totalPrice;
        });
        
        console.log('----------------------');
        console.log(`Total Cart Value: $${totalCart}`);
    }
}

// Test the implementation
// Create products
const product1 = new Product(1, "Laptop", 999.99);
const product2 = new Product(2, "Mouse", 29.99);
const product3 = new Product(3, "Keyboard", 59.99);

// Create shopping cart
const cart = new ShoppingCart();

// Add items to cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// Display initial cart
console.log("Initial Cart:");
cart.displayCart();

// Remove an item
console.log("\nRemoving Mouse from cart...");
cart.removeItem(2);

// Display updated cart
console.log("\nUpdated Cart:");
cart.displayCart();
