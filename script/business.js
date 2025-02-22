function openSidebar() {
  document.getElementById("sidebar").style.width = "15em";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0px";
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("/json/business.json")
    .then((response) => response.json())
    .then((data) => {
      const displayBook = document.getElementById("businessBooks");
      displayBook.innerHTML = ""; //clears previous contents

      data.slice(0, 10).forEach((book) => {
        // created my container element here
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("available-books");

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
        bookContainer.appendChild(imageElement);
        bookContainer.appendChild(categoryElement);
        bookContainer.appendChild(titleElement);
        bookContainer.appendChild(priceElement);
        bookContainer.appendChild(buttonElement);
  
        //Appending my container to my main container with id fiction-books
        displayBook.appendChild(bookContainer);
      });
    })
    .catch((error) => {
      document.getElementById("businessBooks").textContent =
        "Error: " + error.message;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("/json/business.json")
    .then((response) => response.json())
    .then((data) => {
      const displayBook = document.getElementById("mainbusinessPage");
      displayBook.innerHTML = ""; //clears previous contents

      data.slice(10, 16).forEach((book) => {
        // created my container element here
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
        buttonElement.textContent = book.button;

        // Appending my elements to the div container created
        bookContainer.appendChild(imageElement);
        bookContainer.appendChild(categoryElement);
        bookContainer.appendChild(titleElement);
        bookContainer.appendChild(priceElement);
        bookContainer.appendChild(buttonElement);

        //Appending my container to my main container with id fiction-books
        displayBook.appendChild(bookContainer);
      });
    })
    .catch((error) => {
      document.getElementById("mainbusinessPage").textContent = "Error: " + error.message;
    });
});

