document.addEventListener("DOMContentLoaded", function () {
    // Load the Hero Section
    fetch("/components/form.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("form").innerHTML = html;
            initImageSlider(); // Call the image slider function after loading HTML
        })
        .catch(error => console.error("Error loading hero section:", error));
});