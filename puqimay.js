// puqimay.js - Typing effect for cara-pesan page

document.addEventListener('DOMContentLoaded', function() {
    // Function to simulate typing effect
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Apply typing effect to the hero paragraph
    const heroP = document.querySelector('.hero p');
    if (heroP) {
        const originalText = heroP.textContent;
        typeWriter(heroP, originalText, 30);
    }

    // Apply typing effect to each step in the list
    const steps = document.querySelectorAll('.steps-list li');
    steps.forEach((step, index) => {
        const originalText = step.textContent;
        setTimeout(() => {
            typeWriter(step, originalText, 20);
        }, index * 1000); // Delay each step by 1 second
    });

    // Apply typing effect to the note paragraph
    const noteP = document.querySelector('.note');
    if (noteP) {
        const originalText = noteP.textContent;
        setTimeout(() => {
            typeWriter(noteP, originalText, 25);
        }, steps.length * 1000 + 500); // After all steps
    }
});
