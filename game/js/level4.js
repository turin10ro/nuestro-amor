const memory = document.getElementById("memory");
const message = document.getElementById("memory-message");
const nextBtn = document.getElementById("next-level");

const cardsArray = ["💖","🎂","💑","🌹","💌","✨"];
let cards = [...cardsArray, ...cardsArray]; // duplicar para pares
cards.sort(() => Math.random() - 0.5);

let flipped = [];
let matched = [];

memory.style.display = "grid";
memory.style.gridTemplateColumns = "repeat(auto-fit, minmax(80px, 1fr))";
memory.style.gap = "10px";
memory.style.maxWidth = "400px";
memory.style.margin = "20px auto";

cards.forEach((emoji) => {
  const card = document.createElement("div");
  card.classList.add("memory-card");
  card.dataset.emoji = emoji;
  card.innerHTML = "❓";
  card.style.fontSize = "min(24px, 5vw)";
  card.style.textAlign = "center";
  card.style.padding = "min(10px, 3vw)";
  card.style.background = "#fff";
  card.style.border = "2px solid #ff5fa2";
  card.style.borderRadius = "12px";
  card.style.cursor = "pointer";
  card.style.userSelect = "none";
  memory.appendChild(card);

  card.addEventListener("click", () => {
    if (flipped.length < 2 && !flipped.includes(card) && !matched.includes(card)) {
      card.innerHTML = emoji;
      flipped.push(card);

      if (flipped.length === 2) {
        setTimeout(() => {
          if (flipped[0].dataset.emoji === flipped[1].dataset.emoji) {
            matched.push(...flipped);
          } else {
            flipped[0].innerHTML = "❓";
            flipped[1].innerHTML = "❓";
          }
          flipped = [];

          // Todos los pares encontrados
          if (matched.length === cards.length) {
            setTimeout(() => {
              message.style.display = "block"; // mostrar mensaje
              nextBtn.style.display = "inline-block"; // mostrar botón siguiente nivel
            }, 300);
          }
        }, 700);
      }
    }
  });
});

// Evento para pasar al Nivel 7
nextBtn.addEventListener("click", () => {
  window.location.href = "level5.html"; // Redirige al siguiente nivel
});