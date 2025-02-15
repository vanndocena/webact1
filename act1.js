let cart = [];

// Function to add product to cart
function addToCart(productName, productPrice) {
    let existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    updateCart();
}

// Function to remove product from cart
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCart();
}

// Function to update cart UI
function updateCart() {
    let cartContainer = document.getElementById("cart-items");
    let totalPriceElement = document.getElementById("total-price");
    cartContainer.innerHTML = ""; 
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            totalPrice += item.price * item.quantity;

            let cartItemHTML = `
                <div class="cart-item">
                    <span>${item.name} (Php ${item.price}) x ${item.quantity}</span>
                    <button onclick="removeFromCart('${item.name}')">Remove</button>
                </div>
            `;
            cartContainer.innerHTML += cartItemHTML;
        });
    }

    totalPriceElement.textContent = totalPrice.toFixed(2);
}
