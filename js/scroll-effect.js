document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");  // Add the "visible" class
                observer.unobserve(entry.target); // Stop observing once it's animated
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the section is in view

    sections.forEach(section => {
        section.classList.add('fade'); // Add the fade class initially
        observer.observe(section);
    });
});
