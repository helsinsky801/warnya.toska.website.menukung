// auth.js - Handles login and register popup modals

document.addEventListener('DOMContentLoaded', function() {
    // Create login modal
    const loginModal = document.createElement('div');
    loginModal.id = 'login-modal';
    loginModal.className = 'modal';

    const loginContent = document.createElement('div');
    loginContent.className = 'modal-content';

    const loginClose = document.createElement('span');
    loginClose.className = 'close';
    loginClose.innerHTML = '&times;';

    const loginTitle = document.createElement('h3');
    loginTitle.textContent = 'Login';

    const loginForm = document.createElement('form');
    loginForm.id = 'login-form';

    const loginEmailLabel = document.createElement('label');
    loginEmailLabel.textContent = 'Email:';
    loginEmailLabel.setAttribute('for', 'login-email');

    const loginEmailInput = document.createElement('input');
    loginEmailInput.type = 'email';
    loginEmailInput.id = 'login-email';
    loginEmailInput.name = 'email';
    loginEmailInput.required = true;
    loginEmailInput.placeholder = 'Masukkan email Anda';

    const loginPasswordLabel = document.createElement('label');
    loginPasswordLabel.textContent = 'Password:';
    loginPasswordLabel.setAttribute('for', 'login-password');

    const loginPasswordInput = document.createElement('input');
    loginPasswordInput.type = 'password';
    loginPasswordInput.id = 'login-password';
    loginPasswordInput.name = 'password';
    loginPasswordInput.required = true;
    loginPasswordInput.placeholder = 'Masukkan password Anda';

    const loginRememberLabel = document.createElement('label');
    loginRememberLabel.textContent = 'Ingat saya';
    loginRememberLabel.setAttribute('for', 'login-remember');

    const loginRememberInput = document.createElement('input');
    loginRememberInput.type = 'checkbox';
    loginRememberInput.id = 'login-remember';
    loginRememberInput.name = 'remember';

    const loginSubmit = document.createElement('button');
    loginSubmit.type = 'submit';
    loginSubmit.textContent = 'Login';

    const loginError = document.createElement('div');
    loginError.id = 'login-error';
    loginError.className = 'error-message';

    loginForm.appendChild(loginEmailLabel);
    loginForm.appendChild(loginEmailInput);
    loginForm.appendChild(loginPasswordLabel);
    loginForm.appendChild(loginPasswordInput);
    loginForm.appendChild(loginRememberLabel);
    loginForm.appendChild(loginRememberInput);
    loginForm.appendChild(loginSubmit);
    loginForm.appendChild(loginError);

    loginContent.appendChild(loginClose);
    loginContent.appendChild(loginTitle);
    loginContent.appendChild(loginForm);
    loginModal.appendChild(loginContent);
    document.body.appendChild(loginModal);

    // Create register modal
    const registerModal = document.createElement('div');
    registerModal.id = 'register-modal';
    registerModal.className = 'modal';

    const registerContent = document.createElement('div');
    registerContent.className = 'modal-content';

    const registerClose = document.createElement('span');
    registerClose.className = 'close';
    registerClose.innerHTML = '&times;';

    const registerTitle = document.createElement('h3');
    registerTitle.textContent = 'Register';

    const registerForm = document.createElement('form');
    registerForm.id = 'register-form';

    const registerEmailLabel = document.createElement('label');
    registerEmailLabel.textContent = 'Email:';
    registerEmailLabel.setAttribute('for', 'register-email');

    const registerEmailInput = document.createElement('input');
    registerEmailInput.type = 'email';
    registerEmailInput.id = 'register-email';
    registerEmailInput.name = 'email';
    registerEmailInput.required = true;
    registerEmailInput.placeholder = 'Masukkan email Anda';

    const registerPasswordLabel = document.createElement('label');
    registerPasswordLabel.textContent = 'Password:';
    registerPasswordLabel.setAttribute('for', 'register-password');

    const registerPasswordInput = document.createElement('input');
    registerPasswordInput.type = 'password';
    registerPasswordInput.id = 'register-password';
    registerPasswordInput.name = 'password';
    registerPasswordInput.required = true;
    registerPasswordInput.placeholder = 'Masukkan password Anda';
    registerPasswordInput.minLength = 6;

    const registerConfirmPasswordLabel = document.createElement('label');
    registerConfirmPasswordLabel.textContent = 'Konfirmasi Password:';
    registerConfirmPasswordLabel.setAttribute('for', 'register-confirm-password');

    const registerConfirmPasswordInput = document.createElement('input');
    registerConfirmPasswordInput.type = 'password';
    registerConfirmPasswordInput.id = 'register-confirm-password';
    registerConfirmPasswordInput.name = 'confirm-password';
    registerConfirmPasswordInput.required = true;
    registerConfirmPasswordInput.placeholder = 'Konfirmasi password Anda';

    const registerSubmit = document.createElement('button');
    registerSubmit.type = 'submit';
    registerSubmit.textContent = 'Register';

    const registerError = document.createElement('div');
    registerError.id = 'register-error';
    registerError.className = 'error-message';

    registerForm.appendChild(registerEmailLabel);
    registerForm.appendChild(registerEmailInput);
    registerForm.appendChild(registerPasswordLabel);
    registerForm.appendChild(registerPasswordInput);
    registerForm.appendChild(registerConfirmPasswordLabel);
    registerForm.appendChild(registerConfirmPasswordInput);
    registerForm.appendChild(registerSubmit);
    registerForm.appendChild(registerError);

    registerContent.appendChild(registerClose);
    registerContent.appendChild(registerTitle);
    registerContent.appendChild(registerForm);
    registerModal.appendChild(registerContent);
    document.body.appendChild(registerModal);

    // Validation functions
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function hideError(elementId) {
        const errorElement = document.getElementById(elementId);
        errorElement.style.display = 'none';
    }

    // Global functions to open modals
    window.openLoginModal = function() {
        if (window.RenoThaingaku && RenoThaingaku.animateModalIn) {
            RenoThaingaku.animateModalIn(loginModal);
        } else {
            // Fallback animation if RenoThaingaku is not available
            loginModal.style.display = 'block';
            loginModal.style.opacity = '0';
            loginModal.style.transform = 'scale(0.8)';
            setTimeout(() => {
                loginModal.style.opacity = '1';
                loginModal.style.transform = 'scale(1)';
            }, 100);
        }
    };

    window.openRegisterModal = function() {
        if (window.RenoThaingaku && RenoThaingaku.animateModalIn) {
            RenoThaingaku.animateModalIn(registerModal);
        } else {
            // Fallback animation if RenoThaingaku is not available
            registerModal.style.display = 'block';
            registerModal.style.opacity = '0';
            registerModal.style.transform = 'scale(0.8)';
            setTimeout(() => {
                registerModal.style.opacity = '1';
                registerModal.style.transform = 'scale(1)';
            }, 100);
        }
    };

    // Event delegation for login buttons (works for any element with class 'login-btn' or id 'login-btn')
    document.addEventListener('click', function(e) {
        if (e.target.id === 'login-btn' || e.target.classList.contains('login-btn')) {
            e.preventDefault();
            window.openLoginModal();
        }
    });

    // Event delegation for register buttons (works for any element with class 'register-btn' or id 'register-btn')
    document.addEventListener('click', function(e) {
        if (e.target.id === 'register-btn' || e.target.classList.contains('register-btn')) {
            e.preventDefault();
            window.openRegisterModal();
        }
    });

    // Fallback: if specific buttons exist, add direct event listeners
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.openLoginModal();
        });
    }

    const registerBtn = document.getElementById('register-btn');
    if (registerBtn) {
        registerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.openRegisterModal();
        });
    }

    // Close modals on close button click
    loginClose.addEventListener('click', function() {
        RenoThaingaku.animateModalOut(loginModal);
    });
    registerClose.addEventListener('click', function() {
        RenoThaingaku.animateModalOut(registerModal);
    });

    // Close modals when clicking outside modal content
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            RenoThaingaku.animateModalOut(loginModal);
        }
        if (event.target === registerModal) {
            RenoThaingaku.animateModalOut(registerModal);
        }
    });

    // Handle login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = loginEmailInput.value;
        const password = loginPasswordInput.value;
        const remember = loginRememberInput.checked;

        hideError('login-error');

        if (!validateEmail(email)) {
            showError('login-error', 'Email tidak valid.');
            return;
        }

        if (!validatePassword(password)) {
            showError('login-error', 'Password minimal 6 karakter.');
            return;
        }

        // Simulate login
        console.log('Login attempt:', { email, remember });
        alert('Login berhasil!');
        RenoThaingaku.animateModalOut(loginModal);
    });

    // Handle register form submission
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = registerEmailInput.value;
        const password = registerPasswordInput.value;
        const confirmPassword = registerConfirmPasswordInput.value;

        hideError('register-error');

        if (!validateEmail(email)) {
            showError('register-error', 'Email tidak valid.');
            return;
        }

        if (!validatePassword(password)) {
            showError('register-error', 'Password minimal 6 karakter.');
            return;
        }

        if (password !== confirmPassword) {
            showError('register-error', 'Password tidak cocok.');
            return;
        }

        // Simulate registration
        console.log('Register attempt:', { email });
        alert('Registrasi berhasil!');
        RenoThaingaku.animateModalOut(registerModal);
    });
});
