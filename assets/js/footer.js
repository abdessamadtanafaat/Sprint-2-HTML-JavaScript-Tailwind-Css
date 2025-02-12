
document.addEventListener("DOMContentLoaded", function () {
    // Load the Hero Section
    fetch("/components/footer.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("footer-container").innerHTML = html;
        })
        .catch(error => console.error("Error loading hero section:", error));
});