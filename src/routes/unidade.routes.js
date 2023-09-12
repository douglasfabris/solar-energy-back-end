const {
  listarUnidades,
  criarUnidade,
} = require("../controllers/unidade.controller");

const { Router } = require("express");

class UnidadeRouter {
  routesFromUnidade() {
    const unidadeRoutes = Router();
    unidadeRoutes.get("/unidade", listarUnidades);
    unidadeRoutes.post("/unidade", criarUnidade);
    return unidadeRoutes;
  }
}

module.exports = new UnidadeRouter();
