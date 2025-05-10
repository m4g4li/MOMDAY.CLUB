function enviarFormulario(event) {
  event.preventDefault(); // Evita que se recargue la página
  alert("Pronto tendrás noticias nuestras");
  event.target.reset(); // Limpia todos los campos del formulario
  document.getElementById('nombre-archivo').textContent = 'Ningún archivo seleccionado'; // <-- Esto reinicia el nombre
}
  document.getElementById('imagen').addEventListener('change', function () {
    const archivo = this.files[0];
    const span = document.getElementById('nombre-archivo');
    if (archivo) {
      span.textContent = archivo.name;
    } else {
      span.textContent = 'Ningún archivo seleccionado';
    }
  });