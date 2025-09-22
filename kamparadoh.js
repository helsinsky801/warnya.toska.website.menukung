// kamparadoh.js - Cool popup functionality for Cara Pesan page

document.addEventListener('DOMContentLoaded', function() {
    // Create the popup modal
    const popupModal = document.createElement('div');
    popupModal.id = 'cara-pesan-popup';
    popupModal.className = 'modal cara-pesan-modal';

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content cara-pesan-content';

    // Close button
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close cara-pesan-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Tutup popup');

    // Content container
    const contentContainer = document.createElement('div');
    contentContainer.className = 'popup-content-container';

    // Hero section content
    const heroContent = document.createElement('div');
    heroContent.className = 'popup-hero';
    heroContent.innerHTML = `
        <h2>Cara Pesan</h2>
        <p>Ikuti langkah-langkah mudah di bawah ini untuk memesan makanan atau minuman favorit Anda.</p>
    `;

    // Steps section content
    const stepsContent = document.createElement('div');
    stepsContent.className = 'popup-steps';
    stepsContent.innerHTML = `
        <h2>Langkah-langkah Pesan</h2>
        <ol class="steps-list">
            <li>Klik menu "Menu" di navigasi atas untuk pergi ke halaman menu.</li>
            <li>Pilih kategori menu yang Anda inginkan: Minuman atau Makanan.</li>
            <li>Klik tombol "Lihat Menu Minuman" atau "Lihat Menu Makanan" untuk membuka popup menu.</li>
            <li>Browse menu yang tersedia. Jika menu banyak, Anda dapat scroll ke atas atau ke bawah.</li>
            <li>Klik tombol "Pesan" pada item yang Anda pilih.</li>
            <li>Konfirmasi pesanan Anda di popup konfirmasi.</li>
            <li>Klik "Ya, Pesan via WhatsApp" untuk langsung chat dengan owner dan selesaikan pesanan.</li>
        </ol>
        <p class="note">Mudah dan cepat! Jika ada pertanyaan, langsung chat owner via WhatsApp.</p>
        <a href="menu.html" class="btn popup-menu-btn">Pergi ke Menu Sekarang</a>
    `;

    // Append elements
    contentContainer.appendChild(heroContent);
    contentContainer.appendChild(stepsContent);
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(contentContainer);
    popupModal.appendChild(modalContent);

    // Append modal to body
    document.body.appendChild(popupModal);

    // Add event listeners
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
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Add animation class after display
        setTimeout(() => {
            modalContent.classList.add('animate-in');
        }, 10);

        // Announce to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'assertive');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = 'Popup cara pesan terbuka';
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
    }

    // Function to close popup
    function closePopup() {
        modalContent.classList.remove('animate-in');
        modalContent.classList.add('animate-out');

        setTimeout(() => {
            popupModal.style.display = 'none';
            modalContent.classList.remove('animate-out');
            document.body.style.overflow = ''; // Restore scrolling
        }, 300);

        // Announce to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'assertive');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = 'Popup cara pesan ditutup';
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
    }

    // Expose open function globally for button click
    window.openCaraPesanPopup = openPopup;

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        .cara-pesan-modal {
            animation: fadeIn 0.3s ease-out;
        }

        .cara-pesan-content {
            transform: scale(0.7);
            opacity: 0;
            transition: all 0.3s ease-out;
        }

        .cara-pesan-content.animate-in {
            transform: scale(1);
            opacity: 1;
        }

        .cara-pesan-content.animate-out {
            transform: scale(0.7);
            opacity: 0;
        }

        .popup-content-container {
            max-height: 80vh;
            overflow-y: auto;
            padding: 1rem 0;
        }

        .popup-hero {
            text-align: center;
            margin-bottom: 2rem;
            padding: 1rem;
            background: linear-gradient(135deg, rgba(0, 206, 209, 0.1), rgba(139, 69, 19, 0.1));
            border-radius: 10px;
        }

        .popup-hero h2 {
            color: #00CED1;
            font-size: 2rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .popup-steps h2 {
            color: #00CED1;
            font-size: 1.8rem;
            margin-bottom: 1rem;
            text-align: center;
        }

        .popup-steps .steps-list {
            max-width: 600px;
            margin: 0 auto;
            padding-left: 1.5rem;
            list-style-position: outside;
        }

        .popup-steps .steps-list li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
            font-size: 1rem;
            padding: 0.5rem;
            background: rgba(255,255,255,0.8);
            border-radius: 5px;
            border-left: 4px solid #00CED1;
        }

        .popup-steps .note {
            text-align: center;
            font-weight: bold;
            font-size: 1.1rem;
            margin: 2rem 0 1rem 0;
            color: #8B4513;
        }

        .popup-menu-btn {
            display: block;
            width: fit-content;
            margin: 1rem auto;
            background: linear-gradient(45deg, #00CED1, #008B8B);
            box-shadow: 0 4px 15px rgba(0, 206, 209, 0.3);
            transition: all 0.3s ease;
        }

        .popup-menu-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 206, 209, 0.5);
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        /* Mobile responsive styles */
        @media (max-width: 768px) {
            .cara-pesan-content {
                width: 95%;
                max-width: none;
                margin: 5% auto;
                padding: 1rem;
                max-height: 90vh;
            }

            .popup-content-container {
                max-height: 75vh;
                padding: 0.5rem 0;
            }

            .popup-hero h2 {
                font-size: 1.5rem;
            }

            .popup-steps h2 {
                font-size: 1.4rem;
            }

            .popup-steps .steps-list {
                max-width: 100%;
                padding-left: 1rem;
            }

            .popup-steps .steps-list li {
                font-size: 0.9rem;
                padding: 0.4rem;
            }

            .popup-steps .note {
                font-size: 1rem;
            }
        }

        @media (max-width: 480px) {
            .cara-pesan-content {
                width: 98%;
                margin: 2% auto;
                padding: 0.5rem;
            }

            .popup-hero {
                margin-bottom: 1rem;
                padding: 0.5rem;
            }

            .popup-hero h2 {
                font-size: 1.3rem;
            }

            .popup-steps h2 {
                font-size: 1.2rem;
            }

            .popup-steps .steps-list li {
                font-size: 0.85rem;
                padding: 0.3rem;
            }

            .popup-steps .note {
                font-size: 0.95rem;
            }

            .popup-menu-btn {
                font-size: 0.9rem;
                padding: 0.6rem 1rem;
            }
        }

        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    `;
    document.head.appendChild(style);
});
