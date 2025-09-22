// menu.js - Hamburger menu toggle functionality

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        // Animate hamburger lines
        this.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Add chatbot link to navigation menu
    const chatbotLi = document.createElement('li');
    const chatbotLink = document.createElement('a');
    chatbotLink.href = 'chatbot.html';
    chatbotLink.textContent = 'Chatbot';
    chatbotLi.appendChild(chatbotLink);

    // Insert chatbot link before login and register links if present
    const loginLink = document.getElementById('login-btn');
    if (loginLink && loginLink.parentNode) {
        loginLink.parentNode.parentNode.insertBefore(chatbotLi, loginLink.parentNode);
    } else {
        navLinks.appendChild(chatbotLi);
    }

    // Close menu when clicking on close button
    const closeMenuBtn = navLinks.querySelector('.close-menu');
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Add animation to hamburger lines
    const spans = hamburger.querySelectorAll('span');
    hamburger.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Additional keyboard accessibility for hamburger menu
    hamburger.setAttribute('tabindex', '0');
    hamburger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });

    // Keyboard navigation for nav links
    navLinks.querySelectorAll('a').forEach(link => {
        link.setAttribute('tabindex', '0');
    });
});
