document.addEventListener("DOMContentLoaded", function () {
  fetch("/json/newest-arrival.json")
    .then((response) => response.json())
    .then((data) => {
      const displayBook = document.getElementById("mainpageArrival");
      displayBook.innerHTML = ""; //clears previous contents

      data.forEach((book) => {
        // created my container element here
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("available-books");

        // const linkElement = document.createElement("a");
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
      document.getElementById("mainpageArrival").textContent =
        "Error: " + error.message;
    });
});
