import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("inicio");
});
const cliente = "jhon gutierrez";
router.get("/NOSOTROS", (req, res) => {
  res.render("nosotros", {
    cliente,
  });
});

export default router;
