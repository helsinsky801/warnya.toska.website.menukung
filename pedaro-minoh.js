// pedaro-minoh.js - Popup for "Mengapa Memilih Warnya Toska?" on homepage

document.addEventListener('DOMContentLoaded', function() {
    // Create popup modal
    const popupModal = document.createElement('div');
    popupModal.id = 'why-choose-popup';
    popupModal.className = 'modal why-choose-modal';

    // Create modal content container
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content why-choose-content';

    // Close button
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close why-choose-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Tutup popup');

    // Content container
    const contentContainer = document.createElement('div');
    contentContainer.className = 'popup-content-container';

    // Content HTML copied from .why-choose-us section in index.html
    contentContainer.innerHTML = `
        <h2>Mengapa Memilih Warnya Toska?</h2>
        <div class="features">
            <div class="feature">
                <h3>🍽️ Menu Variatif</h3>
                <p>Berbagai pilihan minuman dan makanan dengan cita rasa terbaik.</p>
            </div>
            <div class="feature">
                <h3>💰 Harga Terjangkau</h3>
                <p>Kualitas tinggi dengan harga yang ramah di kantong.</p>
            </div>
            <div class="feature">
                <h3>😊 Pelayanan Ramah</h3>
                <p>Tim kami siap melayani dengan senyum dan keramahan.</p>
            </div>
            <div class="feature">
                <h3>🏠 Suasana Nyaman</h3>
                <p>Tempat yang cocok untuk bersantai dan nongkrong bersama teman.</p>
            </div>
        </div>
    `;

    // Append elements
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(contentContainer);
    popupModal.appendChild(modalContent);
    document.body.appendChild(popupModal);

    // Event listeners for close
    closeBtn.addEventListener('click', closePopup);
    window.addEventListener('click', function(event) {
        if (event.target === popupModal) {
            closePopup();
        }
    });

    // Keyboard accessibility
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && popupModal.style.display === 'block') {
            closePopup();
        }
    });

    // Function to open popup
    function openPopup() {
        popupModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scroll
        setTimeout(() => {
            modalContent.classList.add('animate-in');
        }, 10);
    }

    // Function to close popup
    function closePopup() {
        modalContent.classList.remove('animate-in');
        modalContent.classList.add('animate-out');
        setTimeout(() => {
            popupModal.style.display = 'none';
            modalContent.classList.remove('animate-out');
            document.body.style.overflow = '';
        }, 300);
    }

    // Expose open function globally
    window.openWhyChoosePopup = openPopup;
});
