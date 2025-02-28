document.addEventListener("DOMContentLoaded", function () {
    // Create and insert the menu button
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("menu-btn");
    menuBtn.innerHTML = "&#9776;"; // Hamburger icon
    document.body.prepend(menuBtn);

    // Create the sidebar container (initially hidden)
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    document.body.appendChild(sidebar);

    // Create the overlay (for closing on click)
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    // Sidebar content (added only once)
    sidebar.innerHTML = `
        <span class="close-btn">&times;</span>
        <nav>
            <input type="text" name="" placeholder="Enter book title or Author" />
            <a href="">ABOUT US</a>
            <div class="dropdown">
                <a href=""> DEPARTMENTS </a>
                <div class="dropdown-content">
                    <a href="">Agric Science</a>
                    <a href="">Computer Science</a>
                    <a href="">English and Lit. Studies</a>
                </div>
            </div>
            <div class="shops">
                <a href="">SHOP</a>
                <div class="dropdown-content2">
                    <a href="">Fiction</a>
                    <a href="">Non-fiction</a>
                    <a href="">Business</a>
                </div>
            </div>
            <a href="">REQUEST FOR A BOOK</a>
        </nav>
    `;

    // Toggle sidebar function
    function toggleSidebar() {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    }

    // Event listeners
    menuBtn.addEventListener("click", toggleSidebar);
    document.querySelector(".close-btn").addEventListener("click", toggleSidebar);
    overlay.addEventListener("click", toggleSidebar);
});
