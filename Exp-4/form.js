// form.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        clearErrors();

        // Validate fields
        const nameValid = validateName();
        const emailValid = validateEmail();
        const passwordValid = validatePassword();

        if (nameValid && emailValid && passwordValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateName() {
        const name = document.getElementById('name').value.trim();
        const nameError = document.getElementById('nameError');
        const nameRegex = /^[a-zA-Z\s]+$/;

        if (name === '') {
            nameError.textContent = 'Name is required.';
            return false;
        } else if (!nameRegex.test(name)) {
            nameError.textContent = 'Name can only contain letters and spaces.';
            return false;
        }

        return true;
    }

    function validateEmail() {
        const email = document.getElementById('email').value.trim();
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            emailError.textContent = 'Email is required.';
            return false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            return false;
        }

        return true;
    }

    function validatePassword() {
        const password = document.getElementById('password').value.trim();
        const passwordError = document.getElementById('passwordError');

        if (password === '') {
            passwordError.textContent = 'Password is required.';
            return false;
        } else if (password.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            return false;
        }

        return true;
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => element.textContent = '');
    }
});
