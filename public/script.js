
async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();

  if (!message) return;

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();

  const chat = document.getElementById("chat");
  chat.innerHTML += `<p><b>Tú:</b> ${message}</p>`;
  chat.innerHTML += `<p><b>Bot Coke:</b> ${data.reply}</p>`;

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}

document.getElementById("userInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Up Options

const optionsButton = document.getElementsByClassName('options')[0];
const optionsBar = document.getElementById('optionsBar');

function upOptions() {
  optionsBar.classList.toggle('open');
  optionsButton.classList.toggle('open');
}

function sendQuickQuestion(question) {
  const input = document.getElementById('userInput');
  input.value = question;
  upOptions();
}

// --- Scroll horizontal para la sección de preguntas rápidas.
document.addEventListener("DOMContentLoaded", () => {
  const optionsBar = document.querySelector(".sec-options");
  if (optionsBar) {
    optionsBar.addEventListener("wheel", (e) => {
      // Sirve solamente cuando la barra está visible.
      if (optionsBar.closest(".options-bar.open")) {
        e.preventDefault();
        optionsBar.scrollLeft += e.deltaY * 1.2
      }
    });
  }
});