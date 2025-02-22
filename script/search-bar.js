document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const bookList = document.getElementById('bookList');
    const dropdown = document.getElementById('dropdown');
    let books = [];

    // Fetch books from JSON file
    fetch('/json/agric.json')
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