//Fecha de inicio de nuestra relación
const fechaInicio = new Date("2025-04-19T23:06:00");

const pTiempo = document.getElementById("tiempo");

function actualizarTiempo() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  pTiempo.innerHTML = `Llevamos juntos: ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos 💗`;
}

setInterval(actualizarTiempo, 1000);

function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.textContent = "💗";

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.animationDuration = (Math.random() * 2 + 3) + "s";

  document.querySelector(".corazones").appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 5000);
}

setInterval(crearCorazon, 500);

const playBtn = document.getElementById("playBtn");
const musica = document.getElementById("musica");

playBtn.addEventListener("click", () => {
  musica.play();
  playBtn.style.display = "none"; //Oculta el botón después de reproducir.
});

const mensajeFijo = document.getElementById('mensajeFijo');
const mensajeDinamico = document.getElementById('mensajeDinamico');

const hora = new Date().getHours();

if (hora < 12) {
  mensajeDinamico.innerHTML = 'Buenos díashhhh, mi niña pechocha! 💕';
} else if (hora < 18) {
  mensajeDinamico.innerHTML = 'Wenas tardes, mi vida! 💞';
} else {
  mensajeDinamico.innerHTML = 'Buenas noches, mi princesa bella, que descanses linda! 🌙';
}

// 📸 Generar galería de fotos automáticamente
const galeria = document.getElementById('galeria');

for (let i = 1; i <= 89; i++) {
  const img = document.createElement('img');
  img.src = `images/foto${i}.jpeg`;
  img.alt = `Foto ${i} de nosotros`;
  img.className = 'foto';
  img.loading = 'lazy'; // Para optimizar el rendimiento
  galeria.appendChild(img);
}

const fotos = document.querySelectorAll('.foto');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fotos.forEach(foto => {
  observer.observe(foto);
});
