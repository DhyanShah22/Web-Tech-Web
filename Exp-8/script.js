function validateForm() {
    let valid = true;

    // Name validation: Must contain only letters and not be empty
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    const namePattern = /^[A-Za-z\s]+$/;
    if (!name || !namePattern.test(name)) {
        nameError.textContent = 'Name must contain only letters.';
        nameError.style.display = 'block';
        valid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Email validation: Standard email format
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Phone number validation: Only digits, length between 10 and 15
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^\d{10,15}$/;
    if (!phone || !phonePattern.test(phone)) {
        phoneError.textContent = 'Phone number must be between 10 and 15 digits.';
        phoneError.style.display = 'block';
        valid = false;
    } else {
        phoneError.style.display = 'none';
    }

    // Password validation: Minimum 8 characters, with letters, numbers, and special characters
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!password || !passwordPattern.test(password)) {
        passwordError.textContent = 'Password must be at least 8 characters long and contain letters, numbers, and a special character.';
        passwordError.style.display = 'block';
        valid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Confirm password validation: Must match password
    const confirmPassword = document.getElementById('confirm-password').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordError.style.display = 'block';
        valid = false;
    } else {
        confirmPasswordError.style.display = 'none';
    }

    // Address validation: Not empty
    const address = document.getElementById('address').value;
    const addressError = document.getElementById('addressError');
    if (!address) {
        addressError.textContent = 'Address cannot be empty.';
        addressError.style.display = 'block';
        valid = false;
    } else {
        addressError.style.display = 'none';
    }

    return valid; // If valid is true, the form will submit; otherwise, it will not
}
