import express from "express";
const router = express.Router();

//inicio
router.get("/", (req, res) => {
  res.render("inicio", {
    pagina: "Inicio",
  });
});

//nosotros
router.get("/nosotros", (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
});

//viajes
router.get("/viajes", (req, res) => {
  res.render("viajes", {
    pagina: "Viajes",
  });
});

//testimoniales
router.get("/testimoniales", (req, res) => {
  res.render("testimoniales", {
    pagina: "Testimoniales",
  });
});

export default router;
