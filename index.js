import express from "express";
import router from "./router/index.js";

const app = express();
//definir puerto
const port = process.env.PORT || 5000;
//Agregar router
app.use("/", router);
// Habilitar PUG
app.set("view engine", "pug");
// Definir carpeta publica
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Server is running on puerto ${port}`);
});
