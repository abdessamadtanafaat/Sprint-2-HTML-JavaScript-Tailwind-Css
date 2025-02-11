document.addEventListener("DOMContentLoaded", function () {
    // Load the Hero Section
    fetch("/components/hero.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("hero-container").innerHTML = html;
            initImageSlider(); // Call the image slider function after loading HTML
        })
        .catch(error => console.error("Error loading hero section:", error));
});

// Function to initialize the dynamic image change logic
function initImageSlider() {
    const circles = document.querySelectorAll('.circle');
    const images = document.querySelectorAll('.image');

    if (images.length === 0 || circles.length === 0) return;

    // Initially show the first image
    images[0].classList.remove('hidden');
    circles[0].classList.add('bg-red-600');

    // Loop through circles and add event listeners
    circles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            // Hide all images and reset circle colors
            images.forEach(image => image.classList.add('hidden'));
            circles.forEach(c => c.classList.remove('bg-red-600', 'bg-black'));

            // Show the clicked image and change the circle color to red
            images[index].classList.remove('hidden');
            circle.classList.add('bg-red-600');
        });
    });
}
