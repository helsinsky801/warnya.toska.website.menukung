// analytics.js - Basic analytics tracking functions

/**
 * Tracks a page view event
 * @param {string} page - The page name or URL
 */
function trackPageView(page) {
    const event = {
        type: 'page_view',
        page: page || window.location.pathname,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer
    };

    console.log('Analytics - Page View:', event);
    sendToAnalytics(event);
}

/**
 * Tracks a button click event
 * @param {string} buttonId - The ID of the button clicked
 * @param {string} buttonText - The text of the button
 */
function trackButtonClick(buttonId, buttonText) {
    const event = {
        type: 'button_click',
        buttonId: buttonId,
        buttonText: buttonText,
        timestamp: new Date().toISOString(),
        page: window.location.pathname
    };

    console.log('Analytics - Button Click:', event);
    sendToAnalytics(event);
}

/**
 * Tracks a form submission event
 * @param {string} formId - The ID of the form submitted
 */
function trackFormSubmission(formId) {
    const event = {
        type: 'form_submission',
        formId: formId,
        timestamp: new Date().toISOString(),
        page: window.location.pathname
    };

    console.log('Analytics - Form Submission:', event);
    sendToAnalytics(event);
}

/**
 * Tracks user engagement time on page
 * @param {number} timeSpent - Time spent in seconds
 */
function trackTimeOnPage(timeSpent) {
    const event = {
        type: 'time_on_page',
        timeSpent: timeSpent,
        timestamp: new Date().toISOString(),
        page: window.location.pathname
    };

    console.log('Analytics - Time on Page:', event);
    sendToAnalytics(event);
}

/**
 * Tracks scroll depth
 * @param {number} depth - Scroll depth percentage
 */
function trackScrollDepth(depth) {
    const event = {
        type: 'scroll_depth',
        depth: depth,
        timestamp: new Date().toISOString(),
        page: window.location.pathname
    };

    console.log('Analytics - Scroll Depth:', event);
    sendToAnalytics(event);
}

/**
 * Sends event data to analytics service (placeholder)
 * @param {Object} eventData - The event data to send
 */
function sendToAnalytics(eventData) {
    // Placeholder for sending data to analytics service
    // In a real implementation, this would send to Google Analytics, Mixpanel, etc.

    // Store in localStorage for demo purposes
    const analyticsData = JSON.parse(localStorage.getItem('analyticsData') || '[]');
    analyticsData.push(eventData);

    // Keep only last 100 events
    if (analyticsData.length > 100) {
        analyticsData.shift();
    }

    localStorage.setItem('analyticsData', JSON.stringify(analyticsData));
}

/**
 * Gets stored analytics data
 * @returns {Array} - Array of stored events
 */
function getAnalyticsData() {
    return JSON.parse(localStorage.getItem('analyticsData') || '[]');
}

/**
 * Initializes automatic tracking
 */
function initAnalyticsTracking() {
    // Track initial page view
    trackPageView();

    // Track button clicks
    document.addEventListener('click', function(e) {
        if (e.target.matches('button, .btn, .order-btn')) {
            trackButtonClick(e.target.id || 'unknown', e.target.textContent.trim());
        }
    });

    // Track form submissions
    document.addEventListener('submit', function(e) {
        trackFormSubmission(e.target.id || 'unknown');
    });

    // Track time on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        trackTimeOnPage(timeSpent);
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        if (scrollPercent > maxScrollDepth) {
            maxScrollDepth = scrollPercent;
            trackScrollDepth(maxScrollDepth);
        }
    });
}

// Export functions for use in other modules
window.Analytics = {
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
    trackTimeOnPage,
    trackScrollDepth,
    sendToAnalytics,
    getAnalyticsData,
    initAnalyticsTracking
};
