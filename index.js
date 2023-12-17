import express from "express";
import router from "./router/index.js";
import db from "./config/db.js";

const app = express();

//conectar a la base de datos
db.authenticate()
  .then(() => console.log("Conectado a la base de datos"))
  .catch((error) =>
    console.log(`Error al conectar a la base de datos: ${error}`)
  );

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
//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Definir carpeta publica
app.use(express.static("public"));

//Agregar router
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on puerto ${port}`);
});
