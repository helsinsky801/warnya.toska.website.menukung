// notifications.js - UI notifications and alerts

/**
 * Shows a notification message
 * @param {string} message - The message to display
 * @param {string} type - The type of notification: 'info', 'success', 'warning', 'error'
 * @param {number} duration - Duration in milliseconds to show the notification (default 3000)
 */
function showNotification(message, type = 'info', duration = 3000) {
    const containerId = 'notification-container';
    let container = document.getElementById(containerId);

    if (!container) {
        container = document.createElement('div');
        container.id = containerId;
        container.style.position = 'fixed';
        container.style.top = '20px';
        container.style.right = '20px';
        container.style.zIndex = '9999';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '10px';
        document.body.appendChild(container);
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.color = '#fff';
    notification.style.minWidth = '200px';
    notification.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease';

    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#4caf50';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ff9800';
            break;
        case 'error':
            notification.style.backgroundColor = '#f44336';
            break;
        default:
            notification.style.backgroundColor = '#2196f3';
    }

    container.appendChild(notification);

    // Fade in
    requestAnimationFrame(() => {
        notification.style.opacity = '1';
    });

    // Remove after duration
    setTimeout(() => {
        // Fade out
        notification.style.opacity = '0';
        notification.addEventListener('transitionend', () => {
            notification.remove();
            if (container.children.length === 0) {
                container.remove();
            }
        });
    }, duration);
}

// Export function for use in other modules
window.Notifications = {
    showNotification
};
