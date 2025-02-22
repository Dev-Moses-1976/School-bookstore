document.addEventListener('DOMContentLoaded', function() {
    // Retrieve cart items from localStorage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartCount = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');
    const cartPageItemsElement = document.getElementById('cart-page-items');

    // Function to update the cart display
    function updateCartDisplay() {
        // Update the cart count
        if (cartCount) {
            cartCount.textContent = cartItems.length;
        }

        // Update the cart items in the index.html page
        if (cartItemsElement) {
            cartItemsElement.innerHTML = '';
            cartItems.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.textContent = `${item.name} - ${item.price}`;
                cartItemsElement.appendChild(itemElement);
            });
        }

        // Update the cart items in the cart.html page
        if (cartPageItemsElement) {
            cartPageItemsElement.innerHTML = '';
            cartItems.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.textContent = `${item.name} - ${item.price}`;
                cartPageItemsElement.appendChild(itemElement);
            });
        }
    }

    // Add event listeners to "ADD TO CART" buttons in index.html
    if (document.querySelectorAll('.available-books button')) {
        document.querySelectorAll('.available-books button').forEach(button => {
            button.addEventListener('click', function() {
                const book = this.closest('.available-books');
                const product = {
                    name: book.querySelector('p:nth-of-type(2)').textContent,
                    price: book.querySelector('h3').textContent
                };
                cartItems.push(product);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                updateCartDisplay();
            });
        });
    }

    // Initialize the cart display when the page loads
    updateCartDisplay();
});