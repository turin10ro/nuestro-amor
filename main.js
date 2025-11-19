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

// Aplicar color rojo a ambos
mensajeFijo.style.color = '#ff0000';
mensajeDinamico.style.color = '#ff0000';
// Agregar efecto de latido
mensajeFijo.classList.add('latido');
mensajeDinamico.classList.add('latido');

// 📸 Generar galería de fotos automáticamente
const galeria = document.getElementById('galeria');

for (let i = 1; i <= 135; i++) {
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

// ========================
// 🎉 EFECTOS ESPECIALES DE ANIVERSARIO
// ========================

// Detectar si hoy es el día especial (ajusta si lo necesitas)
const hoy = new Date();
const dia = hoy.getDate();
const mes = hoy.getMonth() + 1;

// --- MODO PRUEBA (borra esta línea después) ---
 const modoPrueba = true;

// Día especial: 19 del mes (mañana)
if (dia === 19 || modoPrueba) { // if (dia === 19 || modoPrueba)

  // 1️⃣ Cambiar fondo a un degradado suave romántico
  document.body.classList.add("fondo-aniversario");

  // 2️⃣ Efecto glow dorado en el contador
  pTiempo.classList.add("aniversario");

  // 3️⃣ Explosión de corazones
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      crearCorazon();
    }, i * 50);
  }

  // 4️⃣ Texto flotante “7 meses juntos”
  const flotante = document.createElement("div");
  flotante.innerText = "💘 ¡Feliz 7° mes, mi amor! 💘";
  flotante.classList.add("flotante");
  document.body.appendChild(flotante);

  setTimeout(() => flotante.remove(), 4000);

  // 5️⃣ Tarjeta romántica estilo carta
  const carta = document.createElement("div");
  carta.classList.add("carta-aniversario");
  carta.innerHTML = `
    <h2>💖 Feliz Séptimo Mes, amor de mi vida 💖</h2>
    <p>
      Oye mi nena pechocha, gracias por cada risa, por cada abrazo y por cada momento hermoso que hemos compartido.  
      Eres mi alegría diaria y el mejor regalo que me ha dado la vida, que me ha dado Dios, sabes que soy tan feliz contigo mi amor. 
    </p>
    <p>
      Mi princesa hermosa, quiero decirte que me siento tan bien contigo, tan feliz, tan tranquilo, tan amado, y me encanta tanto que sea así mi amor.
      Tengo que decirte que eres una persona muy especial para mí, mi amor, que cada detalle que me has dado lo aprecio con todo mi corazón.
    </p>
    <p>
      Mi amor, me fascina voltear atrás y recordar tanto que hemos vivido juntos, los muy buenos momentos, de risa, llenos de amor, cariño, felicidad, algunos malos, malos amor, pero recordando que siempre nos elegimos, y cuánto nos amamos nos da esperanza de no soltarnos jamás.
      Yo deseo con toda el alma que así sea siempre, tú mi 11:11 amor, mi futuro en tus ojitos pechocha, eres todo lo que quiero, esperaremos nuevas aventuras chiquilla linda, y que si vienen malos ratos, nosotros juntos somos más fuertes que ellos.
    </p>
    <p>
      Hemos contruido pero demasiado amor, y seguirá siendo así, somos un gran equipo, compañeros de vida señora nutria, yo quiero verte triunfar, quiero ver a mi hermosa graduarse de la prepa y de su carrera, quiero vernos crecer juntos y formar un hogar después mi amor, me ilusiona tanto corazón.
      En verdad mi melocotón, te amo con todo mi corazón. 💞
    </p>
    <button id="cerrarCarta">Cerrar 💗</button>
  `;

  document.body.appendChild(carta);

  document.getElementById("cerrarCarta").addEventListener("click", () => {
    carta.classList.add("desvanecer");
    setTimeout(() => carta.remove(), 500);
  });

  // 6️⃣ Agregar 3 videos especiales al inicio de la galería
const galeria = document.getElementById("galeria");
const videosEspeciales = [
  "videos/especial1.mp4",
  "videos/especial2.mp4",
  "videos/especial3.mp4"
];

videosEspeciales.forEach(src => {
  const video = document.createElement("video");
  video.src = src;
  video.className = "video-especial visible";
  video.controls = true;
  video.autoplay = false;
  video.loop = false;
  video.preload = "metadata";
  galeria.prepend(video);
});

}
