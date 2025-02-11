document.addEventListener('DOMContentLoaded', () => {
    // Check if dark mode is enabled in localStorage and apply it
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Get the dark mode toggle button
    const darkModeToggle = document.getElementById('darkModeToggle');

    if (darkModeToggle) {
        // Add event listener to toggle dark mode
        darkModeToggle.addEventListener('click', () => {
            // Toggle dark mode on the root element
            document.documentElement.classList.toggle('dark');

            // Update localStorage with the current theme
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }
});
