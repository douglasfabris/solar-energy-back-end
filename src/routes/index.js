const { Router } = require("express");
const { routesFromUsuario } = require("../routes/usuario.routes");

// Definição da rota base da api, chamando também as rotas de cada tabela
const routes = new Router();
routes.use("/api", [routesFromUsuario]);

module.exports = routes;
