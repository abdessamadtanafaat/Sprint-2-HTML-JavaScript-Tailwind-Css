// header.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;

            // Get the mobile menu, button, and close button
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuButton = document.getElementById('mobileMenuButton');
            const closeMobileMenuButton = document.getElementById('closeMobileMenu');

            // Toggle the menu visibility on button click
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });

            // Close the menu when the close button is clicked
            closeMobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });

            const searchButton = document.getElementById("searchButton");
            const searchContainer = document.getElementById("searchContainer");
            const searchInputMobile = document.getElementById("searchInputMobile");
            const closeSearch = document.getElementById("closeSearch");

            if (searchButton && searchContainer && searchInputMobile && closeSearch) {
                // Show the search input when search button is clicked (mobile view)
                searchButton.addEventListener("click", function () {
                    searchContainer.classList.remove("hidden");
                    searchInputMobile.focus();
                });

                // Close the search input when the close button is clicked
                closeSearch.addEventListener("click", function () {
                    searchContainer.classList.add("hidden");
                    searchInputMobile.value = "";  // Clear the input
                });
            }

            // For Laptop: Input stays in place, no full-screen behavior
            const searchInput = document.getElementById("searchInput");
            if (searchInput) {
                searchInput.addEventListener("focus", function () {
                    //  add behavior when laptop search is focused
                });
            }
        });
});

