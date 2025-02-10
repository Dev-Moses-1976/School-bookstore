document.addEventListener("DOMContentLoaded", function () {
    fetch("/json/best-sellers.json")
      .then((response) => response.json())
      .then((data) => {
        const displayBook = document.getElementById("mainpageBest");
        displayBook.innerHTML = ""; //clears previous contents
  
        data.forEach((book) => {
          //created a container here
          const bookContainer = document.createElement("div");
          bookContainer.classList.add("available-books");
  
          //created my html elemets for each book here
          const imageElement = document.createElement("img");
          imageElement.src = book.image;
  
          const categoryElement = document.createElement("p");
          categoryElement.textContent = book.category;
  
          const titleElement = document.createElement("p");
          titleElement.textContent = book.title;
  
          const priceElement = document.createElement("h3");
          priceElement.textContent = `₦${book.price.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
          
          const buttonElement = document.createElement("button");
          buttonElement.textContent = book.button;
  
          //appended my book elements to the div container created
  
          bookContainer.appendChild(imageElement);
          bookContainer.appendChild(categoryElement);
          bookContainer.appendChild(titleElement);
          bookContainer.appendChild(priceElement);
          bookContainer.appendChild(buttonElement);
  
          // appended my container element to the container with id agric-books
          displayBook.appendChild(bookContainer);
        });
      })
      .catch((error)=>{
        document.getElementById("mainpageBest").textContent = "Error: " + error.message; 
      });
  });