/* const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.classList.add("was-validated");
    return;
  }

  // Show the modal if form is valid
  const successModal = new bootstrap.Modal(document.getElementById("successModal"));
  successModal.show();

  contactForm.reset();
  contactForm.classList.remove("was-validated");
}); */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.classList.add("was-validated");
    return;
  }
  // Prepare form data
  const formData = new FormData(contactForm);
  console.log("Form data prepared:", formData);


  // Send email using FormSubmit
  fetch("https://formsubmit.co/cirinrajan@gmail.com", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        // Show success modal if email sent
        const successModal = new bootstrap.Modal(
          document.getElementById("successModal")
        );
        successModal.show();
        contactForm.reset();
        contactForm.classList.remove("was-validated");
      } else {
        alert("❌ Error: Unable to send message. Please try again.");
      }
    })
    .catch(() => {
      alert("❌ Network error. Please check your connection and try again.");
    });
});
