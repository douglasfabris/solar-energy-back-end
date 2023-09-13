const {
  listarUnidades,
  criarUnidade,
  atualizarUnidade,
} = require("../controllers/unidade.controller");

const { Router } = require("express");

class UnidadeRouter {
  routesFromUnidade() {
    const unidadeRoutes = Router();
    unidadeRoutes.get("/unidade", listarUnidades);
    unidadeRoutes.post("/unidade", criarUnidade);
    unidadeRoutes.put("/unidade/:id", atualizarUnidade);
    return unidadeRoutes;
  }
}

module.exports = new UnidadeRouter();
