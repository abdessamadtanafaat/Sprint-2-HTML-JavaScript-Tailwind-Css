// SEARCH
document.addEventListener("DOMContentLoaded", function () {
    // Get the search button and input container
    const searchButton = document.getElementById("search-button");
    const searchInputContainer = document.getElementById("search-input-container");
    const searchInput = document.getElementById("search-input");
    const logoText = document.querySelector('.logo-text');  // Modify this selector as needed

    // Add an event listener for the search button click
    searchButton.addEventListener("click", function() {
        // Toggle the input field visibility
        if (searchInputContainer.style.display === "none" || searchInputContainer.style.display === "") {
            searchInputContainer.style.display = "block";
            // Trigger animation for expanding the input field
            searchInput.classList.remove("w-0", "opacity-0");
            searchInput.classList.add("w-40", "opacity-100");
        } else {
            searchInputContainer.style.display = "none";
            // Reset the input field animation
            searchInput.classList.remove("w-40", "opacity-100");
            searchInput.classList.add("w-0", "opacity-0");
        }
        if (window.innerWidth <= 768) {  // Check for mobile screen size (adjust the width as needed)
            logoText.classList.toggle('hidden');
            searchInputContainer.style.display = 'block';  // Show the search input
        }

    });



});

