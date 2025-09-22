// alay-modal.js - Popup modal yang alay

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('alay-modal');
    const openBtn = document.getElementById('open-alay-modal');
    const closeBtn = document.getElementById('close-alay-modal');

    if (!modal || !openBtn || !closeBtn) return;

    openBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
