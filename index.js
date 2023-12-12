import express from "express";
import router from "./router/index.js";

const app = express();
//definir puerto
const port = process.env.PORT || 5000;

// Habilitar PUG
app.set("view engine", "pug");

// Obtener año actual
app.use((req, res, next) => {
  const year = new Date().getFullYear();
  res.locals.actualYear = year;
  res.locals.nombreSitio = "TOURPERÚ";
  next();
});
// Definir carpeta publica
app.use(express.static("public"));

//Agregar router
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on puerto ${port}`);
});
