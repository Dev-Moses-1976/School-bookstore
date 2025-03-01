document.addEventListener("DOMContentLoaded", function () {
  fetch("../json/newest-arrival.json")
    .then((response) => response.json())
    .then((data) => {
      const displayBook = document.getElementById("mainpageArrival");
      displayBook.innerHTML = ""; // Clears previous contents

      data.forEach((book) => {
        // Create book container
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("available-books");

        const imageElement = document.createElement("img");
        imageElement.src = book.image;
        imageElement.onclick = () => {
          window.location.href = `${book.url}?id=${book.id}`;
        };

        const categoryElement = document.createElement("p");
        categoryElement.textContent = book.category;

        const titleElement = document.createElement("p");
        titleElement.textContent = book.title;

        const priceElement = document.createElement("h3");
        priceElement.textContent = `₦${book.price.toLocaleString("en-NG", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`;

        const buttonElement = document.createElement("button");
        buttonElement.textContent = "ADD TO CART";

        // 🛒 **Attach Event Listener to "Add to Cart" Button**
        buttonElement.addEventListener("click", function () {
          addToCart(titleElement.textContent, priceElement.textContent);
        });

        // Append elements
        bookContainer.appendChild(imageElement);
        bookContainer.appendChild(categoryElement);
        bookContainer.appendChild(titleElement);
        bookContainer.appendChild(priceElement);
        bookContainer.appendChild(buttonElement);

        displayBook.appendChild(bookContainer);
      });
    })
    .catch((error) => {
      document.getElementById("mainpageArrival").textContent =
        "Error: " + error.message;
    });
});

// 🛒 **Add to Cart Function**
function addToCart(name, price) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push({ name, price });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  console.log(`${name} added to cart`);
  updateCartDisplay();
}
