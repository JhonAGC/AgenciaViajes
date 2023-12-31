import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

/* CONTROLADOR DE PAGINA DE INICIO */
const paginaInicio = async (req, res) => {
  const promiseDB = [];
  promiseDB.push(Viaje.findAll({ limit: 3 }));
  promiseDB.push(Testimonial.findAll({ limit: 3 }));

  try {
    const resultado = await Promise.all(promiseDB);
    res.render("inicio", {
      //variable que va a mostrar el nombre de la página
      pagina: "Inicio",
      clase: "home",
      viajes: resultado[0],
      testimoniales: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
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
const paginaTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimonial.findAll();
    res.render("testimoniales", {
      //variable que van a la vista de la página
      pagina: "Testimoniales",
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};
//muestra un viaje por su slug
const paginaDetallesviajes = async (req, res) => {
  const { slug } = req.params;
  try {
    const viaje = await Viaje.findOne({ where: { slug } });
    res.render("viaje", {
      pagina: "Información Viaje",
      viaje,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetallesviajes,
};
