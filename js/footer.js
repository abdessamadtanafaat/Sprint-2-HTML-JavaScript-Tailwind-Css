document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.getElementById("subscribe-form");
    if (!subscribeForm) return console.error("Subscribe form not found.");

    subscribeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = validateForm();

        if (isValid) {
            showMessage(document.getElementById("successMessage"), true);
            clearFormInputs(subscribeForm);
            console.log("Form successfully subscribed");
        }
    });

    function validateForm() {
        let isValid = true;
        const emailInput = document.getElementById("email-input");
        const emailValue = emailInput.value.trim();

        if (!validateEmail(emailValue)) {
            isValid = false;
            showError(emailInput, "errorMessage", "Please enter a valid email address.");
        } else {
            hideError(emailInput, "errorMessage");
        }

        return isValid;
    }

    document.querySelectorAll("#subscribe-form input").forEach(element => {
        element.addEventListener("input", function () {
            hideError(element, "errorMessage");
        });
    });
});
