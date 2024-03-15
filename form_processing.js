document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("form_action.php", {
        method: "POST"
    })
  });
});
