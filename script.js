// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in class to elements you want to animate
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-title, .about-text, .project-card, .contact-form');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});
