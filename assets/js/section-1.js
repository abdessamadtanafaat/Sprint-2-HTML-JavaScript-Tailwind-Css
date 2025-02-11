document.addEventListener("DOMContentLoaded", function () {
    // Load the Hero Section
    fetch("/components/section-1.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("section-1-container").innerHTML = html;
            initImageSlider(); // Call the image slider function after loading HTML
        })
        .catch(error => console.error("Error loading hero section:", error));
});