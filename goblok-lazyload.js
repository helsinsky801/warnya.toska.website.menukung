// goblok-lazyload.js - Lazy loading gambar yang goblok

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
                console.log('Gambar lazy loaded: ' + img.dataset.src);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
});
