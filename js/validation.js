
$(document).ready(function () {

    const contactForm = $("#contactForm");
    const formStatus = $("#formStatus");

    // Validate an individual field.
    function validateField(field) {

        const value = field.val().trim();
        const fieldId = field.attr("id");

        let isValid = true;
        let errorMessage = "";

        // Name validation.
        if (fieldId === "name") {

            if (value.length < 2) {
                isValid = false;
                errorMessage = "Please enter your name (at least 2 characters).";
            }

        }

        // Email validation.
        if (fieldId === "email") {

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(value)) {
                isValid = false;
                errorMessage = "Please enter a valid email address.";
            }

        }

        // Message validation.
        if (fieldId === "message") {

            if (value.length < 10 || value.length > 500) {
                isValid = false;
                errorMessage = "Please enter a message between 10 and 500 characters.";
            }

        }

        // Update visual validation state.
        field.toggleClass("is-invalid", !isValid);
        field.toggleClass("is-valid", isValid);

        field.attr("aria-invalid", isValid ? "false" : "true");

        // Update field-specific error message.
        field.closest(".mb-3, .mb-4")
            .find(".invalid-feedback")
            .text(errorMessage);

        return isValid;
    }


    // Validate fields while the user types.
    $(".contact-card .form-control").on("input", function () {

        const field = $(this);

        // Only validate fields that have already been checked.
        if (
            field.hasClass("is-invalid") ||
            field.hasClass("is-valid")
        ) {
            validateField(field);
        }

    });


    // Handle form submission.
    contactForm.on("submit", function (event) {

        event.preventDefault();

        const nameField = $("#name");
        const emailField = $("#email");
        const messageField = $("#message");

        // Validate all fields.
        const nameValid = validateField(nameField);
        const emailValid = validateField(emailField);
        const messageValid = validateField(messageField);

        // Stop if at least one field is invalid.
        if (!nameValid || !emailValid || !messageValid) {

            formStatus
                .text("Please correct the errors above.")
                .removeClass("text-success")
                .addClass("text-danger");

            return;
        }

        // Demo submission only.
        // No actual email is sent.
        formStatus
            .text(
                "Thank you! Your message passed validation. " +
                "This is a demo — no email was sent."
            )
            .removeClass("text-danger")
            .addClass("text-success");

    });


    // Handle form reset.
    contactForm.on("reset", function () {

        $(".contact-card .form-control")
            .removeClass("is-invalid is-valid")
            .removeAttr("aria-invalid");

        $(".invalid-feedback").text("");

        formStatus
            .text("")
            .removeClass("text-success text-danger");

    });

});
