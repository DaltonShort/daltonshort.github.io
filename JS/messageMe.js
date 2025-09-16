document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("bGg0Iu7WJCRIrTkHv");
    const form = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Build a JSON object for EmailJS
        const templateParams = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            user_message: document.getElementById("message").value,
            time: new Date().toLocaleString()
        };

        // Send using JSON object instead of form
        emailjs.send("service_xoa49ow", "template_b0e100k", templateParams, "bGg0Iu7WJCRIrTkHv")
            .then(() => {
                confirmationMessage.style.display = "block";
                form.reset();
            })
            .catch((error) => {
                alert("Error sending message: " + JSON.stringify(error));
            });
    });
});