// header.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;

            // // Load the mobile menu functionality
            // const mobileMenuButton = document.getElementById("mobileMenuButton");
            // const mobileMenu = document.getElementById("mobileMenu");
            //
            // if (mobileMenuButton && mobileMenu) {
            //     mobileMenuButton.addEventListener("click", function () {
            //         mobileMenu.classList.toggle("hidden");
            //     });
            // } else {
            //     console.error("Menu elements not found!");
            // }

// Get the mobile menu, button, and close button
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuButton = document.getElementById('mobileMenuButton');
            const closeMobileMenuButton = document.getElementById('closeMobileMenu');

// Toggle the menu visibility on button click
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');  // Show the menu when clicked
            });

// Close the menu when the close button is clicked
            closeMobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');  // Hide the menu when close button is clicked
            });


            const searchButton = document.getElementById("searchButton");
            const searchContainer = document.getElementById("searchContainer");
            const searchInputMobile = document.getElementById("searchInputMobile");
            const closeSearch = document.getElementById("closeSearch");

            if (searchButton && searchContainer && searchInputMobile && closeSearch) {
                // Show the search input when search button is clicked (mobile view)
                searchButton.addEventListener("click", function () {
                    searchContainer.classList.remove("hidden");
                    searchInputMobile.focus();  // Focus on input when it's shown
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
                    //  add behavior if needed when laptop search is focused
                });
            }
        });


});

