const player = document.getElementById("player");
const goal = document.getElementById("goal");

let x = 20;
let y = 20;
const step = 10;

// 🔁 Obtener dimensiones reales del contenedor #game
function getGameSize() {
  const game = document.getElementById("game");
  const rect = game.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height
  };
}

let gameSize = getGameSize();

// Actualizar tamaño si cambia (por ejemplo, al girar la pantalla)
window.addEventListener("resize", () => {
  gameSize = getGameSize();
});

// Posiciones iniciales relativas al tamaño actual
player.style.left = x + "px";
player.style.top = y + "px";

// Pastel lejos del inicio (usando el tamaño actual)
goal.style.left = (gameSize.width - 50) + "px";
goal.style.top = (gameSize.height - 50) + "px";

let gameOver = false; // evita múltiples alertas

function move(direction) {
  if (direction === "up") y -= step;
  if (direction === "down") y += step;
  if (direction === "left") x -= step;
  if (direction === "right") x += step;

  // Límites basados en el tamaño actual del juego
  x = Math.max(0, Math.min(gameSize.width - 40, x));
  y = Math.max(0, Math.min(gameSize.height - 40, y));

  player.style.left = x + "px";
  player.style.top = y + "px";

  checkWin();
}

// Teclado
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") move("up");
  if (e.key === "ArrowDown") move("down");
  if (e.key === "ArrowLeft") move("left");
  if (e.key === "ArrowRight") move("right");
});

function checkWin() {
  if (gameOver) return;

  const p = player.getBoundingClientRect();
  const g = goal.getBoundingClientRect();

  if (
    p.left < g.right &&
    p.right > g.left &&
    p.top < g.bottom &&
    p.bottom > g.top
  ) {
    gameOver = true;
    setTimeout(() => {
      alert("💖 Para llegar a ti, necesito juntar amor...");
      window.location.href = "level2.html";
    }, 150);
  }
}