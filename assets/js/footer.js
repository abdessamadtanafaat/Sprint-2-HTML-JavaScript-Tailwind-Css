document.addEventListener("DOMContentLoaded", function () {
    // Load the footer Section
    fetch("/components/footer.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("footer-container").innerHTML = html;
        })
        .catch(error => console.error("Error loading footer:", error));

    // Event listener for email validation
    const emailInput = document.getElementById("emailInput");

    emailInput.addEventListener("blur", function () {
        validateEmail();
    });
});

function validateEmail() {
    // Get the value from the email input field
    const emailInput = document.getElementById("emailInput").value;
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");


    // Regular expression for a simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Check if the entered email matches the pattern
    if (emailPattern.test(emailInput)) {
        // Hide the error message if the email is valid
        errorMessage.style.display = "none";
        successMessage.style.display = "block";
    } else {
        // Show the error message if the email is invalid
        errorMessage.style.display = "block";
    }
}
