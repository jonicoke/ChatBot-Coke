const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Response = require("./models/Response.js");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public")); 

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conectado"))
  .catch(err => console.error("❌ Error al conectar:", err));

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
 
    const escapedMessage = escapeRegex(message);

    const found = await Response.findOne({
      question: { $regex: new RegExp(escapedMessage, "i") }
    });
  
    if (found) {
      res.json({ reply: found.answer });
    } else {
      res.json({ reply: "Si tenés alguna duda específica contacta conmigo: cokejonathang@gmail.com." });
    }
  } catch (error) {
    console.error("Error en /api/chat:", error);
    res.status(500).json({ reply: "Lo siento, hubo un error al procesar tu mensaje." });
  }
});

app.listen(PORT, () =>
  console.log(`Corriendo en: http://localhost:${PORT}`)
);

// Función para escapar caracteres especiales en expresiones regulares
function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
