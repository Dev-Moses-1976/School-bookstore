function openSidebar() {
  document.getElementById("sidebar").style.width = "15em";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0px";
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("/json/fiction.json")
    .then((response) => response.json())
    .then((data) => {
      const displayBook = document.getElementById("fictionBooks");
      displayBook.innerHTML = ""; //clears previous contents

      data.slice(0,10).forEach((book) => {
        // created my container element here
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("available-books");
        
        const linkElement = document.createElement("a")
        linkElement.href = book.url;
        
        //created my HTML elements here
        const imageElement = document.createElement("img");
        imageElement.src = book.image;

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
        bookContainer.appendChild(linkElement);
        bookContainer.appendChild(imageElement);
        bookContainer.appendChild(categoryElement);
        bookContainer.appendChild(titleElement);
        bookContainer.appendChild(priceElement);
        bookContainer.appendChild(buttonElement);

        //append image inside the link and append the link inside the image container
        linkElement.appendChild(imageElement);

        //Appending my container to my main container with id fiction-books
        displayBook.appendChild(bookContainer);
      });
    })
    .catch((error) => {
      document.getElementById("fictionBooks").textContent =
        "Error: " + error.message;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("/json/fiction.json")
    .then((response) => response.json())
    .then((data) => {
      const displayBook = document.getElementById("mainpageFiction");
      displayBook.innerHTML = ""; //clears previous contents

      data.slice(10,16).forEach((book) => {
        // created my container element here
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("available-books");

        const linkElement = document.createElement("a")
        linkElement.href = book.url;
        
        //created my HTML elements here
        const imageElement = document.createElement("img");
        imageElement.src = book.image;

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
        bookContainer.appendChild(linkElement);
        bookContainer.appendChild(imageElement);
        bookContainer.appendChild(categoryElement);
        bookContainer.appendChild(titleElement);
        bookContainer.appendChild(priceElement);
        bookContainer.appendChild(buttonElement);

        //append image inside the link and append the link inside the image container
        linkElement.appendChild(imageElement);

        //Appending my container to my main container with id fiction-books
        displayBook.appendChild(bookContainer);
      });
    })
    .catch((error) => {
      document.getElementById("mainpageFiction").textContent =
        "Error: " + error.message;
    });
});

