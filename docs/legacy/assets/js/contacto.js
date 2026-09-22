const contactForm = document.querySelector("#contact-form");
const submitButton = document.querySelector("#submit-contact");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";
    contactForm.setAttribute("aria-busy", "true");
    formStatus.classList.add("hidden");

    window.setTimeout(() => {
        contactForm.reset();
        contactForm.removeAttribute("aria-busy");
        submitButton.disabled = false;
        submitButton.textContent = "Enviar mensaje";
        formStatus.textContent = "Mensaje enviado correctamente.";
        formStatus.classList.remove("hidden");
        formStatus.focus();
    }, 1000);
});
