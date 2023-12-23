import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetallesviajes,
} from "../controllers/paginasControllers.js";

import { guardarTestimoniales } from "../controllers/testimonialesControllers.js";
const router = express.Router();

//inicio
router.get("/", paginaInicio);

//nosotros
router.get("/nosotros", paginaNosotros);

//viajes
router.get("/viajes", paginaViajes);
router.get("/viajes/:slug", paginaDetallesviajes);

//testimoniales
router.get("/testimoniales", paginaTestimoniales);
router.post("/testimoniales", guardarTestimoniales);

export default router;
