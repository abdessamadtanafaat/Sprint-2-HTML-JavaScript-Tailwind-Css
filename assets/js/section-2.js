document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/section-2.html")
        .then(response => response.text())
        .then(html => {
            // Insert the HTML content into the container
            document.getElementById("section-2-container").innerHTML = html;

            // Get references to the 'Load More' button and the content area
            const loadMoreButton = document.getElementById('loadMoreButton');
            const content = document.getElementById('content');

            // Event listener for the 'Load More' button
            loadMoreButton.addEventListener('click', function(event) {
                event.preventDefault();  // Prevent the page from reloading

                // New content to be added when the user clicks 'Show More'
                const newContent = `
                    <p class="text-gray-500 dark:text-gray-400 mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has survived
                        not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                `;

                // Append the new content to the existing content
                content.innerHTML += newContent;

                // Change the button text to 'Show Less'
                loadMoreButton.textContent = 'Show Less';
                loadMoreButton.id = 'showLessButton';  // Change the button ID to reflect the "Show Less" state

                // Add event listener for 'Show Less' button
                document.getElementById('showLessButton').addEventListener('click', function(event) {
                    event.preventDefault();  // Prevent the page from reloading

                    // Remove the newly added content (collapse it)
                    content.innerHTML = content.innerHTML.split('<p class="text-gray-500 dark:text-gray-400 mb-6">')[0];

                    // Change the button text back to 'Show More'
                    loadMoreButton.textContent = 'Show More';
                    loadMoreButton.id = 'loadMoreButton';  // Change the button ID back to "Show More"
                });
            });
        })
        .catch(error => console.error("Error loading section 2:", error));  // Log any errors
});
