document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('video-btn').addEventListener('click', function() {
        // Hide the content box and pagination when the video is shown
        document.getElementById('contentBox').style.display = 'none';
        document.querySelector('.pagination').style.display = 'none';

        // Get the video container div
        const videoContainer = document.getElementById('video-container');

        // Insert the iframe for the video
        videoContainer.innerHTML = `
        <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""
                frameborder="0" src="https://www.youtube.com/embed/3O_3X7InOw8"></iframe>
    `;

        // Show the video container (make it visible)
        videoContainer.classList.remove('hidden');
    });

});
