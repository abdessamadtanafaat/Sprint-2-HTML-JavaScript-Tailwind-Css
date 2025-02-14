document.addEventListener("DOMContentLoaded", function () {
    // Load the Form Component
    fetch("/components/form.html")
        .then(response => response.text())
        .then(html => {
            const formContainer = document.getElementById("form");
            if (!formContainer) {
                console.error("Element with ID 'form' not found.");
                return;
            }
            formContainer.innerHTML = html;

            // Now that the form is loaded, add validation logic
            const form = document.getElementById("contact-form");
            if (!form) {
                console.error("Form not found in fetched HTML.");
                return;
            }

            form.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevent actual form submission

                let isValid = true;

                // Name validation
                const nameField = document.getElementById("name");
                if (!nameField.value.trim() || nameField.value.trim().length < 2) {
                    showError(nameField, "name-error", "Please enter your name");
                    isValid = false;
                } else {
                    hideError(nameField, "name-error");
                }

                // Email validation
                const emailField = document.getElementById("email");
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                if (!emailField.value.trim() || !emailPattern.test(emailField.value)) {
                    showError(emailField, "email-error", "Please enter a valid email");
                    isValid = false;
                } else {
                    hideError(emailField, "email-error");
                }

                // Subject validation
                const subjectField = document.getElementById("subject");
                if (!subjectField.value.trim() || subjectField.value.trim().length < 5) {
                    showError(subjectField, "subject-error", "Please enter a subject");
                    isValid = false;
                } else {
                    hideError(subjectField, "subject-error");
                }

                // Message validation
                const messageField = document.getElementById("message");
                if (!messageField.value.trim() || messageField.value.trim().length < 10) {
                    showError(messageField, "message-error", "Please enter a message");
                    isValid = false;
                } else {
                    hideError(messageField, "message-error");
                }

                // Day validation
                const dayField = document.getElementById("day");
                if (!dayField.value || dayField.value < 1 || dayField.value > 31) {
                    showError(dayField, "day-error", "Please enter a valid day (1-31)");
                    isValid = false;
                } else {
                    hideError(dayField, "day-error");
                }

                // Month validation
                const monthField = document.getElementById("month");
                if (!monthField.value) {
                    showError(monthField, "month-error", "Please select a month");
                    isValid = false;
                } else {
                    hideError(monthField, "month-error");
                }

                // Year validation
                const yearField = document.getElementById("year");
                if (!yearField.value || yearField.value < 1900 || yearField.value > 2025) {
                    showError(yearField, "year-error", "Please enter a valid year (1900-2025)");
                    isValid = false;
                } else {
                    hideError(yearField, "year-error");
                }

                // Country validation
                const countryField = document.getElementById("country");
                if (!countryField.value) {
                    showError(countryField, "country-error", "Please select a country");
                    isValid = false;
                } else {
                    hideError(countryField, "country-error");
                }

                const checkbox = document.getElementById('link-checkbox');
                if (!checkbox.checked) {
                    document.getElementById('checkbox-error').classList.remove('hidden');
                    isValid = false;
                }

                // If all fields are valid, submit the form
                if (isValid) {
                    const successMessage = document.getElementById("success-submitted");
                    console.log("Form successfully submitted");
                    hideError();
                    clearFormInputs(formContainer);
                    showMessage(successMessage, true);
                    // form.submit();
                }
            });

            // Function to show validation error
            function showError(input, errorId, message) {
                const errorElement = document.getElementById(errorId);
                if (!errorElement) return;

                errorElement.textContent = message;
                errorElement.classList.remove("hidden");

                // Add error styles
                input.classList.add("bg-red-50", "border-red-500", "text-red-900", "placeholder-red-700", "focus:ring-red-500", "focus:border-red-500");
            }

            // Function to remove validation error
            function hideError(input, errorId) {
                const errorElement = document.getElementById(errorId);
                if (!errorElement) return;

                errorElement.classList.add("hidden");
                errorElement.textContent = "";

                // Remove error styles
                input.classList.remove("bg-red-50", "border-red-500", "text-red-900", "placeholder-red-700", "focus:ring-red-500", "focus:border-red-500");
            }

            function clearFormInputs(formContainer) {
                const form = formContainer.querySelector("#contact-form");

                if (!form) {
                    console.log("not exist");
                }
                form.querySelectorAll('input,textarea, select').forEach(input => {
                    if (input.type === 'checkbox' || input.type === 'radio') {
                        input.checked = false; // Décocher les cases
                    }
                    else {
                        input.value = ''; // Effacer les champs texte et autres
                    }
                });
            }

            // show success message on submit the form.
            function showMessage(messageElement, show){
                if(messageElement) {
                    messageElement.classList.remove("hidden");
                }else{
                    messageElement.classList.add("hidden")
                }
            }

            // delete the error when start typing
            document.querySelectorAll("#contact-form input, #contact-form textarea").forEach(input => {
                input.addEventListener("input", function () {
                    hideError(input, input.id + "-error");
                });
            });

        })
        .catch(error => console.error("Error loading the form:", error));
});
