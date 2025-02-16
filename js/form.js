document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    if (!form) return console.error("Form not found.");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log(event.target);
        let isValid = validateForm();

        if (isValid) {
            showMessage(document.getElementById("success-submitted"), true);
            clearFormInputs(form);
            console.log("Form successfully submitted");
        }
    });

    function validateForm() {
        let isValid = true;

        const fields = [
            { id: "name", error: "name-error", validator: value => value.trim().length >= 2, message: "Please enter your name" },
            { id: "email", error: "email-error", validator: validateEmail, message: "Please enter a valid email" },
            { id: "subject", error: "subject-error", validator: value => value.trim().length >= 5, message: "Please enter a subject" },
            { id: "message", error: "message-error", validator: value => value.trim().length >= 10, message: "Please enter a message" },
            { id: "day", error: "day-error", validator: value => value >= 1 && value <= 31, message: "Please enter a valid day (1-31)" },
            { id: "month", error: "month-error", validator: value => value, message: "Please select a month" },
            { id: "year", error: "year-error", validator: value => value >= 1900 && value <= 2025, message: "Please enter a valid year (1900-2025)" },
            { id: "country", error: "country-error", validator: value => value, message: "Please select a country" }
        ];

        fields.forEach(field => {
            const input = document.getElementById(field.id);
            isValid &= validateField(input, field.error, field.validator, field.message);
        });

        const checkbox = document.getElementById('link-checkbox');
        if (!checkbox.checked) {
            document.getElementById('checkbox-error').classList.remove('hidden');
            isValid = false;
        }

        return isValid;
    }

    function validateField(input, errorId, validator, message) {
        if (!validator(input.value.trim())) {
            showError(input, errorId, message);
            return false;
        }
        hideError(input, errorId);
        return true;
    }

    // Clear error when user starts typing
    document.querySelectorAll("#contact-form input, #contact-form textarea, #contact-form select").forEach(element => {
        element.addEventListener("input", function () {
            hideError(element, element.id + "-error");
        });
    });

    // Clear error when the user checks the checkbox
    const checkbox = document.getElementById('link-checkbox');
    checkbox.addEventListener('change', function () {
        const errorElement = document.getElementById('checkbox-error');
        if (checkbox.checked) {
            errorElement.classList.add('hidden');
        }
    });
});
