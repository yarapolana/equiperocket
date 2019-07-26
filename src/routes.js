import { Router } from "express";

const routes = new Router(); //acho que é isso

routes.get("/", (req, res) => {
  return res.json({ mensagem: "Olá adorei isso aqui" });
});
export default routes;
