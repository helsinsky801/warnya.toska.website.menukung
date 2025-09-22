// pajohantu.js - Warning modal with cool animated text for delivery areas

document.addEventListener('DOMContentLoaded', function() {
    // Create the warning modal
    const warningModal = document.createElement('div');
    warningModal.id = 'warning-modal';
    warningModal.className = 'modal';
    warningModal.innerHTML = `
        <div class="modal-content warning-content">
            <span class="close" id="warning-close">&times;</span>
            <h3 id="warning-title"></h3>
            <p id="warning-text"></p>
            <button id="warning-ok">Mengerti</button>
        </div>
    `;
    document.body.appendChild(warningModal);

    // Elements
    const titleElement = document.getElementById('warning-title');
    const textElement = document.getElementById('warning-text');
    const closeBtn = document.getElementById('warning-close');
    const okBtn = document.getElementById('warning-ok');

    // Warning content
    const titleText = 'Peringatan Pengiriman';
    const messageText = 'Pemesanan makanan dan minuman hanya bisa dilakukan di sekitar Desa Menukung Oyau dan Batu Badak saja. Di luar dari itu, kami tidak bisa mengirim pesanan.';

    // Typing animation function
    function typeText(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    // Show modal with animation
    function showWarning() {
        warningModal.style.display = 'block';
        setTimeout(() => {
            typeText(titleElement, titleText, 100);
            setTimeout(() => {
                typeText(textElement, messageText, 30);
            }, titleText.length * 100 + 500);
        }, 300);
    }

    // Close modal
    function closeWarning() {
        warningModal.style.display = 'none';
    }

    // Event listeners
    closeBtn.addEventListener('click', closeWarning);
    okBtn.addEventListener('click', closeWarning);
    window.addEventListener('click', function(event) {
        if (event.target === warningModal) {
            closeWarning();
        }
    });

    // Show warning on page load (only on menu page)
    if (window.location.pathname.includes('menu.html')) {
        showWarning();
    }

    // Additional: Shake effect for modal on show
    function shakeModal() {
        warningModal.style.animation = 'shake 0.5s';
        setTimeout(() => {
            warningModal.style.animation = '';
        }, 500);
    }

    // Add shake animation CSS
    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            50% { transform: translateX(10px); }
            75% { transform: translateX(-10px); }
            100% { transform: translateX(0); }
        }
    `;
    document.head.appendChild(shakeStyle);

    // Call shake on show
    function showWarningWithShake() {
        showWarning();
        setTimeout(shakeModal, 300);
    }

    // Additional: Fade in effect for modal content
    function fadeInContent() {
        const content = warningModal.querySelector('.modal-content');
        content.style.opacity = 0;
        content.style.transform = 'scale(0.8)';
        content.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        setTimeout(() => {
            content.style.opacity = 1;
            content.style.transform = 'scale(1)';
        }, 100);
    }

    // Additional: Glow effect for title
    function addGlowToTitle() {
        titleElement.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.8)';
        setTimeout(() => {
            titleElement.style.textShadow = '';
        }, 2000);
    }

    // Additional: Pulse effect for OK button
    function pulseButton() {
        okBtn.style.animation = 'pulse 1s infinite';
    }

    // Pulse animation CSS
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(pulseStyle);

    // Additional: Sound effect (if supported)
    function playWarningSound() {
        // Create a simple beep sound using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }

    // Additional: Countdown timer before showing
    function showWithCountdown() {
        let count = 3;
        const countdownElement = document.createElement('div');
        countdownElement.id = 'countdown';
        countdownElement.style.position = 'fixed';
        countdownElement.style.top = '50%';
        countdownElement.style.left = '50%';
        countdownElement.style.transform = 'translate(-50%, -50%)';
        countdownElement.style.fontSize = '48px';
        countdownElement.style.color = 'red';
        countdownElement.style.zIndex = '10000';
        document.body.appendChild(countdownElement);

        const timer = setInterval(() => {
            countdownElement.textContent = count;
            count--;
            if (count < 0) {
                clearInterval(timer);
                document.body.removeChild(countdownElement);
                showWarningWithShake();
                fadeInContent();
                addGlowToTitle();
                pulseButton();
                playWarningSound();
            }
        }, 1000);
    }

    // Additional: Local storage to show warning only once per session
    if (!sessionStorage.getItem('warningShown')) {
        if (window.location.pathname.includes('menu.html')) {
            showWithCountdown();
            sessionStorage.setItem('warningShown', 'true');
        }
    }

    // Additional: Keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && warningModal.style.display === 'block') {
            closeWarning();
        }
        if (e.key === 'Enter' && warningModal.style.display === 'block') {
            closeWarning();
        }
    });

    // Additional: Accessibility
    warningModal.setAttribute('role', 'dialog');
    warningModal.setAttribute('aria-labelledby', 'warning-title');
    warningModal.setAttribute('aria-describedby', 'warning-text');
    closeBtn.setAttribute('aria-label', 'Close warning');
    okBtn.setAttribute('aria-label', 'Acknowledge warning');
});
