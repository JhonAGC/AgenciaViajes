const guardarTestimoniales = (req, res) => {
  //Validar formulario
  const { nombre, correo, mensaje } = req.body;
  const errores = [];
  if (nombre.trim() === "") {
    errores.push("campo nombre vació");
  }
  if (correo.trim() === "") {
    errores.push("campo correo vació");
  }
  if (mensaje.trim() === "") {
    errores.push("campo mensaje vació");
  }
  console.log(errores);
  console.log(req.body);
};

export { guardarTestimoniales };
