document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("darkModeToggle");
    const htmlElement = document.documentElement;

    // Check user preference from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        htmlElement.classList.add("dark");
    }

    // Toggle dark mode on button click
    toggleButton.addEventListener("click", () => {
        if (htmlElement.classList.contains("dark")) {
            htmlElement.classList.remove("dark");
            localStorage.setItem("darkMode", "disabled");
            console.log("darkMode disabled");
        } else {
            htmlElement.classList.add("dark");
            localStorage.setItem("darkMode", "enabled");
            console.log("darkMode enabled");

        }
    });
});
