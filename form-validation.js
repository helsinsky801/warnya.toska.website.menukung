// form-validation.js - Client-side form validation utilities

/**
 * Validates an email address
 * @param {string} email - The email to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validates if a field is not empty
 * @param {string} value - The value to check
 * @returns {boolean} - True if not empty, false otherwise
 */
function validateRequired(value) {
    return value.trim() !== '';
}

/**
 * Validates password strength (at least 8 characters, one uppercase, one lowercase, one number)
 * @param {string} password - The password to validate
 * @returns {boolean} - True if strong, false otherwise
 */
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
}

/**
 * Validates phone number (basic format)
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validatePhone(phone) {
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

/**
 * Shows validation error message
 * @param {HTMLElement} element - The input element
 * @param {string} message - The error message
 */
function showValidationError(element, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'validation-error';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '12px';
    errorElement.style.marginTop = '5px';

    // Remove existing error
    const existingError = element.parentNode.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }

    element.parentNode.insertBefore(errorElement, element.nextSibling);
    element.style.borderColor = 'red';
}

/**
 * Clears validation error
 * @param {HTMLElement} element - The input element
 */
function clearValidationError(element) {
    const errorElement = element.parentNode.querySelector('.validation-error');
    if (errorElement) {
        errorElement.remove();
    }
    element.style.borderColor = '';
}

/**
 * Validates a form with given rules
 * @param {HTMLFormElement} form - The form to validate
 * @param {Object} rules - Validation rules object
 * @returns {boolean} - True if valid, false otherwise
 */
function validateForm(form, rules) {
    let isValid = true;

    Object.keys(rules).forEach(fieldName => {
        const field = form.querySelector(`[name="${fieldName}"]`);
        if (!field) return;

        const value = field.value;
        const fieldRules = rules[fieldName];

        clearValidationError(field);

        if (fieldRules.required && !validateRequired(value)) {
            showValidationError(field, `${fieldName} is required`);
            isValid = false;
        }

        if (value && fieldRules.email && !validateEmail(value)) {
            showValidationError(field, 'Invalid email format');
            isValid = false;
        }

        if (value && fieldRules.password && !validatePassword(value)) {
            showValidationError(field, 'Password must be at least 8 characters with uppercase, lowercase, and number');
            isValid = false;
        }

        if (value && fieldRules.phone && !validatePhone(value)) {
            showValidationError(field, 'Invalid phone number format');
            isValid = false;
        }
    });

    return isValid;
}

// Export functions for use in other modules
window.FormValidation = {
    validateEmail,
    validateRequired,
    validatePassword,
    validatePhone,
    showValidationError,
    clearValidationError,
    validateForm
};
