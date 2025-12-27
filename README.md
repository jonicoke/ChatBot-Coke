# 🤖 Chatbot Personal 

# 📌 Descripción

Este proyecto consiste en la creación de un chatbot personal desarrollado con Node.js, JavaScript y MongoDB Atlas, diseñado para interactuar con los usuarios y responder preguntas relacionadas con mi perfil profesional.

El objetivo principal es brindar una experiencia simple, dinámica e intuitiva, permitiendo que los visitantes conozcan información sobre mí a través de una interfaz de chat estilo WhatsApp.

# 🛠️ Tecnologías utilizadas
Frontend: HTML, CSS, JavaScript.
Backend: Node.js, Express-
Base de datos: MongoDB Atlas
Configuración: dotenv (manejo de variables de entorno)

# ⚙️ Funcionamiento

El usuario envía un mensaje a través de la interfaz del chat.

El servidor procesa el mensaje y realiza una búsqueda flexible utilizando expresiones regulares (regex) en la base de datos de MongoDB Atlas.

Si se encuentra una pregunta coincidente, el chatbot devuelve la respuesta correspondiente.

Si no hay coincidencias, el sistema responde con un mensaje predeterminado invitando a contactar por correo electrónico.

# 📂 Estructura del proyecto

public/script.js ---> Maneja la interacción del usuario y el envío de mensajes

server.js ---> Configuración del servidor Express y conexión a MongoDB

models/Response.js ---> Modelo de preguntas y respuestas almacenadas en la base de datos

# 🎯 Propósito del proyecto

Este chatbot forma parte de mi portafolio personal y tiene como objetivo demostrar mis conocimientos en desarrollo full stack, especialmente en:

* Integración entre frontend y backend
* Consumo de datos desde una base de datos NoSQL
* Manejo de rutas y lógica del servidor
* Organización y estructura de un proyecto web

# 🚧 Estado del proyecto

✅ Funcional
🔧 En mejora continua (nuevas preguntas, respuestas y ajustes de UX)

# 🧠 Nota

El chatbot no almacena historial de conversaciones.
Las respuestas se basan exclusivamente en preguntas predefinidas guardadas en la base de datos.


Imagen de la próxima versión del chatbot:
 <img width="1346" height="639" alt="image" src="https://github.com/user-attachments/assets/55a8d95f-c988-41f8-b448-675fac9e8766" />
