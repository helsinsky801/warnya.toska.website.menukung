// slider.js - Image or content slider/carousel

class Slider {
    /**
     * Creates a new slider instance
     * @param {string} containerSelector - CSS selector for the slider container
     * @param {Object} options - Configuration options
     */
    constructor(containerSelector, options = {}) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) {
            console.error('Slider container not found:', containerSelector);
            return;
        }
        this.slides = this.container.querySelectorAll('.slide');
        this.currentIndex = 0;
        this.interval = options.interval || 3000;
        this.autoPlay = options.autoPlay !== undefined ? options.autoPlay : true;
        this.timer = null;

        this.init();
    }

    init() {
        this.showSlide(this.currentIndex);
        this.createControls();
        if (this.autoPlay) {
            this.startAutoPlay();
            this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
            this.container.addEventListener('mouseleave', () => this.startAutoPlay());
        }
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        this.currentIndex = index;
    }

    nextSlide() {
        let nextIndex = this.currentIndex + 1;
        if (nextIndex >= this.slides.length) {
            nextIndex = 0;
        }
        this.showSlide(nextIndex);
    }

    prevSlide() {
        let prevIndex = this.currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = this.slides.length - 1;
        }
        this.showSlide(prevIndex);
    }

    startAutoPlay() {
        this.timer = setInterval(() => this.nextSlide(), this.interval);
    }

    stopAutoPlay() {
        clearInterval(this.timer);
    }

    createControls() {
        const prevBtn = document.createElement('button');
        prevBtn.textContent = 'Prev';
        prevBtn.className = 'slider-prev';
        prevBtn.addEventListener('click', () => this.prevSlide());

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next';
        nextBtn.className = 'slider-next';
        nextBtn.addEventListener('click', () => this.nextSlide());

        this.container.appendChild(prevBtn);
        this.container.appendChild(nextBtn);
    }
}

// Export Slider class
window.Slider = Slider;
