document.addEventListener("DOMContentLoaded", function () {
    // Initialize all forms with the class "validate-form"
    document.querySelectorAll(".validate-form").forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            let isValid = validateForm(form);

            if (isValid) {
                const successMessageId = form.dataset.successMessage;
                if (successMessageId) {
                    showMessage(document.getElementById(successMessageId), true);
                }
                clearFormInputs(form);
                console.log(`Form '${form.id}' successfully submitted`);
            }
        });

        // Clear errors when user starts typing
        form.querySelectorAll("input, textarea, select").forEach(element => {
            element.addEventListener("input", function () {
                hideError(element, element.dataset.error);
            });
        });

        // Special case for checkboxes
        form.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
            checkbox.addEventListener("change", function () {
                const errorElement = document.getElementById(checkbox.dataset.error);
                if (checkbox.checked && errorElement) {
                    errorElement.classList.add("hidden");
                }
            });
        });
    });
});

// Generic form validation function
function validateForm(form) {
    let isValid = true;

    form.querySelectorAll("[data-validate]").forEach(field => {
        const validationType = field.dataset.validate;
        const errorId = field.dataset.error;
        let isValidField = validateField(field, validationType);

        if (!isValidField) {
            showError(field, errorId, field.dataset.errorMessage);
            isValid = false;
        } else {
            hideError(field, errorId);
        }
    });

    return isValid;
}

// Validate field based on type
function validateField(input, type) {
    const value = input.value.trim();

    switch (type) {
        case "text":
            return value.length >= 2;
        case "email":
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
        case "subject":
            return value.length >= 5;
        case "message":
            return value.length >= 10;
        case "day":
            return value >= 1 && value <= 31;
        case "month":
            return value !== "";
        case "year":
            return value >= 1900 && value <= 2025;
        case "country":
            return value !== "";
        case "checkbox":
            return input.checked;
        default:
            return true;
    }
}

// Show error message
function showError(input, errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (!errorElement) return;

    errorElement.textContent = message;
    errorElement.classList.remove("hidden");
    input.classList.add("bg-red-50", "border-red-500", "text-red-900", "focus:ring-red-500", "focus:border-red-500");
}

// Hide error message
function hideError(input, errorId) {
    const errorElement = document.getElementById(errorId);
    if (!errorElement) return;

    errorElement.classList.add("hidden");
    errorElement.textContent = "";
    input.classList.remove("bg-red-50", "border-red-500", "text-red-900", "focus:ring-red-500", "focus:border-red-500");
}

// Clear form inputs
function clearFormInputs(form) {
    form.querySelectorAll("input, textarea, select").forEach(input => {
        if (input.type === "checkbox" || input.type === "radio") {
            input.checked = false;
        } else {
            input.value = "";
        }
    });
}

// Show success message
function showMessage(messageElement, show) {
    if (!messageElement) return;
    messageElement.classList.toggle("hidden", !show);
}
