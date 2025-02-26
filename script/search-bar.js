// List of JSON files to fetch from
const jsonFiles = ["/json/literature.json", "/json/fiction.json", "/json/business.json", "/json/agric.json", "/json/non-fiction.json","/json/computer.json"];

let allBooks = []; // Store all book data

// Fetch book data from all JSON files
async function loadBookData() {
    try {
        const promises = jsonFiles.map(file => fetch(file).then(res => res.json()));
        const results = await Promise.all(promises);
        allBooks = results.flat(); // Merge all books into one array
    } catch (error) {
        console.error("Error loading book data:", error);
    }
}

// Function to filter books based on search input
function filterBooks(query) {
    return allBooks.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.category.toLowerCase().includes(query)
    );
}

// Function to display dropdown results
function showDropdownResults(results) {
    const dropdown = document.getElementById("dropdown");
    dropdown.innerHTML = ""; // Clear previous results

    if (results.length === 0) {
        dropdown.style.display = "none"; // Hide dropdown if no results
        return;
    }

    results.forEach(book => {
        const item = document.createElement("div");
        item.classList.add("dropdown-item");
        item.textContent = `${book.title} - ${book.author} (${book.category})`;
        item.onclick = () => {
            document.getElementById("searchBar").value = book.title; // Set value on click
            dropdown.style.display = "none";
        };
        
        item.onclick =  () => {
            window.location.href = `${book.url}?id=${book.id}`;
        };
        dropdown.appendChild(item);
    });

    dropdown.style.display = "block"; // Show dropdown
}

// Event listener for search input
document.getElementById("searchBar").addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    if (query.length > 0) {
        const results = filterBooks(query);
        showDropdownResults(results);
    } else {
        document.getElementById("dropdown").style.display = "none";
    }
});

// Load book data when the page loads
document.addEventListener("DOMContentLoaded", loadBookData);
