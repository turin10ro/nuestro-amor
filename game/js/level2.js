const game = document.getElementById("game");
const scoreText = document.getElementById("score");

let score = 0;
const goal = 10;
let gameOver = false; // evita alertas múltiples

function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "absolute";
  heart.style.fontSize = "28px";

  // posición aleatoria
  heart.style.left = Math.random() * 380 + "px";
  heart.style.top = "-30px";

  game.appendChild(heart);

  let y = -30;
  const speed = 1 + Math.random() * 2;

  const fall = setInterval(() => {
    y += speed;
    heart.style.top = y + "px";

    // si se va
    if (y > 300) {
      clearInterval(fall);
      heart.remove();
    }
  }, 16);

  // tocar / click
  heart.addEventListener("click", () => {
    if (gameOver) return; // no hacer nada si ya terminó

    score++;
    scoreText.innerHTML = `💖 ${score} / ${goal}`;
    heart.remove();

    if (score >= goal) {
      gameOver = true;
      setTimeout(() => {
        alert("💖 El amor está completo...");
        window.location.href = "level3.html";
      }, 300);
    }
  });
}

// crear corazones cada cierto tiempo
setInterval(() => {
  if (!gameOver) createHeart();
}, 800);