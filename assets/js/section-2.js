document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/section-2.html")
        .then(response => response.text())
        .then(html => {
            // Insérer le contenu dans le conteneur avec id "section-2-container"
            document.getElementById("section-2-container").innerHTML = html;

            // Ajouter l'événement "Load More" après avoir inséré le contenu
            document.getElementById('loadMoreButton').addEventListener('click', function(event) {
                event.preventDefault();  // Empêche le rechargement de la page

                // Nouveau contenu à ajouter
                const newContent = `
                    <p class="text-gray-500 dark:text-gray-400 mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has survived
                        not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                `;

                // Ajoute le nouveau contenu à l'élément existant
                document.getElementById('content').innerHTML += newContent;

                // Optionnel : Masquez ou désactivez le bouton après le chargement
                document.getElementById('loadMoreButton').style.display = 'none';
            });
        })
        .catch(error => console.error("Error loading hero section:", error));
});
