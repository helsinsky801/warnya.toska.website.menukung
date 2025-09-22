// kenyang sabu.js - Slide-in effect for hamburger menu popup

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Initialize navLinks off-screen
    navLinks.style.transform = 'translateX(100%)';
    navLinks.style.transition = 'transform 0.3s ease-in-out';

    hamburger.addEventListener('click', function() {
        if (navLinks.style.transform === 'translateX(0%)') {
            navLinks.style.transform = 'translateX(100%)';
            this.classList.remove('active');
        } else {
            navLinks.style.transform = 'translateX(0%)';
            this.classList.add('active');
        }
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.style.transform = 'translateX(100%)';
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking on close button
    const closeMenuBtn = navLinks.querySelector('.close-menu');
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', function() {
            navLinks.style.transform = 'translateX(100%)';
            hamburger.classList.remove('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.style.transform = 'translateX(100%)';
            hamburger.classList.remove('active');
        }
    });

    // Additional: Fade in links on menu open
    function fadeInLinks() {
        const links = navLinks.querySelectorAll('a');
        links.forEach((link, index) => {
            link.style.opacity = 0;
            link.style.transform = 'translateY(20px)';
            link.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`;
            setTimeout(() => {
                link.style.opacity = 1;
                link.style.transform = 'translateY(0)';
            }, 100);
        });
    }

    // Call fadeInLinks when menu opens
    hamburger.addEventListener('click', function() {
        if (navLinks.style.transform === 'translateX(100%)') {
            setTimeout(fadeInLinks, 300);
        }
    });

    // Additional: Bounce effect for hamburger lines
    const spans = hamburger.querySelectorAll('span');
    hamburger.addEventListener('click', function() {
        spans.forEach((span, index) => {
            span.style.transition = 'transform 0.3s ease';
            if (this.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });

    // Additional: Keyboard navigation
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

    // Additional: Swipe to close on mobile
    let startX = 0;
    let currentX = 0;
    navLinks.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    navLinks.addEventListener('touchmove', function(e) {
        currentX = e.touches[0].clientX;
        const diff = startX - currentX;
        if (diff > 50) {
            navLinks.style.transform = `translateX(${100 - diff}px)`;
        }
    });

    navLinks.addEventListener('touchend', function() {
        if (startX - currentX > 100) {
            navLinks.style.transform = 'translateX(100%)';
            hamburger.classList.remove('active');
        } else {
            navLinks.style.transform = 'translateX(0%)';
        }
    });

    // Additional: Accessibility improvements
    hamburger.setAttribute('aria-label', 'Toggle navigation menu');
    navLinks.setAttribute('aria-hidden', 'true');
    hamburger.addEventListener('click', function() {
        const isOpen = navLinks.style.transform === 'translateX(0%)';
        navLinks.setAttribute('aria-hidden', !isOpen);
    });

    // Additional: Animation for close button
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(90deg)';
            this.style.transition = 'transform 0.2s ease';
        });
        closeMenuBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Additional: Background blur effect removed as per user request to prevent homepage blur
    // const body = document.body;
    // hamburger.addEventListener('click', function() {
    //     if (navLinks.style.transform === 'translateX(0%)') {
    //         body.style.filter = 'blur(2px)';
    //         body.style.transition = 'filter 0.3s ease';
    //     } else {
    //         body.style.filter = 'none';
    //     }
    // });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.style.transform === 'translateX(0%)') {
            navLinks.style.transform = 'translateX(100%)';
            hamburger.classList.remove('active');
            // body.style.filter = 'none';
        }
    });
});
