const puzzle = document.getElementById("puzzle");
const size = 3; // 3x3
let pieces = [];
let selected = null;

// estilo del puzzle
puzzle.style.width = "300px";
puzzle.style.height = "300px";
puzzle.style.margin = "20px auto";
puzzle.style.display = "grid";
puzzle.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
puzzle.style.border = "3px solid #ff5fa2";
puzzle.style.borderRadius = "12px";
puzzle.style.overflow = "hidden";

// crear piezas
for (let i = 0; i < size * size; i++) {
  pieces.push(i);
}

// mezclar
pieces.sort(() => Math.random() - 0.5);

// renderizar
function render() {
  puzzle.innerHTML = "";

  pieces.forEach((index, i) => {
    const piece = document.createElement("div");
    piece.style.backgroundImage = "url('assets/foto153.jpeg')";
    piece.style.backgroundSize = `${size * 100}% ${size * 100}%`;
    piece.style.backgroundPosition = `
      ${-(index % size) * 100}% 
      ${-Math.floor(index / size) * 100}%
    `;
    piece.style.border = "1px solid #fff";
    piece.style.cursor = "pointer";

    piece.addEventListener("click", () => selectPiece(i, piece));
    puzzle.appendChild(piece);
  });
}

function selectPiece(i, piece) {
  if (selected === null) {
    selected = i;
    piece.style.outline = "3px solid #ff5fa2";
  } else {
    // intercambiar
    [pieces[selected], pieces[i]] = [pieces[i], pieces[selected]];
    selected = null;
    render();
    checkWin();
  }
}

function checkWin() {
  for (let i = 0; i < pieces.length; i++) {
    if (pieces[i] !== i) return;
  }

  setTimeout(() => {
    alert("💖 Cada pieza contigo tiene sentido...");
    window.location.href = "level4.html";
  }, 300);
}

render();