const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  if (!name || !email || !message) {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  alert(`Merci ${name}, votre message a bien été envoyé !`);

  form.reset();
});
