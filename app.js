// app.js - Main application initialization

document.addEventListener('DOMContentLoaded', function() {
    console.log('Warnya Toska website loaded successfully!');

    // Initialize all components
    initNavigation();
    initModals();
    initEffects();
    initWhatsApp();
    window.initNewFeatures();

    // Function to initialize navigation (hamburger menu)
    function initNavigation() {
        // Hamburger menu is handled in menu.js
        console.log('Navigation initialized');
        // Additional keyboard navigation support
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        if (hamburger && navLinks) {
            hamburger.setAttribute('tabindex', '0');
            hamburger.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
            navLinks.querySelectorAll('a').forEach(link => {
                link.setAttribute('tabindex', '0');
            });
        }
    }

    // Function to initialize modals
    function initModals() {
        // Modals are handled in popup.js
        console.log('Modals initialized');
        // Add global ESC key listener to close modals
        window.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal').forEach(modal => {
                    if (modal.style.display === 'block') {
                        modal.style.display = 'none';
                    }
                });
            }
        });
    }

    // Function to initialize effects
    function initEffects() {
        // Effects are handled in effects.js
        console.log('Effects initialized');
        // Additional effect: console log window resize
        window.addEventListener('resize', () => {
            console.log(`Window resized to ${window.innerWidth}x${window.innerHeight}`);
        });
    }

    // Function to initialize WhatsApp functionality
    function initWhatsApp() {
        // WhatsApp is handled in whatsapp.js
        console.log('WhatsApp functionality initialized');
        // Additional feature: log when WhatsApp link is opened
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('confirm-btn')) {
                console.log('WhatsApp order initiated for item:', event.target.getAttribute('data-item'));
            }
        });
    }

    // Global error handler
    window.addEventListener('error', function(e) {
        console.error('An error occurred:', e.error);
    });

    // Service worker registration (if needed for PWA)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(function(error) {
                console.log('Service Worker registration failed:', error);
            });
    }

    // Lazy loading for images (if any)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Analytics (placeholder)
    function trackPageView(page) {
        console.log(`Page viewed: ${page}`);
        // Here you could integrate with Google Analytics or similar
    }

    trackPageView(window.location.pathname);

    // Utility functions
    window.utils = {
        debounce: function(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        throttle: function(func, limit) {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        }
    };
});
