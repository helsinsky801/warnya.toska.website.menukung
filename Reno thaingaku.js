// Reno thaingaku.js - Enhanced animation functions for login and register popups

document.addEventListener('DOMContentLoaded', function() {
    // Animate modal appearance with fade-in, scale, and bounce effect
    function animateModalIn(modal) {
        modal.style.display = 'block';
        modal.style.opacity = 0;
        modal.style.transform = 'scale(0.5) translateY(50px)';
        let opacity = 0;
        let scale = 0.5;
        let translateY = 50;
        const step = 0.08;
        function animate() {
            opacity += step;
            scale += step * 0.6;
            translateY -= step * 50;
            if (opacity >= 1 && scale >= 1 && translateY <= 0) {
                modal.style.opacity = 1;
                modal.style.transform = 'scale(1) translateY(0)';
                // Add bounce effect
                setTimeout(() => {
                    modal.style.transform = 'scale(1.05) translateY(-5px)';
                    setTimeout(() => {
                        modal.style.transform = 'scale(1) translateY(0)';
                    }, 100);
                }, 100);
                return;
            }
            modal.style.opacity = opacity;
            modal.style.transform = `scale(${Math.min(scale, 1)}) translateY(${Math.max(translateY, 0)}px)`;
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }

    // Animate modal disappearance with fade-out, scale, and slide effect
    function animateModalOut(modal, callback) {
        let opacity = 1;
        let scale = 1;
        let translateY = 0;
        const step = 0.08;
        function animate() {
            opacity -= step;
            scale -= step * 0.3;
            translateY += step * 30;
            if (opacity <= 0) {
                modal.style.opacity = 0;
                modal.style.transform = 'scale(0.7) translateY(30px)';
                modal.style.display = 'none';
                if (callback) callback();
                return;
            }
            modal.style.opacity = opacity;
            modal.style.transform = `scale(${Math.max(scale, 0.7)}) translateY(${translateY}px)`;
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }

    // Slide in from left
    function slideInLeft(element) {
        element.style.opacity = 0;
        element.style.transform = 'translateX(-100%)';
        element.style.display = 'block';
        let opacity = 0;
        let translateX = -100;
        const step = 0.05;
        function animate() {
            opacity += step;
            translateX += step * 100;
            if (opacity >= 1 && translateX >= 0) {
                element.style.opacity = 1;
                element.style.transform = 'translateX(0)';
                return;
            }
            element.style.opacity = opacity;
            element.style.transform = `translateX(${Math.min(translateX, 0)}%)`;
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }

    // Slide in from right
    function slideInRight(element) {
        element.style.opacity = 0;
        element.style.transform = 'translateX(100%)';
        element.style.display = 'block';
        let opacity = 0;
        let translateX = 100;
        const step = 0.05;
        function animate() {
            opacity += step;
            translateX -= step * 100;
            if (opacity >= 1 && translateX <= 0) {
                element.style.opacity = 1;
                element.style.transform = 'translateX(0)';
                return;
            }
            element.style.opacity = opacity;
            element.style.transform = `translateX(${Math.max(translateX, 0)}%)`;
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }

    // Rotate in effect
    function rotateIn(element) {
        element.style.opacity = 0;
        element.style.transform = 'rotate(-180deg) scale(0.5)';
        element.style.display = 'block';
        let opacity = 0;
        let rotation = -180;
        let scale = 0.5;
        const step = 0.05;
        function animate() {
            opacity += step;
            rotation += step * 180;
            scale += step * 0.5;
            if (opacity >= 1 && rotation >= 0 && scale >= 1) {
                element.style.opacity = 1;
                element.style.transform = 'rotate(0deg) scale(1)';
                return;
            }
            element.style.opacity = opacity;
            element.style.transform = `rotate(${Math.min(rotation, 0)}deg) scale(${Math.min(scale, 1)})`;
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }

    // Color transition effect
    function colorTransition(element, fromColor, toColor, duration = 1000) {
        const startTime = performance.now();
        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const r = Math.round(fromColor.r + (toColor.r - fromColor.r) * progress);
            const g = Math.round(fromColor.g + (toColor.g - fromColor.g) * progress);
            const b = Math.round(fromColor.b + (toColor.b - fromColor.b) * progress);
            element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
        requestAnimationFrame(animate);
    }

    // Pulse effect
    function pulse(element, duration = 500) {
        const originalScale = element.style.transform || 'scale(1)';
        element.style.transform = 'scale(1.1)';
        setTimeout(() => {
            element.style.transform = originalScale;
        }, duration);
    }

    // Shake effect
    function shake(element, intensity = 5, duration = 500) {
        const originalTransform = element.style.transform || '';
        let startTime = null;
        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = elapsed / duration;
            if (progress < 1) {
                const offset = Math.sin(progress * Math.PI * 10) * intensity;
                element.style.transform = `${originalTransform} translateX(${offset}px)`;
                requestAnimationFrame(animate);
            } else {
                element.style.transform = originalTransform;
            }
        }
        requestAnimationFrame(animate);
    }

    // Expose functions globally for auth.js and other files to use
    window.RenoThaingaku = {
        animateModalIn,
        animateModalOut,
        slideInLeft,
        slideInRight,
        rotateIn,
        colorTransition,
        pulse,
        shake
    };
});
