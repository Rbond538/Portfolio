const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");
const sendButton = document.getElementById("sendButton");
if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const c = window.EMAILJS_CONFIG || {};
    const ready =
      window.emailjs &&
      c.publicKey &&
      !c.publicKey.startsWith("YOUR_") &&
      c.serviceId &&
      !c.serviceId.startsWith("YOUR_") &&
      c.templateId &&
      !c.templateId.startsWith("YOUR_");
    if (!ready) {
      statusText.textContent =
        "EmailJS is not configured yet. Add your Public Key, Service ID and Template ID in js/config.js.";
      statusText.className = "form-status error";
      return;
    }
    sendButton.disabled = true;
    sendButton.textContent = "Sending...";
    statusText.textContent = "Sending your message...";
    try {
      emailjs.init({ publicKey: c.publicKey });
      await emailjs.sendForm(c.serviceId, c.templateId, form);
      statusText.textContent =
        "Thank you! Your message has been sent successfully.";
      statusText.className = "form-status success";
      form.reset();
    } catch (err) {
      console.error(err);
      statusText.textContent =
        "Sorry, your message could not be sent. Check your EmailJS setup or try again.";
      statusText.className = "form-status error";
    } finally {
      sendButton.disabled = false;
      sendButton.textContent = "Send message ↗";
    }
  });
}
