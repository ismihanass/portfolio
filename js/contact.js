(function () {
  emailjs.init("sx-owiXkGM9_t0O32");
  console.log("EmailJS initialized");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Form Data:", { name, email, message });

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    console.log("Sending email with params:", templateParams);

    emailjs.send("service_hkbsinp", "ismihana-template", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      },
      function (error) {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again.");
      }
    );
  });
