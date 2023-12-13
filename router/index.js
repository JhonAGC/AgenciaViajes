import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
} from "../controllers/paginasControllers.js";

const router = express.Router();

//inicio
router.get("/", paginaInicio);

//nosotros
router.get("/nosotros", paginaNosotros);

//viajes
router.get("/viajes", paginaViajes);

//testimoniales
router.get("/testimoniales", paginaTestimoniales);

export default router;
