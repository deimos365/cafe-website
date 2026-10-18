const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Enable Bootstrap validation styles.
    contactForm.classList.add("was-validated");

    // Check the HTML validation rules.
    if (!contactForm.checkValidity()) {
        formStatus.textContent = "Please correct the errors above.";
        formStatus.className = "mt-3 mb-0 text-danger";
        return;
    }

    // Demo only: no email is actually sent.
    formStatus.textContent =
        "Thank you! Your message has been submitted successfully.";
    formStatus.className = "mt-3 mb-0 text-success";

    // Optional: inspect the submitted values in the browser console.
    const formData = new FormData(contactForm);
    console.log("Contact form submission:", Object.fromEntries(formData));
});

contactForm.addEventListener("reset", function () {
    // Wait until the browser has reset the input values.
    setTimeout(function () {
        contactForm.classList.remove("was-validated");
        formStatus.textContent = "";
        formStatus.className = "mt-3 mb-0";
    }, 0);
});