// adip tangkap salah di sd.js - Effects for photo on home page

document.addEventListener('DOMContentLoaded', function() {
    const photoDiv = document.getElementById('additional-photo');
    const photoImg = photoDiv.querySelector('img');

    // Initial glow effect
    photoImg.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5), 0 4px 8px rgba(0,0,0,0.2)';

    // Fade in effect on load
    photoImg.style.opacity = 0;
    photoImg.style.transform = 'scale(0.9)';
    let opacity = 0;
    let scale = 0.9;
    const step = 0.02;
    function fadeIn() {
        opacity += step;
        scale += step * 0.1;
        if (opacity >= 1) {
            photoImg.style.opacity = 1;
            photoImg.style.transform = 'scale(1)';
            return;
        }
        photoImg.style.opacity = opacity;
        photoImg.style.transform = `scale(${scale})`;
        requestAnimationFrame(fadeIn);
    }
    requestAnimationFrame(fadeIn);

    // Hover effects with enhanced glow
    photoImg.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
        this.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.8), 0 8px 16px rgba(0,0,0,0.3)';
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });

    photoImg.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
        this.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5), 0 4px 8px rgba(0,0,0,0.2)';
    });

    // Click effect with bright glow
    photoImg.addEventListener('click', function() {
        this.style.transform = 'scale(1.2) rotate(5deg)';
        this.style.boxShadow = '0 0 40px rgba(255, 215, 0, 1), 0 8px 16px rgba(0,0,0,0.3)';
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5), 0 4px 8px rgba(0,0,0,0.2)';
        }, 300);
    });

    // Additional animation: slow rotation back and forth
    let rotateAngle = 0;
    let rotateDirection = 1;
    function rotateAnimation() {
        rotateAngle += rotateDirection * 0.2;
        if (rotateAngle > 5 || rotateAngle < -5) {
            rotateDirection *= -1;
        }
        photoImg.style.transform = `scale(1) rotate(${rotateAngle}deg)`;
        requestAnimationFrame(rotateAnimation);
    }
    rotateAnimation();

    // Additional animation: subtle pulse glow
    let glowIntensity = 0.5;
    let glowDirection = 1;
    function pulseGlow() {
        glowIntensity += glowDirection * 0.01;
        if (glowIntensity > 0.8 || glowIntensity < 0.3) {
            glowDirection *= -1;
        }
        photoImg.style.boxShadow = `0 0 20px rgba(255, 215, 0, ${glowIntensity}), 0 4px 8px rgba(0,0,0,0.2)`;
        requestAnimationFrame(pulseGlow);
    }
    pulseGlow();

    // Additional effect: color shift on double click
    photoImg.addEventListener('dblclick', function() {
        const originalFilter = this.style.filter || '';
        this.style.filter = 'hue-rotate(90deg) saturate(1.5)';
        setTimeout(() => {
            this.style.filter = originalFilter;
        }, 1000);
    });

    // Additional effect: zoom on scroll
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const zoom = 1 + scrollY * 0.0005;
        photoImg.style.transform = `scale(${Math.min(zoom, 1.2)})`;
    });

    // Additional effect: random sparkle on hover
    photoImg.addEventListener('mouseenter', function() {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.width = '10px';
        sparkle.style.height = '10px';
        sparkle.style.background = 'radial-gradient(circle, #fff, #ffd700)';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkle 1s ease-out';
        photoDiv.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
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

    // Additional effect: tilt on mouse move
    photoImg.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    photoImg.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });

    // Additional effect: border animation
    let borderAngle = 0;
    function borderAnimation() {
        borderAngle += 1;
        photoImg.style.borderImage = `linear-gradient(${borderAngle}deg, #ffd700, #ff6347) 1`;
        requestAnimationFrame(borderAnimation);
    }
    borderAnimation();
});
