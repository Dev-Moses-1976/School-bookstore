
    
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
  
  
  
  
  