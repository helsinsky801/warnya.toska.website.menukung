/**
 * effects.js
 * Contains various JS effects for Warnya Toska website
 */

// Typing effect for the logo
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Fade in effect for elements with class 'fade-in'
function fadeInElements() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transition = 'opacity 1.5s ease-in-out';
        setTimeout(() => {
            el.style.opacity = 1;
        }, 100);
    });
}

// Animate menu buttons with scale effect on hover
function animateMenuButtons() {
    const buttons = document.querySelectorAll('.order-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.1)';
            btn.style.transition = 'transform 0.3s ease';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
    });
}

// Animate nav links with slide-in effect on page load
function animateNavLinks() {
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach((link, index) => {
        link.style.opacity = 0;
        link.style.transform = 'translateX(-20px)';
        link.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
        setTimeout(() => {
            link.style.opacity = 1;
            link.style.transform = 'translateX(0)';
        }, 100);
    });
}

// Parallax effect for background
function parallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        document.body.style.backgroundPositionY = rate + 'px';
    });
}

// Random color change for buttons on click
function randomColorOnClick() {
    const buttons = document.querySelectorAll('.btn, .order-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const colors = ['#8b4513', '#a0522d', '#daa520', '#cd853f', '#deb887'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            btn.style.backgroundColor = randomColor;
            setTimeout(() => {
                btn.style.backgroundColor = '';
            }, 1000);
        });
    });
}

// Shake effect for modal on open
function shakeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.addEventListener('show', () => {
            modal.style.animation = 'shake 0.5s';
        });
    }
}

// CSS animation for shake
const shakeKeyframes = `
@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
}
`;

// Add shake animation to head
function addShakeAnimation() {
    const style = document.createElement('style');
    style.textContent = shakeKeyframes;
    document.head.appendChild(style);
}

// Particle effect for buttons on click
function addParticleEffect(btn) {
    const particleCount = 10;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.backgroundColor = '#00CED1';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.left = (btn.offsetWidth / 2) + 'px';
        particle.style.top = (btn.offsetHeight / 2) + 'px';
        particle.style.animation = `particle ${Math.random() * 1 + 0.5}s ease-out`;
        btn.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
}

// 3D rotation effect for cards
function add3DRotationEffect() {
    const cards = document.querySelectorAll('.menu-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'rotateY(10deg) rotateX(5deg)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    });
}

// Glow effect on focus
function addGlowEffect() {
    const inputs = document.querySelectorAll('input, button');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.boxShadow = '0 0 10px rgba(0, 206, 209, 0.8)';
        });
        input.addEventListener('blur', () => {
            input.style.boxShadow = '';
        });
    });
}

// Particle animation CSS
const particleKeyframes = `
@keyframes particle {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0); }
}
`;

// Add particle animation to head
function addParticleAnimation() {
    const style = document.createElement('style');
    style.textContent = particleKeyframes;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        typeWriter(typingElement, 'Warnya Toska', 150);
    }
    fadeInElements();
    animateMenuButtons();
    animateNavLinks();
    parallaxEffect();
    randomColorOnClick();
    shakeModal();
    addShakeAnimation();
    add3DRotationEffect();
    addGlowEffect();
    addParticleAnimation();

    // Add particle effect to buttons
    const buttons = document.querySelectorAll('.btn, .order-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => addParticleEffect(btn));
    });
});
