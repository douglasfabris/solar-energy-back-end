const { Router } = require("express");
const { routesFromUnidade } = require("./unidade.routes");

// Definição da rota base da api, chamando também as rotas de cada tabela
const routes = new Router();
routes.use("/api/v1", [routesFromUnidade()]);

module.exports = routes;
