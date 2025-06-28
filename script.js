function showContactForm() {
  const contactSection = document.getElementById('contactFormSection');
  contactSection.style.display = 'block';
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

function hideContactForm() {
  const contactSection = document.getElementById('contactFormSection');
  contactSection.style.display = 'none';
}
