const {
  listarUnidades,
  criarUnidade,
  atualizarUnidade,
  excluirUnidade,
} = require("../controllers/unidade.controller");
const { auth } = require("../middleware/auth");
const { Router } = require("express");

class UnidadeRouter {
  routesFromUnidade() {
    const unidadeRoutes = Router();
    unidadeRoutes.get("/unidade", auth, listarUnidades);
    unidadeRoutes.post("/unidade", auth, criarUnidade);
    unidadeRoutes.put("/unidade/:id", auth, atualizarUnidade);
    unidadeRoutes.delete("/unidade/:id", auth, excluirUnidade);
    return unidadeRoutes;
  }
}

module.exports = new UnidadeRouter();
