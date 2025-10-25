# Creación de un chatbot personal
 hecho con Node.js, JavaScript y MongoDB Atlas, que está pensado para interactuar y responder preguntas acerca de mí.
 El propósito fundamental es brindar una experiencia sencilla y dinámica para que los visitantes puedan conocerme mejor a través de una interfaz de chat.

 Frontend: JavaScript, CSS y HTML

 Backend: Express con Node.js

 Base de datos: Atlas de MongoDB

 Manejo de variables de entorno: dotenv

 # Operación

 El usuario manda un mensaje a través de la interfaz del chat.

 El servidor utiliza coincidencias flexibles (regex) para buscar una respuesta predefinida en la base de datos de MongoDB Atlas.

 Si se encuentra una respuesta, el bot la presenta en la pantalla.

 Si no se encuentra, devuelve un mensaje predeterminado invitando a ponerse en contacto por correo electrónico.

# Estructura 

 public/script.js → Regula la interacción del usuario, el envío de mensajes y las animaciones en la interfaz.

 server.js → Se encarga de gestionar las rutas, establecer la conexión con MongoDB y configurar el servidor Express.

 models/Response.js → Establece la estructura de las preguntas y respuestas almacenadas en la base de datos.

 # Propósito

 Este chatbot es parte de mi portafolio personal y tiene como objetivo demostrar mis capacidades en desarrollo full stack, particularmente en lo que se refiere a la integración entre el frontend, el backend y la base de datos.