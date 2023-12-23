import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimoniales = async (req, res) => {
  //Validar formulario
  const { nombre, correo, mensaje } = req.body;
  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "Campo nombre vació" });
  }
  if (correo.trim() === "") {
    errores.push({ mensaje: "Campo correo vació" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "Campo mensaje vació" });
  }

  if (errores.length > 0) {
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
    });
  } else {
    //guardar datos en la base de datos
    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });
      res.redirect("/testimoniales");
    } catch (error) {
      console.log("no conectado testimonial", error);
    }
  }
};

export { guardarTestimoniales };
