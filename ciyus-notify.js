// ciyus-notify.js - Sistem notifikasi yang ciyus

document.addEventListener('DOMContentLoaded', function() {
    function createNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'ciyus-notify';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    // Contoh penggunaan
    const notifyBtn = document.getElementById('notify-btn');
    if (notifyBtn) {
        notifyBtn.addEventListener('click', () => {
            createNotification('Ini notifikasi ciyus!');
        });
    }
});
