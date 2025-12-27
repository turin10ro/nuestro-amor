const player = document.getElementById("player");
const goal = document.getElementById("goal");

let x = 20;
let y = 20;
const step = 10;

// tamaño del área
const gameWidth = 420;
const gameHeight = 300;

// posiciones iniciales
player.style.left = x + "px";
player.style.top = y + "px";

// pastel lejos del inicio
goal.style.left = (gameWidth - 50) + "px";
goal.style.top = (gameHeight - 50) + "px";

let gameOver = false; // evita múltiples alertas

function move(direction) {
  if (direction === "up") y -= step;
  if (direction === "down") y += step;
  if (direction === "left") x -= step;
  if (direction === "right") x += step;

  // límites
  x = Math.max(0, Math.min(gameWidth - 40, x));
  y = Math.max(0, Math.min(gameHeight - 40, y));

  player.style.left = x + "px";
  player.style.top = y + "px";

  checkWin();
}

// teclado
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