// init-new-features.js - Initialize the newly added JS features

function initNewFeatures() {
    console.log('Initializing new JS features...');

    // Initialize form validation on forms with data-validate attribute
    document.querySelectorAll('form[data-validate]').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const rules = JSON.parse(form.getAttribute('data-validate'));
            if (window.FormValidation.validateForm(form, rules)) {
                window.Notifications.showNotification('Form submitted successfully!', 'success');
                form.submit();
            } else {
                window.Notifications.showNotification('Please fix the errors in the form.', 'error');
            }
        });
    });

    // Initialize analytics tracking
    if (window.Analytics && typeof window.Analytics.initAnalyticsTracking === 'function') {
        window.Analytics.initAnalyticsTracking();
    }

    // Initialize theme switcher button if exists
    const themeSwitcherBtn = document.getElementById('theme-switcher-btn');
    if (themeSwitcherBtn && window.ThemeSwitcher) {
        themeSwitcherBtn.addEventListener('click', () => {
            window.ThemeSwitcher.toggleTheme();
        });
    }

    // Initialize scroll to top button if exists
    const scrollTopBtn = document.getElementById('scroll-to-top-btn');
    if (scrollTopBtn && window.ScrollToTop) {
        scrollTopBtn.addEventListener('click', () => {
            window.ScrollToTop.scrollToTop();
        });

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });
    }

    // Initialize tooltips
    if (window.Tooltip && typeof window.Tooltip.initTooltips === 'function') {
        window.Tooltip.initTooltips();
    }

    // Initialize modal handler
    if (window.ModalHandler && typeof window.ModalHandler.initModals === 'function') {
        window.ModalHandler.initModals();
    }

    // Initialize slider/carousel
    if (window.Slider && typeof window.Slider.initSlider === 'function') {
        window.Slider.initSlider();
    }

    // Initialize date-time display
    if (window.DateTime && typeof window.DateTime.initClock === 'function') {
        window.DateTime.initClock();
    }
}

// Expose globally
window.initNewFeatures = initNewFeatures;
