// Show validation error
function showError(input, errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.classList.remove("hidden");
    input.classList.add("bg-red-50", "border-red-500", "text-red-900", "focus:ring-red-500", "focus:border-red-500");
}

// Hide validation error
function hideError(input, errorId) {
    const errorElement = document.getElementById(errorId);
    if (!errorElement) {
        return;
    }
    errorElement.classList.add("hidden");
    errorElement.textContent = "";
    input.classList.remove("bg-red-50", "border-red-500", "text-red-900", "placeholder-red-700", "focus:ring-red-500", "focus:border-red-500");
}


// Validate email format
function validateEmail(value) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
}

// Clear form inputs
function clearFormInputs(form) {
    form.querySelectorAll('input, textarea, select').forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') input.checked = false;
        else input.value = '';
    });
}

// Show or hide success message
function showMessage(messageElement, show) {
    messageElement.classList.toggle("hidden", !show);
}
