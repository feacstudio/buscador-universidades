const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS
app.use(cors());

// Conectar a MongoDB usando la variable de entorno MONGO_URL de Railway
const MONGO_URL = process.env.mongodb://mongo:eLPnifMgJdPEEoNCQIBBzXJLtEUMHFHa@mongodb.railway.internal:27017;

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((error) => console.error("Error de conexión:", error));

app.get("/", (req, res) => {
    res.send("¡Servidor funcionando en Railway y MongoDB conectado!");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
