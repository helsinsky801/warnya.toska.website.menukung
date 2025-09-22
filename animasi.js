// animasi.js - Cool JS animations for Warnya Toska website

document.addEventListener('DOMContentLoaded', function() {
    // Animate all buttons with glow and scale on hover
    const buttons = document.querySelectorAll('button, .btn, .order-btn, .open-popup-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.05)';
            btn.style.boxShadow = '0 0 20px rgba(0, 206, 209, 0.8)';
            btn.style.transition = 'all 0.3s ease';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
            btn.style.boxShadow = '';
        });
        btn.addEventListener('click', () => {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Fade in text elements
    const textElements = document.querySelectorAll('h1, h2, h3, p');
    textElements.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 100);
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 1s ease, transform 1s ease';
        observer.observe(section);
    });

    // Pulse animation for special buttons
    function pulseButton(btn) {
        let scale = 1;
        let growing = true;
        setInterval(() => {
            if (growing) {
                scale += 0.01;
                if (scale >= 1.1) growing = false;
            } else {
                scale -= 0.01;
                if (scale <= 1) growing = true;
            }
            btn.style.transform = `scale(${scale})`;
        }, 50);
    }

    const specialButtons = document.querySelectorAll('.open-popup-btn');
    specialButtons.forEach(btn => pulseButton(btn));

    // Typing effect for headings
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

    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        if (!heading.id || heading.id !== 'typing-text') {
            const originalText = heading.textContent;
            typeWriter(heading, originalText, 50);
        }
    });

    // Bounce effect for menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.animation = `bounceIn 0.8s ease ${index * 0.1}s both`;
    });

    // Add bounce animation CSS
    const bounceStyle = document.createElement('style');
    bounceStyle.textContent = `
        @keyframes bounceIn {
            0% { opacity: 0; transform: scale(0.3); }
            50% { opacity: 1; transform: scale(1.05); }
            70% { transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(bounceStyle);

    // Random sparkle effect on buttons
    function addSparkle(btn) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.width = '10px';
        sparkle.style.height = '10px';
        sparkle.style.background = 'radial-gradient(circle, #fff, #00CED1)';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkle 1s ease-out';
        btn.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }

    buttons.forEach(btn => {
        btn.style.position = 'relative';
        btn.addEventListener('click', () => addSparkle(btn));
    });

    // Sparkle animation CSS
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkle {
            0% { opacity: 1; transform: scale(0); }
            50% { opacity: 0.8; transform: scale(1); }
            100% { opacity: 0; transform: scale(2); }
        }
    `;
    document.head.appendChild(sparkleStyle);

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 3D flip effect for cards
    function add3DFlipEffect() {
        const cards = document.querySelectorAll('.menu-item');
        cards.forEach(card => {
            card.style.perspective = '1000px';
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'rotateY(180deg)';
                card.style.transition = 'transform 0.6s';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateY(0deg)';
            });
        });
    }

    // Light effect on mouse move
    function addLightEffect() {
        document.addEventListener('mousemove', (e) => {
            const light = document.createElement('div');
            light.style.position = 'fixed';
            light.style.left = e.clientX + 'px';
            light.style.top = e.clientY + 'px';
            light.style.width = '20px';
            light.style.height = '20px';
            light.style.background = 'radial-gradient(circle, rgba(0, 206, 209, 0.5), transparent)';
            light.style.borderRadius = '50%';
            light.style.pointerEvents = 'none';
            light.style.animation = 'lightFade 0.5s ease-out';
            document.body.appendChild(light);
            setTimeout(() => light.remove(), 500);
        });
    }

    // Light fade animation CSS
    const lightStyle = document.createElement('style');
    lightStyle.textContent = `
        @keyframes lightFade {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(2); }
        }
    `;
    document.head.appendChild(lightStyle);

    // Wave animation for text
    function addWaveEffect() {
        const waveElements = document.querySelectorAll('h1, h2');
        waveElements.forEach(el => {
            const text = el.textContent;
            el.innerHTML = '';
            for (let i = 0; i < text.length; i++) {
                const span = document.createElement('span');
                span.textContent = text[i];
                span.style.display = 'inline-block';
                span.style.animation = `wave 2s ease-in-out ${i * 0.1}s infinite`;
                el.appendChild(span);
            }
        });
    }

    // Wave animation CSS
    const waveStyle = document.createElement('style');
    waveStyle.textContent = `
        @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(waveStyle);

    // Initialize additional effects
    add3DFlipEffect();
    addLightEffect();
    addWaveEffect();
});
