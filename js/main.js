// Update footer year
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

// Form validation and submission
(function() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    form.classList.add('was-validated');
    if (!form.checkValidity()) return;

    const data = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      issue: document.getElementById('issue').value,
      preferredTime: document.getElementById('preferredTime').value
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Network response was not ok');

      showAlert('Appointment request received! We’ll confirm shortly.', 'success');
      form.reset();
      form.classList.remove('was-validated');
    } catch (err) {
      console.error(err);
      showAlert('Sorry, we could not process your request. Please try again later.', 'danger');
    }
  });

  function showAlert(msg, type) {
    const alertBox = document.getElementById('formAlert');
    alertBox.className = `alert alert-${type}`;
    alertBox.textContent = msg;
    alertBox.classList.remove('d-none');
  }
})();
