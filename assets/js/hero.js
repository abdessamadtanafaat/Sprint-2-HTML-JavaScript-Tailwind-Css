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
            initImageSlider()
        })
        .catch(error => console.error("Error loading hero section:", error));
});

// function initImageSlider() {
//     const imageUrls = [
//         "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D",
//     ];
//
//     const imageContainer = document.getElementById("imageContainer");
//     const paginationContainer = document.getElementById("paginationContainer");
//
//     console.log(imageContainer);
//     console.log(paginationContainer);
//     const maxPagination = 4;
//     let currentIndex = 0;
//     let autoSlideInterval;
//
//
//     // Clear existing content
//     imageContainer.innerHTML = "";
//     paginationContainer.innerHTML = "";
//
//     // Create images dynamically
//     imageUrls.forEach((url, index) => {
//         const img = document.createElement("img");
//         img.src = url;
//         img.className = `absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${index === 0 ? "opacity-100" : "opacity-0"}`;
//         img.dataset.index = index;
//         imageContainer.appendChild(img);
//     });
//
//     // Create pagination bullets (max 4)
//     for (let i = 0; i < Math.min(imageUrls.length, maxPagination); i++) {
//         const bullet = document.createElement("button");
//         bullet.className = `pagination-btn w-3 h-3 rounded-full transition duration-300 ${i === 0 ? "bg-red-600" : "bg-gray-400"}`;
//         bullet.dataset.index = i;
//         bullet.addEventListener("click", () => {
//             clearInterval(autoSlideInterval); // Stop auto-slide on manual click
//             changeImage(i);
//         });
//         paginationContainer.appendChild(bullet);
//     }
//
//     function changeImage(index) {
//         const images = document.querySelectorAll("#imageContainer img");
//         const bullets = document.querySelectorAll(".pagination-btn");
//
//         // Reset all images and bullets
//         images.forEach(img => img.classList.replace("opacity-100", "opacity-0"));
//         bullets.forEach(btn => btn.classList.replace("bg-red-600", "bg-gray-400"));
//
//         // Show selected image & update bullet color
//         images[index].classList.replace("opacity-0", "opacity-100");
//         bullets[index].classList.replace("bg-gray-400", "bg-red-600");
//
//         currentIndex = index; // Update current index
//     }
//
//     function autoSlide() {
//         currentIndex = (currentIndex + 1) % imageUrls.length;
//         changeImage(currentIndex);
//     }
//
//     // Start auto-slide every 2 seconds
//     autoSlideInterval = setInterval(autoSlide, 2000);
// }

function initImageSlider() {
    const circlesContainer = document.querySelector('.pagination ul'); // Get the pagination container
    console.log(circlesContainer);
    if (!circlesContainer) {
        console.error('Pagination container not found!');
        return; // Exit the function if the container doesn't exist
    }
    const imageContainer = document.getElementById("imageContainer"); // Get the image container
    if (!imageContainer) {
        console.error('Image container not found!');
        return; // Exit the function if the container doesn't exist
    }
    const imageUrls = [
        "https://images.unsplash.com/photo-1738584672973-f33b662c05d4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
        "https://plus.unsplash.com/premium_photo-1738857914575-3d3b2fb7064e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1739056656210-7c3cab6fff42?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1739361133037-77be66a4ea6a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    ].slice(0, 4); // Slice the array to limit it to 4 images

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

    // Function to change the image and update the bullet color
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

    // Automatic image change every 2 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % imageUrls.length; // Move to the next image in the array
        changeImage(currentIndex);
    }, 10000); // Change image every 2 seconds
}
