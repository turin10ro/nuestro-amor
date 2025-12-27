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

const playCancionBtn = document.getElementById("playCancion");
const playMensaje1Btn = document.getElementById("playMensaje1");
const playMensaje2Btn = document.getElementById("playMensaje2");
const stopBtn = document.getElementById("stopBtn");
const musica = document.getElementById("musica");
const mensaje1 = document.getElementById("mensaje1");
const mensaje2 = document.getElementById("mensaje2");

playCancionBtn.addEventListener("click", () => {
  musica.play();
});

playMensaje1Btn.addEventListener("click", () => {
  mensaje1.play();
});

playMensaje2Btn.addEventListener("click", () => {
  mensaje2.play();
});

stopBtn.addEventListener("click", () => {
  musica.pause();
  musica.currentTime = 0;
  mensaje1.pause();
  mensaje1.currentTime = 0;
  mensaje2.pause();
  mensaje2.currentTime = 0;
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

for (let i = 1; i <= 173; i++) {
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
//const modoPrueba = true;

// Día especial: 19 del mes (mañana)
if (dia === 19) { // if (dia === 19 || modoPrueba)

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

  // 4️⃣ Texto flotante “8 meses juntos”
  const flotante = document.createElement("div");
  flotante.innerText = "💘 ¡Feliz 8° mes, mi amor! 💘";
  flotante.classList.add("flotante");
  document.body.appendChild(flotante);

  setTimeout(() => flotante.remove(), 4000);

  // 5️⃣ Tarjeta romántica estilo carta
  const carta = document.createElement("div");
  carta.classList.add("carta-aniversario");
  carta.innerHTML = `
    <h2>💖 Feliz Octavo Mes, amor de mi vida 💖</h2>
    <p>
      Mi amor felices ocho meses princesa hermosa, juntados un poquito con mi cumple amor jijiji, APAGA LA VELAAAAA JAJAJAJJ mi amor, la verdad quiero decirte que estoy tan agradecido contigo mi niña,
      tan agradecido de que estés junto a mí, que podamos pasar este último mes del año juntos, que podamos festejar incluso nuestros cumples amor, te amo pequeña.
    </p>
    <p>
      Peque, en verdad cada día puedo seguir confirmando que eres el amor de mi vida entera, que eres mi amor eterno, ese amor que quiero para toda la vida, hasta el último de mis días, mi niña quiero vernos crecer tanto, personalmente, y como pareja,
      creo que somos en verdad una gran relación, una conexión muy linda, que no tiene nada qué envidiarle a ninguna otra, unidos somos lo mejor princesa mía, te adoro, gracias por tanto mi amor, poque la vida te puso en mi camino por una razón, poque en verdad siempre fuiste todo lo que soñé y pienso que hasta mucho más mi amor.
    </p>
    <p>
      Sin duda este mes tuvo lo suyo, y aunque tuvimos unos inconvenientes mi amor, la verdad es que no está arruinado nuestro mes, para ñada pechocha, es nuestro mes mi amor, cerraremos este año e iniciaremos uno nuevo, uno nuevo lleno de aventuras, dates, momentos, y mucho días para crear recuerdos, bechitos, abrazos, palabras, mensajes, todo todo lo que hace un nosotros en verdad mi amor.
    </p>
    <p>
      Gracias por ser tú, por estár a mi lado, poque en verdad no te cambiaría por nada, por nada mi amor, eres lo mejor, mi anhelo, poque necesito de tu aliento, de tus besos, abrazos, ojitos, tu cuerpo, de tus sentimientos, de ti mi amor, gachas por estos 8 meses princesa, nos espera tanto en verdad mi amor, una vida juntos,
      este nuevo año que viene será increíble, viviremos tanto, nos tenemos mi amor, somos un gran equipo jamás lo olvides preciosa, seguiremos consstruyendo este bonito amor, ya tenemos un concierto ehhhhh mi amor, te amo me encantas, muchas aventuras vienen, gachas gachas por tanto peque, te adoro cielo muaaack mi amor. 💞
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
