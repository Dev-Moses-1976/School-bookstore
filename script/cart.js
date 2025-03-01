document.addEventListener("DOMContentLoaded", function () {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartCount = document.getElementById("cart-count");
    const cartItemsElement = document.getElementById("cart-items");
    const cartPageItemsElement = document.getElementById("cart-page-items");
  
    function updateCartDisplay() {
      if (cartCount) {
        cartCount.textContent = cartItems.length;
      }
      if (cartItemsElement) {
        cartItemsElement.innerHTML = "";
        cartItems.forEach((item) => {
          const itemElement = document.createElement("div");
          itemElement.textContent = `${item.name} - ${item.price}`;
          cartItemsElement.appendChild(itemElement);
        });
      }
      if (cartPageItemsElement) {
        cartPageItemsElement.innerHTML = "";
        cartItems.forEach((item) => {
          const itemElement = document.createElement("div");
          itemElement.textContent = `${item.name} - ${item.price}`;
          cartPageItemsElement.appendChild(itemElement);
        });
      }
    }
  
    updateCartDisplay();
  });
  