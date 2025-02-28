function openSidebar() {
  document.getElementById("sidebar").style.width = "15em";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0px";
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("/json/non-fiction.json")
    .then((response) => response.json())
    .then((data) => {
      const displayBook = document.getElementById("nonFictionBooks");
      displayBook.innerHTML = ""; //clears previous contents

      data.forEach((book) => {
        // created my container element here
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("available-books");
        
        // const linkElement = document.createElement("a")
        // linkElement.href = book.url;
        
        //created my HTML elements here
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
        buttonElement.textContent = book.button;

        // Appending my elements to the div container created
        // bookContainer.appendChild(linkElement);
        bookContainer.appendChild(imageElement);
        bookContainer.appendChild(categoryElement);
        bookContainer.appendChild(titleElement);
        bookContainer.appendChild(priceElement);
        bookContainer.appendChild(buttonElement);

        //append image inside the link and append the link inside the image container
        // linkElement.appendChild(imageElement);

        //Appending my container to my main container with id fiction-books
        displayBook.appendChild(bookContainer);
      });
    })
    .catch((error) => {
      document.getElementById("nonFictionBooks").textContent =
        "Error: " + error.message;
    });
});


// Function to load an HTML file based on the element's ID
function loadComponent(elementId) {
  let file = "";

  // Determine which file to load based on the element ID
  if (elementId === "header-page") {
    file = "/layout/header.html"; // Load the header file
  } else if (elementId === "footer-page") {
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
  loadComponent("header-page"); // Load header
  loadComponent("footer-page"); // Load footer
});
