// Initialize EmailJS
(function () {
  emailjs.init("5ROlW-P2-Q9kDKBl6"); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
})();

const btn = document.getElementById("send-message");

// Function to send email
function sendEmail(e) {
  e.preventDefault();
  btn.value = "Sending e-mail..."
  emailjs
    .sendForm(
      "service_z5a72jb",
      "template_gqms9p6",
      e.target,
      "5ROlW-P2-Q9kDKBl6"
    ) // Replace placeholders with your actual IDs
    .then(
      (result) => {
        console.log(result.text);
        btn.value = "Send Email"
      },
      (error) => {
        console.log(error.text);
        btn.value = "Send Email"
      }
    );
}

// Attach function to form's submit event
document.getElementById("mail-form").addEventListener("submit", sendEmail); // Replace 'your-form-id' with your actual form ID
