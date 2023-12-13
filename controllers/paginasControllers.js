import { Viaje } from "../models/Viaje.js";

/* CONTROLADOR DE PAGINA DE INICIO */
const paginaInicio = (req, res) => {
  res.render("inicio", {
    //variable que va a mostrar el nombre de la página
    pagina: "Inicio",
  });
};

/* CONTROLADOR DE PAGINA DE NOSOTROS */
const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    //variable que va a mostrar el nombre de la página
    pagina: "Nosotros",
  });
};

/* CONTROLADOR DE PAGINA DE VIAJES */
const paginaViajes = async (req, res) => {
  // consultar datos de la base de datos
  const viajes = await Viaje.findAll();

  res.render("viajes", {
    //variable que va a mostrar el nombre de la página
    pagina: "Próximos viajes",
    //datos de la consulta
    viajes,
  });
};

/* CONTROLADOR DE PAGINA DE TESTIMONIALES */
const paginaTestimoniales = (req, res) => {
  res.render("testimoniales", {
    //variable que va a mostrar el nombre de la página
    pagina: "Testimoniales",
  });
};

export { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales };
