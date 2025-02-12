document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/section-1.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("section-1-container").innerHTML = html;
        })
        .catch(error => console.error("Error loading hero section:", error));
});