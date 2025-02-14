document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/section-1.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("section-1-container").innerHTML = html;
            // Add the 'Show More' button functionality after the content is loaded
            const showMoreNewPostsButton = document.getElementById("show-more-new-posts-button");
            const showMoreTrendingPostsButton = document.getElementById("show-more-trending-posts-button");
            console.log(showMoreTrendingPostsButton)
            if (showMoreNewPostsButton) {
                showMoreNewPostsButton.addEventListener("click",  function() {
                    toggleMorePosts('new-posts', 'show-more-new-posts-button');}
                );
            }
            if (showMoreTrendingPostsButton) {
                showMoreTrendingPostsButton.addEventListener("click", function() {
                    toggleMorePosts('trending-posts', 'show-more-trending-posts-button');
                });
            }
        })
        .catch(error => console.error("Error loading section 1", error));
});


// Toggle the visibility of additional posts
function toggleMorePosts(postsId, buttonId) {
    const extraPosts = document.getElementById(postsId);
    const showMoreButton = document.getElementById(buttonId);

    if (extraPosts.style.display === "none" || !extraPosts.style.display) {
        extraPosts.style.display = "block";
        showMoreButton.textContent = "Show Less";
    } else {
        extraPosts.style.display = "none";
        showMoreButton.textContent = "Show More";
    }
}
