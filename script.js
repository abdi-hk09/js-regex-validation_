document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Validate inputs
    const isValidName = validateFullName();
    const isValidEmail = validateEmail();
    const isValidPhone = validatePhone();
    const isValidPassword = validatePassword();

    // Check if all inputs are valid
    if (isValidName && isValidEmail && isValidPhone && isValidPassword) {
        document.getElementById('successMessage').innerText = "Form submitted successfully!";
    }
});

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.innerText = '');
    const invalidInputs = document.querySelectorAll('input.invalid');
    invalidInputs.forEach(input => input.classList.remove('invalid'));
    document.getElementById('successMessage').innerText = '';
}

function validateFullName() {
    const nameInput = document.getElementById('fullName');
    const nameError = document.getElementById('nameError');
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(nameInput.value)) {
        nameError.innerText = "Invalid name. Only alphabetic characters and spaces are allowed.";
        nameInput.classList.add('invalid');
        return false;
    }
    nameInput.classList.remove('invalid');
    return true;
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        emailError.innerText = "Invalid email format.";
        emailInput.classList.add('invalid');
        return false;
    }
    emailInput.classList.remove('invalid');
    return true;
}

function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^\d{10,15}$/;

    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.innerText = "Invalid phone number. Only digits (10-15 characters) are allowed.";
        phoneInput.classList.add('invalid');
        return false;
    }
    phoneInput.classList.remove('invalid');
    return true;
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.innerText = "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number.";
        passwordInput.classList.add('invalid');
        return false;
    }
    passwordInput.classList.remove('invalid');
    return true;
}