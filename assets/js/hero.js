document.addEventListener("DOMContentLoaded", function () {

    const heroContainer = document.getElementById("hero-container");

    if (!heroContainer) {
        console.error("Error: #hero-container not found in the document.");
        return;
    }
    fetch("/components/hero.html")
        .then(response => response.text())
        .then(html => {
            console.log("Hero section loaded successfully.");
            heroContainer.innerHTML = html;
            initImageSlider();
            initWatchVideoButton();
        })
        .catch(error => console.error("Error loading hero section:", error));
});

function initImageSlider() {
    const circlesContainer = document.querySelector('.pagination ul'); // Get the pagination container
    console.log(circlesContainer);
    if (!circlesContainer) {
        console.error('Pagination container not found!');
        return;
    }
    const imageContainer = document.getElementById("imageContainer"); // Get the image container
    if (!imageContainer) {
        console.error('Image container not found!');
        return;
    }
    // Fetch images from the external JSON file
    fetch('assets/js/data/heroImages.json')
        .then(response => response.json())
        .then(data => {
            const imageUrls = data.imageUrls; // Get the image URLs from the JSON file


    let currentIndex = 0; // Initialize the index of the current image

    // Set the initial background image
    imageContainer.style.backgroundImage = `url(${imageUrls[currentIndex]})`;

    // Dynamically generate the pagination buttons (bullets)
    imageUrls.forEach((url, index) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.classList.add('pagination-btn', 'w-3', 'h-3', 'rounded-full', 'transition', 'duration-300');
        button.style.backgroundColor = index === 0 ? '#f87171' : '#000'; // Set first bullet to red
        button.addEventListener('click', () => changeImage(index)); // Attach click event
        li.appendChild(button);
        circlesContainer.appendChild(li);
    });

    // change the image and update the bullet color
    function changeImage(index) {
        // Update the background image dynamically
        imageContainer.style.backgroundImage = `url(${imageUrls[index]})`;

        // Remove red color from all circles and reset them to black
        const paginationButtons = circlesContainer.querySelectorAll('.pagination-btn');
        paginationButtons.forEach((circle) => circle.style.backgroundColor = '#000');

        // Set the clicked circle to red
        paginationButtons[index].style.backgroundColor = '#f87171';

        // Update the current index
        currentIndex = index;
    }

    // Automatic image change every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % imageUrls.length; // Move to the next image in the array
        changeImage(currentIndex);
    }, 5000);
        })
        .catch(error => console.error("Error loading images.json:", error));
}
function initWatchVideoButton() {
    // Add event listener to the "Watch Video" button
    document.getElementById("watchVideoBtn").addEventListener("click", function() {
        const videoContainer = document.getElementById("videoContainer");
        const youtubeVideo = document.getElementById("youtubeVideo");

        console.log(videoContainer, youtubeVideo)
        // Set the YouTube video URL
        youtubeVideo.src = "https://www.youtube.com/embed/lCxcTsOHrjo";

        // Show the video container and hide the other content
        videoContainer.classList.remove("hidden");
        document.getElementById("contentBox").classList.add("hidden");
    });
}