function validateForm() {
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters long.';
        document.getElementById('name').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
        document.getElementById('name').classList.remove('error');
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('email').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
        document.getElementById('email').classList.remove('error');
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        document.getElementById('password').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
        document.getElementById('password').classList.remove('error');
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
        document.getElementById('phone').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('phoneError').textContent = '';
        document.getElementById('phone').classList.remove('error');
    }

    return isValid; // Prevent form submission if any field is invalid
}
