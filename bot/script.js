// Form Submission with simple validation
const form = document.getElementById('appointmentForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if(name === "" || email === "" || phone === "") {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all required fields!";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Thank you! Your appointment request has been submitted.";
  
  form.reset();
});
