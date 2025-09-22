// Basic Form Handler
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function handleSubmit(form) {
    const email = form.email.value;
    const password = form.password.value;
    if (!validateEmail(email)) {
        alert('Invalid email');
        return false;
    }
    if (!validatePassword(password)) {
        alert('Password too short');
        return false;
    }
    alert('Form submitted');
    return true;
}

console.log('Form handler module loaded');
