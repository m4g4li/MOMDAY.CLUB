window.addEventListener('load', function () {
  window.scrollTo(0, 0);
});

ScrollReveal({ reset: true });

ScrollReveal().reveal('.welcome', { delay: 200, duration: 1000, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.estudio', { delay: 300, duration: 1000, origin: 'top', distance: '50px' });
ScrollReveal().reveal('.momday', { delay: 300, duration: 1000, origin: 'top', distance: '50px' });

ScrollReveal().clean('.autor .contacto');
