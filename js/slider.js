document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.getElementById("hero");
    const dots = document.querySelectorAll(".pagination-btn");

    // Array of background images
    const images = [
        "/assets/images/background-hero.png",
        "/assets/images/background-hero-1.png",
        "/assets/images/background-hero-2.png",
        "/assets/images/background-hero-3.png",

    ];

    let currentIndex = 0;
    let interval;

    // Function to update background and active dot
    function updateHeroSection(index) {
        heroSection.style.backgroundImage = `url('${images[index]}')`;
        heroSection.style.transition = "background-image 1s ease-in-out";

        // Update active dot
        dots.forEach((dot, i) => {
            dot.style.backgroundColor = i === index ? "#f87171" : "#000";
        });
    }

    // Auto-change slides every 5 seconds
    function startAutoSlide() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateHeroSection(currentIndex);
        }, 5000);
    }

    // Click event for pagination dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            clearInterval(interval); // Stop auto-slide on manual selection
            currentIndex = index;
            updateHeroSection(index);
            startAutoSlide(); // Restart auto-slide
        });
    });

    // Initialize first slide
    updateHeroSection(currentIndex);
    startAutoSlide();
});
