// function to open sidebar
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

      data.slice(0, 10).forEach((book) => {
        // Create a container for each book
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("available-books");

        // Create HTML elements for each book
        const imageElement = document.createElement("img");
        imageElement.src = book.image; // Use 'image' field
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

      const imageContainer = document.getElementById("imageContainer");

      data.slice(10, 16).forEach((book) => {
        // Create a container for each book
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("available-books");

        // Create HTML elements for each book
        const imageElement = document.createElement("img");
        imageElement.src = book.image; // Use 'image' field
        imageElement.onclick = () => {
          window.location.href = `${book.url}?id=${book.id}`;
        };

        // const viewLink = document.createElement("a")
        // viewLink.classList.add("show");
        // viewLink.href ="";
        // viewLink.textContent = book.viewLink;

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
        // bookContainer.appendChild(viewLink)

        // Append book container to main display div
        displayBook.appendChild(bookContainer);
      });
    })
    .catch((error) => {
      document.getElementById("maincomputerPage").textContent =
        "Error: " + error.message;
    });
});

// Function to load an HTML file based on the element's ID
function loadComponent(elementId) {
  let file = "";

  // Determine which file to load based on the element ID
  if (elementId === "footer-page") {
    file = "/layout/footer.html"; // Load the footer file
  } else {
    console.error("Unknown element ID:", elementId);
    return;
  }

  // Fetch the HTML file and insert it into the corresponding element
  fetch(file)
    .then((response) => response.text()) // Convert response to text (HTML)
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Error loading " + file, error));
}

// Load header and footer dynamically
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("footer-page"); // Load footer
});




