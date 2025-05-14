let lastScrollY = window.scrollY;

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('load', () => {
  const savedScroll = sessionStorage.getItem('scrollPosition');
  if (savedScroll) {
    window.scrollTo(0, parseInt(savedScroll));
    sessionStorage.removeItem('scrollPosition');
  }
});


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
}

document.querySelector('#logo-link').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Desplazamiento suave al tope
  });

  // Opcional: cerrar el menú si está abierto en móviles
  navbar.classList.remove('active');
});
