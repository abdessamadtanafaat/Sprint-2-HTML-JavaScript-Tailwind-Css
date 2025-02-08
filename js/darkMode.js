<!-- Script pour charger le thème stocké avant l'affichage -->

    if (localStorage.getItem('darkMode') === 'enabled') {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

<!-- Script pour basculer entre mode clair et sombre -->
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Ajout d'un écouteur d'événement au bouton
    darkModeToggle.addEventListener('click', () => {
    // Bascule entre les modes clair et sombre
    document.documentElement.classList.toggle('dark');

    // Vérifie si le mode sombre est activé et met à jour le localStorage
    if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
} else {
    localStorage.setItem('darkMode', 'disabled');
}
});