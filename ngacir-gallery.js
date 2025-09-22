// ngacir-gallery.js - Galeri gambar popup yang ngacir

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.ngacir-gallery');
    if (!gallery) return;

    const images = gallery.querySelectorAll('img');
    const total = images.length;
    let currentIndex = 0;

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img class="modal-image" src="" alt="">
            <button class="prev"><</button>
            <button class="next">></button>
        </div>
    `;
    document.body.appendChild(modal);

    const modalImage = modal.querySelector('.modal-image');
    const closeBtn = modal.querySelector('.close');
    const prevBtn = modal.querySelector('.prev');
    const nextBtn = modal.querySelector('.next');

    // Make images clickable thumbnails
    images.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            currentIndex = index;
            openModal();
        });
    });

    function openModal() {
        modalImage.src = images[currentIndex].src;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % total;
        modalImage.src = images[currentIndex].src;
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + total) % total;
        modalImage.src = images[currentIndex].src;
    }

    // Event listeners
    closeBtn.addEventListener('click', closeModal);
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeModal();
        }
    });
});
