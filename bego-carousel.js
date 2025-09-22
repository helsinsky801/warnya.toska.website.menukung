// bego-carousel.js - Slider carousel yang bego

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.bego-carousel');
    if (!carousel) return;

    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const total = items.length;

    function showItem(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % total;
        showItem(currentIndex);
    }

    // Show first item initially
    showItem(currentIndex);

    // Auto slide every 4 seconds
    setInterval(nextItem, 4000);
});
