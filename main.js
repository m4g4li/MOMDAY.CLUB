const canvas = document.getElementById("marcadorCanvas");
const ctx = canvas.getContext("2d");
const machineSection = document.querySelector(".machine");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let isDrawing = false;
let lastX = 0, lastY = 0;

function isMachineVisible() {
  const rect = machineSection.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function updateCanvasVisibility() {
  if (isMachineVisible()) {
    canvas.style.display = "block";
  } else {
    canvas.style.display = "none";
  }
}

// Revisa si la sección está visible cuando haces scroll
window.addEventListener("scroll", updateCanvasVisibility);
window.addEventListener("resize", updateCanvasVisibility);
document.addEventListener("DOMContentLoaded", updateCanvasVisibility);

// Eventos de dibujo
window.addEventListener("mousedown", (e) => {
  if (isMachineVisible()) {
    isDrawing = true;
    [lastX, lastY] = [e.clientX, e.clientY];
  }
});

window.addEventListener("mousemove", (e) => {
  if (!isDrawing || !isMachineVisible()) return;

  ctx.strokeStyle = "#6C6A6B";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();

  [lastX, lastY] = [e.clientX, e.clientY];
});

window.addEventListener("mouseup", () => {
  isDrawing = false;
});

window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "x") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

// Eventos táctiles para móviles
canvas.addEventListener("touchstart", (e) => {
  if (isMachineVisible()) {
    isDrawing = true;
    const touch = e.touches[0];
    [lastX, lastY] = [touch.clientX, touch.clientY];
  }
}, { passive: false });

canvas.addEventListener("touchmove", (e) => {
  if (!isDrawing || !isMachineVisible()) return;

  const touch = e.touches[0];

  ctx.strokeStyle = "#6C6A6B";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(touch.clientX, touch.clientY);
  ctx.stroke();

  [lastX, lastY] = [touch.clientX, touch.clientY];
  
  e.preventDefault(); // Evita scroll mientras dibujas
}, { passive: false });

canvas.addEventListener("touchend", () => {
  isDrawing = false;
});

const exitLink = document.querySelector('.machine a');

exitLink.addEventListener('click', () => {
  // Oculta el canvas
  canvas.style.display = 'none';

  // Opcional: desactiva cualquier dibujo en curso
  isDrawing = false;

  // Elimina interacción táctil o mouse con el canvas
  canvas.style.pointerEvents = 'none';

  // En caso de que quieras asegurarte de que se borre el dibujo
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
