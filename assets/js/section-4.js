document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/section-4.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("section-4-container").innerHTML = html;

            // Fetch the card data from the external JSON file
            fetch('assets/js/data/cardsData.json')
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
                        visibleCards = getVisibleCardCount(); // Recalculate based on the screen size
                        console.log(visibleCards);

                        // Loop through the cards to generate HTML dynamically
                        for (let i = currentCardIndex; i < currentCardIndex + visibleCards; i++) {
                            const card = cards[i % cards.length]; // Loop around if we exceed the number of cards
                            const cardElement = document.createElement('div');
                            cardElement.classList.add('bg-white', 'dark:bg-gray-800', 'rounded-lg', 'shadow-lg', 'overflow-hidden');
                            cardElement.innerHTML = `
                                <img src="${card.imgSrc}" alt="Card Image" class="w-full h-48 object-cover">
                                <div class="p-6 text-center">
                                    <button class="dark:text-white text-dark font-semi-bold border-2 px-6 py-2 dark:hover:bg-gray-400 hover:bg-gray-100 transition">${card.buttonText}</button>
                                    <p class="mt-4 text-base text-gray-500 dark:text-gray-400">${card.description}</p>
                                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">${card.date}</p>
                                </div>
                            `;
                            container.appendChild(cardElement);
                        }
                    }

                    function showNextCards() {
                        if (currentCardIndex === cards.length - 1) return;
                        const container = document.getElementById('card-container');
                        container.classList.add('transition-transform', 'duration-500', 'ease-in-out');
                        container.style.transform = `translateX(-25%)`;

                        // After the animation, reset the position and load the next set of cards
                        setTimeout(() => {
                            container.classList.remove('transition-transform', 'duration-500', 'ease-in-out');
                            container.style.transform = 'translateX(0)';
                            currentCardIndex = (currentCardIndex + visibleCards) % cards.length;
                            loadCards();
                        }, 500); // Timeout matches animation duration
                    }

                    function showPrevCards() {
                        if (currentCardIndex === 0) return;
                        const container = document.getElementById('card-container');
                        container.classList.add('transition-transform', 'duration-500', 'ease-in-out');
                        container.style.transform = `translateX(25%)`;

                        // After the animation, reset the position and load the previous set of cards
                        setTimeout(() => {
                            container.classList.remove('transition-transform', 'duration-500', 'ease-in-out');
                            container.style.transform = 'translateX(0)';
                            currentCardIndex = (currentCardIndex - visibleCards + cards.length) % cards.length;
                            loadCards();
                        }, 500); // Timeout matches animation duration
                    }

                    // Event listeners for navigation buttons
                    document.getElementById('next-arrow').addEventListener('click', showNextCards);
                    document.getElementById('prev-arrow').addEventListener('click', showPrevCards);

                    // Initialize the first set of cards
                    loadCards();

                    // Recalculate visible cards and reload when window is resized
                    window.addEventListener('resize', function() {
                        loadCards();
                    });
                })
                .catch(error => console.error("Error loading card data: ", error));
        })
        .catch(error => console.error("Error loading section 4: ", error));
});