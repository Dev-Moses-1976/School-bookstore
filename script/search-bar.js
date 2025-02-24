document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const bookList = document.getElementById('bookList');
    const dropdown = document.getElementById('dropdown');
    let books = [];

    // Determine the correct JSON file based on bookId
    // let jsonFile = "";
    // if (bookId >= 1 && bookId <= 16) {
    //   jsonFile = "/json/agric.json";
    // } else if (bookId >= 17 && bookId <= 22) {
    //   jsonFile = "/json/best-sellers.json";
    // } else if (bookId >= 23 && bookId <= 38) {
    //   jsonFile = "/json/business.json";
    // } else if (bookId >= 39 && bookId <= 54) {
    //   jsonFile = "/json/computer.json";
    // } else if (bookId >= 55 && bookId <= 70) {
    //   jsonFile = "/json/fiction.json";
    // } else if (bookId >= 71 && bookId <= 86) {
    //   jsonFile = "/json/literature.json";
    // } else if (bookId >= 87 && bookId <= 98) {
    //   jsonFile = "/json/newest-arrival.json";
    // } else {
    //   jsonFile = "/json/non-fiction.json";
    // }


    // Fetch books from JSON file
    fetch("/json/agric.json")
        .then(response => response.json())
        .then(data => {
            books = data;
        })
        .catch(error => console.error('Error loading books:', error));

    // Function to display books
    function displayBooks(filteredBooks) {
        bookList.innerHTML = ""; // Clear previous results
        if (filteredBooks.length === 0) {
            dropdown.classList.add('hidden'); // Hide dropdown if no matches
            return;
        }

        dropdown.classList.remove('hidden'); // Show dropdown
        filteredBooks.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book');
            bookItem.innerHTML = `
                <strong>${book.title}</strong> <br>
                <small>Author: ${book.author}</small> <br>
                <small>Category: ${book.category}</small>
            `;
            bookItem.addEventListener('click', () => {
                searchBar.value = book.title;
                dropdown.classList.add('hidden'); // Hide dropdown on selection
            });
            bookList.appendChild(bookItem);

            bookItem.onclick = () => {
                window.location.href = `${book.url}?id=${book.id}`;
            };
        });
    }

    // Search Functionality
    searchBar.addEventListener('keyup', () => {
        let filter = searchBar.value.toLowerCase();
        if (filter === "") {
            dropdown.classList.add('hidden'); // Hide dropdown if input is empty
            return;
        }

        let filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(filter) ||
            book.author.toLowerCase().includes(filter) ||
            book.category.toLowerCase().includes(filter)
        );
        displayBooks(filteredBooks);
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!searchBar.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.add('hidden');
        }
    });
});