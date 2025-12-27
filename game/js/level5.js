const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

const nextBtn = document.getElementById("next-level");

let drawing = false;
let finished = false; // evita repetir descarga

// Ajustar canvas al tamaño real
function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Estilo del trazo
ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.strokeStyle = "#ff5fa2";

// Obtener posición correcta
function getPos(e) {
  const rect = canvas.getBoundingClientRect();

  if (e.touches) {
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top
    };
  } else {
    return {
      x: e.offsetX,
      y: e.offsetY
    };
  }
}

// ===== MOUSE =====
canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  const pos = getPos(e);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
});

canvas.addEventListener("mousemove", (e) => {
  if (!drawing) return;
  const pos = getPos(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
  drawing = false;
  ctx.closePath();
});

canvas.addEventListener("mouseleave", () => {
  drawing = false;
  ctx.closePath();
});

// ===== TOUCH (MÓVIL) =====
canvas.addEventListener("touchstart", (e) => {
  e.preventDefault();
  drawing = true;
  const pos = getPos(e);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
});

canvas.addEventListener("touchmove", (e) => {
  e.preventDefault();
  if (!drawing) return;
  const pos = getPos(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
});

canvas.addEventListener("touchend", () => {
  drawing = false;
  ctx.closePath();
});

// ===== BOTÓN BORRAR =====
document.getElementById("clear").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// ===== CAMBIO DE COLORES (opcional) =====
document.querySelectorAll(".colors button").forEach(btn => {
  btn.addEventListener("click", () => {
    ctx.strokeStyle = btn.dataset.color;
  });
});

// ===== BOTÓN TERMINAR =====
document.getElementById("finish").addEventListener("click", () => {
  if (finished) return;
  finished = true;

  // Descargar dibujo
  const link = document.createElement("a");
  link.download = "nuestro_dibujo.png";
  link.href = canvas.toDataURL("image/png");
  link.click();

  // Mostrar mensaje y botón
  document.getElementById("draw-message").style.display = "block";
  nextBtn.style.display = "inline-block";
});

// ===== SIGUIENTE NIVEL =====
nextBtn.addEventListener("click", () => {
  window.location.href = "level6.html"; // CAMBIA si tu siguiente nivel tiene otro nombre
});