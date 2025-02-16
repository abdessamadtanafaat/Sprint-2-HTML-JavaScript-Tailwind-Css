document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('language-select');

    selectElement.addEventListener('change', function () {
        const selectedValue = selectElement.value;
        if (selectedValue) {
            window.location.href = selectedValue;
        }
    });
});