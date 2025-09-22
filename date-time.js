// date-time.js - Date and time utilities or clock display

/**
 * Date and time utilities
 */
class DateTimeUtils {
    constructor() {
        this.clockElement = null;
        this.dateElement = null;
    }

    /**
     * Formats a date object to a readable string
     * @param {Date} date - The date to format
     * @param {string} format - The format string (e.g., 'YYYY-MM-DD HH:mm:ss')
     * @returns {string} - The formatted date string
     */
    formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return format
            .replace('YYYY', year)
            .replace('MM', month)
            .replace('DD', day)
            .replace('HH', hours)
            .replace('mm', minutes)
            .replace('ss', seconds);
    }

    /**
     * Gets the current date and time
     * @returns {Date} - The current date and time
     */
    getCurrentDateTime() {
        return new Date();
    }

    /**
     * Calculates the difference between two dates
     * @param {Date} date1 - The first date
     * @param {Date} date2 - The second date
     * @returns {Object} - Object with days, hours, minutes, seconds
     */
    getDateDifference(date1, date2) {
        const diffMs = Math.abs(date2 - date1);
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);

        return {
            days: diffDays,
            hours: diffHours,
            minutes: diffMinutes,
            seconds: diffSeconds
        };
    }

    /**
     * Adds days to a date
     * @param {Date} date - The original date
     * @param {number} days - Number of days to add
     * @returns {Date} - The new date
     */
    addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    /**
     * Checks if a date is in the past
     * @param {Date} date - The date to check
     * @returns {boolean} - True if the date is in the past
     */
    isPast(date) {
        return date < new Date();
    }

    /**
     * Checks if a date is today
     * @param {Date} date - The date to check
     * @returns {boolean} - True if the date is today
     */
    isToday(date) {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    }

    /**
     * Creates a live clock display
     * @param {string} containerId - The ID of the container element
     */
    createLiveClock(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('Container not found:', containerId);
            return;
        }

        this.clockElement = document.createElement('div');
        this.clockElement.id = 'live-clock';
        this.clockElement.style.fontSize = '24px';
        this.clockElement.style.fontWeight = 'bold';
        this.clockElement.style.textAlign = 'center';
        this.clockElement.style.margin = '20px 0';

        this.dateElement = document.createElement('div');
        this.dateElement.id = 'live-date';
        this.dateElement.style.fontSize = '16px';
        this.dateElement.style.textAlign = 'center';
        this.dateElement.style.marginBottom = '10px';

        container.appendChild(this.dateElement);
        container.appendChild(this.clockElement);

        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
    }

    updateClock() {
        if (!this.clockElement || !this.dateElement) return;

        const now = this.getCurrentDateTime();
        this.clockElement.textContent = this.formatDate(now, 'HH:mm:ss');
        this.dateElement.textContent = this.formatDate(now, 'YYYY-MM-DD');
    }
}

// Export DateTimeUtils class
window.DateTimeUtils = DateTimeUtils;
