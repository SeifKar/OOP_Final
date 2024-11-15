# Shopping Cart Project

This is an Object-Oriented JavaScript implementation of a shopping cart system.

## Project Structure

```
OOP_/
│
├── src/                    # Source files
│   ├── models/            # Class definitions
│   │   ├── Product.js
│   │   ├── ShoppingCart.js
│   │   └── ShoppingCartItem.js
│   │
│   ├── styles/            # CSS styles
│   │   └── style.css
│   │
│   └── index.js           # Main JavaScript file
│
├── index.html             # Main HTML file
└── README.md              # Project documentation
```

## Features

- Create and manage products with id, name, and price
- Add products to shopping cart with quantities
- Remove products from cart
- Calculate total items and cart value
- Display cart contents

## How to Use

1. Open `index.html` in your web browser
2. Use the interface to:
   - View available products
   - Add products to cart
   - Adjust quantities
   - Remove items
   - View cart total

## Classes

### Product
- Properties: id, name, price
- Used to create product instances

### ShoppingCartItem
- Properties: product, quantity
- Methods: getTotalPrice()
- Represents items in the cart

### ShoppingCart
- Properties: items array
- Methods: 
  - getTotalItems()
  - addItem(product, quantity)
  - removeItem(productId)
  - displayCart()
