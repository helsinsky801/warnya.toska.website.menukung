// scroll-to-top.js - Button to scroll to top of page

/**
 * Scroll to top button functionality
 */
class ScrollToTop {
    constructor(options = {}) {
        this.showThreshold = options.showThreshold || 200;
        this.scrollDuration = options.scrollDuration || 500;
        this.button = null;
        this.init();
    }

    init() {
        this.createButton();
        this.addScrollListener();
        this.addClickListener();
    }

    createButton() {
        this.button = document.createElement('button');
        this.button.id = 'scroll-to-top';
        this.button.innerHTML = '↑';
        this.button.style.position = 'fixed';
        this.button.style.bottom = '20px';
        this.button.style.right = '20px';
        this.button.style.width = '50px';
        this.button.style.height = '50px';
        this.button.style.borderRadius = '50%';
        this.button.style.backgroundColor = '#8b4513';
        this.button.style.color = 'white';
        this.button.style.border = 'none';
        this.button.style.cursor = 'pointer';
        this.button.style.fontSize = '20px';
        this.button.style.fontWeight = 'bold';
        this.button.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
        this.button.style.opacity = '0';
        this.button.style.visibility = 'hidden';
        this.button.style.transition = 'opacity 0.3s, visibility 0.3s';
        this.button.style.zIndex = '1000';

        document.body.appendChild(this.button);
    }

    addScrollListener() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > this.showThreshold) {
                this.showButton();
            } else {
                this.hideButton();
            }
        });
    }

    addClickListener() {
        this.button.addEventListener('click', () => {
            this.scrollToTop();
        });
    }

    showButton() {
        this.button.style.opacity = '1';
        this.button.style.visibility = 'visible';
    }

    hideButton() {
        this.button.style.opacity = '0';
        this.button.style.visibility = 'hidden';
    }

    scrollToTop() {
        const startPosition = window.pageYOffset;
        const startTime = performance.now();

        const scroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / this.scrollDuration, 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);

            window.scrollTo(0, startPosition * (1 - easeOut));

            if (progress < 1) {
                requestAnimationFrame(scroll);
            }
        };

        requestAnimationFrame(scroll);
    }
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    new ScrollToTop();
});

// Export ScrollToTop class
window.ScrollToTop = ScrollToTop;
