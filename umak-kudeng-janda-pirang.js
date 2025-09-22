// umak-kudeng-janda-pirang.js - Cool animations for popups only
// This script enhances popup interactions with various visual effects
// including glow, slide animations, particle effects, and accessibility features

document.addEventListener('DOMContentLoaded', function() {
    // Function for popup button hover glow effect
    // Adds a cyan glow and slight scale on hover for better user feedback
    function addPopupButtonGlow() {
        // Use event delegation for dynamically created buttons
        document.addEventListener('mouseenter', function(e) {
            if (e.target.classList.contains('whatsapp-btn') || e.target.classList.contains('order-btn') || e.target.classList.contains('open-popup-btn')) {
                e.target.style.boxShadow = '0 0 20px rgba(0, 206, 209, 0.8)';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.transition = 'all 0.3s ease';
            }
        }, true);

        document.addEventListener('mouseleave', function(e) {
            if (e.target.classList.contains('whatsapp-btn') || e.target.classList.contains('order-btn') || e.target.classList.contains('open-popup-btn')) {
                e.target.style.boxShadow = '';
                e.target.style.transform = '';
            }
        }, true);
    }

    // Function for popup slide-in animation
    function animatePopup() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.classList.contains('modal-content')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }
            });
        });

        // Observe future modals
        document.addEventListener('DOMNodeInserted', function(e) {
            if (e.target.classList && e.target.classList.contains('modal-content')) {
                e.target.style.opacity = '0';
                e.target.style.transform = 'scale(0.8)';
                e.target.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                observer.observe(e.target);
            }
        });
    }

    // Function for popup close animation
    function addPopupCloseAnimation() {
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('close') || (e.target.classList.contains('modal') && !e.target.querySelector('.modal-content').contains(e.target))) {
                const modal = e.target.closest('.modal');
                if (modal) {
                    const content = modal.querySelector('.modal-content');
                    content.style.opacity = '0';
                    content.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        modal.style.display = 'none';
                        content.style.opacity = '1';
                        content.style.transform = 'scale(1)';
                    }, 300);
                }
            }
        });
    }

    // Initialize popup animations
    addPopupButtonGlow();
    animatePopup();
    addPopupCloseAnimation();

    // Additional: Bounce effect for buttons on click
    function addBounceEffect() {
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('whatsapp-btn') || e.target.classList.contains('order-btn') || e.target.classList.contains('open-popup-btn')) {
                e.target.style.animation = 'bounce 0.5s';
                setTimeout(() => {
                    e.target.style.animation = '';
                }, 500);
            }
        });
    }

    // Bounce animation CSS
    const bounceStyle = document.createElement('style');
    bounceStyle.textContent = `
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
        }
    `;
    document.head.appendChild(bounceStyle);

    // Additional: Rotate effect for close button
    function addRotateEffect() {
        document.addEventListener('mouseenter', function(e) {
            if (e.target.classList.contains('close')) {
                e.target.style.transform = 'rotate(90deg)';
                e.target.style.transition = 'transform 0.3s ease';
            }
        }, true);

        document.addEventListener('mouseleave', function(e) {
            if (e.target.classList.contains('close')) {
                e.target.style.transform = 'rotate(0deg)';
            }
        }, true);
    }

    // Additional: Color transition for modal background
    function addColorTransition() {
        document.addEventListener('DOMNodeInserted', function(e) {
            if (e.target.classList && e.target.classList.contains('modal')) {
                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                e.target.style.transition = 'background-color 0.5s ease';
                setTimeout(() => {
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                }, 100);
            }
        });
    }

    // Additional: Slide in from different directions
    function addSlideVariations() {
        let slideDirection = 'up'; // Can be 'up', 'down', 'left', 'right'
        document.addEventListener('DOMNodeInserted', function(e) {
            if (e.target.classList && e.target.classList.contains('modal-content')) {
                e.target.style.opacity = '0';
                switch (slideDirection) {
                    case 'up':
                        e.target.style.transform = 'translateY(100%)';
                        break;
                    case 'down':
                        e.target.style.transform = 'translateY(-100%)';
                        break;
                    case 'left':
                        e.target.style.transform = 'translateX(100%)';
                        break;
                    case 'right':
                        e.target.style.transform = 'translateX(-100%)';
                        break;
                }
                e.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                setTimeout(() => {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translate(0, 0)';
                }, 100);
                // Cycle direction
                const directions = ['up', 'down', 'left', 'right'];
                slideDirection = directions[(directions.indexOf(slideDirection) + 1) % directions.length];
            }
        });
    }

    // Additional: Particle effect on button click
    function addParticleEffect() {
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('whatsapp-btn') || e.target.classList.contains('order-btn') || e.target.classList.contains('open-popup-btn')) {
                for (let i = 0; i < 10; i++) {
                    const particle = document.createElement('div');
                    particle.style.position = 'absolute';
                    particle.style.width = '5px';
                    particle.style.height = '5px';
                    particle.style.background = 'rgba(0, 206, 209, 0.8)';
                    particle.style.borderRadius = '50%';
                    particle.style.left = e.clientX + 'px';
                    particle.style.top = e.clientY + 'px';
                    particle.style.pointerEvents = 'none';
                    particle.style.animation = 'particle 1s ease-out';
                    document.body.appendChild(particle);
                    setTimeout(() => particle.remove(), 1000);
                }
            }
        });
    }

    // Particle animation CSS
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes particle {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0) translateY(-20px); }
        }
    `;
    document.head.appendChild(particleStyle);

    // Additional: Keyboard navigation for modals
    function addKeyboardSupport() {
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const modals = document.querySelectorAll('.modal[style*="display: block"]');
                modals.forEach(modal => {
                    const content = modal.querySelector('.modal-content');
                    content.style.opacity = '0';
                    content.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        modal.style.display = 'none';
                        content.style.opacity = '1';
                        content.style.transform = 'scale(1)';
                    }, 300);
                });
            }
        });
    }

    // Additional: Accessibility improvements
    function addAccessibility() {
        document.addEventListener('DOMNodeInserted', function(e) {
            if (e.target.classList && e.target.classList.contains('modal')) {
                e.target.setAttribute('role', 'dialog');
                e.target.setAttribute('aria-modal', 'true');
                const content = e.target.querySelector('.modal-content');
                if (content) {
                    content.setAttribute('tabindex', '-1');
                    content.focus();
                }
            }
        });
    }

    // Initialize additional features
    addBounceEffect();
    addRotateEffect();
    addColorTransition();
    addSlideVariations();
    addParticleEffect();
    addKeyboardSupport();
    addAccessibility();
});
