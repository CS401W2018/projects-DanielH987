document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("adviceForm");
    const message = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        message.textContent = "✅ Thank you! Your advice has been received.";
        form.reset();
    });
});
