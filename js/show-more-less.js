document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("load-more-button");
    const content = document.getElementById("content");
    const moreText = document.getElementById("more-text");

    button.addEventListener("click", function () {
        const isExpanded = button.getAttribute("data-expanded") === "true";

        if (isExpanded) {
            moreText.classList.add("hidden"); // Hide extra text
            content.style.maxHeight = "80px"; // Limit height
            button.textContent = "Show More";
        } else {
            moreText.classList.remove("hidden"); // Show full text
            content.style.maxHeight = "none"; // Remove height limit
            button.textContent = "Show Less";
        }

        button.setAttribute("data-expanded", !isExpanded);
    });
});
