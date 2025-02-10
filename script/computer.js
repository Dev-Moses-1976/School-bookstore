function openSidebar() {
  document.getElementById("sidebar").style.width = "15em";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0px";
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("/json/computer.json")
    .then((response) => response.json())
    .then((data) => {
      const displayBook = document.getElementById("book1");
      displayBook.innerHTML = ""; // Clear previous content

      data.slice(0,10).forEach((book) => {
        // Create a container for each book
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("available-books");

        // Create HTML elements for each book
        const imageElement = document.createElement("img");
        imageElement.src = book.image; // Use 'image' field

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
        buttonElement.textContent = book.button;

        // Append elements to book container
        bookContainer.appendChild(imageElement);
        bookContainer.appendChild(categoryElement);
        bookContainer.appendChild(titleElement);
        bookContainer.appendChild(priceElement);
        bookContainer.appendChild(buttonElement);

        // Append book container to main display div
        displayBook.appendChild(bookContainer);
      });
    })
    .catch((error) => {
      document.getElementById("book1").textContent = "Error: " + error.message;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("/json/computer.json")
    .then((response) => response.json())
    .then((data) => {
      const displayBook = document.getElementById("maincomputerPage");
      displayBook.innerHTML = ""; // Clear previous content

      data.slice(10,16).forEach((book) => {
        // Create a container for each book
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("available-books");

        // Create HTML elements for each book
        const imageElement = document.createElement("img");
        imageElement.src = book.image; // Use 'image' field

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
        buttonElement.textContent = book.button;

        // Append elements to book container
        bookContainer.appendChild(imageElement);
        bookContainer.appendChild(categoryElement);
        bookContainer.appendChild(titleElement);
        bookContainer.appendChild(priceElement);
        bookContainer.appendChild(buttonElement);

        // Append book container to main display div
        displayBook.appendChild(bookContainer);
      });
    })
    .catch((error) => {
      document.getElementById("maincomputerPage").textContent = "Error: " + error.message;
    });
});
