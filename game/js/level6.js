const candles = document.querySelectorAll(".candle");
const message = document.getElementById("message");
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");

let extinguishedCount = 0;

// Ajusta el tamaño del canvas a la ventana
function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Confetti básico
const confettis = [];

function createConfetti() {
  return {
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height - confettiCanvas.height,
    size: 5 + Math.random() * 5,
    speedY: 2 + Math.random() * 3,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 10,
  };
}

for (let i = 0; i < 150; i++) {
  confettis.push(createConfetti());
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  confettis.forEach((c) => {
    c.y += c.speedY;
    c.rotation += c.rotationSpeed;

    if (c.y > confettiCanvas.height) {
      c.x = Math.random() * confettiCanvas.width;
      c.y = -10;
      c.rotation = Math.random() * 360;
    }

    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.rotate((c.rotation * Math.PI) / 180);
    ctx.fillStyle = c.color;
    ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
    ctx.restore();
  });

  requestAnimationFrame(drawConfetti);
}

drawConfetti();

// Apagar velas
candles.forEach((candle) => {
  candle.addEventListener("click", () => {
    if (candle.classList.contains("off")) return;

    candle.classList.add("off"); // coincide con CSS
    extinguishedCount++;

    // Si todas las velas están apagadas
    if (extinguishedCount === candles.length) {
      // Mostrar mensaje
      message.style.display = "block";
      // El confetti sigue cayendo sin detenerse
    }
  });
});