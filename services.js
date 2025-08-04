(function () {
  emailjs.init("xirM7MKp6Rt6WsvOC"); // Replace with your EmailJS Public Key
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const now = new Date().toLocaleString(); // Optional time

    const formData = {
      name: this.name.value,
      email: this.email.value,
      title: this.title.value,
      message: this.message.value,
      time: now,
    };

    emailjs
      .send("service_usdldhr", "template_f1f3mkp", formData)
      .then(() => alert("Message sent successfully!"))
      .catch((error) => console.error("FAILED:", error));
  });
