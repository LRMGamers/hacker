const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let characters = ".";
characters = characters.split("");

let fontSize = 16;
let columns = canvas.width / fontSize;

// Array of drops - one per column
let drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  // Fade effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set font
  ctx.fillStyle = "#0F0"; 
  ctx.font = fontSize + "px monospace";

  // Draw characters
  for (let i = 0; i < drops.length; i++) {
    const text = characters[Math.floor(Math.random() * characters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

let interval = setInterval(drawMatrix, 33);

// Update characters on name input
function startMatrix() {
  const name = document.getElementById("nameInput").value.trim();
  if (name.length > 0) {
    characters = name.split("");
  } else {
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  }
}

