// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Nuevos elementos para música
const music = document.getElementById("bg-music");
const playMusicBtn = document.getElementById("play-music-btn");

// Función para reproducir música (con manejo de errores)
function playMusic() {
  console.log('Intentando reproducir música...');
  music.play().then(() => {
    console.log('Música reproduciéndose.');
  }).catch(error => {
    console.log('Error al reproducir música:', error);
    alert('No se pudo reproducir la música. Puede estar bloqueada por el navegador; intenta hacer clic en cualquier parte de la página primero.');
  });
}

// Event listener para el botón de reproducir música (opcional, si el usuario quiere iniciarla manualmente)
if (playMusicBtn) {
  playMusicBtn.addEventListener("click", () => {
    console.log('Botón de música clicado.');
    playMusic();
    playMusicBtn.style.display = "none"; // Ocultar botón después de clic
  });
}

// Click Envelope (abre la carta y reproduce música)
envelope.addEventListener("click", () => {
  console.log('Sobre clicado, abriendo carta.');
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);

  // Reproducir música al abrir la carta
  playMusic();
});

// Logic to move the NO btn
noBtn.addEventListener("mouseover", () => {
  const min = 200;
  const max = 200;

  const distance = Math.random() * (max - min) + min;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES is clicked
yesBtn.addEventListener("click", () => {
  console.log('Botón Yes clicado.');
  title.textContent = "Te amo!!";

  catImg.src = "bebe.png";

  document.querySelector(".letter-window").classList.add("final");

  buttons.style.display = "none";

  finalText.style.display = "block";
});