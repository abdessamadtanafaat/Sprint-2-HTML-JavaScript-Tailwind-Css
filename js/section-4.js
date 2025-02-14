document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/section-4.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("section-4-container").innerHTML = html;

            // Fetch card data from JSON
            fetch('js/data/cardsData.json')
                .then(response => response.json())
                .then(cards => {
                    let currentCardIndex = 0;
                    let visibleCards = getVisibleCardCount();

                    function getVisibleCardCount() {
                        if (window.innerWidth >= 1024) return 4; // Desktop (lg)
                        if (window.innerWidth >= 768) return 1; // Medium (md)
                        return 1; // Mobile (sm)
                    }

                    function loadCards() {
                        const container = document.getElementById('card-container');
                        container.innerHTML = '';

                        visibleCards = getVisibleCardCount(); // Update on screen resize

                        for (let i = 0; i < cards.length; i++) {
                            const card = cards[i];
                            const cardElement = document.createElement('div');
                            cardElement.classList.add('bg-white', 'dark:bg-gray-800', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'card-item');
                            cardElement.innerHTML = `
                                <img src="${card.imgSrc}" alt="Card Image" class="w-full h-48 object-cover">
                                <div class="p-6 text-center">
                                    <button class="dark:text-white text-dark font-semi-bold border-2 px-6 py-2 dark:hover:bg-gray-400 hover:bg-gray-100 transition">${card.buttonText}</button>
                                    <p class="mt-4 text-base text-gray-300 dark:text-gray-400">${card.description}</p>
                                    <p class="mt-2 text-sm text-gray-300 dark:text-gray-400">${card.date}</p>
                                </div>
                            `;
                            if (i < visibleCards) {
                                cardElement.style.display = "block"; // Show only the first visibleCards items
                            } else {
                                cardElement.style.display = "none"; // Hide the rest
                            }
                            container.appendChild(cardElement);
                        }
                    }

                    function showNextCards() {
                        if (currentCardIndex + visibleCards >= cards.length) return;

                        const container = document.getElementById('card-container');
                        container.classList.add('transition-transform', 'duration-300', 'ease-in-out');
                        container.style.transform = `translateX(-25%)`;

                        setTimeout(() => {
                            container.classList.remove('transition-transform', 'duration-300', 'ease-in-out');
                            container.style.transform = 'translateX(0)';

                            const cardItems = document.querySelectorAll('.card-item');
                            cardItems[currentCardIndex].style.display = "none"; // Hide the current card
                            currentCardIndex++;

                            if (cardItems[currentCardIndex + visibleCards - 1]) {
                                cardItems[currentCardIndex + visibleCards - 1].style.display = "block"; // Show the next card
                            }
                        }, 300); // Timeout matches animation duration
                    }

                    function showPrevCards() {
                        if (currentCardIndex === 0) return;

                        const container = document.getElementById('card-container');
                        container.classList.add('transition-transform', 'duration-300', 'ease-in-out');
                        container.style.transform = `translateX(25%)`;

                        setTimeout(() => {
                            container.classList.remove('transition-transform', 'duration-300', 'ease-in-out');
                            container.style.transform = 'translateX(0)';

                            const cardItems = document.querySelectorAll('.card-item');
                            cardItems[currentCardIndex + visibleCards - 1].style.display = "none"; // Hide the last visible card
                            currentCardIndex--;

                            cardItems[currentCardIndex].style.display = "block"; // Show the previous card
                        }, 300); // Timeout matches animation duration
                    }

                    // Event listeners
                    document.getElementById('next-arrow').addEventListener('click', showNextCards);
                    document.getElementById('prev-arrow').addEventListener('click', showPrevCards);

                    // Initialize the first set of cards
                    loadCards();

                    // Recalculate on resize
                    window.addEventListener('resize', function () {
                        loadCards();
                    });
                })
                .catch(error => console.error("Error loading card data: ", error));
        })
        .catch(error => console.error("Error loading section 4: ", error));
});
