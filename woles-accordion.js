// woles-accordion.js - UI accordion yang woles

document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.woles-accordion');
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        const content = accordion.querySelector('.accordion-content');
        header.addEventListener('click', () => {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
