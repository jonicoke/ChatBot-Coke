async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();

  if (!message) return;

  appendMessage(message, 'user');
  input.value = "";

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    appendMessage(data.reply, 'bot');

  } catch (error) {
    console.error("Error sending message:", error);
    appendMessage("Lo siento, hubo un error al procesar tu mensaje.", 'bot');
  }

}

// Función para agregar mensajes al chat
function appendMessage(text, sender) {
  const chat = document.getElementById("chat");

  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);

  const bubbleDiv = document.createElement('div');
  bubbleDiv.classList.add('bubble');
  if (sender === 'user') {
    bubbleDiv.innerText = text;
  } else {
    bubbleDiv.innerHTML = text;
  }

  messageDiv.appendChild(bubbleDiv);
  chat.appendChild(messageDiv);

  chat.scrollTop = chat.scrollHeight;
}

// Código para poder enviar el mensaje al presionar Enter
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
// Función para enviar preguntas rápidas
function sendQuickQuestion(question) {
  const input = document.getElementById('userInput');
  input.value = question;
  input.focus();
  // Cerrar sidebar en mobile al seleccionar
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('show-sidebar');
}

// Toggle Sidebar Mobile
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const sidebar = document.querySelector('.sidebar');

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('show-sidebar');
    });
  }
});