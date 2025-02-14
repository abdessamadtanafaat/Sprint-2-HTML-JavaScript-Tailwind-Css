document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/section-3.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("section-3-container").innerHTML = html;
        })
        .catch(error => console.error("Error loading section 3: ", error));
});