const registerForm = document.getElementById("registerForm");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const confirmPasswordFeedback = document.getElementById(
    "confirmPasswordFeedback"
);
const registerStatus = document.getElementById("registerStatus");

// Check whether the passwords match.
function validatePasswordMatch() {
    if (confirmPassword.value === "") {
        confirmPassword.setCustomValidity("");
        confirmPasswordFeedback.textContent =
            "Please confirm your password.";
    } else if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
        confirmPasswordFeedback.textContent =
            "Passwords do not match.";
    } else {
        confirmPassword.setCustomValidity("");
        confirmPasswordFeedback.textContent =
            "Please confirm your password.";
    }
}

// Recheck the match whenever either password changes.
password.addEventListener("input", validatePasswordMatch);
confirmPassword.addEventListener("input", validatePasswordMatch);

// Validate the form when submitted.
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    validatePasswordMatch();

    registerForm.classList.add("was-validated");

    if (!registerForm.checkValidity()) {
        registerStatus.textContent =
            "Please correct the errors above.";
        registerStatus.className = "mt-3 mb-0 text-danger";
        return;
    }

    // Demo only: no account is actually created.
    registerStatus.textContent =
        "Registration successful! This is a demonstration form.";
    registerStatus.className = "mt-3 mb-0 text-success";

    const formData = new FormData(registerForm);

    console.log(
        "Registration form submitted:",
        Object.fromEntries(formData)
    );
});

// Clear custom validation and messages when reset is clicked.
registerForm.addEventListener("reset", function () {
    setTimeout(function () {
        registerForm.classList.remove("was-validated");

        confirmPassword.setCustomValidity("");
        confirmPasswordFeedback.textContent =
            "Please confirm your password.";

        registerStatus.textContent = "";
        registerStatus.className = "mt-3 mb-0";
    }, 0);
});