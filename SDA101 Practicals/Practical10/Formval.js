document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registration-form');
    const submitBtn = document.getElementById('submit-btn');

    // Function to check username length
    function validateUsername() {
        const username = document.getElementById('username').value;
        const usernameError = document.getElementById('username-error');
        if (username.length < 5) {
            usernameError.textContent = "Username must be at least 5 characters.";
            return false;
        } else {
            usernameError.textContent = "";
            return true;
        }
    }

    // Function to validate email format
    function validateEmail() {
        const email = document.getElementById('email').value;
        const emailError = document.getElementById('email-error');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            return false;
        } else {
            emailError.textContent = "";
            return true;
        }
    }

    // Function to validate password strength
    function validatePassword() {
        const password = document.getElementById('password').value;
        const passwordError = document.getElementById('password-error');
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            passwordError.textContent = "Password must have at least 8 characters, including uppercase, lowercase, a number, and a special character.";
            return false;
        } else {
            passwordError.textContent = "";
            return true;
        }
    }

    // Function to validate that password and confirm password match
    function validateConfirmPassword() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const confirmPasswordError = document.getElementById('confirm-password-error');
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = "Passwords do not match.";
            return false;
        } else {
            confirmPasswordError.textContent = "";
            return true;
        }
    }

    // Check if the form is valid and enable/disable the submit button
    function checkFormValidity() {
        // Only enable the submit button if all validations pass
        if (validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword()) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

    // Event listeners for each input field
    document.getElementById('username').addEventListener('input', checkFormValidity);
    document.getElementById('email').addEventListener('input', checkFormValidity);
    document.getElementById('password').addEventListener('input', checkFormValidity);
    document.getElementById('confirm-password').addEventListener('input', checkFormValidity);

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword()) {
            alert("Form submitted successfully!");
        } else {
            alert("Please fix the errors before submitting.");
        }
    });

});



