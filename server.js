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
  const { message } = req.body;

  const found = await Response.findOne({
    question: { $regex: new RegExp(message, "i") }
  });

  if (found) {
    res.json({ reply: found.answer });
  } else {
    res.json({ reply: "Si tenés alguna duda específica contacta conmigo: cokejonathang@gmail.com." });
  }
});

app.listen(PORT, () =>
  console.log(`Corriendo en: http://localhost:${PORT}`)
);