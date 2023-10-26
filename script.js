document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // You can add your authentication logic here (e.g., checking against hardcoded values).
        if (username === 'riyaz' && password === 'password') {
            // Redirect to the desired page after successful login.
            window.location.href = 'website.html'; // Change 'dashboard.html' to the desired URL.
        } else {
            errorMessage.textContent = 'Invalid username or password. Please try again.';
        }
    });
});
